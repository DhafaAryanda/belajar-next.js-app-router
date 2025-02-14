'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function DetailUserPage() {
  const params = useParams()
  const { id } = params

  return (
    <div>
      <h1>Detail User Page</h1>
      <p>User ID: {id}</p>
    </div>
  )
}
