const mongoose = require('mongoose');

const itemP2Schema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    page_name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ItemP2', itemP2Schema);
