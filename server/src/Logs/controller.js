const pool = require("../../db")
const queries = require("./queries")

const getLogs = (req, res) => {
  pool.query(queries.getLogs, (error, results) => {
    if (error) throw error
    // if (error) res.json({ error })
    res.status(200).json(results.rows)
  })
}

const createLog = (req, res) => {
  const { starttime, endtime, description } = req.body
  // Assuming We Can Create Any Number Of Logs At any Time
  pool.query(
    queries.createLog,
    [starttime, endtime, description],
    (error, results) => {
      if (error) throw error
      res.status(201).send(`Log Created Successfully`)
    }
  )
}

const getLogsByOrder = (req,res) => {
  pool.query(queries.getLogsByOrder, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getLogs,
  createLog,
  getLogsByOrder,
}
