const express = require('express');
const router = express.Router();
const Item = require('../models/page_1/item');
const Pin = require('../models/pins');

// Accessing Page 1
router.get('/items', async (req, res) => {
  let items;
  try {
    items = await Item.find().sort({ item_name: 'asc' }).limit(10).exec();
  } catch {
    items = [];
  }
  res.render('page-1/items', {
    items: items
  });
});

// Create New Item Route
router.post('/', async (req, res) => {
    const item = new Item({ 
      item_name: req.body.item_name,
      page_name: req.body.page_name,
      color: req.body.color
    });

    const pin = new Pin({
      item_name: req.body.item_name,
      page_name: req.body.page_name,
      color: req.body.color
    });

    try {
      await item.save();
      await pin.save(); // Pin to dashboard
      res.redirect(`/page-1/items`);
        } catch (e) {
      console.log(e);
      res.redirect(`/page-1/items`);
    }
  });

// Delete from page 1 route
router.delete('/:id', async (req, res) => {
    let item;
    try {
      item = await Item.findById(req.params.id);
      await item.remove();
      res.redirect('/page-1/items');
    } catch {
      if (item != null) {
        res.render('/page-1/items', {
          item: item,
          errorMessage: 'Could not remove item'
        });
      } else {
        res.redirect('/');
      }
    }
  });

module.exports = router;