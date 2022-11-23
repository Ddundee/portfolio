import data from "."

export default async function handler(req, res) {
    try {
        // @ts-nocheck
        res.status(200).send({
            name: ["Dhanush", "Reddy", "Chilakala"],
            description: "A half-assed 16 year-old UI/UX Designer, Fullstack Developer, and Certified Video Designer based near Dallas, Texas.",
            skillset: {
                applications: ["Adobe Photoshop", "Adobe Premier Pro", "Adobe XD"],
                languages: ["HTML5", "CSS3", "Java", "Javascript", "Python"],
                others: ["NodeJS", "NextJS", "ReactJS", "Electron", "TailwindCSS", "Bootstrap"]
            },
            socials: {
                github: "https://www.github.com/Ddundee",
                linkedin: "https://www.linkedin.com/in/dhanush-reddy-chilakala-5a165b227",
                email: "dhanush.actual1@gmail.com"
            }
        })
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}