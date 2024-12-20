const express = require("express")
const manager = require("./Controllers/ManagerController")
const user = require("./Controllers/UserController")
const clerk = require("./Controllers/ClerkController")
const loan = require("./Controllers/LoanController")

const router = express.Router()

router.post('/addmanger', manager.upload, manager.adminAddManager)
router.get('/viewallmangers', manager.viewManagers)
router.get('/view_a_manager/:managerid', manager.viewManagerById)
router.post('/editManagerById/:managerid', manager.upload, manager.editManagerById)
router.post('/deactivate_a_manger/:id', manager.deActivateManagerById)
router.post('/activate_a_manger/:id', manager.activateManagerById)
router.post('/managerlogin', manager.ManagerLogin)


router.post('/userRegister', user.upload, user.UserRegister)
router.post('/userlogin', user.LoginUser)
router.post('/forgotPWDsentMail', user.forgotPWDsentMail);
router.post('/resetPassword/:id', user.resetPassword);
router.get('/view_a_user/:userid', user.viewUserById);
router.post('/edit_a_user/:userid', user.upload, user.editUserById);
router.get('/viewusers', user.viewUsers);


router.post('/deactivate_a_user/:id', user.deActivateUserById)
router.post('/activate_a_user/:id', user.activateUserById)


// Loan application
router.post('/saveloandata/:userid', loan.upload, loan.SaveLoanApplicationData)     // Saving Loan data 
router.post('/viewoneloan/:userid', loan.ViewLoanApplication)                                // viewing a loan application
router.get('/viewallloan', loan.ViewAllLoanApplications)                            // viewing all loan applications
router.post(`/verifyloan/:id`, loan.VerifyLoanApplication)                              // for verifying loan application
router.get('/nonverifiedloan', loan.NonVerifiedLoanApplication)                     // for viewing all non verified applicaton
router.get('/verifiedloan', loan.VerifiedLoanApplication)                           // for viewing all verified application
router.post('/approveloan', loan.ApproveLoanApplication)                            // for approving loan application
router.get('/nonapprovedloan', loan.NonApprovedLoanApplication)                     // for viewing verified but non approved application
router.get('/approvedloan', loan.ApprovedLoanApplication)                           // for viewing verified and approved loan application
router.post('/populateloandetails', loan.ViewLoanApplication)


router.post('/addClerk', clerk.upload, clerk.AddClerk)
router.get('/viewallclerks', clerk.viewClerks)
router.get('/view_a_clerk/:clerkid', clerk.viewClerkById)
router.post('/edit_a_clerk/:clerkid', clerk.specUp, clerk.editClerkById)
router.post('/deactivate_a_clerk/:clerkid', clerk.deActivateClerkById)
router.post('/activate_a_clerk/:clerkid', clerk.activateClerkById)
router.post('/clerklogin', clerk.loginClerk)


module.exports = router