const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes');
const port = 3003;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
