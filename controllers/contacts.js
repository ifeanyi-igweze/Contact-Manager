import asyncHandler from "express-async-handler";

//@desc: Get all contacts
//@route: GET /api/contacts
//@access: Public
export const allContact = asyncHandler(async (req, res) => {
    res.send("Get All Customers");
});

//@desc: Get one contacts
//@route: GET /api/contacts/:id
//@access: Public
export const getContact = asyncHandler(async (req, res) => {
    res.send(`Get Customer ${req.params.id}`);
});

//@desc: Create new contact
//@route: POST /api/contacts/
//@access: Public
export const createContact = asyncHandler(async (req, res) => {
    console.log("The Request Body is:", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }
    res.send("New Customer");
});

//@desc: Edit a contact
//@route: PUT /api/contacts/:id
//@access: Public
export const editContact = asyncHandler(async (req, res) => {
    res.send(`Edit Customer ${req.params.id}`);
});

//@desc: Delete a contact
//@route: DELETE /api/contacts/:id
//@access: Public
export const deleteContact = asyncHandler(async (req, res) => {
    res.send(`Delete Customer ${req.params.id}`);
});