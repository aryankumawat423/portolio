import React from "react";

export default function Skills() {
    const data = {
        skills: ['C', 'C++', 'Java', 'Next.js', 'Typescript', 'Javascript', 'Tailwind CSS', 'DSA', 'Functional Testing']
    };

    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen">
            <div className="text-center mb-6">
                <h3 className="text-white text-5xl font-bold mb-6">Skills</h3>
                <div className="flex flex-wrap gap-7">
                    {data.skills.map((skill, index) => (
                        <div 
                            key={index}
                            className="inline-block text-xl px-4 py-2 bg-gradient-to-r from-[#FFE597] to-[#AAFF82] text-transparent bg-clip-text border border-white rounded-lg text-center whitespace-nowrap"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <img src="/Group 313.svg" className="h-auto justify-center items-center" alt="Group 313" />
        </div>
    );
}
