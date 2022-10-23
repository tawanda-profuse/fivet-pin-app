const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => {
// I decided to use this because it disables the layouts from the landing page
    res.render('landing', { layout: 'landing' }); 
});  

module.exports = router;



