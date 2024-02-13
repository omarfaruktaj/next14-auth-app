import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from '../ui/button'

export default function Social() {
  return (
    <div className='flex w-full items-center  gap-x-2'>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
      >
        <FcGoogle className='size-5' />
      </Button>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
      >
        <FaGithub className='size-5' />
      </Button>
    </div>
  )
}
