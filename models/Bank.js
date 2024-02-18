const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
    cardNumber: String,
    expiry: String,
    cvv: String,
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users' },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Banks = mongoose.model('Banks', BankSchema);

module.exports = Banks;