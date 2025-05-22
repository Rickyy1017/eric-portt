import React, { useEffect, useRef, useState } from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { navs } from '../utils/utils';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import hero from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [modal, setModal] = useState(false)
    const location = window.location
    const modaldiv = useRef(null)

    useEffect(() => {
        if (modaldiv) {
            const handleCLick = (e) => {
                if (modaldiv.current !== null && !modaldiv.current.contains(e.target)) {
                    setModal(false)
                }
            }
            window.addEventListener('click', handleCLick, true)
            return () => {
                window.removeEventListener('click', handleCLick, true)
            }
        }
    }, [modaldiv])

    // const [width, setWidth] = useState(100);
    // const [height, setHeight] = useState(100);
    // const startWidth = 100;
    // const minWidth = 40;
    // const startHeight = 100;
    // const minHeight = 40;
    // const [scrollLocked, setScrollLocked] = useState(true)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         if (scrollLocked) {
    //             const newWidth = Math.max(minWidth, startWidth - scrollY);
    //             const newHeight = Math.max(minHeight, startHeight - scrollY);
    //             if (newWidth > minWidth) {
    //                 setWidth(newWidth);
    //             }
    //             if (newHeight > minHeight) {
    //                 setHeight(newHeight);
    //             }

    //             if (newWidth === minWidth || newHeight === minHeight) {
    //                 setScrollLocked(false); 
    //                 console.log(scrollLocked)
    //               }
    //         }
    //         else{
    //             setWidth(40)
    //             setHeight(40)
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll, true);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll, true);
    //     };
    // }, [])
    return (
        <div
            className='w-full max-h-52 py-3  right-1/2  translate-x-1/2  top-0 z-50 bg-sec border-zinc-500 fixed'>
            <div className="w-11/12 mx-auto   h-full text-white/90 flex items-center justify-be een">
                <div data-aos="fade-right"
                    data-aos-duration="2000"
                    className=" flex w-1/2 items-center justify-between ">
                    <div className="text-xl lg:text-3xl font-bold text-zinc-400 italic">Erik</div>
                    <div className="lg:flex items-center gap-5 hidden">
                        {navs.map((item, i) => {
                            return (
                                <Link key={i} to={item.url} className={`${location.pathname === item.url && 'bg-primary'} flex items-center text-[12px] lg:text-sm  py-1.5 px-3 cursor-pointer hover:bg-primary`}>{item.name}</Link>
                            )
                        })}
                    </div>
                </div>


                <div className="">
                    {!modal && <div data-aos="fade-left" data-aos-duration="2000" onClick={() => setModal(true)} className=""><HiMiniBars3BottomRight className={`lg:text-4xl text-2xl cursor-pointer`} /></div>}
                    {modal &&
                        <div
                            ref={modaldiv}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                            className="absolute bg-sec w-full right-0 top-0 h-[100dvh] rounded-s-md">
                            <div className="flex  gap-20 items-center justify-center flex-col py-5   h-full">
                                <div className="flex flex-col gap-5">
                                    {/* <div className="text-base underline text-center text-primary">Handles</div> */}
                                    <Link target='blank' to={`https://x.com/_litezy`} className=" cursor-pointer flex px-5 items-center  gap-3">
                                        <div className="text-2xl">Twitter</div>
                                        <BsTwitterX className='text-2xl' />
                                    </Link>
                                    <Link target='blank' to={`https://github.com/Ricky1017`} className="flex cursor-pointer px-5 items-center gap-3">
                                        <div className="text-2xl">Github</div>
                                        <FaGithub className='text-2xl' />
                                    </Link>
                                     <a href="mailto:ericjo@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you."
                                    className=" cursor-pointer flex px-5 items-center gap-3">
                                        <div className="text-2xl">Email</div>
                                        <CiMail className='text-white text-2xl' />
                                    </a>
                                </div>

                                <div className="flex flex-col gap-5">
                                    {/* <div className="text-base text-primary text-center underline">NavLinks</div> */}
                                    <div className="flex flex-col gap-3">
                                        {navs.map((item, i) => {
                                            return (
                                                <Link key={i} onClick={() => setModal(false)} to={item.url} className={`${location.pathname === item.url && 'bg-primary'} flex items-center   py-1.5 px-3 text-2xl cursor-pointer hover:bg-primary`}>{item.name}</Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => setModal(false)} className="flex lg:hidden w-full -mt-20 items-center justify-center flex-col">
                                <MdClose className='text-primary text-5xl cursor-pointer' />
                            </div>
                            <div onClick={() => setModal(false)} className="lg:flex hidden absolute top-3 left-10">
                                <MdClose className='text-primary text-5xl cursor-pointer' />
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar