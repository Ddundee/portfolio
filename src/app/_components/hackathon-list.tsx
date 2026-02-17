import React from "react"
import HACKATHONS from "../../data/hackathons"

export default function HackathonList() {
    return (
        <div className="space-y-4">
            {HACKATHONS.map((hackathon) => (
                <div key={hackathon.name} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-2 min-w-0">
                            {hackathon.link ? (
                                <a
                                    href={hackathon.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-lg font-medium text-neutral-200/70 hover:text-orange-600 duration-200 truncate"
                                >
                                    {hackathon.name}
                                </a>
                            ) : (
                                <p className="text-lg font-medium text-neutral-200/70 truncate">
                                    {hackathon.name}
                                </p>
                            )}
                            {hackathon.award && (
                                <span className="text-sm text-orange-600/80 whitespace-nowrap">
                                    {hackathon.award}
                                </span>
                            )}
                        </div>
                        <span className="text-md text-neutral-600 whitespace-nowrap">
                            {hackathon.date}
                        </span>
                    </div>
                    <p className="text-neutral-500 text-sm">
                        {hackathon.project} — {hackathon.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
