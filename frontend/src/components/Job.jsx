import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

function Job() {
  return (
    <div>
      <p>date at which job was posted</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark/>
      </Button>
      <Button>
        <Avatar>
          <AvatarImage/>
        </Avatar>
      </Button>
    </div>
  )
}

export default Job
