const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const routes = require('./routes');
    const port = 3003;

    console.log('Conectado ao mongo');
    app.use(express.json());
    app.use(routes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => console.log('Ocorreu um erro'));
