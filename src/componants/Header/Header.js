import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className=" mb-6 w-screen bg-purple-600 -ml-20 py-6 text-white font-medium">
        <Link to={"/"} className="text-lg px-8 hover:text-gray-200 transition-all"> HOME </Link>
        <Link to={"/members"} className="text-lg px-8 hover:text-gray-200 transition-all"> EMPLOYEES </Link>
        <Link to={"/team"} className="text-lg px-8 hover:text-gray-200 transition-all">  TEAMS </Link>
        
      </nav>
  )
}

export default Header