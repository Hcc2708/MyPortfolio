import React from 'react'
import Headers from './Headers'
import './Home.css'
export default function About() {
  return (
  
    <div className='d1'>
      <Headers/>
      <div className='About1'>
        <div className='AboutChild'>
        <h1>Hi, I'm Hemchand Chandravanshi</h1>
        <p>I hail from Kawardha city and currently i'm persuing B Tech in Computer Science & Engineering from Lovely Professional University. My focuse is on building web applications and websites utilizing JavaScript, Reactjs, Nodejs and Machine Learning.</p>
       <p ><b>Programming Languages:</b><br/></p>
       
        <ul className='tech' >
          <li>Python</li>
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
        
        <p ><b>Web Technologies</b><br/>   </p>
        <ul className='tech'>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJs</li>
          <li>NodeJs</li>
        </ul>
      
        <p ><b>Artificial Intelligence</b></p>
        <ul className='tech'><li>Machine Learning</li></ul>
        </div>
      </div>
    </div>
    
  )
}
