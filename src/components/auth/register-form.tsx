'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOff } from 'lucide-react'

import AuthCard from './auth-card'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RegisterSchemaType, registerSchema } from '@/schemas/auth-schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function RegisterForm() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()

  

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (value: RegisterSchemaType) => {
    console.log(value)
  }

  return (
    <AuthCard
      showSocial
      disableSocial={isPending}
      headerTitle='Register'
      headerLabel='Welcome to you next auth project'
      backButtonLabel='Already have a account?'
      backButtonHref='/login'
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type='text'
                    placeholder='John Doe'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    disabled={isPending}
                    placeholder='john.doe@example.com'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className='relative'>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type={isShowPassword ? 'text' : 'password'}
                      placeholder='●●●●●●●●'
                    />
                  </FormControl>
                  <Button
                    variant='ghost'
                    type='button'
                    disabled={isPending}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    className='absolute right-1 top-1/2 m-0 -translate-x-1/2  cursor-pointer p-1'
                    style={{ transform: 'translateY(-50%)' }}
                  >
                    {isShowPassword ? <EyeOff size='20' /> : <EyeIcon size='20' />}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={isPending}
            className='w-full'
          >
            Create an account
          </Button>
        </form>
      </Form>
    </AuthCard>
  )
}
