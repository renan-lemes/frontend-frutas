const express = require("express")
const router = express.Router();

const upload = require("../config/multer")

const PictureController = require("../Controllers/PictureController")

router.post("/", upload.single("file"), PictureController.create);

router.get("/", PictureController.findAll);

router.delete("/delete/:id", PictureController.deleteOne);

module.exports = router;