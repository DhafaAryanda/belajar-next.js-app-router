'use client'

import { dataStore } from '@/store/dataStore'

// import { useCount } from '@/context'

export default function AboutPage() {
  // const { count, setCount } = useCount()
  const { inc } = dataStore()

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => inc()}>++</button>
    </div>
  )
}
