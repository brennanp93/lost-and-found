const express = require("express");
const router = express.Router();
const itemCtrl = require("../../controllers/api/item")


router.get('/', itemCtrl.index);

router.post("/", itemCtrl.create)

module.exports = router;