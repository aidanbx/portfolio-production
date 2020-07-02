const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.use(express.static('.'));

app.get('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf8').catch(console.error()));
});

app.listen(process.env.PORT || 3000, () => console.log(`Website running at http://${process.env.IP || 'localhost'}:${process.env.PORT || '3000'}`));