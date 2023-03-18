import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please add the contact name"]
    },
    email: {
        type: String,
        required:[true, "Please add the contact Email Address"]
    },
    phone: {
        type: String,
        required:[true, "Please add the contact Phone Number"]
    }
}, {timestamps: true});

export const Contact = mongoose.model("Contact", contactSchema);