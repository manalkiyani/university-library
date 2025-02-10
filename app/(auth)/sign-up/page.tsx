'use client'
import Authform from '@/components/auth-form'
import React from 'react'
import { signUpSchema } from '@/lib/validations'

const Page = () => (
    <Authform
        type="SIGN_UP"
        formSchema={signUpSchema}
        defaultValues={{ fullName: '', universityId: 0, universityCard: '', email: '', password: '' }}
        onSubmit={() => { }}

    />)

export default Page