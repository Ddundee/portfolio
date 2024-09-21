import React from 'react'

export default function Page() {
    return (
        <div className="h-full px-16 py-16 bg-gray-100 border rounded-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">Work</h2>
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Experience</h3>
                <ul className="pl-8 list-disc list-inside text-gray-600">
                    <li className="mb-4">
                        <span className="font-bold text-gray-800">Full Stack Developer (Contractor)</span>
                        <span className="text-gray-500"> | July 2024 - Present</span>
                        <br />
                        <span className="text-gray-600">Hydroclean Car Wash</span>
                        <span className="text-gray-400"> - Carrollton, TX</span>
                    </li>
                </ul>
            </div>

            <hr className="my-8 border-gray-300" />

            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Activities</h3>
                <ul className="pl-8 list-disc list-inside text-gray-600">
                    <li className="mb-4">
                        <span className="font-bold text-gray-800">VTHacks</span>
                        <span className="text-gray-500"> | Next.js & MongoDB</span>
                        <span className="text-gray-400"> | September 2024</span>
                        <br />
                        <span className="text-gray-600">VTHacks</span>
                        <span className="text-gray-400"> - Blacksburg, VA</span>
                    </li>
                    <li className="mb-4">
                        <span className="font-bold text-gray-800">HackTheChains</span>
                        <span className="text-gray-500"> | Next.js & Solidity</span>
                        <span className="text-gray-400"> | March 2024</span>
                        <br />
                        <span className="text-gray-600">SMU Blockchain Club</span>
                        <span className="text-gray-400"> - Dallas, TX</span>
                    </li>
                    <li className="mb-4">
                        <span className="font-bold text-gray-800">AIFAHacks - AI Hackathon for Social Good</span>
                        <span className="text-gray-500"> | Next.js & Python</span>
                        <span className="text-gray-400"> | September 2023</span>
                        <br />
                        <span className="text-gray-600">AI For All</span>
                        <span className="text-gray-400"> - Richardson, TX</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
