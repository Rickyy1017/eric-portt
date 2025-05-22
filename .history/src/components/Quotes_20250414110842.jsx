import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";


const Quotes = () => {
    return (
        <div className='my-10 pb-20'>
            <div className="w-10/12 mx-auto relative">
                <div className="w-full lg:w-1/2 flex items-center flex-col lg:flex-row lg:gap-20">
                    <div data-aos="fade-right" data-aos-duration="1000" className="text-3xl font-bold">Favourite Quotes</div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="text-sm text-zinc-400">My fave motivational quotes.</div>
                </div>
                <div data-aos="flip-down" data-aos-duration="1000" className=" mt-16  bg-sec lg:h-60 rounded-md p-2 relative">
                    <div className="absolute top-3 left-3 text-zinc-400 font-bold text-3xl"><FaQuoteLeft /></div>
                    <div className="absolute bottom-3 right-3 text-zinc-400 font-bold text-3xl"><FaQuoteRight /></div>
                    <div className="mt-10 px-10 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex ">
                                {Array(10).fill().map((_, i) => (
                                    <div key={i} className="text-primary"><IoMdStar /></div>
                                ))}
                            </div>
                            <div className="text-sm">10/10</div>
                        </div>
                        <div className="">There will always be doubters and haters but they only get the power you give them, remain focused </div>
                        <div className="">If you’re the smartest person in the room, you’re in the wrong room. – Anonymous</div>
                        <div className="">For every change, there is an update; but before any update, there must be an idea that propels the wheels of wanting more. – Litezy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes