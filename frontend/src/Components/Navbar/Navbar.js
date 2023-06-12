import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from '../../Actions/userActs';

const Navbar = ({ isAuthenticated, username, isAdmin }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { pathname } = location;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  const splitLocation = pathname.split("/");

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://res.cloudinary.com/dotl5onov/image/upload/v1664330895/bmsce_acm/acm_nobg_hgtczx.png" width="150px" height="150px" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/'
                className={splitLocation[1] === "" ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/team'
                className={splitLocation[1] === "team" ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/events'
                className={splitLocation[1] === "events" ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Events
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/blogs'
                className={splitLocation[1] === "blogs" ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href='/gallery'
                className={splitLocation[1] === "gallery" ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              {
                isAuthenticated ? (
                  isAdmin ? (
                    <a
                      href='/admin'
                      className={splitLocation[1] === "amdin" ? "nav-links active" : "nav-links"}
                      onClick={closeMobileMenu}
                    >
                      Admin
                    </a>
                  ) : (
                    <a
                      id='dropdown'
                      className={splitLocation[1] === "admin" ? "nav-links active" : "nav-links"}
                      onClick={closeMobileMenu}
                    >
                      <li className='dropbtn'>{username}</li>
                      <div className="dropdown-content">
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    </a>
                  )
                ) : (
                  <a
                    href='/login'
                    className={splitLocation[1] === "login" ? "nav-links active" : "nav-links"}
                    onClick={closeMobileMenu}
                  >
                    Login
                  </a>
                )
              }
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
}

export default Navbar;