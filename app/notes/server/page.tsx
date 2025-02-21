async function getNotes() {
  const notes = await fetch('https://service.pace-unv.cloud/api/notes').then(
    (res) => res.json(),
  )
  return notes
}

export default async function NotesPage() {
  const notes = await getNotes()
  return (
    <ul>
      {notes.data.map((note: { id: string; title: string }) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  )
}
