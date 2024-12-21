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
    { name: 'panCardFile', maxCount: 1 },
    { name: 'aadhaarFile', maxCount: 1 },
    { name: 'votersIDFile', maxCount: 1 },
    { name: 'passportFile', maxCount: 1 },
    { name: 'drivingLicenseFile', maxCount: 1 },
    // { name: 'profilepicture', maxCount: 1 },
    { name: 'salaryslipimg', maxCount: 1 }
]);


// for saving loan application data
const SaveLoanApplicationData = async (req, res) => {


    const userData = new LoanSchema({
        userid: req.params.userid,
        loantype: req.body.loanType,
        loanamount: req.body.loanAmount,
        loanpurpose: req.body.loanPurpose,
        // loanapproval: req.body.loanapproval,
        // loanverification: req.body.loanverification,
        pancardnumber: req.body.pancardNumber,
        pancardimage: req.files['panCardFile'] ? req.files['panCardFile'][0] : null,
        aadharnumber: req.body.aadhaarNumber,
        aadharimage: req.files['aadhaarFile'] ? req.files['aadhaarFile'][0] : null,
        votersidfile: req.files['votersIDFile'] ? req.files['votersIDFile'][0] : null,
        drivinglicensefile: req.files['drivingLicenseFile'] ? req.files['drivingLicenseFile'][0] : null,
        passportfile: req.files['passportFile'] ? req.files['passportFile'][0] : null,
        // name: req.body.name,
        // contactnumber: req.body.contactnumber,
        // gender: req.body.gender,
        // address: req.body.address,
        // dob: req.body.dob,
        // profilepicture: req.files['profilepicture'] ? req.files['profilepicture'][0] : null,
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

const ViewLoanApplication = (req, res) => {

    const userid = req.params.userid

    LoanSchema.find({ userid }).populate('userid')
        .then((response) => {
            if (response == "") {
                return res.status(404).json({ status: 404, msg: 'No Loan Application Found' });
            }
            res.json({ status: 200, msg: 'Loan Application Fetched', data: response });
        })
        .catch((error) => {
            res.status(500).json({ status: 500, msg: 'Loan Application Fetch Failed', data: error });
        });

};


// for seeing all loan applications
const ViewAllLoanApplications = (req, res) => {

    LoanSchema.find({}).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Applications' })
            }
            else {
                res.json({ status: 200, msg: 'Data fetched', data: response })
            }
        })
        .catch((error) => {
            res.json({ status: 500, mgs: 'Loan Applications Fetch Failed', data: error })
        })

}

// for verifying loan application
const VerifyLoanApplication = async (req, res) => {

    const data = req.params.id;

    await LoanSchema.findByIdAndUpdate(data, { loanverification: true }, { new: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Verified', data: response })
        })
        .catch((error) => {
            res.json({ status: 200, msg: 'Loan Verification Failed', data: error })
        })

}

// for viewing non verified applications
const NonVerifiedLoanApplication = (req, res) => {

    LoanSchema.find({ loanverification: false }).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Applications' })
            }
            else {
                res.json({ status: 200, msg: 'Data fetched', data: response })
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data failed to retrieve', data: error })
        })

}

// for viewing verified loan applications
const VerifiedLoanApplication = (req, res) => {

    LoanSchema.find({ loanverification: true, loanapproval: false }).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Applications' })
            }
            else {
                res.json({ status: 200, msg: 'Data fetched', data: response })
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data failed to retrive', data: error })
        })

}

// for approving loan
const ApproveLoanApplication = async (req, res) => {

    const data = req.params.id;

    await LoanSchema.findByIdAndUpdate(data, { loanapproval: true }, { new: true })
        .then((response) => {
            res.json({ status: 200, msg: 'Loan Approved', data: response })
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Loan Approval Failed', data: error })
        })

}

// for viewing non approved loans
const NonApprovedLoanApplication = (req, res) => {

    LoanSchema.find({ loanverification: true, loanapproval: false }).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Applications' })
            }
            else {
                res.json({ status: 200, msg: 'Data fetched', data: response })
            }
        })
        .catch((error) => {
            res.json({ status: 200, msg: 'Data not Fectched', data: error })
        })

}

// for viewing approved loans
const ApprovedLoanApplication = (req, res) => {

    LoanSchema.find({ loanverification: true, loanapproval: true }).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Applications' })
            }
            else {
                res.json({ status: 200, msg: 'Data fetched', data: response })
            }
        })
        .catch((error) => {
            res.json({ status: 200, msg: 'Data failed to fetch', data: error })
        })

}

module.exports = { SaveLoanApplicationData, upload, ViewLoanApplication, VerifiedLoanApplication, NonVerifiedLoanApplication, ApprovedLoanApplication, NonApprovedLoanApplication, ViewAllLoanApplications, VerifyLoanApplication, ApproveLoanApplication }