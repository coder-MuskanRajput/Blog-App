
import React, { useState } from 'react'
import DataProvider from './Context/DataProvider';


import Login  from "./Components/accounts/login";
import Home from "./Components/home/home";
import Header from "./Components/header/header";
import CreatePost from "./Components/create/createPost";
import DetailView from "./Components/details/DetailView";
import UpdatePost from './Components/create/UpdatePost';

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

      
      <Route path="/details/:id" element = {<PrivateRoute isAuthenticated={isAuthenticated} />}>
      <Route path='/details/:id' element={< DetailView />}/> 
      </Route>

      <Route path="/update/:id" element = {<PrivateRoute isAuthenticated={isAuthenticated} />}>
      <Route path='/update/:id' element={< UpdatePost />}/> 
      </Route>

     </Routes>
     </BrowserRouter>
    </DataProvider>
    </>
  )
}
export default App;