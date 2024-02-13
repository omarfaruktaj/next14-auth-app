import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from '../ui/button'

interface SocialProps {
  isDisable: boolean
}

export default function Social({ isDisable }: SocialProps) {
  return (
    <div className='flex w-full items-center  gap-x-2'>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
        disabled={isDisable}
      >
        <FcGoogle className='size-5' />
      </Button>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
        disabled={isDisable}
      >
        <FaGithub className='size-5' />
      </Button>
    </div>
  )
}
