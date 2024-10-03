import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
  return (
    <div className='max-w-7xl mx-auto my-10'>
<div className='flex items-center justify-between'>
        <div>
      <h1 className='font-bold text-xl'>Title</h1>
      <div className='flex items-center gap-2 mt-4'>
    <Badge className={'text-blue-700 font-bold'} variant="ghost">Positions</Badge>
    <Badge className={'text-red-700 font-bold'} variant="ghost">Part Time</Badge>
    <Badge className={'font-bold'} variant="ghost">CTC</Badge>
    </div>
    </div>
    <Button>Apply now</Button>
</div>
    </div>
  )
}

export default JobDescription
