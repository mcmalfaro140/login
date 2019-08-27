const jwt = require('jsonwebtoken');

//Middleware route to check for protected routes
module.exports = function (req, res, next){
    const token = req. header('auth-token'); //checks header to make sure it has a token
    if(!token){
        return res.json({access: false}) //means that the access was denied
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        return res.json({access: false}) //invalid token
    }
}
