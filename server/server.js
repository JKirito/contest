const express = require("express")
const LogRoutes = require("./src/Logs/routes")

const app = express()
const port = 3001

app.use(express.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use("/api/v1/logs", LogRoutes)

app.get("/", (req, res) => {
  res.status(200).send(`Welcome Home`)
})

app.listen(port, () => {
  console.log(`Server Running at PORT ${port}`)
})
