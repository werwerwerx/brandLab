'use client'

import React from 'react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui-kit/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui-kit/field"
import { Input } from "@/shared/components/ui-kit/input"
import { signupAction } from "../_actions"
import { FormProvider, useFormContext } from "../_form-context"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Регистрация...
        </>
      ) : (
        'Зарегистрироваться'
      )}
    </Button>
  )
}

function FormInput({
  id,
  name,
  type,
  placeholder,
  required,
  ...props
}: React.ComponentProps<typeof Input>) {
  const context = useFormContext()
  const pending = context?.pending ?? false

  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={pending}
      {...props}
    />
  )
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [state, formAction] = useActionState(signupAction, null)
  const { pending } = useFormStatus()
  const context = useFormContext()

  React.useEffect(() => {
    context?.setFormPending(pending)
  }, [pending, context])

  return (
    <form action={formAction} className={cn("flex flex-col gap-6", className)} {...props}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Создайте аккаунт</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Заполните поля снизу чтобы зарегистрироваться
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Эл. почта</FieldLabel>
            <FormInput id="email" name="email" type="email" placeholder="m@example.com" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Пароль</FieldLabel>
            <FormInput id="password" name="password" type="password" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="confirmPassword">Подтвердите пароль</FieldLabel>
            <FormInput id="confirmPassword" name="confirmPassword" type="password" required />
          </Field>
          <Field>
            <SubmitButton />
            {state?.error && <FieldError className='text-center text-xs'>{state.error}</FieldError>}
            <FieldDescription className="text-center">
              Уже есть аккаунт?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Войти
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
  )
}

