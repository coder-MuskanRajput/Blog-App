
import React, { useState } from 'react'
import DataProvider from './Context/DataProvider';


import Login  from "./Components/accounts/login";
import Home from "./Components/home/home";
import Header from "./Components/header/header";
import CreatePost from "./Components/create/createPost";

import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

const PrivateRoute = ({isAuthenticated , ...props }) =>{

      return isAuthenticated ? <> <Header/> <Outlet/> </> : <Navigate replace to="/login" />
}

const App = () => {

  const [isAuthenticated, isUserAuthenticated] = useState(false)
  return (
    <>
    <DataProvider>
      <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login isUserAuthenticated = {isUserAuthenticated}/>}/> 

      <Route path="/" element = {<PrivateRoute isAuthenticated={isAuthenticated} />}>
      <Route path='/' element={<Home/>}/> 
      </Route>

      <Route path="/create" element = {<PrivateRoute isAuthenticated={isAuthenticated} />}>
      <Route path='/create' element={< CreatePost />}/> 
      </Route>
     </Routes>
     </BrowserRouter>
    </DataProvider>
    </>
  )
}
export default App;