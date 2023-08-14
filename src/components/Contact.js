import React from 'react'
import Headers from './Headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
    
    <div className='d1'>
      <Headers/>
      <div className='Contact1'>
        <div className='contactChild'>
          <p><FontAwesomeIcon icon= {faEnvelope} className='icon3'/> <b className='github'>hemuchandravanshi03@gmail.com</b><br/><br/>
          <FontAwesomeIcon icon={faPhone} className='icon2'/> <b className='github'>+91 6263736991</b></p>
          
        </div>
      </div>
    </div>
    
    
  )
}
