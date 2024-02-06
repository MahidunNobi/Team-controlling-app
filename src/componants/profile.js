import React from "react";

export default function profile({name, id, designation, team, imageLink, deleteEmployee, addPersonToTeam}){

   
    
    return (
        <div className=" w-11/12 md:w-64 bg-gray-400 mx-auto mb-8 md:mb-0 rounded-lg overflow-hidden inline-block md:m-6 pb-4" onClick={() => addPersonToTeam ? addPersonToTeam(id): console.log("what should we do")}>
            <div className="overflow-hidden mb-3 h-72 text-center" >
                <img src={imageLink} alt="" className="w-full"/>
            </div>
            <div className="text-white text-lg ">
                <p> {name}</p>
                <p> {designation} </p>
                <p> {team}</p>                
            </div>
            { deleteEmployee ? <button onClick={() => deleteEmployee(id) } className="w-4/5 border-2 border-red-600 text-gray-200 py-2 my-3 text-xl transition-all rounded-2xl cursor-pointer hover:bg-red-600"> DELETE EMPLOYEE</button> : ""}
        </div>
    )
}