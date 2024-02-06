import React from 'react'
import { Link } from 'react-router-dom'

const addMemberHeader = () => {
  return (
    <div className="topSection flex justify-between my-10 container mx-auto"> 
            {/*------------------------- Search Bar- -------------------------------- */}
            <div className="searchBar flex items-center">
            <div className="w-6 "> <img src="icons8-search-150.png" alt="" className="w-full opacity-50" /> </div>
                <input type="text" className="text-lg pl-8 pr-6 pb-2 -ml-6 bg-transparent border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700" placeholder="Search Employee "/>
            </div>
            {/* --------------------Add new Employee Section----------------------------- */}
            <div className="">
                <Link to="/members/addMember" className="text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white"> ADD NEW EMPLOYEE</Link>

            </div>
    </div>
  )
}

export default addMemberHeader