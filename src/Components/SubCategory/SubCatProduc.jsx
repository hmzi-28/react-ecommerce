import React, { useState, useEffect } from 'react';
import BreadCrum from '../BreadCrum/BreadCrum';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import './subCatProduc.css'

const SubCategoryProduct = ({ products }) => {
    const { subCat } = useParams();
    const [category, setCategory] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState(subCat);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        filterProducts();
    }, [subCat, products, selectedBrand, sortOption]);

    const filterProducts = () => {
        const productData = products.flatMap(product => 
            product.items.filter(item => item.cat_name.replace(/\s+/g, '-') === subCat)
        );
        let productItems = productData.flatMap(item => item.products);
        
        if (selectedBrand) {
            productItems = productItems.filter(item => item.brand === selectedBrand);
        }

        if (sortOption) {
            productItems.sort((a, b) => {
                switch (sortOption) {
                    case 'Low to high':
                        return a.price - b.price;
                    case 'High to low':
                        return b.price - a.price;
                    case 'A to Z':
                        return a.productName.localeCompare(b.productName);
                    default:
                        return 0;
                }
            });
        }

        setCategory(productItems);
    };

    // const uniqueCategories = [
    //     ...new Set(products.flatMap(product => product.items.map(item => item.cat_name.replace(/\s+/g, '-'))))
    // ];

    const uniqueBrands = [
        ...new Set(products .flatMap(product => product.items.filter(item => item.cat_name.replace(/\s+/g, '-') ===   subCat).flatMap(item => item.products.map(prod => prod.brand))
            )
        )
    ];

    return (
        <>
            <div className='container-fluid'>
                <BreadCrum subCat={subCat.replace(/-/g, " ")} />
                <div className="filters">
                    {/* <select name="categories" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        {uniqueCategories.map((cat, index) => (

                            <option key={index} value={cat}>{cat.replace(/-/g, " ")}</option>
                            
                        ))}
                    </select> */}

                 
                    <div className="result">
                        {category.length > 12 ? 
                            `Showing 1 to 12 results out of ${category.length}` : 
                            `Showing all ${category.length} results`
                        }
                    </div>
                    <div className='filter-right'>

                  
                    <select name="brands" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                        <option value="" style={{color:"#3e5379", fontWeight:'700'}}>Brands</option>
                        {uniqueBrands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                    <select name="sorting" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="" style={{color:"#3e5379"}}>Sorting</option>
                        <option value="Low to high">Low to high</option>
                        <option value="High to low">High to low</option>
                        <option value="A to Z">A to Z</option>
                    </select>
                </div>
                </div>
                <div className="product-container" style={{ marginTop: '30px' }}>
                    {category.map((item, index) => {
                        const price = parseFloat(item.price.replace(/[$,]/g, ''));
                        const oldPrice = parseFloat(item.oldPrice.replace(/[$,]/g, ''));
                        const formattedPrice = Math.round(price);
                        const formattedOldPrice = Math.round(oldPrice);

                       return <div className="product-wrapper" key={index}>
                            <div className="sale">{item.discount}%</div>
                            <img src={item.catImg} alt={item.productName} />
                            <div className="product-content">
                                <div className="name">{item.productName}</div>
                                <div className="rating">{item.rating}</div>
                                <div className="brand">By <span>{item.brand}</span></div>
                                <div className="price">
                                <h3>${formattedPrice} <span>${formattedOldPrice}</span></h3>

                                    <div className="icon-bg">

                                        <IoCartOutline size={25} color='#3BB77E' /> Add
                                    </div>
                                </div>
                            </div>
                        </div>
})}
                </div>
            </div>
        </>
    );
}

export default SubCategoryProduct;
