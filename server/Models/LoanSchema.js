const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({

    loantype: {
        type: String,
        required: true
    },
    loanamount: {
        type: Number,
        required: true
    },
    loanpurpose: {
        type: String,
        required: true
    },
    loanapproval: {
        type: Boolean,
        default: false
    },
    loanverification: {
        type: Boolean,
        default: false
    }


})

const Loan = mongoose.model("Loan", LoanSchema);
module.exports = Loan;
