const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    try{
        const decoded = jwt.verify(req.body.token,  "private key");
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message: "Authentication failed"
        });
    }

}