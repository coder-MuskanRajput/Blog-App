import React, { useState } from 'react'
import {API} from  "../../Service/api"
import axios from 'axios'
import { Typography } from '@mui/material'
// import Box from '@mui/material/Box';
// import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';

const Error = styled(Typography)`
  font-size : 10px;
  color : #ff6161;
  line-height : 0;
  margin-top : 10px;
  font-weight : 600;
`

const Login = () => {

  const signupInitialValue = {
    username : "",
    email : "",
    password : ""
  }
  
  const loginInitialValue = {
     email: "",
     password : ""
  }

  const submitHandler = async (e)=>{
  e.preventDefault();
  }

  // const subbmit = async ()=>{
  //   try {
  //     const dataZ = await axios({
  //       method: "post",
  //       url : "http://localhost:8080/signup",
  //       headers: {
  //          'content-type': 'application/x-www-form-urlencoded'
  //          },
  //       data : signup
  //   })
  //   console.log(dataZ);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValue)
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState("");

  const togglesignup = () =>{
     account ==="signup" ? setAccount("login") :setAccount("signup")
  }
  const onInputChange=(e)=>{
      // console.log(e.target.value);
       setSignup({...signup, [e.target.name]: e.target.value})
      //  console.log(signup);
  }

  const signupUser = async() =>{
    let response =  await API.userSignup(signup);
    console.log(response);
    if(response.isSuccess){
      setError("");
      setSignup(signupInitialValue);
      togglesignup("login")
    }
    else{
       setError("Something went wrong Please try Again later")
    }
  }

  const onValueChange = (e)=>{
    setLogin({...login, [e.target.name] : e.target.value})
  }

  const loginUser = async () =>{
    let response = await API.userLogin(login);
    if(response.isSuccess){
      setError("");
      sessionStorage.setItem("accessToken" , `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`);

    }
    else{
      setError("Something went wrong ! Please try Again later")
    }
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

    <form onSubmit={submitHandler} className="mt-6">
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input type="email" onChange={(e) => onValueChange(e)} value={login.email} name="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" onChange={(e) => onValueChange(e)} value={login.password} name="password"  placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required/>
      </div>

      <div className="text-right mt-2">
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
      </div>
      {error && <Error>{error}</Error>}

      <button onClick={()=> loginUser()}  type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
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

    <form onSubmit={submitHandler} className="mt-6">

    <div>
        <label  className="block text-gray-700"> Username</label>
        <input onChange={(e) => onInputChange(e)} value={signup.username} type="text" name="username"  placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Email Address</label>
        <input onChange={(e) => onInputChange(e)} value={signup.email} type="email" name="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required/>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input onChange={(e) => onInputChange(e)} value={signup.password} type="password" name="password"  placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required/>
      </div>
  
      {error && <Error>{error}</Error>}
      <button type="submit" onClick={signupUser} className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
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