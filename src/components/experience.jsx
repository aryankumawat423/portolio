import React from "react";
const experiences = [
  {
    role: "Trainee",
    company: "Pwc India",
    period: "Feb 2025 - Present",
    description: [
      "Learned core concepts of cybersecurity, including threats, cryptography, and secure network practices.",
      "Gained hands-on experience with PowerShell, Python, Java (OOP), RDBMS, and DevOps basics."
    ]
  },
  {
    role: "Team Head",
    company: "Team Envision Aaruush",
    period: "September 2023 - Present",
    description: [
      "Full Stack Web Developer at Team Envision, leading the team, managing projects, assigning tasks, and building both frontend and backend.",
      "Managed juniors, guided them in development tasks, and ensured project completion efficiently."
    ]
},
  {
    role: "Summer Intern",
    company: "Adani Group",
    period: "May 2024 - June 2024",
    description: [
      "Gained hands on experience in setting up networks, managing IT infrastructure, and ensuring data security.",
      "Worked on handling employee management systems in large organizations."
      
    ]
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
                                <ul className="pl-2 text-base space-y-1">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mt-1 mr-2 w-2 h-2 bg-white rounded-full inline-block flex-shrink-0"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
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
