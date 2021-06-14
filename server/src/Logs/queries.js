// List of all the SQL Queries
const getLogs = "SELECT * FROM logs"
const createLog =
  "INSERT INTO logs (starttime,endtime,description) VALUES (to_timestamp($1),to_timestamp($2),$3)"
const getLogsByOrder = "SELECT * FROM logs ORDER BY starttime DESC";
module.exports = {
  getLogs,
  createLog,
  getLogsByOrder,
}
