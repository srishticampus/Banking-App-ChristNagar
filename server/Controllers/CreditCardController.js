const { response } = require('express');
const CreditCardSchema = require('../Models/CreditCardSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).fields([
    { name: 'profilepicture', maxCount: 1 },
    { name: 'idproof', maxCount: 1 },
    { name: 'incomeproof', maxCount: 1 }
]);

const logRequestMiddleware = (req, res, next) => {
    console.log('Request Body:', req.body);
    console.log('Request Files:', req.files);
    next();
};

// for saving credit card application
const CustomerPersonalDetails = async (req, res) => {
    try {
        const newCustomer = new CreditCardSchema({
            customername: req.body.customername,
            contactnumber: req.body.contactnumber,
            emailid: req.body.emailid,
            address: req.body.address,
            dob: req.body.dob,
            profilepicture: req.files['profilepicture'] ? req.files['profilepicture'][0] : null,
            pancardnumber: req.body.pancardnumber,
            cardtype: req.body.cardtype,
            employmentstatus: req.body.employmentstatus,
            salary: req.body.salary,
            creditcardlimit: req.body.creditcardlimit,
            idproof: req.files['idproof'] ? req.files['idproof'][0] : null,
            incomeproof: req.files['incomeproof'] ? req.files['incomeproof'][0] : null
        });

        const response = await newCustomer.save();
        console.log('response', response)
        res.json({ status: 200, msg: 'Application Successful', data: response });
    } catch (error) {
        console.error('Error:', error);
        res.json({ status: 500, msg: 'Application failed', data: error });
    }
};

// for viewing all credit card application
const ViewCreditCardApplication = (req, res) => {
    CreditCardSchema.find().populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        });
};

// for viewing one credit card application
const ViewSingleCreditCardApplication = (req, res) => {
    CreditCardSchema.find({ _id: req.params.id }).populate('userid')
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        });
}

// for viewing non verified applications
const NonVerifiedCreditCardApplication = (req, res) => {

    CreditCardSchema.find({ verificationstatus: false })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        });

}

// for verifiying a credit card application
const VerifyCreditCardApplication = async (req, res) => {

    const data = req.params.id;

    await CreditCardSchema.findByIdAndUpdate(data, { verificationstatus: true }, { new: true })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        });

}

// for viewing verified applications
const VerifiedCreditCardApplication = (req, res) => {

    CreditCardSchema.find({ verificationstatus: true })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        })

}

// for viewing non approved applications
const NonApprovedCreditCardApplication = (req, res) => {

    CreditCardSchema.find({ verificationstatus: true, approvalstatus: "Pending" })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        })

}

// for approving a credit card application
const ApproveCreditCardApplication = async (req, res) => {

    const data = req.params.id;

    await CreditCardSchema.findByIdAndUpdate(data, { approvalstatus: "Approved" }, { new: true })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        })

}

// for viewing approved applications
const ApprovedCreditCardApplication = (req, res) => {

    CreditCardSchema.find({ verificationstatus: true, approvalstatus: "Approved" })
        .then((response) => {
            if (response == "") {
                res.json({ status: 200, msg: 'No Data Found' });
            }
            else {
                res.json({ status: 200, msg: 'Data fetch Successful', data: response });
            }
        })
        .catch((error) => {
            res.json({ status: 500, msg: 'Data fetch failed', data: error });
        })
}

module.exports = { CustomerPersonalDetails, upload, NonApprovedCreditCardApplication, ApproveCreditCardApplication, ApprovedCreditCardApplication, VerifiedCreditCardApplication, VerifyCreditCardApplication, NonVerifiedCreditCardApplication, ViewSingleCreditCardApplication, ViewCreditCardApplication, logRequestMiddleware };