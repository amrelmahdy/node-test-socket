const express = require("express");
const router = express.Router();
const messageController = require("./../../controllers/api/messageController");


router.post("/add", messageController.save);

module.exports = router;