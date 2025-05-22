import React from 'react'

const Techs = () => {
    const techs = [
        {
            name: 'Frontend',
            others: ['ReactJs',  'TailwindCSS', 'AOS', 'Framer Motion']
        },
        {
            name: 'Blockchain',
            others: ['Solidity', 'Foundry', "Web3.js,"]
        },
        {
            name: 'Git',
            others: ['GitHub', 'Version Control', 'Pull Requests']
        },
     
        {
            name: 'DevOps & Deployment',
            others: [ 'Netlify', 'Vercel', 'GitHub Actions']
        },
        {
            name: 'Other Tools',
            others: ['Visual Studio Code', 'Remix', 'Figma']
        },
        {
            name: 'Languages',
            others: ['JavaScript', 'HTML5', 'CSS3', 'Solidity']
        }
    ];

    return (
        <div className='py-10 0 w-full bg-sec mt-5'>
            <div className="w-full text-center text-primary font-bold text-xl"> Technologies I Use</div>
            <div className="mt-5 w-10/12 mx-auto flex h-fit  rounded-md  p-2 flex-col items-start justify-start   gap-4">
                {techs.map((tech, i) => {
                    const isEven = i % 2 === 0
                    return (
                        <>
                            <div key={i}  className="flex flex-col items-center gap-2 mb-3 bg-alt w-full p-2 rounded-md">
                                <div className="font-bold text-xl text-primary">{tech.name}</div>
                                <div className=" flex items-center flex-col lg:flex-row gap-2">
                                    {tech.others.map((item, index) => {
                                        const isEven = index % 2 === 0
                                        const lastnum = index === tech.others.length - 1
                                        return (
                                            <div data-aos={`${isEven ? 'zoom-in-up':'zoom-in-down'}`}
                                            data-aos-duration="2000"
                                            key={index} className="">{item} {lastnum ? '' : ','}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Techs