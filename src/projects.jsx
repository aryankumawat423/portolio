import React from "react";
export default function Projects(){
    const projects = [
        {
            name: "Portfolio Website",
            desc: "A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
            link: "https://yourportfolio.com"
        },
        {
            name: "E-commerce App",
            desc: "A full-stack e-commerce application with product listings, cart, and checkout features.",
            link: "https://ecommerce.com"
        },
        {
            name: "Blog Platform",
            desc: "A blogging platform with markdown support and user authentication.",
            link: "https://blogplatform.com"
        },
        {
            name: "Task Manager",
            desc: "A productivity app to manage daily tasks and track progress.",
            link: "https://taskmanager.com"
        },
        {
            name: "Weather Dashboard",
            desc: "A dashboard to display weather information using external APIs.",
            link: "https://weatherdashboard.com"
        },
        {
            name: "Chat Application",
            desc: "A real-time chat application using websockets.",
            link: "https://chatapp.com"
        }
    ];
    // Card min height for consistency
    const cardMinHeight = "min-h-[260px]"; // adjust as needed for your content

    return(
        <div>
            <div className="flex justify-center align-center ">
                <h3 className="text-white text-5xl font-bold mb-6 relative">Projects</h3>
                <img src="/Frame 819.svg" alt="eiufiea" className="absolute right-64 top-0"/>                
            </div>
            {/* Project Cards: 2 rows, 3 cards each, all same size */}
            <div className="flex flex-row justify-center items-stretch gap-8 mt-8 mb-8">
                <div className={`w-80 p-6 bg-gradient-to-r from-[#FFB6B9] to-[#6A82FB] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[0].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[0].desc}</p>
                    <a
                        href={projects[0].link}
                        target="_blank"
                        rel="noopener noreferrer"   
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
                <div className={`w-80 p-6 bg-gradient-to-r from-[#FDCB82] to-[#A1C4FD] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[1].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[1].desc}</p>
                    <a
                        href={projects[1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
                <div className={`w-80 p-6 bg-gradient-to-r from-[#B6FFB6] to-[#82CFFD] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[2].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[2].desc}</p>
                    <a
                        href={projects[2].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
            </div>
            <div className="flex flex-row justify-center items-stretch gap-8 mb-8">
                <div className={`w-80 p-6 bg-gradient-to-r from-[#FFD6E0] to-[#A1FFCE] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[3].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[3].desc}</p>
                    <a
                        href={projects[3].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
                <div className={`w-80 p-6 bg-gradient-to-r from-[#FDCBFF] to-[#A1C4FD] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[4].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[4].desc}</p>
                    <a
                        href={projects[4].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
                <div className={`w-80 p-6 bg-gradient-to-r from-[#B6E0FF] to-[#FFB6B9] border border-white rounded-xl shadow-lg text-left flex flex-col h-full ${cardMinHeight}`}>
                    <h4 className="text-2xl font-semibold text-white mb-2">{projects[5].name}</h4>
                    <p className="text-white mb-4 flex-1">{projects[5].desc}</p>
                    <a
                        href={projects[5].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline mt-auto"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    )
}