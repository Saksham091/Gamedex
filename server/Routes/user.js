const express = require('express');
const router = express.Router();
const user = require('../Modules/userModal');

router.get("/played", async (req, res) => {
    const { played } = req.user;
    try {
        res.status(200).json({ played: played })
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({"error": [{"msg": "Internal server error.",}]});
    }
});

router.get("/playing", async (req, res) => {
    const { playing } = req.user;
    try {
        res.status(200).json({ playing: playing })
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({"error": [{"msg": "Internal server error.",}]});
    }
});

router.get("/wishlist", async (req, res) => {
    const { wishlist } = req.user;
    try {
        res.status(200).json({ wishlist: wishlist })
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({"error": [{"msg": "Internal server error.",}]});
    }
});

module.exports = router;