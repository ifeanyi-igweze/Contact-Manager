import express from "express";
const router = express.Router();
import {registerUser, loginUser, currentUser} from "../controllers/users.js";

router.get("/current", currentUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;