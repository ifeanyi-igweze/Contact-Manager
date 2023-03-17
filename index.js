import express from "express";
import dotenv from "dotenv";
import contacts from "./routes/contacts.js";
dotenv.config();
const app = express();

// These are middlewares

// This provides a parser that allows us to parse the data received from the client side
app.use(express.json())
app.use("/api/contacts", contacts);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})
