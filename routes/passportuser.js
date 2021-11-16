var express = require('express');
const passport = require("passport");
let  {create_user,get_user} = require('D:/PassportJs/middleware.js');
var router = express.Router();

router.post('/Register', function(req, res, next) {
    create_user(req,res);
});
router.get('/Login', function(req, res, next) {
    get_user(req,res);
});
// api to check the passport authentication and the passport startegy is jwt session false 3lshan mykonsh leh time b logout b3deh
router.get('/Payment',passport.authenticate("jwt",{session:false}),(req,res)=>{
res.send("You have a total balance of :10000000$");
});
module.exports = router;