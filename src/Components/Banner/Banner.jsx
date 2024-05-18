import React from 'react';
import './Banner.css'
import NewsLetter from '../NewsLetter/NewsLetter';

const Banner = () => {
    return (
        <div className='home-banner'>
            <div className="layer"></div>
            <div className="banner-start" id='banner'>
                <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/footer-img-1.png" alt="" />
            </div>
            <div className="banner-middle" id='banner'>
                <h1>Stay home & get your daily needs from our shop</h1>
                <div className='banner-newsletter'>
                    <input type="text" placeholder='Your email address' />
                    <button>Subscribe</button>
                </div>
                <div className="buttons">
                    <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/google-play.jpg" alt="" />
                    <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/google-play.jpg" alt="" />

                </div>
            </div>
            <div className="banner-end" id='banner'>
                <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/footer-img-2-789x1024.png" alt="" />
            </div>

        </div>
    )
}

export default Banner