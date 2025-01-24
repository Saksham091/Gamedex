import './navbar.css';
import { FaSearch } from "react-icons/fa"
import image from '../../../assets/logo.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

  const [searchButton, setSearchButton] = useState(true)

  const handleClick = () => {
      setSearchButton(!searchButton)
  }

  let header = document.getElementsByClassName('header');

  const handleMenuToggle = () => {
    header[0].classList.toggle("header")
    header[0].classList.toggle("open");
  }

  return (
    <>
      <div className='container_nav'>
        <header className="header">
          <div className='logo'>
            <Link to = "/"><p id='websiteName'> <img src={image} className="logo-img" /></p></Link>
          </div>
          <div className="group">
            <ul className="navigation">
            <li><p>Bookmarks</p></li>
              <Link to="/Login"><li><p>Login</p></li></Link>
            </ul>
          </div>
          <div className="search">
            <span className="icon">
              {searchButton ? <FaSearch onClick={handleClick} className='searchBtn' /> : <MdClose onClick={handleClick} className='closeBtn' />}
            </span>
            <FiMenu className='menuToggle' onClick={handleMenuToggle}/>
          </div>
          <div id='search' className={searchButton ? "searchBox" : "searchBox active"}>
            <input type="text" placeholder='Search here . . .' />
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar