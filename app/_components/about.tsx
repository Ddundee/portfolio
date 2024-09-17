import React from 'react'
import CheckableItem from './checkableItem'

export default function AboutMe() {
    const items: Item[] = [
        {
            text: 'Start making Brawl Bets',
            checked: false
        },
        {
            text: 'Finish making Brawl Bets',
            checked: false
        },
        {
            text: 'Get the AWS Cloud Practitioner Certification',
            checked: false
        },
        {
            text: 'Somehow get someone to pay for me to go to the Next.js Conf (plz sponsor me 🙏🏽)',
            checked: false
        },
        {
            text: 'Get an intership',
            checked: false
        },
        {
            text: 'Keep up with college hw 😭',
            checked: false
        }
    ]
    return (
        <div id='about' className='flex h-fu'>
            <div className='flex-1 w-full h-full flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>About Me</h2>
                <i>*Insert a subtitle here*</i>
            </div>
            <div className='flex gap-6 flex-col flex-1'>
                <p>
                    Hi, I{"'"}m Dhanush Chilakala, a freshman at Virginia Tech majoring in Computer Science. I specialize in frontend development, having worked with frameworks like Next.js. For the past couple years, I have also participated in Robotics.
                </p>
                <div>
                    <p>Current Goals:</p>
                    <div className=''>
                        {items.map((item, index) => <CheckableItem key={index} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface Item {
    text: string;
    checked: boolean;
}[]
