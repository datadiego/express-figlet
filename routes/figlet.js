const figlet = require("figlet");
const express = require("express");

const router = express.Router();

router.get("/figlet", (req, res) => {
    const text = req.query.text;
    const font = req.query.font;
    figlet(text, { font }, (err, data) => {
        if (err) {
        res.send("Something went wrong...");
        } else {
        res.send(data);
        }
    });
});

router.get("/figlet/fonts", (req, res) => {
    figlet.fonts((err, fonts) => {
        if (err) {
        res.send("Something went wrong...");
        } else {
        res.send(fonts);
        }
    });
});

module.exports = router;