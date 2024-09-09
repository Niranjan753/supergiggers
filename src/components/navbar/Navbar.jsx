import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setCurrentUser({ id: 1, username: "Niranjan" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Supergigs</span>
          </Link>
          <span className="dot"></span>
        </div>
        <div className="links">
          <div className="user-menu" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span>{currentUser ? currentUser.username : "Menu"}</span>
            <div className={`options ${open ? 'active' : ''}`}>
              {/* <Link className="link" to="/upskill">
                <span>UpSkill</span>
              </Link> */}
              <Link className="link" to="/communities">
                <span>Communities</span>
              </Link>
              <Link className="link" to="/findgigs">
                <span>Find Gigs</span>
              </Link>
              <Link className="link" to="/profile">
                Profile
              </Link>
              {/* <Link className="link" to="/orders">
                Orders
              </Link> */}
              <Link className="link" to="/add">
                Add Gig
              </Link>
              <Link className="link" to="/messages">
                Messages
              </Link>
              {currentUser && (
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
