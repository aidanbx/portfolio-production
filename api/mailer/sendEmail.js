require("dotenv").config({ path: "../" });
const nodemailer = require("nodemailer");
const logger = require("../middleware/logger");
const clid = process.env.CLIENTID;
const clsec = process.env.CLIENTSECRET;
const refrtok = process.env.REFRESHTOKEN;
const from = process.env.FROMEMAIL;
const to = process.env.TOEMAIL;
const logs = require("../../logs.json");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: from,
    clientId: clid,
    clientSecret: clsec,
    refreshToken: refrtok,
  },
});

sendEmail = async (req, res) => {
  let { replyto, subject, name, content, attachments } = req.body;
  const log = logs[logger.getIP(req)];
  if (!replyto) replyto = "No Return Address";
  if (!subject) subject = "No Subject";
  if (!name) name = "No Name Given";
  if (!content) content = "No Content";

  transporter.sendMail(
    {
      from: `"${name}" <mailer@barbieux.dev>`,
      to: `${to}`,
      subject: `${subject}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <body style="min-height: 100vh; margin: 0px; padding: 0px">
          <div
            style="
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
              min-height: 100vh;
              background: url('https://barbieux.dev/bg-pblue-str.png');
              width: 100%;
              background-size: 64px;
              margin: 0px;
              padding: 0px;
            "
          >
            <div
              style="
                width: 70%;
                max-width: 616px;
                position: absolute;
                left: 50%;
                top: 10%;
                transform: translate(-50%, 0%);
              "
            >
              <table cellpadding="7" style="border-radius: 10px; width: 100%">
                <tbody
                  style="border-radius: 10px 10px 0px 0px; background-color: #2d344d"
                >
                  <tr>
                    <td valign="top" align="center">
                      <img
                        src="https://barbieux.dev/icons/sherbert.svg"
                        alt="Sherbert"
                        width="66px"
                        height="66px"
                        style="max-width: 100%"
                      />
                      <h2 style="color: #fdb241">${name} Sent a message</h2>
                    </td>
                  </tr>
                </tbody>
                <tbody
                  style="
                    border-collapse: separate;
                    border-spacing: 0 50px;
                    background-color: #232435;
                    color: #a0a0a0;
                  "
                >
                  <tr>
                    <td
                      style="border-bottom: 1px solid rgb(227, 227, 218)"
                      valign="top"
                    >
                      <strong style="color: #fdb241">name:</strong><br />
                      <pre>${name}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="border-bottom: 1px solid rgb(227, 227, 218)"
                      valign="top"
                    >
                      <strong style="color: #fdb241">email:</strong><br />
                      <pre>${replyTo}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="border-bottom: 1px solid rgb(227, 227, 218)"
                      valign="top"
                    >
                      <strong style="color: #fdb241">subject:</strong><br />
                      <pre>${subject}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="border-bottom: 1px solid rgb(227, 227, 218)"
                      valign="top"
                    >
                      <strong style="color: #fdb241"> message:</strong><br />
                      <pre>${content}</pre>
                    </td>
                  </tr>
                  <tr align="center" style="padding: 0px 0px 22px">
                    <td style="padding: 11px">
                      <span style="color: #c48323; font-size: 12px"
                        >${log.geo.country} ${log.geo.region} ${
        log.geo.city
      } ---
                        ${log.time} --- ${logger.getIP(req)}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </body>
      </html>
      
    `,
      attachments: attachments.map((attch) => ({
        filename: attch.filename,
        content: new Buffer.from(attch.raw.split("base64,")[1], "base64"),
      })),
    },
    (err, info) => {
      if (err) {
        console.log("ERROR SENDING MAIL");
        console.error(err);
      } else {
        console.log("SENT MAIL!");
        res.status(200).json({
          status: "Sent Email!, updated msg",
          from: `${log.country} ${log.region} ${log.city}`,
          time: `${log.time}`,
          subject,
          name,
          content,
          replyto,
          emailid: info,
          attachments,
        });
      }
    }
  );
};
module.exports = sendEmail;
