import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./styles.css";



// components import 
import  Navbar  from './components/Navbar'

// pages import

import { SignIn } from './pages/SignIn'
// import {SignOut} from './pages/SignOut'
import { Home } from './pages/Home/Home';
import SignOut from './pages/SignOut'; // Ensure this is a default import


function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const router =  createBrowserRouter([
    {
      path :"/",
      element:<AppLayout />,
      children:[
        { index: true, element: <Home />},
        {path: "/SignIn", element: <SignIn />},
      { path: "/SignOut", element: <SignOut/>}

      ]

      
    }
  ])
  return (
    <div className="App">
   
      <RouterProvider router={router} />

  </div>
  )
}

export default App