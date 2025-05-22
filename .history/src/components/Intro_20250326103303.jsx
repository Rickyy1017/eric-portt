import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Intro = () => {

    const webs = [
        {
            name: 'Web Applications',
            proj: '10+',
            time: 'Completed'
        },
        {
            name: 'Websites',
            proj: '20+',
            time: 'Completed'
        },
        {
            name: 'Deployed',
            proj: '8+',
            time: 'Completed'
        }
    ]
    return (
        <div className='w-full py-20 bg-sec'>
            <div className="w-11/12  mx-auto flex  lg:h-[27rem] flex-col lg:flex-row  items-start gap-10">
                <div className="flex items-start gap-5 flex-col lg:w-1/2 w-full">
                    {webs.map((item, i) => {
                        return (
                            <div key={i} data-aos="fade-up"
                                data-aos-duration="1000"
                                className="bg-[#2d2e32] flex items-start justify-between w-full p-2">
                                <div className="flex items-start flex-col gap-3">
                                    <div className="text-primary text-xl font-bold">{item.name}</div>
                                    <div className="text-zinc-400">{item.time}</div>
                                    <div className="">{item.proj} projects</div>
                                </div>
                                <div className="p-3 rounded-full bg-sec">
                                    <BsArrowUpRightCircleFill className='' />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="w-full lg:w-1/2 flex py-2 gap-10 items-start justify-between h-full flex-col">
                    <div className="flex items-start gap-5 flex-col">
                        <div className="font-thin text-base">Introduction</div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="font-bold text-3xl">Hi, I'm Bethel Nnadi (Litezy)</div>
                    </div>
                    <div className="flex items-start gap-3 flex-col">
                        <div className="w-full bg-[#2d2e32] gap-3 h-12 flex  items-start">
                            <div className="h-full w-1.5 bg-primary"></div>
                            <div data-aos="fade-right" data-aos-duration="1000" className=" text-base self-center">Frontend/ Software Developer</div>
                        </div>
                        <div data-aos-duration="1000" data-aos="fade-up" className="font-bold tracking-wide text-[1rem] ">I'm a dedicated computer engineer and skilled full stack developer based in Nigeria, West Africa, with a passion for building robust and scalable solutions. I have a strong foundation in both front-end and back-end technologies, and my work is driven by an enthusiasm for problem-solving and a commitment to creating impactful digital experiences. </div>
                        <div data-aos-duration="1000" data-aos="fade-down" className="font-bold tracking-wide text-[1rem]">Whether developing efficient APIs, crafting seamless UIs, or optimizing server performance, I bring a detail-oriented approach to every project. Let's build innovative solutions together!</div>
                    </div>
                    <Link to={`/about`} data-aos="fade-up"
                        data-aos-duration="1000"
                        className="underline text-primary">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Intro