import React from 'react'
import "./SignUp.css"

export default function SignUp() {
  return (
      <div className='signUpPortal'>
          <div className='headText'>Sign Up and Get Update</div>
          <p className='detail'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <input type="email" name="signUp" className='email' />
          <div className="btnBorderWhite">
              <button type='submit' className='singUp'>Go to the Page</button>
          </div>
    </div>
  )
}
