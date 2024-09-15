const express = require("express");
const { addExperience } = require("../controllers/experiences");
const router = express.Router();

router.route("/experiences").post(addExperience);

module.exports = router;
