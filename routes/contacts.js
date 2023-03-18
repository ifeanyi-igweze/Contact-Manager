import express from "express";
const router = express.Router();
import {allContacts, getContact, createContact, updateContact, deleteContact} from "../controllers/contacts.js";

router.get("/", allContacts)

router.get("/:id", getContact)

router.post("/", createContact)

router.put("/:id", updateContact)

router.delete("/:id", deleteContact)

export default router;