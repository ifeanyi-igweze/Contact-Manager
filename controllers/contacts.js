import asyncHandler from "express-async-handler";
import {Contact} from "../models/contact.js";

export const allContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    if (contacts.length == 0) {
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).send(contacts);
});

export const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    if (contact.user_id.toString() !== req.user.id){
       res.status(403);
       throw new Error("User doesn't have permission to view this contact");
    }
    
    res.status(200).send(contact);
});

export const createContact = asyncHandler(async (req, res) => {
    res.send(req.body);
    console.log(req.body);
});

export const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to update this contact");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).send(updatedContact);
});

export const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    if (contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to delete this contact");
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).send(contact);
});