const router = require("express").Router();
const getData = require("../controllers/getData");
const insertData = require("../controllers/insertData");
router.post("/", getData);
router.post("/", insertData);
module.exports = router;
