const express=require("express")
const manager=require("./Controllers/ManagerController")

const router=express.Router()

router.post('/addmanger',manager.upload,manager.adminAddManager)
router.get('/viewallmangers',manager.viewManagers)
router.get('/view_a_manger/:managerid',manager.viewManagerById)
router.post('/editManagerById/:managerid',manager.upload,manager.editManagerById)
router.post('/deactivate_a_manger/:id',manager.deActivateManagerById)
router.post('/activate_a_manger/:id',manager.activateManagerById)
module.exports=router