const express = require("express");
const router = express.Router();
const locationCtrl = require("../../controllers/api/location")


router.get('/', locationCtrl.index)

router.get('/:state', locationCtrl.filter)

module.exports = router;