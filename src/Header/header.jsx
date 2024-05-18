import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosGitCompare, IoIosLogOut } from "react-icons/io";
import { BsCart3 } from 'react-icons/bs';
import { FiUser } from "react-icons/fi";
import { CiMap, CiHeart, CiLogout, CiSettings } from 'react-icons/ci';
import Button from '@mui/material/Button';
import { FaShop } from 'react-icons/fa6';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import './header.css';

const Header = ({ toggleMenu,products }) => {
  const [toggleUser, setToggleUser] = useState(false);
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const userRef = useRef();

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setToggleUser(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  useEffect(() => {
    const userInput = input.toLowerCase();
    if (userInput.length >= 1 && products) {
      const matchedProducts = products.flatMap(category =>
        category.items ? category.items.flatMap(item =>
          item.products.filter(product =>
            product.productName.toLowerCase().includes(userInput)
          )
        ) : []
      );
      setSearchResult(matchedProducts);
    } else {
      setSearchResult([]);
    }
  }, [input,products]);

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="header-wrapper">
            <div className="header">
              <div className="logo">
                <FaShop size={35} color='#3bb77e'/>
                <div>
                  <a href="/">NATURE</a>
                  <p>Mart & Grocery</p>
                </div>
              </div>
              <div className="head-center">
                <div className="search-bar">
                  <input type="text" placeholder='Search for Product...' value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="search-icon">
                  <AiOutlineSearch />
                </div>
                {input &&
                <div className="search-result">
                  { searchResult.length === 0 && input ? (
                    <div>No product found</div>
                  ) : (
                    searchResult.slice(0,4).map((item, index) => (
                      <div key={index} className='search-item'>
                        <div className="image-wrapper">
                          <img src={item.productImages[0]} alt={item.productName} />
                        </div>
                        <p>{item.productName}</p>
                        <h6>{item.price}</h6>
                      </div>
                    ))
                  )}
                </div>}
              </div>
              <div className="head-end">
                <div className="iconbg" id='iconbg'>
                  <div className="cart" style={{ cursor: "pointer" }}>
                    <BsCart3 />
                  </div>
                  <div className="cart-count">0</div>
                </div>
                <div className="compare-iconbg" id='iconbg'>
                  <div className="compare" style={{ cursor: "pointer" }}>
                    <IoIosGitCompare />
                  </div>
                  <div className="cart-count">0</div>
                </div>
                <div className="user-iconbg" id='iconbg'>
                  <div className="user" ref={userRef}>
                    <FiUser onClick={() => { setToggleUser(!toggleUser) }} />
                    {toggleUser &&
                      <ul className="dropdown-menu">
                        <li><Button><FiUser /> My Account</Button></li>
                        <li><Button><CiMap /> Track Order</Button></li>
                        <li><Button><CiHeart /> My Wishlist</Button></li>
                        <li><Button><CiSettings /> Setting</Button></li>
                        <li><Button><IoIosLogOut /> Logout</Button></li>
                      </ul>
                    }
                  </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                  <HiOutlineMenuAlt1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
