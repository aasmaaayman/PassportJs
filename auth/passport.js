const passport = require("passport");
const passportJwt =require('passport-jwt'); // we use it for startegy used to extract the actual jwt password
const ExtractJwt =passportJwt.ExtractJwt;
const StartegyJwt=passportJwt.Strategy;
let{users}=require('D:/PassportJs/database/models/datbaseusers.js');
let secret = 'this is the secret'; // must be secured more
//once it recieve request and this request need authentication
// "example need to like something on website and this need login"
// it will need validating your jwt
passport.use (
    new StartegyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // take it from header
        secretOrKey: secret,
    },
    //done is a function 
    (jwtPayload,done)=>{
        // works as decrypted
        return users.findOne({where:{id: jwtPayload.id}})
        .then((user)=>{
            return done(null,user); //it works
        })
        .catch((err)=>{
            return done(err);
        });
    })
);
module.exports=passport;