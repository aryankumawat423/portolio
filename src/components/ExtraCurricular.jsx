import React from "react";

export default function ExtraCurricular() {
    return (
        <div className="mt-16 flex flex-col items-center">
            <div className="flex justify-center items-center relative">
                <h3 className="bg-gradient-to-r from-[#A981FE] to-[#DBA6F4] text-transparent bg-clip-text text-5xl font-bold mb-6">
                    Extra Curricular
                </h3>
                <img src="/Base.svg" alt="Decorative Base" className="ml-2 w-12 h-12" />

            </div>
            <div className="max-w-3xl text-center mt-8">
                <ul className="list-none space-y-4 text-lg">
                    <li className="text-white">
                        Played at the national level in table tennis and American football, showcasing dedication and teamwork.
                    </li>
                    <li className="text-white">
                        Won multiple inter-college badminton tournaments, demonstrating competitive spirit across different sports.
                    </li>
                </ul>
            </div>
            <img src="/Frame 825.svg" alt="Decorative Vector" />
        </div>
    );
}
