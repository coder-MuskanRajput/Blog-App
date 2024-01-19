import React, { useState } from 'react'

import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

const signupInitialValue = {
  username : "",
  email : "",
  password : ""
}

const Login = () => {

  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValue)

  const togglesignup = () =>{
     account ==="signup" ? setAccount("login") :setAccount("signup")
  }
  const onInputChange=(e)=>{
       setSignup({...singup, [e.target.name]: e.target.value})
  }
  return (
    <>
    {
    account === "login" ?
    <section className="flex flex-col md:flex-row h-screen items-center">

<div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
  <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
</div>

<div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div className="w-full h-100">
    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className='h-20 w-80 m-auto object-cover' alt="" />


    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

    <form className="mt-6" action="#" method="POST">
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" name="" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required/>
      </div>

      <div className="text-right mt-2">
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
      </div>

      <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Log In</button>
    </form>

    <hr className="my-6 border-gray-300 w-full"/>

    <p className="mt-8">Need an account? <button onClick={() => togglesignup()} className="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account </button></p>

  </div>
</div>

</section>

:
<section className="flex flex-col md:flex-row h-screen items-center">

<div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
  <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
</div>

<div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div className="w-full h-100">
    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className='h-20 w-80 m-auto object-cover' alt="" />

    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign up to make account</h1>

    <form className="mt-6" action="#" method="POST">

    <div>
        <label  className="block text-gray-700"> Username</label>
        <input onClick={(e)=>onInputChange(e)} type="text" name="username" id="" placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Email Address</label>
        <input onClick={(e)=>onInputChange(e)} type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input onClick={(e)=>onInputChange(e)} type="password" name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required/>
      </div>

      
      <button  type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Sign up</button>
    </form>

    <hr className="my-6 border-gray-300 w-full"/>

    <p   className="mt-8">Already have an account? <button onClick={() => togglesignup()} className="text-blue-500 hover:text-blue-700 font-semibold">Log In </button></p>

  </div>
</div>

</section>
}
    </>
  )
}

export default Login