'use server'

import { z } from 'zod'
import { createClient } from '@/shared/supabase/server'
import { redirect } from 'next/navigation'

type ActionResult = {
  error?: string
}

const errorMap: Record<string, string> = {
  'invalid_credentials': 'Неверный email или пароль',
  'Invalid login credentials': 'Неверный email или пароль',
  'email_not_confirmed': 'Подтвердите email адрес',
  'Email not confirmed': 'Подтвердите email адрес',
  'user_already_registered': 'Пользователь с таким email уже существует',
  'User already registered': 'Пользователь с таким email уже существует',
  'weak_password': 'Пароль слишком слабый. Используйте минимум 6 символов',
  'Password should be at least 6 characters': 'Пароль слишком слабый. Используйте минимум 6 символов',
  'invalid_email': 'Неверный формат email',
  'Invalid email': 'Неверный формат email',
  'rate_limit_exceeded': 'Слишком много запросов. Попробуйте позже',
  'Too many requests': 'Слишком много запросов. Попробуйте позже',
}

const loginSchema = z.object({
  email: z.string().email('Неверный формат email'),
  password: z.string().min(1, 'Введите пароль'),
})

const signupSchema = z.object({
  email: z.string().email('Неверный формат email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
})

export async function loginAction(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const validation = loginSchema.safeParse({ email, password })

  if (!validation.success) {
    const firstError = validation.error.issues[0]
    return { error: firstError.message }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: validation.data.email,
    password: validation.data.password,
  })

  if (error) {
    const mappedError = errorMap[error.message] || errorMap[error.code || ''] || error.message || 'Произошла ошибка. Попробуйте еще раз'
    return { error: mappedError }
  }

  redirect('/')
}

export async function signupAction(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  const validation = signupSchema.safeParse({ email, password, confirmPassword })

  if (!validation.success) {
    const firstError = validation.error.issues[0]
    return { error: firstError.message }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email: validation.data.email,
    password: validation.data.password,
  })

  if (error) {
    const mappedError = errorMap[error.message] || errorMap[error.code || ''] || error.message || 'Произошла ошибка. Попробуйте еще раз'
    return { error: mappedError }
  }

  redirect('/')
}

