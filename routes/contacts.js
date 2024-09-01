import express from "express";
const router = express.Router();
import {auth} from "../middleware/auth.js";
import {allContacts, getContact, createContact, updateContact, deleteContact} from "../controllers/contacts.js";

router.get("/", auth, allContacts)

router.get("/:id", auth, getContact)

router.post("/", createContact)

router.put("/:id", auth, updateContact)

router.delete("/:id", auth, deleteContact)

export default router;