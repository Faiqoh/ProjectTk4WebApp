const User = require("../models/UserModel")
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
module.exports = {
    Login : async (req, res)=>{
        User.findOne({
            "username":req.body.username
        }).then(data=>{
            if (!data) {
                res.statusCode = 403
                res.send({message:"Username does not exist",data:null,success:false})
            }else if (data.password != crypto.createHash('sha256').update(req.body.password).digest('hex')) {
                res.statusCode = 403
                res.send({message:"Wrong Password",data:null,success:false})
            }else{
                // set cookies
                    const token = jwt.sign({ id: data._id, username: data.username }, "NA_KEY");
                    res.cookie("access_token", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        maxAge: 2 * 60 * 60 * 1000 //for 2 hours
                        // maxAge: 1 * 60 * 1000 //for 1 minute
                        })
                        .status(200)
                        .send({ message: "Logged in successfully 😊 👌" });
                //redirect to product page
            }

        })
    },
    Logout : async (req, res)=>{
        return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏" });
    }
}