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


router.post('/saveloandata/:userid', loan.upload, loan.SaveLoanApplicationData)
router.get('/viewoneloan', loan.ViewLoanApplication)
router.get('/viewallloan', loan.ViewAllLoanApplications)
router.post('/verifyloan', loan.VerifyLoanApplication)
router.post('/approveloan', loan.ApproveLoanApplication)


router.post('/addClerk', clerk.upload, clerk.AddClerk)
router.get('/viewallclerks', clerk.viewClerks)
router.get('/view_a_clerk/:clerkid', clerk.viewClerkById)
router.post('/edit_a_clerk/:clerkid', clerk.specUp, clerk.editClerkById)
router.post('/deactivate_a_clerk/:clerkid', clerk.deActivateClerkById)
router.post('/activate_a_clerk/:clerkid', clerk.activateClerkById)
router.post('/clerklogin', clerk.loginClerk)


module.exports = router