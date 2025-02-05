const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Filter gifts by category
router.get('/api/gifts/search', async (req, res) => {
    const { category } = req.query;
    const db = await connectToDatabase();
    const filteredGifts = await db.collection('gifts').find({ category }).toArray();
    res.json(filteredGifts);
});

module.exports = router;
