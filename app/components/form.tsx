"use client"
import { Movies } from '@/types'
import React, { useState } from 'react'
type FormProps = {
  movies: Movies[]
}

export default function Form(props: FormProps) {
    const [value, setValue ] = useState('vla@vbla.com')

    // console.log(props)

  return (
    <form>form
        <label htmlFor="email">Email</label>
        <input type="text" id='email' value={value} name='email' />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
    </form>
  )
}
