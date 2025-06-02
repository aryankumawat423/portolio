import React from "react";

export default function Intro() {
    return (
        <div className="relative overflow-hidden items-center justify-center h-screen text-center">
            <img src="/Avatar.svg" alt="Avatar" className="mx-auto" />
            
            {/* Social Links: right side, vertically centered, equal size and spacing */}
            <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center gap-6 z-10">
                <a href="https://github.com/aryankumawat423" target="_blank" rel="noopener noreferrer">
                    <img src="/github-mark-white.png" alt="GitHub" className="w-16 h-16 rounded-full object-contain" />
                </a>
                <a href="https://www.linkedin.com/in/aryan-kumawat-351877270/" target="_blank" rel="noopener noreferrer">
                    <img src="/glyph-logo_May2016.png" alt="LinkedIn" className="w-16 h-16 rounded-full object-contain" />
                </a>
                <a href="https://www.instagram.com/aryandotkumawat/" target="_blank" rel="noopener noreferrer">
                    <img src="/vecteezy_instagram-logo-png-instagram-icon-transparent_18930692.png" alt="Instagram" className="w-16 h-16 rounded-full object-contain"/>
                </a>
                <a href="mailto:aryankumawat423@gmail.com">
                    <img 
                        src="/icons8-gmail-logo.svg" 
                        alt="Gmail" 
                        className="w-16 h-16 rounded-full object-contain" 
                    />
                </a>
            </div>
            
            <h1 
                className="text-5xl font-extrabold mt-4 bg-gradient-to-r from-[#A981FE] to-[#DBA6F4] text-transparent bg-clip-text"
            >
                Hi. I'm Aryan Kumawat. <br /> A Web Developer.
            </h1>
            
            <img src="/Frame 824.svg" alt="Frame" className="mx-auto mt-4" />
        </div>
    );
}
