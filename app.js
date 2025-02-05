const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(giftRoutes);
app.use(searchRoutes);
app.use('/api/gifts/search', searchRoutes);