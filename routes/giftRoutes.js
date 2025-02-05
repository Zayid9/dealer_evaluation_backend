const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    const gifts = await db.collection('gifts').find().toArray();
    res.json(gifts);
});

router.get('/:id', async (req, res) => {
    const db = await connectToDatabase();
    const gift = await db.collection('gifts').findOne({ _id: new ObjectId(req.params.id) });
    res.json(gift);
});

// Get all gifts
router.get('/api/gifts', async (req, res) => {
    const db = await connectToDatabase();
    const gifts = await db.collection('gifts').find().toArray();
    res.json(gifts);
});


// Get a single gift by ID
router.get('/api/gifts/:id', async (req, res) => {
    const db = await connectToDatabase();
    const gift = await db.collection('gifts').findOne({ _id: new require('mongodb').ObjectId(req.params.id) });
    if (gift) {
        res.json(gift);
    } else {
        res.status(404).json({ message: "Gift not found" });
    }
});

module.exports = router;
