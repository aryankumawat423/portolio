import React from "react";

export default function Skills() {
    const data = {
        skills: ['C', 'C++', 'Java', 'Full Stack Web Development', 'Functional Testing']
    };

    return (
        <div className="p-6 flex justify-center min-h-screen">
            <div className="text-center">
                <h3 className="text-white text-3xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                    {data.skills.map((skill, index) => (
                        <p
                        key={index}
                        className="text-lg mb-2 w-1/5 bg-gradient-to-r from-[#FFE597] to-[#AAFF82] text-transparent bg-clip-text border-2 rounded-lg border-transparent border-gradient-to-r from-[#DBA6F4] to-[#A981FE]"
                        >
                        {skill}
                        </p>
                    ))}
                    </div>

            </div>
        </div>  
    );
}
