'use client'

import { useEffect, useState } from 'react'

export default function NotesPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://service.pace-unv.cloud/api/notes')
      .then((res) => res.json())
      .then((data) => setData(data?.data || []))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {data?.map((note: { id: string; title: string }) => (
        <li key={note.id}>{note.title}</li>
      )) || []}
    </ul>
  )
}
