const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
    
})

const Loan = mongoose.model("Loan", LoanSchema);
module.exports = Loan;
