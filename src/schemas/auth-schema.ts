import * as z from 'zod'

export const registerSchema = z.object({
  name: z.string().min(3, { message: 'Please tell us your name.' }),
  email: z.string().email({ message: 'Please tell us your email' }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/, {
      message:
        'Please ensure your password is at least 8 characters long and includes uppercase and lowercase letters, a digit, and a special character (@, $, !, %, *, ?, &)',
    }),
})
export type RegisterSchema = z.infer<typeof registerSchema>
