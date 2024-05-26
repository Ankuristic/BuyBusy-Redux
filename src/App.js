import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";



// components import 
import { Navbar } from './components/Navbar'

// pages import

import { SignIn } from './pages/SignIn'
import {SignOut} from './pages/SignOut'
import { Home } from './pages/Home';

function App() {
  const router =  createBrowserRouter([
    {
      path :"/",
      element:<Navbar/>,
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