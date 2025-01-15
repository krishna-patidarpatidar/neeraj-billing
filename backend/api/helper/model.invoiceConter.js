const mongoose = require("mongoose");

const invoiceCounterSchema = new mongoose.Schema({
    sequenceValue: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("InvoiceCounter", invoiceCounterSchema);