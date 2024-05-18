import React from 'react'
import './newsletter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <input type="text" placeholder='Your email address' />
        <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter