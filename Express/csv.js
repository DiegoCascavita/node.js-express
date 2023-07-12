const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');//this is a external package of NPM

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let data = '';
  fs.createReadStream('data.csv')
    .on('error', (error) => {
    console.error('Error al leer el archivo CSV:', error);
     })
    .pipe(csv())
    .on('data', (row) => {
      data += JSON.stringify(row) + '\n';
      console.log(JSON.stringify(row));
    })
    .on('end', () => {
      res.send(data);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
