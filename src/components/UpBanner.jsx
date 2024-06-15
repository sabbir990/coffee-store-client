import React from 'react'
import '../App.css'
import logo from '../../public/images/more/logo1.png';

export default function UpBanner() {
  return (
    <div className='bg-up-bg py-3 flex items-center justify-center space-x-4'>
        <img src={logo} alt="logo" className= 'max-w-12'/>
        <h2 className='logo-text'>Espresso Emporium</h2>
    </div>
  )
}
