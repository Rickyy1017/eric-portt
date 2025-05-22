import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineMessage } from "react-icons/ai";
import Footer from '../components/Footer'


const AppLayout = ({ children }) => {
  
  return (
    <div className='w-full  flex flex-col justify-between overflow-x-hidden '>
      <div className="bg-sec z-50 fixed top-0">
        <Navbar />
      </div>
      <div className="bg-[#2d2e32] relative">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout