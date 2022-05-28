import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
const LandingPage = () => {
  return (
    <div className='container'>
        <button className='btn btn-primary'>
            <Link className='text-decoration-none' to="/home">Home</Link>
        </button>

    </div>
  )
}

export default LandingPage