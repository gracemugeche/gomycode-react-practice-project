import React from 'react'
import { DangerButton } from './components/DangerButton'
import { DefaultButton } from './components/DefaultButton'
import { PrimaryButton } from './components/PrimaryButton'
import { SecondaryButton } from './components/SecondaryButton'
import { Button } from './components/Button'

export default function App() {
  return (
    <div className='bg-slate-50 text-black'>
      <h1>my app</h1>
      {/* <DangerButton />
      <DefaultButton />
      <PrimaryButton />
      <SecondaryButton /> */}
      <Button >Login</Button>
      <Button variant='primary' >Sign up</Button>
      <Button variant='danger' >Buy</Button>
      <Button variant='secondary' >Send</Button>
      <Button variant='danger'>Delete</Button>
      <Button variant='primary' />
    </div>
  )
}
