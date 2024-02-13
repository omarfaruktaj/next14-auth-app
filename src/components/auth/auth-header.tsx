interface HeaderProps {
  title: string
  label: string
}

export default function AuthHeader({ title, label }: HeaderProps) {
  return (
    <div className=' flex w-full flex-col items-center  justify-center gap-x-3 '>
      <h1 className='text-4xl font-semibold '>{title}</h1>
      <p className='text-sm text-muted-foreground '>{label}</p>
    </div>
  )
}
