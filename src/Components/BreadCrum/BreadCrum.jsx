import React from 'react'
import './BreadCrum.css';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrum = ({subCat}) => {
    return (
        <div className="breadcrum">
        <div className='container-fluid'>
              <span>Home</span><IoIosArrowForward/><span>Products</span><IoIosArrowForward/><span>{subCat}</span>
            </div>
        </div>
    )
}

export default BreadCrum;