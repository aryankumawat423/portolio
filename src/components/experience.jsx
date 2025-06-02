import React from "react";

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "Tech Solutions",
        period: "Jan 2023 - Jun 2023",
        description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with backend team to integrate REST APIs."
    },
    {
        role: "QA Automation Intern",
        company: "QualitySoft",
        period: "Jul 2022 - Dec 2022",
        description: "Created automated test scripts for web applications using Selenium and Jest. Improved test coverage and reduced manual testing time."
    },
    {
        role: "Open Source Contributor",
        company: "GitHub",
        period: "2021 - Present",
        description: "Contributed to several open source projects, focusing on bug fixes, documentation, and feature enhancements."
    }
];

export default function Experience() {
    return (
        <div className="py-16 px-4 bg-black min-h-screen flex flex-col items-center">
            <h3 className="text-5xl font-bold text-white mb-12 tracking-tight">Experience</h3>
            <div className="relative w-full max-w-3xl">
                <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#A981FE] to-[#DBA6F4] transform -translate-x-1/2 rounded"></div>
                <div className="flex flex-col gap-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className={`relative flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} items-center w-full`}>
                            <div className={`w-[48%] bg-gradient-to-r from-[#A981FE] to-[#DBA6F4] rounded-xl shadow-lg p-6 text-left text-white ${idx % 2 === 0 ? "ml-0" : "mr-0"}`}>
                                <h4 className="text-2xl font-semibold mb-1">{exp.role}</h4>
                                <div className="text-lg font-medium mb-1">{exp.company}</div>
                                <div className="text-sm mb-2 opacity-80">{exp.period}</div>
                                <div className="text-base">{exp.description}</div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#A981FE] border-4 border-white rounded-full z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
            <img src="/Group 313.svg" className="h-auto mx-auto mt-8" alt="Group 313" />
        </div>
    );
}
