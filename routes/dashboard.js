const express = require('express');
const router = express.Router();
const Pin = require('../models/pins');  

// Access the Dashboard
router.get('/pins', async (req, res) => {
  let pins;
  try {
    pins = await Pin.find().sort({ page_name: 'desc' }).limit(10).exec();
  } catch {
    pins = [];
  }
  res.render('dashboard/pins', {
    pins: pins
  });
});

// Route to unpin an item from dashboard
router.delete('/:id', async (req, res) => {
  await Pin.findByIdAndDelete(req.params.id);
  res.redirect('/dashboard/pins');
});

module.exports = router;



