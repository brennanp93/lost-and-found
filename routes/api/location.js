const express = require("express");
const router = express.Router();
const locationCtrl = require("../../controllers/api/location")


router.get('/', locationCtrl.index)

// router.get('/:state', locationCtrl.filter)
// router.get('/:state/:county', locationCtrl.filter)
router.get('/:state/:county?/:city?', locationCtrl.filter)

module.exports = router;