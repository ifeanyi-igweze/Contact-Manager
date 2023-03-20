import asyncHandler from "express-async-handler";
import {User} from "../models/user.js";

//@desc: Register a User
//@route: POST /api/users/register
//@access: Public
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

    const newUser = await User.create({

    });
    res.send("Register User");
});

//@desc: Log a User in
//@route: POST /api/users/login
//@access: Public
export const loginUser = asyncHandler(async (req, res) => {
    res.send("Login User");
});

//@desc: Get the Current User
//@route: GET /api/users/current
//@access: Private
export const currentUser = asyncHandler(async (req, res) => {
    res.send("Current User");
});