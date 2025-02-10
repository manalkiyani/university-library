'use client'

import Authform from '@/components/auth-form'
import React from 'react'
import { signInSchema } from '@/lib/validations'

const Page = () => (
    <Authform
        type="SIGN_IN"
        formSchema={signInSchema}
        defaultValues={{ email: '', password: '' }}
        onSubmit={() => { }}

    />)

export default Page