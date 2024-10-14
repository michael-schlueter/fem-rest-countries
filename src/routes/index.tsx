import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'
import CountryCard from '@/components/CountryCard'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main className='px-4 pt-6 flex flex-col gap-[30px]'>
      <div className='flex flex-col gap-10'>
        <SearchBar />
        <RegionFilter />
      </div>
      <div className='max-w-[336px] grid gap-10 mx-auto ov'>
        <CountryCard />
      </div>
    </main>
  )
}
