'use client'

import { dataStore } from '@/store/dataStore'
// import { useCount } from '@/context'
import Link from 'next/link'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { count } = useCount()
  const { count } = dataStore()

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <header className="bg-zinc-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Next js app</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">
          <div>
            <p>{`Count : ${count}`}</p>
          </div>
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Personal Web</p>
        </footer>
      </div>
    </>
  )
}
