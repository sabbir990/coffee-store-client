import React from 'react'
import { FaCoffee } from "react-icons/fa";
import AppCards from './AppCards';
import {Link} from 'react-router-dom'

export default function AppCardSection({coffeeData}) {
  return (
    <div className='flex flex-col items-center mt-28 space-y-4'>
        <p className='font-roboto text-[#575351]'>-- Sip & Savor --</p>
        <h1 className='font-caveat font-bold text-gray-700 drop-shadow-xl text-4xl'>Our Popular Products</h1>
        <Link to={'/addCoffee'} className='bg-[#cfa708] font-caveat border-2 rounded border-black px-3 py-2 flex items-center space-x-2 font-bold'><span>Add Coffee</span> <FaCoffee /> </Link>
        <AppCards coffeeData={coffeeData}/>
    </div>
  )
}
