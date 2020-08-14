const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), 'api', '.env') });
const express = require('express');
const app = require('./api/api');

//! uni paths
app.use('/uni/', express.static(path.join(__dirname, 'cp-uni')));
app.get('/uni/*', function (req, res) {
  res.sendFile(path.join(__dirname, './cp-uni', 'index.html'));
});

//! Site path
app.use('/', express.static(path.join(__dirname, 'front-end')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

app.listen(app.get('PORT'), () =>
  console.log(
    `Express started on http://${app.get('IP')}:${app.get(
      'PORT'
    )}; press Ctrl-C to terminate.`
  )
);
