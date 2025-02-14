'use client'

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

// export default async function DetailBlogPage({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   return <div>BlogDetailPage id: {id}</div>
// }

export default function DetailBlogPage() {
  const { id } = useParams()
  const searchParams = useSearchParams()
  //   ingin mengambil name dan age dari query params
  const user = Object.fromEntries(searchParams.entries())

  console.log('🚀 ~ DetailBlogPage ~ user:', user)

  return (
    <div>
      <ul>
        <li>id: {id}</li>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  )
}
