import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import UpdateProfileDialogue from './UpdateProfileDialogue'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const hasResume = true;
const Profile = () => {
    useGetAppliedJobs();
    const [open,setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 my-5'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <Avatar className='h-24 w-24'>
                    <AvatarImage src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABHVBMVEX///8YKElTxcb///3pVggOHTzuiUMKVHcAAADPRA35+foAUHTAytSf1dYNHjsAAC4AACJGq7TnzLozYoEAACXFJwAAACgcZIIAACsAABoAABeipKvz8/Tp6+8KVXUAAB7Fxsvs+vrnRwAAAAsAADMAFDirrbQXGCQAR24ADDPKOwDU1dhNTlmH0NFRd5CQk5x/gYv57d85PUu3ur/sycEaHzhydX9gZXX59Oz15NLow6JokqOAusHgmF/irH7qgS/supRBaYHgkFNvxMftkFDvpHLsq3vQ5+jy17a04uPndirjg07fWgDsuqPjiGbjYSrrq5HeZjvsbSfgm3bZbzomLkHefVXgc03KZkjGWDfCSiMyO1IhJC62LABDSV3M87GaAAAJ70lEQVR4nO2bC5faNhaA5TFmXCcBmlLKwxrEgJ14xMQeHOzJbPPaPJpkk6bJ1um2pPz/n7H3SraxgdlNc86C2aPvnISH8XA/X+lKlg0hCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKou87gK9AF//0zdDhHf3yoIxAYkThf32LDSEPrg5KhhD6tx9HW1Ojk4uHj/YR0ddD7/3w7fkIVDZzcPHw8ZPdB/S1QPyjp3d/+Pbo2WhLZi7/Xq9f7SOsvwo2K4x+dHL3BsiAjZ5tIESKocvz2/sL8S8gEzG6cfdYyKDNqgrgwwW41J9f7DXILwXrLrax41RG5iZva/rFQ3Cpv7jca5BfhhxbKLicZDJH5yOyqs8XL9ClfhDFDIuXTu/dOD4+Oclk0CYraRcvhUv91X7D/FIgL+ByAja5jMwNbsxcDqTLgMzN7yAxJZksN5lL/cVBTNAwxC0yR2L0zF0eX22bslWS7TIg+vBxKlO/OIzE/LRVBhJDLl9kKvWXh5GY8/Nc5rhUAMAlz8ubV2TbjK1K4ME+P7q1RQZdLlZ5qT+/rLgKyli3jrbJCJeXeV5k96+6zQhctshIl3opMZWvzMJlU0a4PCq4PH6y9Vy6WgiXDZkNFxz9q97KrNdH22REHSu5vKl8YmB8ebYhc4ynzeBS6Pvg8o/KT8v00fnRlsz8CC6k5PL47btqpwV5fbQhc3L3KUwHyKOiS/3tz9VPzE9HmzI37oGLXnapvb+/71ivIy9K+q2yTO5y+aScl9ov5TZWmRanW/mz0dF6Zk5Sl1Idq9V+Xk1k8EjYewp9C5zL1YtCj8llRH8pu3ys1T6IBaY8HdS3rv3juyaccXnST56tyZzc+I6vubwBl9qVSEgmQ4NhhWTMKcfHYiuTMnfRRb8qqryt1U5/0eWCh9zdDoxmddoZaxmxsHm9JnMsXZ6XslI7/Wd6jUPubfua1qV7DL8M62nOFPvNuszTm7A1d/koVGqnn1brfjq6GJo2qY4M7Wtgg/Gcl2QYurwqJgVdfi2tYVq+p2maV50+Q9sQj5OUbUAGD/zt2sePHzMRdPkNirIV8nRXyx/CvlpSHRnLwIC8GYXoz4syhLyrlTn9hLOYQZB2GMvv4a7arEIyUyezSc/MhAx08Xfv12Q+4dqSO6ay/2cuTrxvhQJBU5M2PLd5hvOxTZcHYOCagXSxUxdt4u/boEDY0tZt/oNLe2iLVkb9jtxNG7J9GxSgqYyo0MIGXW6vuZz+hi6DeTsS8zEaGOleWrs6lRnayzKLS4yeo1vC5cN63xcuiWNScYlg5WIsqzMBwI48yQPD3FjQil6t5+X9BbaxxOmK3l5w0SaBXZlTAID3tZINuLxdc/lVuMydhonb7YKL1g+r5ELo0slDc7AKPDjdzAvU5KFjdGMYU+youXIxEv7fv2F36NagtwquNbDI7bLM6YcH6GIaDWOMzTBqrz6udSp0NiPgM28VHMp8/803BRlwIeDiNIxmDN3fHRdcDIPtO/oiYizvGEZB5gpkcs7+dVtHFwMYuhax2oUOY3SiKhVmAV96DWMl8+77kgv2/Z4DLh5Ort1WIS3OPKzQeobE8vG4l5pZ0YW4DrSxhgH9SSez1QgD7S6ilZMhdOpBaMaGzNnvIi+J2OotofuzpsyJwFmE1Vtx1kmYOCK8sszZH3IO4+GmRhsL19QxMhpGO7Aqlxe0iToywmFB5uxPMbfUnHTegomZY45SGdGHqog9k4e8v5IRLsTN+ogXQI+JnCwr0MjuhPuO+jp432g0ijLYxnTCspm+Af2DsMRZNbLeoIJtLIWPHbDJZc7+uI8u4ywxTgSfibw8LwacDFSv9+eEn51VZkQdI8zMB5WFCy+Xq+7fjKubFwwsnHmZzNnveNWCjZ38XGcKpy1+M1NxOlFV0yJvjoUCPe1KmdRl7jXy/g6J4XI0Qpd5UKVTsi2AEY9NISNcYP6ZdfaGM4NZ2aAtnhtGdzaouIuABijzp3DJ8wBA5SI89kSOnHbMqzhYrqMTm+rkvnBZenlnhyEF3gnbqNJoz31Kqjcj244uVgGwjeV5Mfo+JC3G7t81I0hL5W9oSBHFQGdJ0yjIjC28XGA4QzOdwRyGSwqPPvccz3EMMbD0AqLbca838w8nKWW4H89myRwZUih004HoKgenkl3msygLXYBZ+upHAIdGKlOMXS/86uQQlaSQfLYhp1Ao/q9Yu1Ppqzv7DsuE/LGVvhr90ptHSmWYrO6O2fILzWt+gHrt53dB6UtLv12U8WwP6hqR6zf/LxHfa1NO8ysRFrywV5my5VHWrfQDlg1YqzCplYVu2amI2A4vLZFjy97lRQ4aBvEy8rn8Tj6IlnHg5st5PpdjJUsvIvHA9/1BmG23onyBift2+ohPrNB38dzBHvhsdzY0aJmt+diMxOEOF/3m3Gm3Yi5jtOLIEsmL4JQTtdh40mz2e9kKeTieZ17M9MUJJzPxDIEMhj0ubhSYsd25RK1OELIwEMuRYdKJQ8YGy+5SxsinfZES1oiolOksXQYfw2UzeBk7WnYTAzfnIje8dccS+v0Y/nyC1952RdhquxiCjS2eTiexmNizRUtGGy68KZ49B5OFzBVr4yfC1gz7FeGa40zTxQxqOvOA5jKEzcyQBOYOLz/RaBxlKys6cZNW+tW+0RXNynfELRfM0ZpMbGAtlLHNhWhnwSSeaekSMx07TQNC50MpQ3zv881WEu6upPGp6UoT/ErfmaVPeTLk+CRoasYMzvcnxkQ2F5kZtyXuXeLLPhuIFocy5tJvtyI7ywyxE2/ejHZYnkEmv3IHefBm6fSeL9rYV3jcZUmX8XEcGLHIIPSZkAUTLyBCvkNoa8lSmSll83HM5kIG/gprixtwdgaNx3gxLx3pfKOdvs+SPt56xbSZDYZxd8CXbdGw2MQZjifaVO7cHdg0bvry/hlc3QiTYcPIZMhnb6er6Zbfn/L8C1nSko3Oir0EH91WYJM7xmTJ7dhkQqa5gJGGiT1czZkliTHBe2xSGawYKCOnSVPw3OXkjC/6MbdtKgfFyHNcCq8Co+MKVexRfhfLb9ASNVgWABGhHTWXcTyNF444AkIG6t+seSdbtJm2/Z0ueVhuMl74ftSOcMSjcbsZ+X48aQbYVGiMpQx6BZi6jamVychFAbbwQgoMhsJPyuhYkq10wjrt7FaG2GHcNU1TrH2Djb/om2YrlivhbG7g6OLj3X58YeJ7zEQZsdDpm7ImcK2J1Zmb4sZOePLZSjvhzAx2JyKhLAwZT0cbi4ehm03EKGP4NsUDb7NQJCvkdjrT4el9szYXUzUaZpMwlskwtqfbgg54KUyhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFApF1fg3JkMuT8kAEw4AAAAASUVORK5CYII=' alt='profile'/>
                </Avatar>
                <div>
                    <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                    <p>{user?.profile?.bio}</p>
                </div>
            </div>
            <Button onClick={()=>setOpen(true)} className='text-right' variant="outline"><Pen/></Button>
        </div>
        <div className='my-5'>
            <div className='flex items-center gap-3 my-2'>
                <Mail/>
                <span>{user?.email}</span>
            </div>
            <div className='flex items-center gap-3 my-2'>
                <Contact/>
                <span>{user?.phoneNumber}</span>
            </div>
        </div>
        <div className='my-5'>
            <h1>skills</h1>
            <div className='flex items-center gap-3 mt-3'>
                {
                    user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item,index)=><Badge key={index}>{item}</Badge>) :<span>no</span>
                }
            </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-md font-bold'>Resume</Label>
            {
                hasResume ? <a className='text-blue-500 w-full hover:underline cursor-pointer' target='blank' href={user?.profile?.resume}>{user?.profile?.resumeOriginalName}</a>:<span>no resume</span>
            }
        </div>
    </div>
    
    <UpdateProfileDialogue open={open} setOpen={setOpen}/>
</div>
  )
}

export default Profile
