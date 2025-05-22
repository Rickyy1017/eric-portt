import investcalc from '../assets/projects/investcalc.png'
import landik from '../assets/projects/landik.png'
import mall from '../assets/projects/mall.png'
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
        name:'Contact',
        id:3,
        url:'/contact'
    },
]

export const webprojects = [
   
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
        link:'https://github.com/Rickyy1017/Investment-Calculator',
        img:investcalc,
    },
    {
        name:"Landik Landing Page",
        type:'Frontend UI',
        techstack:'Html, Css , Javascript ', 
        link:'https://github.com/Rickyy1017/landik',
        img:landik,
    },
    {
        name:"E- Mall",
        type:'Frontend E-commerce Web App',
        techstack:'React, TailwindCss ', 
        link:'https://github.com/Rickyy1017/litezy-mall',
        img:mall,
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
        link:'https://tic-tacapp.netlify.app/',
        img:tictac,
    },
    {
        name:"Tango Cars",
        type:'Frontend Car Rentals UI',
        techstack:'Html, Css , Javascript , Bootstrap',  
        link:'https://github.com/Ricky1017/tangoCars',
        img:tango,
    },
    {
        name:"Task Tracker",
        type:'Frontend UI',
        techstack:'Reactjs',  
        link:'https://github.com/Rickyy1017/task-tracker-UI',
        img:tasktracker,
    },
    {
        name:"A Simple To-Do List App",
        type:'Frontend App',
        techstack:'Reactjs, Css',  
        link:'https://github.com/Rickyy1017/To-Do-list_App',
        img:todo,
    },
]


