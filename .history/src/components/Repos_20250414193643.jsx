import React, { useCallback, useEffect, useState } from 'react'
import Loader from './Loader'
import { successMessage } from '../utils/utils'
import axios from 'axios'
import { IoMdStar } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IoLogoGithub } from "react-icons/io5";

export const localName = `Repositoriies`
const Repos = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchRepos = useCallback(async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://api.github.com/users/Rickyy1017/repos?per_page=100&page=1`)
            if (res.status !== 200) return;
            // successMessage(`fetch success`)
            localStorage.setItem(localName, JSON.stringify(res.data))
            setData(res.data)
        } catch (error) {
            console.log(`Error in fetching repos ${error}`)
        } finally {
            setLoading(false)
        }
    })
    useEffect(() => {
        fetchRepos()
    }, [])

    const storedUser = JSON.parse(localStorage.getItem(localName))
    // console.log(data)
    return (
        <div className='w-full py-20 my-10 bg-sec'>
            <div className="pb-10 w-11/12 mx-auto relative">
                <div data-aos='fade-right' data-aos-duration="1000"
                    className="text-xl text-zinc-400 mb-4">Featured Repos</div>
                {!loading && <div className="w-full absolute top-1/2 right-1/2 -translate-x-1/2 justify-center flex items-center h-full">
                    <Loader />
                </div>}

                <div
                    data-aos='fade-right' data-aos-duration="1000"
                    className="grid lg:grid-cols-4 grid-cols-1 w-full gap-10 ">
                    {storedUser && storedUser.slice(0, 8).map((item, i) => {
                        const isEven = i % 2 === 0
                        return (
                            <div data-aos={`${isEven ? 'fade-left' : 'fade-right'}`}
                                data-aos-duration='2000'
                                key={i} className="bg-alt flex flex-col justify-between h-40 w-full px-3 py-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <div className="capitalize">{item.name}</div>
                                    <Link target='blank' className='text-primary underline' to={item?.html_url}>v</Link>
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
                </div>
                
            </div>
            <div className="flex items-center justify-around h-10 w-11/12 lg:w-[35%] mx-auto">
                    <div data-aos='fade-up' data-aos-duration='2000' className="w-20 lg:w-32 h-1 bg-primary"></div>
                    <div data-aos='fade-up' data-aos-duration='2000' className="w-20 lg:w-32 h-1 bg-primary"></div>
                </div>
        </div>
    )
}

export default Repos