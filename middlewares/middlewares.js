require("dotenv").config();
const jsonwebtoken = require('jsonwebtoken');
const secreteKey = process.env.SECRETE_KEY;
const authentication = (req,res,next) => {
    const webtoken = req.header("Authorization");
    if(!webtoken){
        res.json({
            message:"Invalid webtoken"
        })
    }
    jsonwebtoken.verify(webtoken ,secreteKey,(error , user) => {
        if(error){
            res.json({
                message:"Webtoken verification failed"
            })
        }
        req.user = user;
        next();
    })
}

module.exports = authentication;