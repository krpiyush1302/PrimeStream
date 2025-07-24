import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from './asyncHandler.js';

//Check if the User is Authenticated or not.

const authenticate = asyncHandler(async (req, res, next) => {

    let token;

    //Read JWT cookie from the 'jwt' token
    token = req.cookies.jwt;
    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(401)
            throw new Error("Not authorised, token failed 🚫")
        }
    } else {
        res.status(401);
        throw new Error("Not authorised, no token 👎")
    }
});

//Check if the User is Admin or not

const authorizedAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send("Not authorised as an admin ");
    }
};

export {authenticate, authorizedAdmin};