import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <div>Home</div>
    </nav>
    
  )
}

export default Home