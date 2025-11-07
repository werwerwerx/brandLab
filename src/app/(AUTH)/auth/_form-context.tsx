'use client'

import { createContext, useContext, useState } from 'react'

type FormContextValue = {
  pending: boolean
  setFormPending: (pending: boolean) => void
  setOAuthPending: (pending: boolean) => void
}

const FormContext = createContext<FormContextValue | null>(null)

export function useFormContext() {
  const context = useContext(FormContext)
  return context
}

export function FormProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [formPending, setFormPending] = useState(false)
  const [oauthPending, setOAuthPending] = useState(false)
  const pending = formPending || oauthPending

  return (
    <FormContext.Provider value={{ pending, setFormPending, setOAuthPending }}>
      {children}
    </FormContext.Provider>
  )
}

