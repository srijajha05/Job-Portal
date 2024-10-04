import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
  const hasApplied = true;
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
    <Button disabled={hasApplied} className={`rounded-lg ${hasApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}>
      {hasApplied ? 'Already Applied' : 'Apply Now'}
    </Button>
    </div>
    <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
    <div>
    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>job role </span></h1>
    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>job location</span></h1>
    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>job description</span></h1>
    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>job experience yrs</span></h1>
    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>job salary LPA</span></h1>
    <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>total candidate who applied for this job</span></h1>
    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>date of job post</span></h1>
           
    </div>
    </div>
  )
}

export default JobDescription
