const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3003;

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).json({ success: 'Sucesso ao conectar a rota' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
