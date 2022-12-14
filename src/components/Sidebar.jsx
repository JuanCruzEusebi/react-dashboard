import React from "react";
import logoWN from '../assets/images/favicon.png';


const Sidebar = () => {
  return (
    <>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar"  >
  
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" >
          <div className="sidebar-brand-icon" >
            <img className="w-100" src={logoWN} alt="Digital House"></img>
          </div>
        </a>
  
        {/* Divider */}
        <hr className="sidebar-divider my-0" ></hr>
      
        {/* Nav Item - Dashboard */}
        <li className="nav-item active" >
          <a className="nav-link" href="/" >
            <i className="fas fa-fw fa-tachometer-alt" style={{color: 'black'}}></i>
            <span style={{color: 'black'}}>Dashboard - WINE NOT</span></a>
        </li>
    
        {/* Divider */}
        <hr className="sidebar-divider"></hr>

    

        {/* Nav items - Pages */}
        <li className="nav-item" >
          <a className="nav-link collapsed" href="/"  >
            <i className="fas fa-fw fa-folder" style={{color: 'black'}}></i>
            <span style={{color: 'black', fontWeight: 'bolder'}}>Pages</span>
          </a>
        </li>

        {/* Nav items - Charts */}
        <li className="nav-item" >
          <a className="nav-link" href="/" >
            <i className="fas fa-fw fa-chart-area" style={{color: 'black'}}></i>
            <span style={{color: 'black', fontWeight: 'bolder'}}>Charts</span></a>
        </li>

        {/* Nav items - Tables */}
        <li className="nav-item" >
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" style={{color: 'black'}}></i>
            <span style={{color: 'black', fontWeight: 'bolder'}}>Tables</span></a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
    </>
  )
}

export default Sidebar;