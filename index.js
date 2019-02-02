const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries')
const { Pool } = require('pg');

const app = express();
const pool = new Pool();

const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', db.getUsers);

app.post('/register', db.register);

app.listen(port, () => {
  console.log(`API running on port ${port}`)
});