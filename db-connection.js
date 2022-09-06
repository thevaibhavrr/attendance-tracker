const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "guest",
  port: 5432,
  password: "guest",
  database: "attendanceManagementDB",
});
client.connect();

module.exports = client;