const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');  

router.post('/auth/login', async (req, res) => {
    const { email } = req.body;
    try {
        const db = await connectToDatabase();
        const user = await db.collection('users').findOne({ email });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;