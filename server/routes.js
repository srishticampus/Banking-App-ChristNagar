const express=require("express")
const manager=require("./Controllers/ManagerController")

const router=express.Router()

router.post('/addmanger',manager.upload,manager.adminAddManager)
router.get('/viewallmangers',manager.viewManagers)
router.get('/view_a_manger/:managerid',manager.viewManagerById)


module.exports=router