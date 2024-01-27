import React from 'react'
import IGIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FBIcon from '@mui/icons-material/Facebook'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <IGIcon />
        <TwitterIcon />
        <FBIcon />
      </div>
      <p>&copy; 2024 Raul Salurio Jr.</p>
    </div>
  )
}

export default Footer