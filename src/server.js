const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
  res.send(contentFromHtmlFile);
})

app.listen(3000, () => {
  console.log('App has started at port 3000');
});