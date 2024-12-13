import { SignInButton, useUser } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  
  return (
    <div>
      <SignInButton mode='modal'  forceRedirectUrl='/'>
         <button>SignIn</button>
      </SignInButton>
    </div>
  )
}

export default Signin

