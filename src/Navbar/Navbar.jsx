import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from 'react-icons/io';
import { FiHeadphones } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ menuOpen,setMenuOpen, toggleMenu ,products}) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [openCatMenu, setOpenCatMenu] = useState(false);
  const catRef = useRef();



  useEffect(() => {
    const clickOutSideHandler = (e) => {
      if (!catRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', clickOutSideHandler)

  }),[];
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);
  return (
    <div id='navbar'>
      <div className='container-fluid '>
        <div className={`${menuOpen ? 'overlay' :''}`}></div>
        <div className={`navbar ${menuOpen ? 'open' : ''}`} >
          <div className="nav-left">
            <div className="category-menu ">
              <div>
                <div className="menu-head " >
                  <p onClick={() => setOpenCatMenu(!openCatMenu)}>
                    <AiOutlineAppstore size={24} />
                    Browse All Categories
                    {openCatMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </p>
                  {openCatMenu &&
                    <div className="category-dropdwon" >
                      <ul>
                        {products.map((product) => (
                          <li key={product.id}>
                            <img src={product.image} alt="" />
                            <Link to={`category/${product.cat_name}`} onClick={() => setOpenCatMenu(false)}>{product.cat_name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                </div>
              </div>

            </div>

          </div>
          
          <div className='nav-link' ref={catRef}>
  
            <div className="close-btn" onClick={toggleMenu}>
              <div className="bg-close">
                <IoIosClose />
              </div>
            </div>
            <ul>
              <li><a href='#' onClick={() => setActiveLink('Home')} className={activeLink === 'Home' ? 'active' : ''}>Home</a></li>
              <li><a href='#' onClick={() => setActiveLink('About')} className={activeLink === 'About' ? 'active' : ''}>About</a></li>
              <li><a href='#' onClick={() => setActiveLink('Shop')} className={activeLink === 'Shop' ? 'active' : ''}>Shop</a></li>
              <li><a href='#' onClick={() => setActiveLink('Mega Menu')} className={activeLink === 'Mega Menu' ? 'active' : ''}>Mega Menu</a>
                <div className="megamenu-dropdwon">
                  <ul>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                  </ul>
                  <ul>
                    <li>WoW</li>
                    <li>WoW</li>
                    <li>WoW</li>
                  </ul>
                  <ul>
                    <li>Nice</li>
                    <li>Nice</li>
                    <li>Nice</li>
                  </ul>
                </div>


              </li>
              <li><a href='#' onClick={() => setActiveLink('Blog')} className={activeLink === 'Blog' ? 'active' : ''}>Blog</a></li>


            </ul>
            <div className="user-wrapper">
              <div className="signup-btn" id='user-btn'>
                <a href="">Sign Up</a>
              </div>
              <div className="login-btn" id='user-btn'>
                <a href="">Login</a>
              </div>

            </div>
          </div>

          <div className="nav-right">
            <div className="help-icon">
              <FiHeadphones size={25} color='#3e5379' />
            </div>
            <div className="help-detail">
              <a href="tel:+121900888">1900-888</a>
              <p>24/7 Help Center</p>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar