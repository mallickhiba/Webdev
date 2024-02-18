const Users = require("../models/User");
const Banks = require("../models/Bank");
var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken")

router.post("/createCard", async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (!user) return res.json({ msg: "USER NOT FOUND" })

        try {
            const token = req.headers.authorization;
            const user = jwt.verify(token.split(" ")[1], "MY_SECRET")
            if (user.age < 18) return res.json({ msg: "NOT OLD ENOUGH" })
        } catch (e) {
            return res.json({ msg: "TOKEN NOT FOUND / INVALID" })
        }

        await Banks.create({ ...req.body, user: user._id })

        res.json({ msg: "CARD CREATED" })
    } catch (error) {
        console.error(error)
    }
});

module.exports = router
