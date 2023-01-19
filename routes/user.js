const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/username/:username", ctrl.user.getUserByUsername);
router.put("/:userId", ctrl.user.putUser);
router.delete("/:userId", ctrl.user.deleteUser);

module.exports = router;
