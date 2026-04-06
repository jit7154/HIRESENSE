const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

// FIX: Added 'next' here in the arguments
async function authUser(req, res, next) {
    const token = req.cookies?.token

    if (!token) {
        return res.status(401).json({
            message: "Token not generated"
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token });

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        
        // Now 'next' is defined and will correctly pass 
        // control to your getMEController!
        next(); 
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = { authUser }