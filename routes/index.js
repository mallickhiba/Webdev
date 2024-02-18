const express = require('express');
const router = express.Router();

const authRouter = require("./auth");
const bankRouter = require("./bank");

router.use("/auth", authRouter);
router.use("/bank", bankRouter);

module.exports = router;