import React from 'react'
import { v4 as uuid } from 'uuid';



const AddMember = (props) => {
    function handleSave(){
        const name = document.getElementById("fullName").value
        const designation = document.getElementById("designation").value
        const team = document.getElementById("workingOk").value
        const imageLink = document.getElementById("imageLink").value

        const singlePerson = {
            name: name,
            designation: designation,
            imageLink: imageLink,
            team: team,
            inTeam: false,
            id: uuid()
        }
        const localStorageData = JSON.parse(localStorage.getItem("allEmployee"));
        localStorageData.push(singlePerson)
        localStorage.setItem("allEmployee", JSON.stringify(localStorageData))    
        props.setmemberData(localStorageData)   
        document.getElementById("fullName").value= ""
        document.getElementById("designation").value= ""
        document.getElementById("workingOk").value= ""
        document.getElementById("imageLink").value= ""
    }
  return (   
    <div className=""> 
        
        <div id="addMember" className="inline-block border-2 border-purple-600 text-center w-96 mx-auto px-12 py-9 rounded-lg">
                    <h1 className="text-gray-600 text-2xl mb-3">
                        ADD EMPLOYEE
                    </h1>
                    <input type="text" 
                    name="fullName" 
                    id="fullName" 
                    placeholder="ENTER FULL NAME" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/> <br/>

                    <input type="text" 
                    name="designation" 
                    id="designation" 
                    placeholder="ROLE IN COMPANY" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/><br/> 
                    
                    <input type="text" 
                    name="workingOk" 
                    id="workingOk" 
                    placeholder="Team Name(Will be work)" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/><br/> 


                    <input type="text" 
                    name="imageLink" 
                    id="imageLink" 
                    placeholder="ONLINE IMAGE LINK" 
                    className="my-4 w-full px-4 py-2 mb-9 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/><br/> 

                    <button className="text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white" onClick={handleSave}>
                        SAVE
                    </button>
                </div>
        </div>
  )
}

export default AddMember