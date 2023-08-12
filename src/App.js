import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './components/Home.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='container'>
    <div className='container2'><Home/></div>
    <br></br>
    <BrowserRouter>
    <Routes>
    <Route path = '/' element = {<About/>}></Route>
    <Route path = '/contact' element = {<Contact/>}></Route>
    <Route path = '/projects' element = {<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}
