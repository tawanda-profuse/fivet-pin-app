const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Pin', pinSchema);
