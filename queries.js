const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kevin',
  host: 'localhost',
  database: 'api',
  password: 'abcd1234',
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query(`SELECT * FROM users`, (error, results) => {
    if (error) { throw error }
    return res.status(200).json(results.rows);
  })
};

const register = (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  pool.query('INSERT into users (first_name, last_name) values ($1, $2)', [first_name, last_name], (error, result) => {
    if (error) { throw error }
    return res.status(201).json;
  })
};

module.exports = {
  getUsers,
  register
};