const Transaction = require('../models/trans.model')

// Create and Save a new Note
exports.create = (req, res) => {
    const {name, paymentMode, amount} = req.body;
    const transaction = new Transaction({name, paymentMode, amount});

    transaction
        .save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res
                .staus(500)
                .send({
                    message: err.message || "Some error occurred."
                })
        })
};

exports.findAll = (req, res) => {
    Transaction
        .find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            err
                .staus(500)
                .send({
                    message: err.message || "Some error occurred."
                })
        })
}