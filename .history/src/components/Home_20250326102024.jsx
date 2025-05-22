import React, { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Intro from './Intro'
import { Link } from 'react-router-dom'
import { errorMessage, webprojects } from '../utils/utils'
import Repos from './Repos'
import Quotes from './Quotes'
import axios from 'axios'
import { IoIosClose } from "react-icons/io";
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai'
import Lottie from 'react-lottie'
import animationData from '../components/success.json'
import loadingData from '../components/load.json'
import Sending from './Sending'
import { successSend } from './Contact'
import Techs from './Techs'



export const reponame = 'Allrepos'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const defaultLoad = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Home = () => {

    const [num, setNum] = useState("")
    const [loading, setLoading] = useState(false)
    const [msgbox, setMsgBox] = useState(false)
    const [loader, setLoader] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [contact, setContact] = useState(false)
    const contactdiv = useRef(null)


    const fetchRepos = useCallback(async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://api.github.com/users/Ricky101/repos?per_page=100&page=1`)
            if (res.status !== 200) return;
            setNum(res.data.length)
            localStorage.setItem(reponame, JSON.stringify(res.data.length))
        } catch (error) {
            console.log(`Error in fetching repos ${error}`)
        } finally {
            setLoading(false)
        }
    })


    useEffect(() => {
        fetchRepos()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setMsgBox(true)
            } else {
                setMsgBox(false)
                setContact(false)
            }
        }
        const handleDiv = (e) => {
            if (contactdiv) {
                if (contactdiv.current !== null && !contactdiv.current.contains(e.target)) {
                    setContact(false)
                }
            }
        }
        window.addEventListener('click', handleDiv, true)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleDiv, true)
        }
    }, [])

    const TurnOffContact = () => {
        setContact((prev) => {
            return !prev
        })
    }

    const [forms, setForms] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setMsgBox(false)
        setContact(false)
        setLoader(true);
        try {
            if (!forms.name) throw new Error('Name is missing');
            if (!forms.email) throw new Error('Email is missing');
            if (!forms.message) throw new Error('Message is missing');

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(forms.email)) {
                throw new Error('Invalid email detected');
            }

            const templateParams = {
                to_name: `Bethel Nnadi`,
                from_name: forms.name,
                from_email: forms.email,
                message: forms.message,
            };

            await emailjs.send(
                import.meta.env.VITE_SERVICE, 
                import.meta.env.VITE_TEMPLATE, 
                templateParams, 
                import.meta.env.VITE_MYID
              );
            setAnimate(true)
            successSend('Message sent successfully');
            setForms({ name: "", email: "", message: "" });
            await new Promise((resolve) =>{ 
                setTimeout(()=>{
                   setAnimate(false);
                   resolve();
                },3000)
            })

        } catch (error) {
            console.error('Failed to send email:', error.message || error);
            errorMessage(error.message || 'Failed to send message. Please try again.');
        } finally {
            setLoader(false);
            setMsgBox(true)
        }
    }
    const storedRepo = JSON.parse(localStorage.getItem(reponame))
    return (
        <div className=' w-full relative  ' >
            {loader && <div className="z-50 fixed w-full h-[100dvh] overflow-hidden bg-sec/90   ">
                <div className="w-fit absolute top-1/4 left-1/2 -translate-x-1/2 ">
                    <Lottie options={defaultLoad} width={150} />
                    <div className="text-center"><Sending /></div>
                </div>
            </div>}
            {animate &&
                <div className="fixed z-50 w-full h-[100dvh] overflow-hidden bg-sec/90">
                    <div className='fixed left-1/2 w-full rounded-md -translate-x-1/2'>
                        <Lottie options={defaultOptions} height={400} />
                        <div className="text-center text-primary font-bold text-xl">Thank you for reaching out!</div>
                    </div>
                    <div onClick={() => setAnimate(false)} className=" cursor-pointer absolute top-10 right-10"><AiOutlineClose className='text-4xl' /></div>
                </div>
            }


            <div className=" w-11/12 mx-auto px-2 pt-24 ">
                {msgbox && contact &&
                    <div ref={contactdiv}
                        data-aos="fade-left" data-aos-duration="2000"
                        className="fixed z-50 lg:w-[30%] w-5/6 bg-primary  cursor-pointer right-2 lg:right-5 bottom-24 p-2">
                        <div onClick={() => setContact(false)} className="absolute top-0 right-0"><IoIosClose className='text-3xl' /></div>
                        <div className="text-center text-sm text-sec font-bold">send me a message</div>
                        <form onSubmit={submitForm} className='flex flex-col  text-sm w-full gap-2'>
                            <div className="flex w-full items-start gap-2 flex-col">
                                <div className=""> Name</div>
                                <input name='name' value={forms.name} onChange={handleChange} type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none' placeholder='Name' />
                            </div>
                            <div className="flex w-full items-start gap-2 flex-col">
                                <div className=""> Email</div>
                                <input name='email' value={forms.email} onChange={handleChange} type="email" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none' placeholder='Email' />
                            </div>

                            <div className="flex w-full items-start gap-2 flex-col">
                                <div className=""> Message</div>
                                <textarea name='message' value={forms.message} onChange={handleChange} type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none min-h-24 py-2' placeholder='Message' />
                            </div>
                            <button className='w-full h-10 bg-sec'>Submit</button>
                        </form>
                    </div>
                }
                {msgbox &&
                    <div onClick={TurnOffContact}
                        data-aos='fade-up-left' data-aos-duration="1000"
                        className="fixed z-40 bg-sec p-2 rounded-full cursor-pointer right-10 bottom-10">
                        <AiOutlineMessage className='text-3xl lg:text-4xl text-primary font-bold' />
                    </div>}


                <Hero num={num} repo={storedRepo} loading={loading} />
            </div>
            <div className="mt-5 b-black/40">
                <Intro />
            </div>
            <Techs/>
            <div className="lg:mt-10 w-full flex-col flex items-center justify-center py-10">
                <div className="flex items-center justify-around h-10 w-11/12 lg:w-[35%] mx-auto">
                    <div data-aos='fade-up' className="lg:w-32 w-20 h-1 bg-primary"></div>
                    <div className="">Latest Works</div>
                    <div data-aos='fade-up' className="w-20 lg:w-32 h-1 bg-primary"></div>
                </div>
                <Link to={`/projects`} className="text-primary underline">Projects</Link>
            </div>
           
            <div className="pb-10 w-11/12 mx-auto">
                <div className="text-xl text-zinc-400 mb-4">Featured Projects</div>
                <div className="grid lg:grid-cols-3 gap-20 h-fit">
                    {webprojects.slice(0, 6).map((item, i) => (
                        <div data-aos='zoom-in' data-aos-duration="2000" className="flex items-start lg:max-h-[85dvh]  flex-col gap-5 p-2 rounded-md bg-sec" key={i}>
                            <img src={item.img} className='w-full h-fit' alt={item.name} />
                            <div className="flex items-start gap-2 flex-col pl-2">
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Name:</div>
                                    <div className="">{item.name}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400  text-sm">Type:</div>
                                    <div className="capitalize">{item.type}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Tech Stack Used:</div>
                                    <div className="">{item.techstack}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Brief Description:</div>
                                    <div className="">{item.desc}</div>
                                </div>
                                <Link target='blank' className='underline text-primary' to={`${item.link}`}>{item.online ? 'View Site' : 'View Repo'}</Link>
                                {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Repos />
            <Quotes />
        </div>
    )
}

export default Home