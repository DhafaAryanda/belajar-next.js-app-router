type ListNotes = {
  id: string
  title: string
  description: string
  deleted_at: string
  created_at: string
  updated_at: string
}

type Notes = {
  success: boolean
  message: string
  data: ListNotes[]
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3

export default async function Page() {
  const notes: Notes = await fetch(
    `https://service.pace-unv.cloud/api/notes`,
  ).then((res) => res.json())
  return (
    <main>
      <ul>
        {notes.data.map((note) => (
          <li
            style={{ border: '1px solid black', marginBottom: '10px' }}
            key={note.id}
          >
            <a href={`/notes/isr/${note.id}`}>{note.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
