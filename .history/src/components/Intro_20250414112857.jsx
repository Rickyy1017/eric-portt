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
                        <div data-aos="fade-left" data-aos-duration="1000" className="font-bold text-3xl">Hi, I'm Eric</div>
                    </div>
                    <div className="flex items-start gap-3 flex-col">
                        <div className="w-full bg-[#2d2e32] gap-3 h-12 flex  items-start">
                            <div className="h-full w-1.5 bg-primary"></div>
                            <div data-aos="fade-right" data-aos-duration="1000" className=" text-base self-center">Frontend / Etherium Blockchain Developer</div>
                        </div>
                        <div data-aos-duration="1000" data-aos="fade-up" className="font-bold tracking-wide text-[1rem] ">I'm a dedicated computer engineer and skilled front end developer and a solidity web3 developer based in Nigeria, West Africa, with a passion for building robust and scalable solutions. I have a strong foundation in both front-end and blockchain technologies, and my work is driven by an enthusiasm for problem-solving and a commitment to creating impactful digital experiences. </div>
                        <div data-aos-duration="1000" data-aos="fade-down" className="font-bold tracking-wide text-[1rem]">Whether developing efficient APIs, crafting seamless UIs, or developing smart contracts on live testnets, I bring a detail-oriented approach to every project. Let's build innovative solutions together!</div>
                    </div>
                    <Link to={`/about`} data-aos="fade-up"
                        data-aos-duration="1000"
                        className="underline text-primary">Read More</Link>
                </div>
            </div>
        </div>
    )
}import React, { useEffect, useState } from 'react'
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

export default Intro