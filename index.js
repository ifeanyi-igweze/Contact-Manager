import express from "express";
import dotenv from "dotenv";
import contacts from "./routes/contacts.js";
import users from "./routes/users.js";
import { errorHandler } from "./middleware/errorHandler.js";
import mongoose from "mongoose";
import cors from "cors";
import {swaggerDocs} from "./utils/swagger.js";
dotenv.config();
const app = express();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("Connected to", connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

connectDb();
const port = process.env.PORT || 5000;

// These are middlewares

// This provides a parser that allows us to parse the data received from the client side
app.use(cors());
app.use(express.json());
swaggerDocs(app, port);
app.use("/api/contacts", contacts);
app.use("/api/users", users);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})
