import React from "react";

export default function Skills() {
    const data = {
        skills: ['C', 'C++', 'Java', 'Web Dev', 'Functional Testing']
    };

    return (
        <div className="p-6 flex justify-center min-h-screen">
            <div className="text-center">
                <h3 className="text-white text-3xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-4 justify-center" >
                    {data.skills.map((skill, index) => (
                        <p key={index} className="text-white text-lg mb-2 w-1/5">
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>  
    );
}
