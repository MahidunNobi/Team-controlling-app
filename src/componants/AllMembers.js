import React from "react";

import Profile from "./profile";

export default function AddMember({memberData, setmemberData}){
 
    function deleteEmployee(id){
        const localStorageData = JSON.parse(localStorage.getItem("allEmployee"))
       
        const itemIndex = localStorageData.findIndex((item) => item.id === id )
        localStorageData.splice(itemIndex, 1)
        localStorage.setItem("allEmployee", JSON.stringify(localStorageData))
        setmemberData(localStorageData)
     
    }
    

    return ( <div className=" text-center">
                {/* ------------------------Employees Section-------------------------- */}
                <h1 className="text-4xl mb-14 border-b-2 border-purple-400 inline-block pb-3"> EMPLOYEES</h1>
                {/* ---------------------All Employees--------------- */}
                <div className="flex flex-wrap justify-center">
                    {memberData.map(member => <Profile name={member.name} key={member.id} designation={member.designation} id={member.id} team={member.team} imageLink={member.imageLink} deleteEmployee={deleteEmployee} />)}
                    
                </div>
            </div>
            
            
    )
}