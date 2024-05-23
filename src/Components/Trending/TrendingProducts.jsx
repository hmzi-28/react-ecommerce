import React from 'react';
import './trendingproducts.css'
import { IoCartOutline } from 'react-icons/io5';

const TrendingProducts = ({products}) => {
    const trendingProducts = products.flatMap(product => 
        product.items.flatMap(item => 
            item.products.filter(product => product.trending)
        )
    );

    return (
        <>
            <h1 className='trending-head'>Trending Products</h1>
            <div className="container-fluid">
                <div className="product-container">
                    {trendingProducts && trendingProducts.map((item, index) => {
                
                        const price = parseFloat(item.price.replace(/[$,]/g, ''));
                        const oldPrice = parseFloat(item.oldPrice.replace(/[$,]/g, ''));

                        const formattedPrice = Math.round(price);
                        const formattedOldPrice = Math.round(oldPrice);

                        return (
                            <div className="product-wrapper" key={index}>
                                <div className="sale">{item.discount}%</div>
                                <img src={item.catImg} alt="" />
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
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default TrendingProducts;
