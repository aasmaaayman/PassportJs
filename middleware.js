let{users}=require('D:/PassportJs/database/models/datbaseusers.js');
const jwt = require('jsonwebtoken');
let secret = 'this is the secret'; // must be secured more
async function create_user(req,res){
    const {username,password}=req.body;
    const already_exist=await users.findOne({
        where:{
            username
        }
    }).catch((err)=>{
        console.log("Error ", err);
    });
    if (already_exist)
    return res.json({message:"User with same username is already exist !"});
    else{
        users.create({
        username,
        password
    });
    res.send('The account is created sucessfully');
}
}
async function  get_user  (req,res){
    const {username,password}=req.body;
    const found_user=await users.findOne({
        where:{
            username
        }
    }).catch((err)=>{
        console.log("Error ", err);
    });
    // we return the same message as for secuirty for not know which one is wrong
    if (!found_user)
    return res.json({message:"Username or password doesnot match !"});
    if (found_user.password!==password)
    return res.json({message:"Username or password doesnot match !"});
    //create token
    const jwtToken =jwt.sign({id:found_user.id, username: found_user.username},secret)
    res.json({
        
        message: "Welcome Back !",
        token: jwtToken
    });
}
module.exports={create_user,get_user};
