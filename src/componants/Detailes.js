import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function Detailes({setmemberData, setTeamData}){

let {id} = useParams()
let Data = JSON.parse(localStorage.getItem("allTeam")).filter(d => d.id === id);
let peopleOnThisTeam = JSON.parse(localStorage.getItem("allEmployee")).filter(em => em.team === Data[0].teamName)



function removeFromTeam(id){
    const allEmployeeData = JSON.parse(localStorage.getItem("allEmployee"))
    
    const finalData = allEmployeeData.map(employee => employee.id===id ? {...employee, team: ""} : employee)

    localStorage.setItem("allEmployee", JSON.stringify(finalData))

    setmemberData(finalData)
}

function deleteTeam (id){
    
    const allTeamData =  JSON.parse(localStorage.getItem("allTeam"))

    const indexOfThisTeam = allTeamData.findIndex((singleTeamData)=> singleTeamData.id === id )

    allTeamData.splice(indexOfThisTeam, 1)

    localStorage.setItem("allTeam", JSON.stringify(allTeamData))
    setTeamData(allTeamData)
    console.log(allTeamData);

}



    return(
        
                
                    
                    <div className="members container mx-auto text-center">
                        <Link to=".." className='text-white px-7 py-3 text-lg font-semibold bg-purple-400 rounded-lg hover:bg-purple-300 hover:text-gray-600 transition-all border-2 active:border-purple-400 active:bg-white mb-10'> <FontAwesomeIcon icon={faArrowLeft} /> All Teams</Link>
                         <div>  <table className="w-1/2 mx-auto text-lg mt-6">
                            <tbody> 
                         <tr>
                                <th className="flex justify-between px-4 py-2"> <p>Team Name </p> <span>:</span></th>
                                <td className="px-4 py-2  text-left"> {Data[0].teamName}</td>
                            </tr>
                            <tr>
                                <th className="flex justify-between px-4 py-2"> <p> Working On </p> <span>:</span></th>
                                <td className="px-4 py-2  text-left"> {Data[0].projectName} </td>
                            </tr>
                            <tr>
                            <th className="flex justify-between px-4 py-2"> 
                                <p>Project Expire On </p> <span>:</span></th>
                                <td className="px-4 py-2  text-left"> {Data[0].deadLine}</td>
                            </tr>
    
                            <tr>
                                <th className="flex justify-between px-4 py-2"> <p> Project Progress </p> <span>:</span></th>
                                <td className="px-4 py-2 text-left" > 78%</td>
                            </tr>
                            </tbody>
                        </table>


                        <Link to=".." onClick={()=> deleteTeam(id)} className=" border-2 border-red-600 text-red-600 py-2 my-3 text-xl transition-all rounded-2xl cursor-pointer hover:bg-red-600 hover:text-white px-4"> DELETE THIS TEAM </Link>

                        <h3 className="text-3xl font-semibold mt-6">  Members Working On This Team:</h3> 
                        <div>
                            
                            <div className="member">
                               
                                { peopleOnThisTeam.map(daata => <div key={daata.id} className=" w-11/12 md:w-64 bg-gray-400 mx-auto mb-8 md:mb-0 rounded-lg overflow-hidden inline-block md:m-6 pb-4">
                                    <div className="overflow-hidden mb-3 h-72 text-center" >
                                        <img src={daata.imageLink} alt="" className="w-full"/>
                                    </div>
                                    <div className="text-white text-lg ">
                                        <p> {daata.name} </p>
                                        <p> {daata.designation} </p>
                                    </div>
                                     <button onClick={()=> removeFromTeam(daata.id)} className="w-4/5 border-2 border-red-600 text-gray-200 py-2 my-3 text-sm transition-all rounded-2xl cursor-pointer hover:bg-red-600 px-2"> REMOVE FROM THIS TEAM</button> 
                                </div>) }
                                
                            </div> 
                        </div>
                        
                    </div>
                        
                        
                    </div>

                    
              
        
    )
}