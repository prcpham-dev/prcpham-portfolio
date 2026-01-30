import { useEffect, useState } from "react";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function NotesSandbox() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Create
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Edit (only one note at a time)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${base}/api/notes`);
      const json = await res.json();
      setNotes(json.data ?? []);
    } catch {
      setError("Failed to fetch notes");
    } finally {
      setLoading(false);
    }
  };

  const create = async () => {
    try {
      setError("");
      const res = await fetch(`${base}/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Create failed");

      setNewTitle("");
      setNewContent("");
      await load();
    } catch (e: any) {
      setError(e.message || "Create failed");
    }
  };

  const startEdit = (note: Note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const saveEdit = async (id: string) => {
    try {
      setError("");
      const res = await fetch(`${base}/api/notes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, content: editContent }),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Update failed");

      cancelEdit();
      await load();
    } catch (e: any) {
      setError(e.message || "Update failed");
    }
  };

  const remove = async (id: string) => {
    try {
      setError("");
      const res = await fetch(`${base}/api/notes/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Delete failed");

      await load();
    } catch (e: any) {
      setError(e.message || "Delete failed");
    }
  };

  useEffect(() => {
    if (!base) {
      setError("Missing NEXT_PUBLIC_API_BASE_URL");
      setLoading(false);
      return;
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base]);

  return (
    <main style={{ padding: 24, maxWidth: 800 }}>
      <h1>Sandbox Notes</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={load}>Refresh</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {/* CREATE */}
      <section style={{ border: "1px solid #ddd", padding: 12, marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Create</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <input
            placeholder="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={3}
          />
          <button onClick={create}>Create Note</button>
        </div>
      </section>

      {/* LIST + EDIT + DELETE */}
      <ul style={{ paddingLeft: 18 }}>
        {notes.map((n) => (
          <li key={n.id} style={{ marginBottom: 12 }}>
            {editingId === n.id ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={3}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => saveEdit(n.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <b>{n.title}</b> — {n.content}
                <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                  <button onClick={() => startEdit(n)}>Edit</button>
                  <button onClick={() => remove(n.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
