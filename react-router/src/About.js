import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <nav>
         <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <div>About</div>

    </nav>
  )
}

export default About