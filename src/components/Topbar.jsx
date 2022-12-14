import React from "react";

const Topbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
  
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
  
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto" >      

      
          <div className="topbar-divider d-none d-sm-block"></div>
  
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow" >
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Juan Cruz Eusebi</span>

            </a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Topbar;