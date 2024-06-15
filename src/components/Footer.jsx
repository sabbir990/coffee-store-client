import React from 'react'
import logo from '../../public/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4 items-center bg-footer-bg p-28'>
        <section className='space-y-6'>
          <img src={logo} alt="logo" className='w-20' />
          <h1 className='font-caveat font-bold text-5xl text-[#915126] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_40%)]'>Espresso Emperium</h1>
          <p className='font-roboto text-[#52433a]'>Always ready to be your friend. Come & contact us to share your memoriable moments. To share with your best companion</p>
          <div className='flex items-center space-x-1 text-2xl'>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
          <h1 className='font-caveat font-bold text-5xl text-[#915126] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_40%)]'>Get in touch</h1>
          <p className='flex items-center text-[#52433a] font-roboto space-x-2'><FaPhone /><span>+8801533333333</span></p>
          <p className='flex items-center text-[#52433a] font-roboto space-x-2'><SiGmail /><span>info@gmail.com</span></p>
          <p className='flex items-center text-[#52433a] font-roboto space-x-2'><FaLocationArrow /><span>72 wall street, king road, Dhaka</span></p>
        </section>
        <section>
            <h1 className='font-caveat font-bold text-5xl text-[#915126] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_40%)]'>Connect with us</h1><br /><br />
            <form className='flex flex-col items-left space-y-2'>
              <input type="text" placeholder='Name' className='w-full px-3 py-2 outline-none border rounded-xl'/>
              <input type="email" placeholder='Email' className='w-full px-3 py-2 outline-none border rounded-xl' />
              <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='w-full px-3 py-2 outline-none border rounded-xl'></textarea><br /><br />
              <input type="submit" value="Send Message" className='border-2 border-[#6e4427] text-[#6e4427] py-2 rounded-xl font-caveat font-bold cursor-pointer' />
            </form>
        </section>
      </div>
      <div className='bg-footer-bottom-bg py-1'>
          <p className='font-caveat text-white text-center'>Copyright Espresso Emporium! All Rights Reserved</p>
      </div>
    </div>
  )
}
