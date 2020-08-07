const express = require('express');
const path = require('path');
const app = require('./todoApi/todoApi');

app.use(express.static(path.join(__dirname, 'build')));
app.get('/uni/', (req, res) => {
  res.sendFile(path.join(__dirname, 'unibuild', 'index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(
    `Website running at http://${process.env.IP || 'localhost'}:${process.env
      .PORT || '8080'}`
  )
);
