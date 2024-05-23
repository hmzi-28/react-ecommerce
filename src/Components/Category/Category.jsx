import React from 'react';
import './category.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Electronic from '../../assets/el.png';
import Women from '../../assets/womene.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Slider from 'react-slick';

const Category = ({ products }) => {
  const allProducts = products;
// Slick carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,       
  autoplaySpeed: 5000,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    <>
       <h1 className='sub-category-head'>Featured Categories</h1>
      <div className='sub-category container-fluid'>
        <div className='sub-category-wrapper'>
          <Slider {...settings}>
            {allProducts.map((product, productIndex) => (
              product.items && product.items.map((item, itemIndex) => (
                <div key={itemIndex} className='sub-category-card'>
                  <Link to={`/${product.cat_name}/${item.cat_name.replace(/\s+/g, '-')}`}>
                    <img src={item.Image} alt={item.cat_name} />
                    <h4>{item.cat_name}</h4>
                    <p>{item.products.length}</p>
                  </Link>
                </div>
              ))
            ))}
          </Slider>
        </div>
      </div>

      <div className='category container-fluid'>
        <div className="cat-wrapper">
          <div className="cat-card">
            <img src='https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/banner-3.png' alt="Organic Products" />
            <div className="cat-content">
              <h3>The best organic <br /> products online</h3>
              <button>
                <Link to=''>
                  Shop Now 
                </Link>
                <IoIosArrowRoundForward size={22} color='#fff' />
              </button>
            </div>
          </div>
          <div className="cat-card" id='cat-card2'>
            <img src={Women} alt="Fashion" />
            <div className="cat-content">
              <h3>Style never goes<br />out of fashion</h3>
              <button>
                <Link to=''>
                  Shop Now 
                </Link>
                <IoIosArrowRoundForward size={22} color='#fff' />
              </button>
            </div>
          </div>
          <div className="cat-card" id='cat-card3'>
            <img src={Electronic} alt="Electronics" />
            <div className="cat-content">
              <h3>Up to 20% off<br /> on electronics</h3>
              <button>
                <Link to=''>
                  Shop Now 
                </Link>
                <IoIosArrowRoundForward size={22} color='#fff' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
