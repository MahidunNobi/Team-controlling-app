import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const TeamMemberProfile = ({imageLink, name, designation, id, deleteFromTeam}) => {
  return (
    <div className="memeronThisTeam flex bg-green-300 rounded-md overflow-hidden p-3 h-24 my-2">
                                <div className="img w-20 overflow-hidden mr-4">
                                    <img className='w-full' src= {imageLink} alt="" />
                                </div>
                                <div className="textField text-left text-lg leading-5 flex flex-col justify-center w-32">
                                    <p> {name}</p>
                                    <p> {designation}</p>
                                </div>
                                <button className="w-8 text-red-700 " onClick={()=> deleteFromTeam(id)}> 
                                    <FontAwesomeIcon icon={faClose} className="text-xl active:text-base transition-all"> </FontAwesomeIcon>
                                </button>
    </div>
  )
}

export default TeamMemberProfile