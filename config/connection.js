// Set up MySQL connection.
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
  host: '	y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'wx03paqugr58tbgm',
  password: 'e8zwqpe431kyn8bg',
  database: 'avwa96pd1xaen2ad',
});
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
