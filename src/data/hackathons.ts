export type Hackathon = {
    name: string
    project: string
    description: string
    date: string
    award?: string
    link?: string
}

const HACKATHONS: Hackathon[] = [
    {
        name: "hackthechains",
        project: "bounty block",
        description: "freelance platform that connects global talent with companies",
        date: "mar 2024",
        award: "1st in arbitrum track",
        link: "https://devpost.com/software/bountyblock",
    },
    {
        name: "aifa hacks",
        project: "carbon track",
        description: "a web application that helps users calculate their personal carbon footprint",
        date: "sep 2023",
        award: "division winners",
        link: "https://devpost.com/software/carbon-track-atu169",
    },
]

export default HACKATHONS
