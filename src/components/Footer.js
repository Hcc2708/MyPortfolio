import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Home.css'
export default function Footer() {
  return (
    <div className='git'><div className='icon1'><FontAwesomeIcon icon={faGithub} className='icon'/><a href='https://github.com/Hcc2708' className='github'> Github</a></div>
      <div className='icon1'><FontAwesomeIcon icon ={faLinkedin} className='icon'/><a href='https://www.linkedin.com/in/hemchand-chandravanshi-6785301b6' className='github'> LinkedIn</a></div>
    </div>
  )
}
