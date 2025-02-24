import CreateForm from './create'

async function getNotes() {
  const notes = await fetch('https://service.pace-unv.cloud/api/notes').then(
    (res) => res.json(),
  )
  return notes
}

export default async function NotesPage() {
  const notes = await getNotes()
  return (
    <>
      <CreateForm />
      <div className="grid grid-cols-4 gap-4">
        {notes.data.map(
          (note: { id: string; title: string; description: string }) => (
            <div key={note.id} className="p-4 bg-white shadow-sm rounded-lg">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          ),
        )}
      </div>
    </>
  )
}
