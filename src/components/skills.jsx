import React from "react";

export default function Skills() {
    const data = {
        skills: [
            'C', 'C++', 'Java', 'Next.js', 'Typescript', 'Javascript', 'Tailwind CSS', 'DSA',
            '.NET Framework', 'Testing Automation'
        ]
    };

    const socialLinks = [
        { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "/linkedin.svg" },
        { name: "GitHub", url: "https://github.com/yourprofile", icon: "/github.svg" },
        { name: "Twitter", url: "https://twitter.com/yourprofile", icon: "/twitter.svg" }
        // Add more social links as needed
    ];

    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen">
            <div className="text-center mb-10">
                <h3 className="text-white text-5xl font-bold mb-10">Skills</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {data.skills.map((skill, index) => (
                        <div 
                            key={index}
                            className="inline-block text-xl px-6 py-3 bg-gradient-to-r from-[#FFE597] to-[#AAFF82] text-transparent bg-clip-text border border-white rounded-lg text-center whitespace-nowrap"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
           
            
            <img src="/Group 313.svg" className="h-auto mx-auto mt-8" alt="Group 313" />
        </div>
    );
}
