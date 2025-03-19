import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#">Apart Manage System</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-warning" href="/home">Home</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-warning" href="/complaints">Complaints</a>
              </li>
              <li className="nav-item">
                                <a className="nav-link text-warning" href="/viewAnnouncement">View Announcement</a>
              </li>
              <li className="nav-item">
                             <a className="nav-link text-warning" href="/visitor">Add Visitor</a>
                            </li>
              <li className="nav-item">
                             <a className="nav-link text-warning" href="/user">Profile</a>
                </li>
              
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item text-warning" href="/aboutus">About</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-warning" href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
            {localStorage.getItem("token") ? (
            <li className="nav-item">
            <button className="btn btn-primary text-warning nav-link" onClick={handleLogout}>
             Logout
             </button>
               </li>
                ) : null}  {}
                 </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
