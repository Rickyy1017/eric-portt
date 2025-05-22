import React, { useEffect, useState } from 'react'
import js from '../assets/js.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import mysql from '../assets/ta.png'
import express from '../assets/express.png'
import { AiOutlineMessage } from 'react-icons/ai'

const Hero = ({ num, loading,repo }) => {
    const techs = [

        { name: 'Node.js', image: node },
        { name: 'Express', image: express },
        { name: 'React', image: react },

    ]
   

    return (
        <div className="flex items-center relative w-full bg-[#2d2e32]] flex-col lg:flex-row gap-20">
           
            <div className="flex items-start flex-col gap-6   w-full lg:w-1/2">
                <div data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    className="px-2 py-1.5 bg-primary rounded-md text-sm font-medium text-white tracking-wide">
                    Full Stack Software Developer
                </div>

                <div data-aos="fade-right"
                    className="font-bold text-4xl leading-tight text-gray-200 mt-4">
                    Building Innovative and Scalable Solutions
                </div>

                <div data-aos="fade-left"
                    className="font-light text-lg text-gray-400 mt-2 italic">
                    Creativity, precision, and purpose—let's solve complex challenges and shape the future.
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className="flex items-start gap-10 lg:gap-20 mt-5 w-full">
                    <div className="flex items-start gap-2">
                        <div className="text-6xl font-bold">2</div>
                        <div className="text-xs text-zinc-400">years of <br /> experience</div>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="text-6xl font-bold">{loading ? '...' : repo ? repo :num}</div>
                        <div className="text-xs text-zinc-400">projects/ <br />contributions</div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-duration="2000"
                className="lg:w-1/2 w-full">
                <div className="mt-10 w-8/12 mx-auto flex items-center justify-center">
                    <img src={mysql} className='w-20' alt="mysql image" />
                </div>
                <div className="w-8/12 mx-auto flex items-baseline justify-between">
                    {techs.map((im, i) => {
                        const isEven = i % 2 === 0
                        return (
                            <div className={`p-2 bg-black/40 rounded-full  `} key={i}>
                                <img data-aos={`${isEven ? 'fade-left' : 'fade-right'}`} className={``} src={im.image} alt={im.name} />
                            </div>
                        )
                    })}
                </div>
                <div className="mt-10 w-8/12 mx-auto flex items-center justify-center">
                    <img src={js} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero