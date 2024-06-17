import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider , Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home.jsx'
const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='home' element={<Home/>}/>
  </Route>
)) 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
)
