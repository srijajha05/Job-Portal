import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white-border bg-gray-100 cursor-pointer'>
    <div>
      <h1 className='font-medium text-lg'>Company Name</h1>
      <p className='text-sm text-gray-500'>India</p>
    </div>
    <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>details about the company in this paragraph</p>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">Positions</Badge>
        <Badge className={'text-red-700 font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'font-bold'} variant="ghost">CTC</Badge>
    </div>
    </div>
  )
}

export default LatestJobCards
