import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';

function JobDescription() {
  const {singleJob} = useSelector(store=>store.job);
  const {user} = useSelector(store=>store.auth);

  const hasApplied =singleJob?.applications?.some(application=>application.applicant==user._id) || false;

  const dispatch = useDispatch();
  const params = useParams();
  const jobId = params.id;

  const applyJobHandler = async()=>{
    try{
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`);
      if(res.data.success){
        
      }
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    const fetchSingleJob = async ()=>{
        try{
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
            }
        }
        catch(err){
            console.log(err);
        }
    }
    fetchSingleJob();
  },[jobId,dispatch.user?._id]);

  return (
    <div className='max-w-7xl mx-auto my-10'>
<div className='flex items-center justify-between'>
        <div>
      <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
      <div className='flex items-center gap-2 mt-4'>
    <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} positions</Badge>
    <Badge className={'text-red-700 font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
    <Badge className={'font-bold'} variant="ghost">{singleJob?.salary}</Badge>
    </div>
    </div>
    <Button disabled={hasApplied} className={`rounded-lg ${hasApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}>
      {hasApplied ? 'Already Applied' : 'Apply Now'}
    </Button>
    </div>
    <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
    <div>
    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title} </span></h1>
    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}</span></h1>
    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}</span></h1>
    <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt?.split("T")[0]}</span></h1>
           
    </div>
    </div>
  )
}

export default JobDescription
