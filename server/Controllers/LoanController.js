const { response } = require('express');
const LoanSchema = require('../Models/LoanSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage }).fields([
    { name: 'pancardimage', maxCount: 1 },
    { name: 'aadharimage', maxCount: 1 },
    { name: 'votersidfile', maxCount: 1 },
    { name: 'passportfile', maxCount: 1 },
    { name: 'drivinglicensefile', maxCount: 1 },
    { name: 'profilepicture', maxCount: 1 },
    { name: 'salaryslipimg', maxCount: 1 }
]);


// for saving loan application data
const SaveLoanApplicationData = async (req, res) => {

    console.log(req.body)
    console.log(req.files)

    const userData = new LoanSchema({
        loantype: req.body.loantype,
        loanamount: req.body.loanamount,
        loanpurpose: req.body.loanpurpose,
        loanapproval: req.body.loanapproval,
        loanverification: req.body.loanverification,
        pancardnumber: req.body.pancardnumber,
        pancardimage: req.files['pancardimage'] ? req.files['pancardimage'][0] : null,
        aadharnumber: req.body.aadharnumber,
        aadharimage: req.files['aadharimage'] ? req.files['aadharimage'][0] : null,
        votersidfile: req.files['votersidfile'] ? req.files['votersidfile'][0] : null,
        drivinglicensefile: req.files['drivinglicensefile'] ? req.files['drivinglicensefile'][0] : null,
        passportfile: req.files['passportfile'] ? req.files['passportfile'][0] : null,
        name: req.body.name,
        contactnumber: req.body.contactnumber,
        gender: req.body.gender,
        address: req.body.address,
        dob: req.body.dob,
        profilepicture: req.files['profilepicture'] ? req.files['profilepicture'][0] : null,
        nameofemployer: req.body.nameofemployer,
        employercontact: req.body.employercontact,
        workexp: req.body.workexp,
        salary: req.body.salary,
        position: req.body.position,
        salaryslipimg: req.files['salaryslipimg'] ? req.files['salaryslipimg'][0] : null

    })

    await userData.save()
        .then((response) => {
            res.json({ status: 200, msg: 'Application Successfull', data: response })
        })

        .catch((error) => {
            console.log(error)
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

module.exports = { SaveLoanApplicationData, upload, ViewLoanApplication, ViewAllLoanApplications, VerifyLoanApplication, ApproveLoanApplication }