import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetAllJobs() {
    const dispatch = useDispatch();
    useEffect(()=>{
    const fetchAllJobs = async ()=>{
        try{
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs));
            }
        }
        catch(err){
            console.log(err);
        }
    }
    fetchAllJobs();
  },[])
}

export default useGetAllJobs
