import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

interface BackButtonProps {
  href: string
  label: string
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={cn('w-full font-normal', buttonVariants({ variant: 'link', size: 'sm' }))}
    >
      {label}
    </Link>
  )
}
