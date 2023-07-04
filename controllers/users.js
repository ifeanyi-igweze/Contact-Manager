import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {User} from "../models/user.js";
dotenv.config();

export const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }
    const user = await User.findOne({email});
    if (user) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if (newUser){
        const result = {userId: newUser._id, email: newUser.email}
        res.status(201).send(result);
    }
    else{
        res.status(400);
        throw new Error("Invalid Data");
    }
    
});

export const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }

    const user = await User.findOne({email});
    // Compare client password with db password
    if (user && (bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            //Payload
            {
                user: {
                username: user.username,
                email: user.email,
                id: user._id
                },
            },
            //Access Token Secret Key
            process.env.ACCESSTOKENSECRET,
            // Options like token expiry
            {expiresIn: "15m"}
        );

        res.status(200).send(accessToken);
    }
    else{
        res.status(401);
        throw new Error("Email or Password are invalid");
    }

});

export const currentUser = asyncHandler(async (req, res) => {
    res.send(req.user);
});