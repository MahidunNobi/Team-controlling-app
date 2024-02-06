import React from 'react'
import { v4 as uuid } from 'uuid';
import Profile from './profile';
import TeamMemberProfile from './TeamMemberProfile';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'


const AddTeam = ({memberData, setmemberData, teamData, setTeamData}) => {

    // function handleSave(){
        // const name = document.getElementById("fullName").value
        // const designation = document.getElementById("designation").value
        // const team = document.getElementById("workingOk").value
        // const imageLink = document.getElementById("imageLink").value

        // const singlePerson = {
        //     name: name,
        //     designation: designation,
        //     imageLink: imageLink,
        //     team: team,
        //     id: uuid()
        // }
        // const localStorageData = JSON.parse(localStorage.getItem("allEmployee"));
        // localStorageData.push(singlePerson)
        // localStorage.setItem("allEmployee", JSON.stringify(localStorageData))    
        // props.setmemberData(localStorageData)   

        // document.getElementById("fullName").value= ""
        // document.getElementById("designation").value= ""
        // document.getElementById("workingOk").value= ""
        // document.getElementById("imageLink").value= ""
    // }

  

    function addPersonToTeam(id){
        const localStorageEmployeeData = JSON.parse(localStorage.getItem("allEmployee"));
        const newLocalData = localStorageEmployeeData.map(item => item.id ===id ? {...item, team: team[0].teamNameInput} : item)
        localStorage.setItem("allEmployee", JSON.stringify(newLocalData))
        setmemberData(newLocalData)
       
    }

    const [team, setTeam] = React.useState([{
        addMember: false,
        teamNameInput: ""
    }])
    function addMemberClick(){

        setTeam([{
            addMember: !team[0].addMember,
            teamNameInput: document.getElementById("teamName").value
        }])
        
      
    }
    function deleteFromTeam(id){
        const localStorageEmployeeData = JSON.parse(localStorage.getItem("allEmployee"));
        const newLocalData = localStorageEmployeeData.map(item => item.id ===id ? {...item, team: ""} : item)
        localStorage.setItem("allEmployee", JSON.stringify(newLocalData))
        setmemberData(newLocalData)
        console.log(memberData);
    }
    function handleTeamSave(){
        let teamName = document.getElementById("teamName").value
        let projectName = document.getElementById("projectName").value
        let deadLine = document.getElementById("deadLine").value

        const teamObj = {
            
            teamName: teamName,
            projectName: projectName,
            deadLine: deadLine,
            id : uuid()
        }
        const localStorageTeamData = JSON.parse(localStorage.getItem("allTeam"));
        localStorageTeamData.push(teamObj)
        localStorage.setItem("allTeam", JSON.stringify(localStorageTeamData))
        
        setTeamData(localStorageTeamData)

        document.getElementById("teamName").value = ""
        document.getElementById("projectName").value =""
        document.getElementById("deadLine").value=""
        setTeam([{
            addMember: !team[0].addMember,
            teamNameInput: document.getElementById("teamName").value
        }])

        
    }
    



  return (   
    <div className="container mx-auto text-center"> 
        <Link to=".." className='text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white mb-10'> <FontAwesomeIcon icon={faArrowLeft} /> All Teams</Link>
        <div id="addMember" className="border-2 border-purple-600 text-center w-96 mx-auto px-12 py-9 rounded-lg my-6">
                    <h1 className="text-gray-600 text-2xl mb-3">
                        Create New Team
                    </h1>

                    <input type="text" 
                    name="teamName" required
                    id="teamName" 
                    placeholder="ENTER TEAM NAME" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/> <br/>

                    <input type="text" 
                    name="projectName" 
                    id="projectName" 
                    placeholder="PROJECT NAME" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/> <br/>

                    <input type="date" 
                    name="deadLine" 
                    id="deadLine" 
                    placeholder="DADELINE" 
                    className="my-4 w-full px-4 py-2 text-lg border-b-2 border-gray-700 focus:outline-0 focus:border-purple-500 transition-all text-gray-700"/> <br/>
{/* -------------------------------Member On this Team-------------------------------- */}
                    <div className="memberonthisteam"> 
                        <p className="text-xl text-center text-gray-600">
                            Members On This Team: </p>
                            {team[0].teamNameInput !== "" &&
                                 memberData.filter(item => item.team === team[0].teamNameInput).map(item => <TeamMemberProfile imageLink={item.imageLink} name={item.name} key={item.id} id={item.id} deleteFromTeam={deleteFromTeam} designation={item.designation} />)}
                            

                    </div>
                   

                    <button className="text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white" onClick={addMemberClick}>
                        Add Member On This Team
                    </button>

                    

                    {team[0].addMember && <button className="text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white" onClick={handleTeamSave}>
                        SAVE
                    </button>}
                </div>

                <h1 className="text-4xl mb-14 border-b-2 border-purple-400 inline-block pb-3"> Available Employees</h1>
                {/* ---------------------All Employees--------------- */}
                <div className="flex flex-wrap justify-center">
                    { team[0].addMember ? memberData.filter(item => item.team === "").map(member => <Profile name={member.name} key={member.id} designation={member.designation} id={member.id} team={member.team} imageLink={member.imageLink} addPersonToTeam={addPersonToTeam}  />) : ""}
                    
                </div>
        </div>
  )
}

export default AddTeam