const express = require("express");
const { getGeoCodes } = require("../controllers/MapController");

const router = express.Router();

router.post('/', getGeoCodes);

module.exports = router;