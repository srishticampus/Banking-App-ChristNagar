const express=require("express")
const manager=require("./Controllers/ManagerController")
const user=require("./Controllers/UserController")
const clerk=require("./Controllers/ClerkController")

const router=express.Router()

router.post('/addmanger',manager.upload,manager.adminAddManager)
router.get('/viewallmangers',manager.viewManagers)
router.get('/view_a_manger/:managerid',manager.viewManagerById)
router.post('/editManagerById/:managerid',manager.upload,manager.editManagerById)
router.post('/deactivate_a_manger/:id',manager.deActivateManagerById)
router.post('/activate_a_manger/:id',manager.activateManagerById)
router.post('/managerlogin',manager.ManagerLogin)


router.post('/userRegister',user.upload,user.UserRegister)
router.post('/userlogin',user.LoginUser)
router.post('/forgotPWDsentMail', user.forgotPWDsentMail);
router.post('/resetPassword/:id', user.resetPassword);
router.get('/view_a_user/:userid', user.viewUserById);
router.post('/edit_a_user/:userid',user.upload, user.editUserById);
router.get('/viewusers', user.viewUsers);


router.post('/deactivate_a_user/:id',user.deActivateUserById)
router.post('/activate_a_user/:id',user.activateUserById)


router.post('/addClerk',clerk.upload,clerk.AddClerk)
router.get('/viewallclerks',clerk.viewClerks)
// router.get('/view_a_manger/:managerid',clerk.viewManagerById)
// router.post('/editManagerById/:managerid',clerk.upload,clerk.editManagerById)
router.post('/deactivate_a_clerk/:id',clerk.deActivateClerkById)
router.post('/activate_a_clerk/:id',clerk.activateClerkById)
// router.post('/managerlogin',clerk.ManagerLogin)


module.exports=router