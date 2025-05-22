import React, { useState } from 'react'
import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { FaCheckCircle, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { errorMessage, successMessage } from '../utils/utils';
import emailjs from '@emailjs/browser'
import Lottie from 'react-lottie';
import animationData from './success.json'
import loadData from './load.json'
import { AiOutlineClose } from "react-icons/ai";
import Sending from './Sending';
import toast from 'react-hot-toast';

export const successSend= (message) => {
  toast.custom((t) => (
      <div data-aos="fade-down" data-aos-duration="1000"
          className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
          } bg-[#fe04b4] text-white p-2 rounded shadow flex items-center`}
      >
          <span
              style={{ color: '#fffff', fontSize: '20px' }}
              className="mr-2"
          >
            <FaCheckCircle/>
          </span>
          {message}
      </div>
  ));
};


const Contact = () => {

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
    animationData: loadData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [animate, setAnimate] = useState(false)
  const [loading,setLoading] = useState(false)
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


  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
    }
  };
  
  return (
    <div className='w-full mt-8 relative'>
     { loading && <div className="z-50 fixed w-full h-[100dvh] overflow-hidden bg-sec/90   ">
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
      <div className="w-11/12 mx-auto py-10">
        <Link to={`/`}>
          <FaArrowLeftLong className='text-2xl text-zinc-400 mb-5 cursor-pointer' />
        </Link>
        <div className="w-full flex items-start justify-between gap-10 flex-col lg:flex-row">
          <div className="flex flex-col lg:w-1/2 w-full gap-5">
            <div data-aos="fade-left" data-aos-duration="2000"
              className="text-primary text-4xl font-bold">Let’s Build Something Great Together!</div>
            <div data-aos="fade-right" data-aos-duration="1000" className="text-lg">I’m always excited to connect, collaborate, or help you bring your ideas to life. Whether you’re looking for a developer to work on your next project or just want to say hi, feel free to reach out. Let’s create something amazing!</div>
            <div data-aos="fade-up-left" data-aos-duration="1000" className="flex items-start flex-col gap-2">
              <div className="text-lg">Connect with me:</div>
              <div className="flex items-center gap-5">
                <Link to={`https://x.com/_litezy/`} className='text-lg  text-zinc-300' target="_blank" ><BsTwitterX /></Link>

                <Link lassName='text-xl text-zinc-300' to="https://wa.link/xbn55o"  target="_blank"> <BsWhatsapp /></Link>
                <Link to={`https://web.facebook.com/Iammrlite/`} className='text-xl text-zinc-300' target="_blank" ><BsFacebook /></Link>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmission} data-aos="flip-down" data-aos-duration="2000" className='flex flex-col lg:w-1/2 w-full gap-5 '>
            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Name</div>
              <input type="text" name='name' value={forms.name} onChange={handleChange} className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none' placeholder='Name' />
            </div>
            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Email</div>
              <input type="email" name='email' value={forms.email} onChange={handleChange} className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none' placeholder='Email' />
            </div>

            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Message</div>
              <textarea type="text" name='message' value={forms.message} onChange={handleChange} className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none min-h-24 py-2' placeholder='Message' />
            </div>
            <button className='w-full h-14 bg-primary'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact