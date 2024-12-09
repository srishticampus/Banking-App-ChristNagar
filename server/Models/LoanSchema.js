const mongoose = require("mongoose");
//new 
const LoanSchema = new mongoose.Schema({
    
})

const Loan = mongoose.model("Loan", LoanSchema);
module.exports = Loan;
