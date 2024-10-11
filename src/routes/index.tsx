import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main className='px-4 pt-6 flex flex-col'>
      <div>
        <SearchBar />
        <RegionFilter />
      </div>
    </main>
  )
}
