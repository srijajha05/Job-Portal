import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'

const shortListingStatus =["Accepted ","Rejected"]
function ApplicantsTable() {
  return (
    <div>
      <Table>
        <TableCaption>List of Applicants</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead>Date of Application</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
                <tr>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>resume</TableCell>
                    <TableCell>date</TableCell>
                    <TableCell className="float-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger>
                                <MoreHorizontal/>
                            </PopoverTrigger>
                            <PopoverContent className="w-32">
                            {
                                shortListingStatus.map((status,index)=>{
                                    return (
                                        <div key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                            <span>{status}</span>
                                        </div>
                                    )
                                })
                            }
                            </PopoverContent>

                        </Popover>
                        
                    </TableCell>
                </tr>
            </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable
