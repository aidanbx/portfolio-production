const express = require('express');
const path = require('path');
const app = require('./todoApi/todoApi');

// uni paths
app.use('/uni/', express.static(path.join(__dirname, 'cp-uni')));
app.get('/uni/*', function (req, res) {
  res.sendFile(path.join(__dirname, './cp-uni', 'index.html'));
});

// Site path
app.use('/', express.static(path.join(__dirname, 'front-end')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(
    `Website running at http://${process.env.IP || 'localhost'}:${process.env
      .PORT || '8080'}`
  )
);
