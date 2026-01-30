import express from "express";
import cors from "cors";
import "dotenv/config";
import { noteRouter } from "./routes/notes.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "Nice", env: process.env.NODE_ENV || "undefined" });
})

app.use("/api/notes", noteRouter);

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})