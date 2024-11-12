const express=require("express")
const manager=require("./Controllers/ManagerController")
const user=require("./Controllers/UserController")

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
module.exports=router