const mongoose = require('mongoose')

const TransSchema = mongoose.Schema({
    type: mongoose.Schema.Types.ObjectId,
    name: String,
    paymentMode: String,
    amount: Number
});

module.exports = mongoose.model('TransDetails', TransSchema);