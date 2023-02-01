const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    ITEM_NUMBER:{
        type: String,
        required: true
    },
    ITEM_NAME: {
        type: String,
        required: false
    },
    DESCRIPTION: {
        type: String,
        required: false
    },
    ITEM_QUNATITY: {
        type: Number,
        required: false
    },
    ITEM_PRICE: {
        type: String,
        required: false
    },
    ITEM_MATERIAL: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Task",taskSchema)