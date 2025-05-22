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
            const res = await axios.get(`https://api.github.com/users/Ricky1017/repos?per_page=100&page=1`)
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
      <div></div>
    )
}

export default Home
