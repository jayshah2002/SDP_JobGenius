const router=require('express').Router();
const mainuser_controller=require('../controllers/mainuser.js')
console.log("hello ji")
router.post("/signup",mainuser_controller.register);
router.post("/login",mainuser_controller.auth);
module.exports=router;