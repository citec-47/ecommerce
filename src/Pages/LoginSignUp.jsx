import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
                <div className="loginsignup-container">
                  <h1>Sign Up</h1>
                  <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name'  />
                     <input type="email" placeholder='Email Adress' />
                      <input type="password" placeholder='Your Pasword' />
                  </div>
                    <button>Continue</button>
                    <p className="loginsignup-login">
                      Already having account? <span>Login here</span>
                    </p>

                    <div className="loginsignup-aggree">
                      <input type="checkbox" name='' id='' />
                      <p>By Continuing, i agree to the terms of use $ privacy policy</p>
                    </div>
                </div>
    </div>
  )
}

export default LoginSignUp