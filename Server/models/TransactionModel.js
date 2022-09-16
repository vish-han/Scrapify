const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    houseHold: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    dealer: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}, //populate
    date: { type: Date, default: Date.now() },
    amount: {type: Number},
    mass: {type: Number, required: true},
    isPayment: {type: Boolean, default: false},
    isPending: {type: Boolean, default: true},
    isPicked: {type: Boolean, default: false},
    isDisposed: {type: Boolean, default: false}  // if all true then success, if pending false, then failure
}, {
    timestamps: true
})

const Transac = mongoose.model("Transac", TransactionSchema);
module.exports = Transac;