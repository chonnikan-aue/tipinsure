const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/:age", ctrl.insurance.getInsurancesByAge);

module.exports = router;