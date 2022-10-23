const express = require('express');
const router = express.Router();
const ItemP2 = require('../models/page_2/item_p2');
const Pin = require('../models/pins');

// Accessing Page 2
router.get('/items', async (req, res) => {
  let items;
  try {
    items = await ItemP2.find().sort({ item_name: 'asc' }).limit(10).exec();
  } catch {
    items = [];
  }
  res.render('page-2/items', {
    items: items
  });
});

// Create New Item Route
router.post('/', async (req, res) => {
    const item = new ItemP2({ 
      item_name: req.body.item_name,
      page_name: req.body.page_name,
      color: req.body.color,
    });

    const pin = new Pin({
      item_name: req.body.item_name,
      page_name: req.body.page_name,
      color: req.body.color,
    });
      
    try {
      await item.save();
      await pin.save(); // Pin to dashboard
      res.redirect(`/page-2/items`);
    } catch (e) {
      console.log(e);
      res.redirect(`/page-2/items`);
    }
  });

// Delete from page 2 route
router.delete('/:id', async (req, res) => {
    let item;
    try {
      item = await ItemP2.findById(req.params.id);
      await item.remove();
      res.redirect('/page-2/items');
    } catch {
      if (item != null) {
        res.render('/page-2/items', {
          item: item,
          errorMessage: 'Could not remove item'
        });
      } else {
        res.redirect('/');
      }
    }
  });

  module.exports = router;