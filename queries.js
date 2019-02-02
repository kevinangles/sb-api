const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kevin',
  host: 'localhost',
  database: 'api',
  password: 'abcd1234',
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) { throw error }
    return res.status(200).json(results.rows);
  })
};

module.exports = {
  getUsers
};