import React from "react";

// SocialLinks component inside the same file
function SocialLinks({ links }) {
    return (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center gap-6 z-10">
            {links.map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                        src={item.img}
                        alt={item.alt || "social"}
                        className="w-16 h-16 rounded-full object-contain"
                    />
                </a>
            ))}
        </div>
    );
}

export default function Intro() {
    const socialLinksData = [
        {
            img: "/mdi--github.svg",
            url: "https://github.com/aryankumawat423",
            alt: "GitHub"
        },
        {
            img: "/mdi--linkedin.svg",
            url: "https://www.linkedin.com/in/aryan-kumawat-351877270/",
            alt: "LinkedIn"
        },
        {
            img: "/mdi--instagram.svg",
            url: "https://www.instagram.com/aryandotkumawat/",
            alt: "Instagram"
        },
        {
            img: "/material-symbols--mail-outline.svg",
            url: "mailto:aryankumawat423@gmail.com",
            alt: "Gmail"
        }
    ];

    return (
        <div className="relative overflow-hidden items-center justify-center h-screen text-center">
            <img src="/Avatar.svg" alt="Avatar" className="mx-auto" />
            <SocialLinks links={socialLinksData} />
            <h1 
                className="text-5xl font-extrabold mt-4 bg-gradient-to-r from-[#A981FE] to-[#DBA6F4] text-transparent bg-clip-text"
            >
                Hi. I'm Aryan Kumawat. <br /> A Web Developer.
            </h1>
        
            <img src="/Frame 824.svg" alt="Frame" className="mx-auto mt-4" />
        </div>
    );
}
