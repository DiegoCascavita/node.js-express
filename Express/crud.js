const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Read JSON file
const data = JSON.parse(fs.readFileSync('data.json'));

// GET route to retrieve all data
app.get('/', (req, res) => {
  res.json(data);
});

// POST route to create new data
app.post('/', (req, res) => {
  const newData = req.body;
  data.push(newData);
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json(newData);
});

// PUT route to update existing data
app.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  data[id] = updatedData;
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json(updatedData);
});

// DELETE route to delete data
app.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deletedData = data.splice(id, 1);
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json(deletedData[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
