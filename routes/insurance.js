const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/age/:age", ctrl.insurance.getInsurancesByAge);
router.get("/:insuranceId", ctrl.insurance.getInsuranceById);

module.exports = router;
