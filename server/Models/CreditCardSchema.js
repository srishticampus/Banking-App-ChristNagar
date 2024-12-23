const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({

    customername: {
        type: String,
        required: true
    },
    contactnumber: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    profilepicture: {
        type: Object,
        required: true
    },
    pancardnumber: {
        type: String,
        required: true
    },
    cardtype: {
        type: String,
        enum: ['Platinum', 'Gold'],
    },
    employmentstatus: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    creditcardlimit: {
        type: Number,
        required: true
    },
    idproof: {
        type: Object,
        required: true
    },
    incomeproof: {
        type: Object,
        required: true
    },
    verificationstatus: {
        type: Boolean,
        default: false
    },
    approvalstatus: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
});

const Card = mongoose.model("Card", CreditCardSchema);
module.exports = Card;