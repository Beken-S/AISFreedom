const mysql = require('mysql2');

function createConnection(dbConfig) {
  const pool = mysql.createPool(dbConfig);
  return pool.promise();
}

module.exports = {
  createConnection,
};
