import React from 'react'
import logo from '../assets/logo.jpeg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
  return (

    <div className='w-full  mt-14 bg-alt'>
      <div className="w-full py-3 flex items-start justify-center">
        <div className="w-11/12 mx-auto flex flex-col gap-5 h-full">
          <Link to={`/`}>
            <FaArrowLeftLong className='text-2xl text-zinc-400 cursor-pointer' />
          </Link>
          <div className="">
            <div className="text-4xl font-bold text-zinc-300">About</div>
            <div className="text-zinc-400 text-sm">About myself</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-alt">
        <div className="w-11/12 relative py-10 mx-auto flex  lg:h-[35rem] flex-col lg:flex-row  items-start justify-between">
          <div data-aos="fade-up-right" data-aos-duration="1000" className="flex flex-col lg:w-1/2 justify-start w-full h-full">
            <img src={logo} className='object-contain w-full h-full rounded-xl' alt="about us image" />
          </div>

          <div className="w-full lg:w-1/2 flex py-2 gap-10 items-start justify-between h-full flex-col">
            <div className="flex items-start gap-5 flex-col">
              <div className="font-thin text-base">Introduction</div>
              <div data-aos="fade-left" data-aos-duration="1000" className="font-bold text-4xl">Hi, I'm Erik Joseph (eR!</div>
            </div>
            <div className="flex items-start gap-3 flex-col">
              <div className="w-full bg-sec gap-3 h-12 flex  items-start">
                <div className="h-full w-1.5 bg-primary"></div>
                <div data-aos="fade-right" data-aos-duration="1000" className=" text-base self-center">Fullstack Software Developer</div>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" className="tracking-wide font-bold text-[1rem] italic ">I'm a dedicated computer engineer and skilled full-stack developer based in Nigeria, West Africa. With a passion for building robust and scalable solutions, I bring a unique blend of creativity and technical expertise to every project.
                My journey into tech began with a curiosity for how things work, and over the years, I’ve honed my skills in both front-end and back-end technologies. Whether developing efficient APIs, crafting seamless UIs, or optimizing server performance, I approach each challenge with enthusiasm and attention to detail.
                </div>
                <div data-aos-duration="1000" data-aos="fade-down" className="font-bold tracking-wide text-[1rem] italic">Beyond coding, I enjoy playing football, writing/composing music, exploring art, and reading, which help fuel my creativity. Looking ahead, I’m eager to contribute to cutting-edge projects and create impactful digital experiences. Let’s build something amazing together!</div>
            </div>
            {/* <div data-aos="fade-up"
            data-aos-duration="1000"
            className="underline text-primary">Read More</div> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About