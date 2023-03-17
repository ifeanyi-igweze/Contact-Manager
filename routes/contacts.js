import express from "express";
const router = express.Router();
import {allContact, getContact, createContact, editContact, deleteContact} from "../controllers/contacts.js";

router.get("/", allContact)

router.get("/:id", getContact)

router.post("/", createContact)

router.put("/:id", editContact)

router.delete("/:id", deleteContact)

export default router;