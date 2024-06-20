import { useState } from 'react'
import reactLogo from './assets/react.svg'
import firstImage from './assets/1.jpg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Videos from './components/Videos'
import Blog from './components/Blog'
import PoliticalView from './components/PoliticalView'
import UserLogin from './components/user/Login'
import LocalUser from './localuser/Local Login'
import LocalUserRegister from './localuser/Local Register'
import UserRegister from './components/user/register'
import DistrictLayout from './components/DistrictLayout'
import Attractions from './components/Travel/Attractions'
import Itineraries from './components/Travel/Itineraries'
import Activites from './components/Travel/Activities'
import Local from './components/Experience/Local'
import LocalFood from './components/Experience/LocalFood'
import HandiCraft from './components/Experience/Handicraft'
import CulturalEvent from './components/Experience/CulturalEvent'
import CreateBlog from './components/create/Blog'
const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='blogs' element={<Blogs/>}/>
    <Route path='videos' element={<Videos/>}/>
    <Route path='create' >
    <Route path='blog' element={<CreateBlog/>}/>
    </Route>
    <Route path="travel">
      <Route path='tourist-attractions' element={<Attractions/>}/>
      <Route path='itineraries' element={<Itineraries/>}/>
      <Route path='adventure' element={<Activites/>}/>
    </Route>
    <Route path='experience'>
      <Route path='local-experiences' element={<Local/>}/>
      <Route path='food-recipes' element={<LocalFood/>}/>
      <Route path='handicrafts' element={<HandiCraft/>}/>
      <Route path='cultural-events' element={<CulturalEvent/>}/>
    </Route>
    <Route path='view'>
      <Route path='political' element={<PoliticalView/>}/>
    </Route>
    <Route path='district'>
      <Route path=':district' element={<DistrictLayout/>}/>
    </Route>
    <Route path='blog' element={<Blog/>}>
      <Route path=':blogID'/>
    </Route>
    <Route path='user' >
      <Route path='login' element={<UserLogin/>}/>
      <Route path='register' element={<UserRegister/>}/>
    </Route>
    <Route path='localuser' >
      <Route path='login' element={<LocalUser/>}/>
      <Route path='register' element={<LocalUserRegister/>}/>
    </Route>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router}/>

  )
}

export default App
