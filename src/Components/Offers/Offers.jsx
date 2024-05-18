import React from 'react';
import './offer.css';

const Offers = () => {
  return (
    <div className="container-fluid">
    <div className='offers'>
       <div className="offer-card" id='offerCard'>
        <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/icon-1.png" alt="" />
        <div>
        <a href="">Best offers</a>
         <p>Orders $50 or more</p>
        </div>
       </div>
       <div className="offer-card" id='offerCard'>
        <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/icon-2.png" alt="" />
        <div>
        <a href="">Free delivery</a>
         <p>24/7 Service</p>
        </div>
       </div>
       <div className="offer-card" id='offerCard'>
        <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/icon-3.png" alt="" />
        <div>
        <a href="">Great daily deals</a>
         <p>On SignUp</p>
        </div>
       </div>
       <div className="offer-card" id='offerCard'>
        <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/icon-4.png" alt="" />
        <div>
        <a href="">Wide assortment</a>

         <p>
         Mega discounts
         </p>
        </div>
       </div>
       <div className="offer-card" id='offerCard'>
        <img src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/icon-5.png" alt="" />
        <div>
        <a href=""> 
Easy returns
</a>
         <p>Within 30 days</p>
        </div>
       </div>
        </div>
        </div>
  )
}

export default Offers