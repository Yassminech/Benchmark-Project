import './DashboardAdmin.css';
import { useState } from 'react'
import Sidebar from './Sidebar'
import Home from './HomeDashboard'
import HeaderAdmin from './HeaderAdmin';
import UserTable from './UserTable'

function DashboardAdmin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <HeaderAdmin OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      <UserTable/>
    </div>
  )
}

export default DashboardAdmin



