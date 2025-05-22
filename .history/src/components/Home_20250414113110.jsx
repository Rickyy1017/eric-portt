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
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { webprojects } from '../utils/utils'
import { localName } from './Repos'
import { IoLogoGithub, IoMdStar } from 'react-icons/io'
import Loader from './Loader'
import { GoMoveToTop } from "react-icons/go";


const Projects = () => {
  const storedUser = JSON.parse(localStorage.getItem(localName))
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8

  const npage = Math.ceil(storedUser.length / recordsPerPage)
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = storedUser.slice(firstIndex, lastIndex)

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < npage) {
      return setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const [scrollToTop, setScrollToTop] = useState(false)
  useEffect(() => {
    setLoading(true); // Start loader when `currentPage` changes
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false); // Stop loader after fetching
    }, 500);

    return () => clearTimeout(timer); // Clean up timer
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const ScrollUp = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <div className="w-full mt-14 relative">
      
      {scrollToTop && 
      <div 
      data-aos='zoom-in' data-aos-duration="1000"
      onClick={ScrollUp} className=" cursor-pointer text-white fixed bottom-10 right-2 lg:right-5 z-50 flex rounded-md items-center p-2  bg-primary">
        <GoMoveToTop className='font-bold'/>
        <div className="">Top</div>
      </div>
      }


      <div className='w-full   bg-alt'>
        <div className="w-full py-3 flex items-start justify-center">
          <div className="w-11/12 mx-auto flex flex-col gap-5 h-full">
            <Link to={`/`}>
              <FaArrowLeftLong className='text-2xl text-zinc-400 cursor-pointer' />
            </Link>
            <div className="">
              <div className="text-4xl font-bold text-zinc-300">Projects</div>
              <div className="text-zinc-400 text-sm">Completed projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 gap-20 h-fit">
          {webprojects.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div data-aos={`${isEven ? 'zoom-in' : 'zoom-out'}`} data-aos-duration="2000" className="flex items-start lg:max-h-[85dvh]  flex-col gap-5 p-2 rounded-md bg-sec" key={i}>
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
                  <Link target='blank' className='underline text-primary' to={`${item.link}`}>{item.online ? 'View Site' : 'View Repo'}</Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      <div className="mt-10 w-full ">
        <div className='w-full py-20 my-10 bg-sec relative '>

          <div className="pb-10 w-11/12 mx-auto relative">
            <div data-aos='fade-right' data-aos-duration="1000"
              className="text-xl text-zinc-400 ">All Repos</div>
            <div data-aos='fade-left' data-aos-duration="1000" className="text-sm mb-4 text-zinc-400">Including <Link to={`https://earn.stackup.dev/`} target='blank' className='underline text-primary font-bold'>Stackup</Link> Codealongs / Quests</div>
            {loading && <div className=" absolute top-1/2 z-40 left-1/2 -translate-x-1/2   h-full">
              <Loader />
            </div>}

            {!loading ? <div
              // data-aos='fade-right' data-aos-duration="1000"
              className="grid lg:grid-cols-4 grid-cols-1 w-full gap-10 ">
              {records && records.map((item, i) => {
                const isEven = i % 2 === 0
                return (
                  <div data-aos={`${isEven ? 'fade-left' : 'fade-right'}`}
                    data-aos-duration='2000'
                    key={i} className="bg-alt flex flex-col justify-between h-40 w-full px-3 py-2 rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="capitalize">{item.name}</div>
                      <Link target='blank' className='text-primary underline' to={item?.html_url}>view repo</Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array(3).fill().map((item, i) => (
                            <div key={i} className="text-primary"><IoMdStar /></div>
                          ))}
                        </div>
                        <div className="text-sm">{item.stargazers_count} <span>stars</span></div>
                        <div key={i} className="text-primary"><IoLogoGithub /></div>
                        <div className="text-sm">{item.forks_count} <span>forks</span></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div> :

              <div className="h-96 w-full"></div>
            }



          </div>


          {records.length > 0 && (
            <div className="w-10/12 mx-auto  mb-5 p-5">
              <div className="w-full flex flex-col items-center">
                <span className="text-sm text-gray-200">
                  Showing <span className="font-semibold text-primary ">{(records.length > 0 && firstIndex === 0) ? '1' : firstIndex + 1}</span> to
                  <span className="font-semibold text-primary"> {lastIndex > storedUser?.length ? storedUser?.length : lastIndex}</span> of
                  <span className="font-semibold text-primary "> {storedUser?.length} </span>
                  Repos
                </span>
              </div>
              <div className="flex items-center  justify-between w-full mt-2">
                <button onClick={prevPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-md">
                  Prev
                </button>

                <button onClick={nextPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-md">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="">

        </div>
      </div>
    </div >
  )
}

export default Projects

// window.onscroll = function () {
//   siteScroll();
// };
// function siteScroll() {
//   if (
//       document.body.scrollTop > 10 ||
//       document.documentElement.scrollTop > 10
//   ) {
//       setScroll(true);
//   } else {
//       setScroll(false);
//   }
// }

// .head2>.head2-c::before{
//   content: '';
//   position: absolute;
//   border-width: 2.3rem;
//   border-style: solid;
//   border-color: plum rgb(10, 32, 80) rgb(10, 32, 80) plum;
//   left: -1.3rem;
//   top: -1.3rem;
// }

// const [message, setMessage] = useState({
//   text: '',
//   color: '',
//   status: false
// })

// // Function to update notification message
// const updateMessage = (text, color, status) => {
//   setMessage({
//     text,
//     color,
//     status
//   })
// }

// const time = () => {
//   if (message.status) {
//     setMessage({
//       ...message,
//       status: false
//     })
//   }
// }

// setTimeout(time, 2000)