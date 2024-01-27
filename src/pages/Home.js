import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/1stPage.jpg'
import RALogo from '../assets/RALogo.png'
import '../styles/Home.css'

function Home() {
    return (
      <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
         <div style={{ textAlign: 'center' }}>
            <img src={RALogo} alt="RA Logo"
            style={{ display: 'block', margin: 'auto' }}/>
          </div>
        </div>
      </div>
    )
}

export default Home
