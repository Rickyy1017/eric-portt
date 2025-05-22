import About from "../components/About"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"
import pinerock from '../assets/projects/pinerock.png'
import coinsavi from '../assets/projects/coinsavi.png'
import getlinked from '../assets/projects/getlinked.png'
import greenford from '../assets/projects/greenford.png'
import nextjs from '../assets/projects/nextjs.png'
import secureinvest from '../assets/projects/secureinvest.png'
import blaize from '../assets/projects/blaize.png'
import furniflex from '../assets/projects/furniflex.png'
import nspare from '../assets/projects/nspare.png'
import hng from '../assets/projects/hng.png'
import investcalc from '../assets/projects/investcalc.png'
import landik from '../assets/projects/landik.png'
import mall from '../assets/projects/mall.png'
import mamiwota from '../assets/projects/mamiwota.png'
import netflix from '../assets/projects/netflix.png'
import tango from '../assets/projects/tango.png'
import tasktracker from '../assets/projects/tasktracker.png'
import todo from '../assets/projects/todo.png'
import tictac from '../assets/projects/tictac.png'
import ecom from '../assets/projects/ecom.png'
import toast from 'react-hot-toast'
import { FaCheckCircle } from "react-icons/fa";






export const errorMessage = (message) => {
    return toast.error(message, {
        duration: 4000,
        position: "top-center",
    })
}



export const successMessage = (message) => {
    return toast.success(message, {
        duration: 4000,
        position: "top-center",
        // style: {
        //     background: "#FFFFFF", 
        //     color: "#fe04b4",      
        //     borderRadius: "5px",  
        // },
    });
};

export const navs = [
    {
        name:'Home',
        id:0,
        url:'/'
    },
    {
        name:'About',
        id:1,
        url:'/about'
    },
    {
        name:'Projects',
        id:2,
        url:'/projects'
    },
    {
        name:'Contact',
        id:3,
        url:'/contact'
    },
]

export const webprojects = [
    {
        name:"Pinerock Credit Union",
        type:'Full stack web Application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Mysql , Material UI',
        link:'https://pinerockcreditunion.com/',
        img:pinerock,
        online:true,
        desc:'Online Banking for the everyday people.'
    },
    {
        name:"Coinsavi Global",
        type:'Full stack web Application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Mysql',
        link:'https://github.com/Litezy/coinsavi',
        img:coinsavi,
        desc:'Online crypto platform that supports p2p transactions within users.'
    },
    {
        name:"Furniflex",
        type:'Full stack web Application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Msql ',
        link:'https://master--furniflex-front.netlify.app/',
        img:furniflex,
        online:true,
        desc:'E-commerce market place with seamless checkout system.'
    },
    {
        name:"GetLinked Design Hackathon",
        type:'Frontend UI Design',
        techstack:'Html, Css , Javascript ', 
        link:'https://litezy.github.io/getLinked-Landingpage/',
        img:getlinked,
        online:true,
        desc:'Getlinked design contest.'
    },
    {
        name:"NSPARE",
        type:'Full stack web application',
        techstack:'NextJs , TailwindCss', 
        link:'https://github.com/slovetechnology/nspare',
        img:nspare,
        desc:'Contributed to the UI design of Npsare startup company that connect car owners to nearest mechanics and shops.(Not live yet).'
    },
    {
        name:"Greenford Bank",
        type:'Full stack web application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Axios , Msql, Material UI ', 
        link:'https://greenfordbank.com/',
        img:greenford,
        online:true,
        desc:'Banking system with seamless transactions.'
    },
    {
        name:"SecureInvest",
        type:'Full stack web application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Axios , Msql ', 
        link:'https://secureinvest.org/',
        img:secureinvest,
        online:true,
        desc:'Secure your crypto portfolio and investments.'
    },
    {
        name:"NextJs Blog App",
        type:'Frontend Blog UI',
        techstack:'Nextjs, jotai, TailwindCss', 
        link:'https://github.com/Litezy/Nextjs-project',
        img:nextjs,
        desc:'UI Design with Nextjs.'
    },
    {
        name:"Blaize Finance",
        type:'Full stack web application',
        techstack:'React/ReactRedux , TailwindCss , Nodejs , Axios , Msql ', 
        link:'https://github.com/Litezy/Blaize-finance',
        img:blaize,
        desc:'Crypto investment platform.'
    },
    {
        name:"HNG Landing Page",
        type:'Frontend UI',
        techstack:'Html, Css , Javascript ', 
        link:'https://github.com/Litezy/Blaize-finance',
        img:hng,
    },
    {
        name:"Fastest E-commerce App",
        type:'Frontend E-commerce UI',
        techstack:'React/ReactRedux , TailwindCss  ',  
        link:'https://sample-ecoms.netlify.app/',
        online:true,
        img:ecom,
    },
    {
        name:"Investment Calculator",
        type:'Frontend Calculator App',
        techstack:'Reactjs ', 
        link:'https://github.com/Litezy/Investment-Calculator',
        img:investcalc,
    },
    {
        name:"Landik Landing Page",
        type:'Frontend UI',
        techstack:'Html, Css , Javascript ', 
        link:'https://github.com/Litezy/landik',
        img:landik,
    },
    {
        name:"Litezy Mall",
        type:'Frontend E-commerce Web App',
        techstack:'React, TailwindCss ', 
        link:'https://github.com/Litezy/litezy-mall',
        img:mall,
    },
    {
        name:"MamiWota NFT Collections",
        type:'Frontend NFT UI',
        techstack:'Html, Css , Javascript ',  
        link:'https://github.com/Litezy/mamiWOTA',
        img:mamiwota,
    },
    {
        name:"Netflix Landing Page",
        type:'Frontend UI',
        techstack:'Html, Css , Javascript ',  
        link:'https://jovial-narwhal-999893.netlify.app/',
        img:netflix,
        online:true
    },
    {
        name:"TicTac Toe Game",
        type:'Frontend Game',
        techstack:'Html, Css , Javascript ',  
        link:'https://github.com/Litezy/Tick-Tac',
        img:tictac,
    },
    {
        name:"Tango Cars",
        type:'Frontend Car Rentals UI',
        techstack:'Html, Css , Javascript , Bootstrap',  
        link:'https://github.com/Litezy/tangoCars',
        img:tango,
    },
    {
        name:"Task Tracker",
        type:'Frontend UI',
        techstack:'Reactjs',  
        link:'https://github.com/Litezy/task-tracker-UI',
        img:tasktracker,
    },
    {
        name:"A Simple To-Do List App",
        type:'Frontend App',
        techstack:'Reactjs, Css',  
        link:'https://github.com/Litezy/To-Do-list_App',
        img:todo,
    },
]


