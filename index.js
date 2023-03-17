import express from "express";
import dotenv from "dotenv";
import contacts from "./routes/contacts.js";
dotenv.config();
const app = express();

// These are middlewares
app.use(express.json())
app.use("/api/contacts", contacts);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})
