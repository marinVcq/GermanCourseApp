import React from 'react'

const Login = () => {
  return (
    <div className='loginContainer'>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <p className='loginError'>This is an error</p>
      </form>
    </div>
  )
}

export default Login