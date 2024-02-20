const express = require("express")
const router = express.Router

const PictureController = require("../Controllers/PictureController")

router.post("/", PictureController.create)