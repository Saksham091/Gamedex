import './navbar.css';
import { FaSearch } from "react-icons/fa";
import image from '../../../assets/logo.png';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

function Navbar() {
  const [searchButton, setSearchButton] = useState(true);
  const [loginState, setLoginState] = useState("Login");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("userId");
    if (isTokenValid(token)) {
      setLoginState("Logout");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userId");   
    setLoginState("Login");
    navigate("/login"); 

    Swal.fire({
      title: "Logged Out!",
      text: "You have been logged out successfully.",
      icon: "success",
      background: "#090909d5",
      color: "#ffff",
      position: "bottom-end",
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: "custom-popup",
      },
    });
  };

  const handleClick = () => {
    setSearchButton(!searchButton);
  };

  const handleMenuToggle = () => {
    document.querySelector('.header').classList.toggle("open");
  };

  return (
    <div className='container_nav'>
      <header className="header">
        <div className='logo'>
          <Link to="/"><p id='websiteName'> <img src={image} className="logo-img" alt="Logo" /></p></Link>
        </div>
        <div className="group">
          <ul className="navigation">
            <Link to="/profile">
              <li><p>Profile</p></li>
            </Link>
            {loginState === "Logout" ? (
              <li onClick={handleLogout}><p>{loginState}</p></li>
            ) : (
              <Link to="/login">
                <li><p>{loginState}</p></li>
              </Link>
            )}
          </ul>
        </div>
        <div className="search">
          <span className="icon">
            {searchButton ? <FaSearch onClick={handleClick} className='searchBtn' /> : <MdClose onClick={handleClick} className='closeBtn' />}
          </span>
          <FiMenu className='menuToggle' onClick={handleMenuToggle} />
        </div>
        <div id='search' className={searchButton ? "searchBox" : "searchBox active"}>
          <input type="text" placeholder='Search here . . .' />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
