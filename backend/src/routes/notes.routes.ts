import { Router } from 'express';
import { listNotes, createNote, updateNote, getNote, deleteNote } from "../data/notesStore";

export const noteRouter = Router();

noteRouter.get("/", (req, res) => {
    const notes = listNotes();
    return res.json({ok: true, data: notes});
});

noteRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ok: true, data: getNote(id)});
});

noteRouter.post("/", (req, res) => {
    const title = String(req.body?.title ?? "").trim();
    const content = String(req.body?.content ?? "");
    const note = createNote(title, content);

    return res.json({ok: true, data: note});
});

noteRouter.patch("/:id", (req, res) => {
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

noteRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const deleted = deleteNote(id);
    return res.json({ok: true, data: deleted});
});
