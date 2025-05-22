import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
  const apps = [
    {
      img:<BsTwitterX/>,
      link:'https://x.com/_litezy'
    },
    {
      img:<FaFacebook/>,
      link:'https://web.facebook.com/Iammrlite/'
    },
    {
      img:<FaGithub/>,
      link:'https://github.com/Litezy'
    },
    {
      img:<FaLinkedin/>,
      link:'https://www.linkedin.com/in/bethel-nnadi-4a4844194/ '
    },
    {
      img:<CiMail/>,
      link:"mailto:liteb237@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
    },
  ]

  // console.log('footer rendered.')
  return (
    <div className='bg-sec pb-24  h-52 text-white w-full'>
      <div 
      data-aos="zoom-in" data-aos-duration="1000" 
      className="w-11/12 mt-3  mx-auto gap-10  flex flex-col lg:flex-row  justify-between">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl">eR</div>
          <span className='text-zinc-400'>© 2024 All Right Reserved.</span>
        </div>
        <div  className="flex items-center gap-4">
          {apps.map((app,i) => (
            <Link target='blank' to={app.link} className="text-base cursor-pointer" key={i}>{app.img}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer