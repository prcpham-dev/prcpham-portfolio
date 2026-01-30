import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "Nice", env: process.env.NODE_ENV || "undefined" });
})

const PORT = Number(process.env.PORT) || 4000;

import { listNotes, createNote, updateNote, getNote, deleteNote } from "./data/notesStore";

app.get("/api/notes", (req, res) => {
    const notes = listNotes();
    return res.json({ok: true, data: notes});
});

app.get("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ok: true, data: getNote(id)});
});

app.post("/api/notes", (req, res) => {
    const title = String(req.body?.title ?? "").trim();
    const content = String(req.body?.content ?? "");
    const note = createNote(title, content);

    return res.json({ok: true, data: note});
});


app.patch("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    const rawTitle = req.body?.title;
    const content = req.body?.content;

    const patch: {title?: string; content?: string} = {
        ...(rawTitle === undefined ? {} : { title: String(rawTitle).trim() }),
        ...(content === undefined ? {} : { content: String(content) }),
    };

    const update = updateNote(id, patch);
    return res.json({ok: true, data: update});
});

app.delete("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    const deleted = deleteNote(id);
    return res.json({ok: true, data: deleted});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})