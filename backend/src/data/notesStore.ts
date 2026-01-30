import type { Note } from '../types/note';

let notes: Note[] = []

const nowIso = () => new Date().toISOString();

const makId = () => {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export const listNotes = (): Note[] => {
    return [...notes].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export const createNote = (title: string, content: string): Note => {
    const t = nowIso();
    const note: Note = {
        id: makId(),
        title,
        content,
        createdAt: t,
        updatedAt: t,
    };
    notes.push(note);
    return note;
};

export const getNote = (id: string): Note | null => {
    const note = notes.find(n => n.id === id);
    return note || null;
}

export const updateNote = (id: string, patch: { title?: string; content?: string }): Note | null => {
    const note = notes.find(n => n.id === id);
    if(!note) return null;

    if (patch.title !== undefined) note.title = patch.title;
    if (patch.content !== undefined) note.content = patch.content;
    
    note.updatedAt = nowIso();
    return note;
};

export const deleteNote = (id: string): boolean => {
    const idx = notes.findIndex(n => n.id === id);
    if (idx === -1) return false;

    notes.splice(idx, 1);
    return true;
};