import express from "express";
const router = express.Router();
import {registerUser, loginUser, currentUser} from "../controllers/users.js";
import {auth} from "../middleware/auth.js"

router.get("/current", auth, currentUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;