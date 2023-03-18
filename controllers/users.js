import asyncHandler from "express-async-handler";

//@desc: Register a User
//@route: POST /api/users/register
//@access: Public
export const registerUser = asyncHandler(async (req, res) => {
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
//@access: Public
export const currentUser = asyncHandler(async (req, res) => {
    res.send("Current User");
});