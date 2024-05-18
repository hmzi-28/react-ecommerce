import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './dropdown.css';

const Dropdown = () => {
  const [toggleList, setToggleList] = useState(false);
  const dropdownRef = useRef();
  const [active, setActive] = useState(0);
  const [selectedItem, setSelectedItem] = useState('All');
  const [input, setInput] = useState('');
  const [results, setResults] = useState(["All", "Dairy", "Fruits", "Vegetables", "Beauty"]);

  const categorySelection = (category, index) => {
    setSelectedItem(category);
    setActive(index);
    setToggleList(false);
    setInput(''); 
    setResults(["All", "Dairy", "Fruits", "Vegetables", "Beauty"]); 
  };

  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setToggleList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  
  });

  const handleInput = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    if (userInput.length > 0) {
      const filteredResults = results.filter(item => item.toLowerCase().includes(userInput.toLowerCase()));
      setResults(filteredResults);
    } else {
      setResults(["All", "Dairy", "Fruits", "Vegetables", "Beauty"]); 
    }
  };

  return (
    <>
    <div ref={dropdownRef}>
  
      <div className="dropdown-toggle d-flex align-items-center justify-content-between" onClick={() => setToggleList(prev => !prev)} >
        {selectedItem}
        <FaAngleDown/>
      </div>
      {toggleList &&
        <div className="dropdown" >
          <input type="text" value={input} onChange={handleInput} />
          <ul>
            {results.map((category, index) => (
              <li key={index}
                  onClick={() => categorySelection(category, index)}
                  className={active === index ? "active" : ''}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      }
        </div>

    </>
  );
}

export default Dropdown;
