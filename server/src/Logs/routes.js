const { Router } = require("express")
const controller = require("./controller")

const router = Router()

// Handle all the API routes
router.get("/", controller.getLogs)
router.get('/byorder/',controller.getLogsByOrder);
router.post("/", controller.createLog)

module.exports = router
