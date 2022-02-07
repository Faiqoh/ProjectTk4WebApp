const jwt = require("jsonwebtoken");
const Auth = {
    API : (req,res,next)=>{
        const token = req.cookies.access_token;
        if (!token) {
            return res.sendStatus(403);
        }
        try {
            jwt.verify(token, "NA_KEY");
            return next();
        } catch {
            return res.sendStatus(403);
        }
    },
    UI: (req,res,next)=>{
        const token = req.cookies.access_token;
        if (!token) {
            return res.redirect("/login");
        }
        try {
            jwt.verify(token, "NA_KEY");
            return next();
        } catch {
            return res.redirect("/login");
        }
    }
}

module.exports = Auth