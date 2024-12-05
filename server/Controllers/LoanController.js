const { response } = require('express');
const LoanSchema = require('../Models/LoanSchema');
const multer = require('multer');

// for saving loan application data
const SaveLoanApplicationData = async (req, res) => {

    console.log(req.body)

    const userData = new LoanSchema({
        loantype: req.body.loantype,
        loanamount: req.body.loanamount,
        loanpurpose: req.body.loanpurpose,
        loanapproval: req.body.loanapproval,
        loanverification: req.body.loanverification
    })

    await userData.save()
        .then((response) => {
            res.json({ status: 200, msg: 'Application Successfull', data: response })
        })

        .catch((error) => {
            res.json({ status: 500, msg: 'Application Failed', data: error })
        })

}

// for seeing one loan application
const ViewLoanApplication = (req, res) => {

    const userLoanId = req.params.id

    LoanSchema.findById(loanId)
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Application Fetched', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Loan Application Fetch Failed', data: error })
        })

}

// for seeing all loan applications
const ViewAllLoanApplications = (res, req) => {

    LoanSchema.find()
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Applications Fetched', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, mgs: 'Loan Applications Fetch Failed', data: error })
        })

}

// for verifying loan application
const VerifyLoanApplication = async (res, req) => {

    const userLoanId = req.params.id;
    
    await LoanSchema.findByIdAndUpdate(userLoanId, { loanverification: true, new: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Verified', data: response })
        })
        .catch((error) => {
            res.json({ status: 200, msg: 'Loan Verification Failed', data: error })
        })

}

// for approving loan
const ApproveLoanApplication = async (res, req) => {

    const userLoanId = req.params.id;

    await LoanSchema.findByIdAndUpdate(userLoanId, { loanapproval: true, new: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Approved', data: response })
        })
        .catch((error) => {
            res.json({ status: 200, msg: 'Loan Approval Failed', data: error })
        })

}

module.exports = { SaveLoanApplicationData, ViewLoanApplication, ViewAllLoanApplications, VerifyLoanApplication, ApproveLoanApplication }