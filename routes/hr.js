const express = require("express");
const router = express.Router();
const { authenticate, authorizeRole } = require("../middlewares/authMiddleware");

router.get("/", authenticate, authorizeRole("HR"), (req, res) => {
    res.render("dashboard-hr")
});

router.get("/opening", authenticate, authorizeRole("HR"), (req, res) => {
    res.render("opening");
})

module.exports = router;
