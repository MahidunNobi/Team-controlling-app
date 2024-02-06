import React from "react";
import { Link } from "react-router-dom";

export default function Team({teamData}){
    const length = teamData.length
    
    return(
        <div className="main container mx-auto">
            <div className="topSection flex justify-between my-10"> 
                {/*------------------------- Search Bar- -------------------------------- */}
                <div className="searchBar flex items-center">
                    <div className="w-6 "> <img src="icons8-search-150.png" alt="" className="w-full opacity-50" /> </div>
                    <input type="text" className="text-lg pl-8 pr-6 pb-2 -ml-6 bg-transparent border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700" placeholder="Search Employee "/>
                </div>
                {/* --------------------Add new Employee Section----------------------------- */}
                <div className="">
                    <Link to="createNewTeam" className="text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white"> ADD NEW TEAM</Link>

                </div>
            </div>

            {length === 0 ? <h1> You have no Team </h1> : teamData.map(team =>  <Link key={team.id} to={team.id}>  <div className="TeamComponantsDesign hover:bg-orange-600 transition-all cursor-pointer mb-6 w-full py-4 px-5 rounded-lg bg-orange-500 text-white">
        <h1 className="text-2xl"> {team.teamName} </h1>
        <h3> WORKING ON: {team.projectName} project </h3>
        <p> Deadline: {team.deadLine}</p>
    </div> </Link>) }

        </div>
    
    )
}