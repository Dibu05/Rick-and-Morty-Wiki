import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'


const LandingPage = () => {
  return (
  <div className='conta'>
    <div className='bot'>
            <Link className='txt' to="/home">Comenzar</Link>
        </div>
    </div>
  )
}

export default LandingPage