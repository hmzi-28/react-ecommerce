import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'
import NewsLetter from '../NewsLetter/NewsLetter';
const Crousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,       
        autoplaySpeed: 5000,  
    };

    

  return (
    <div className="container-fluid">

    <div className='home-carousel'>
      <Slider {...settings}>
        <div className='item'>
            <div className="slide-content">
                <h1>Fresh Vegetables <br/>
                Big discount
                </h1>
                <p>Save upto 50% off on your first order</p>
                <NewsLetter/>
            </div>
            <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png" alt="" />
        </div>
        <div className='item'>
         <div className="slide-content">
                <h1>Don't miss amazing <br/>
                grocery deals
                </h1>
                <p>Sign up for the daily newsletter</p>
                <NewsLetter/>
            </div>
        <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-1-min.png" alt="" />

            </div>
       
      </Slider>
    </div>
    </div>

  );
}

export default Crousel;
