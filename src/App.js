
import React from "react";
import "./app.css"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./componants/Home";
import AllMembers from "./componants/AllMembers";

import TeamMaintainance from "./componants/TeamMaintainance"
import Layouts from "./componants/Layouts/Layouts";
import AddMemberLayout from "./componants/Layouts/addMemberLayout";
import AddMember from "./componants/AddMember";
import TeamPage from "./componants/Team"
import AddTeam from "./componants/AddTeam"

import EmployeeData from "./EmployeeData"
import TeamDetails from "./componants/Detailes"

function App() {

 

  // -----------------------Employee Data Setup----------------

  Boolean(JSON.parse(localStorage.getItem("allEmployee"))) === false &&  localStorage.setItem("allEmployee", JSON.stringify(EmployeeData))

  const localStorageEmployeeData = JSON.parse(localStorage.getItem("allEmployee"));

  const [memberData, setmemberData] = React.useState(localStorageEmployeeData)

  // -----------------------Team Data Setup---------------

  Boolean(JSON.parse(localStorage.getItem("allTeam"))) === false &&  localStorage.setItem("allTeam", JSON.stringify([]))


  const localStorageTeamData = JSON.parse(localStorage.getItem("allTeam"));

  const [teamData, setTeamData] = React.useState(localStorageTeamData)

  

  return (
    <Router>
      
      
      <Routes>
        
          <Route element= {<Layouts />}> 
            <Route index element={<Home member = {memberData} />} />
            <Route path="members" element={<AddMemberLayout />} > 
                <Route index element={<AllMembers memberData={memberData} setmemberData={setmemberData} />}/>
                <Route path="addMember" element={<AddMember setmemberData={setmemberData}  />} />
            </Route>

            <Route path="team" element={<Outlet />} > 
              <Route index element={<TeamPage teamData={teamData} />} />
              <Route path=":id" element={<TeamDetails setmemberData={setmemberData} setTeamData={setTeamData} />} />
              <Route path="createNewTeam" element={<AddTeam memberData ={memberData} setmemberData={setmemberData} teamData={teamData} setTeamData={setTeamData} />}/>  
            </Route>
            <Route path="maintainTeam" element={<TeamMaintainance />} /> 
          </Route>
      
       </Routes>
      
    </Router>
  );
}

export default App;

