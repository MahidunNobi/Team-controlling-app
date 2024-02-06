import React from 'react'
import AddMemberHeader from "../Header/addMemberHeader"
import { Outlet } from 'react-router-dom'

const addMemberLayout = () => {
  return (
    <div id="employee" >
        <AddMemberHeader />

        <Outlet />
    </div>
  )
}

export default addMemberLayout