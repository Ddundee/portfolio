import Image from 'next/image';

export default function Home() {
     return (
          <>
               <nav>
                    <ul>
                         <li>home</li>
                         <li>resume &rarr;</li>
                    </ul>
               </nav>
               <main className='h-auto'>
                    <h1>Hi, I am Dhanush C.</h1>
                    <p>
                         I’m a freshmen @ VT studying Computer Science, with a
                         have a strong passion in programming.
                    </p>
                    <div>
                         <p>
                              I have experience with hackathons & competitive
                              robotics:{' '}
                         </p>
                         <ul>
                              <li>
                                   I have competed in 2 hackathons, where I won
                                   both.{' '}
                                   <span className='text-[#7B8189]'>
                                        I won 1st place overall at AIFAHacks,
                                        and 1st place in the Arbitrum Track at
                                        HackTheChains hosted at SMU’s Blockchain
                                        Club.
                                   </span>{' '}
                                   Check out more at{' '}
                                   <a className='underline' href='/hackathons'>
                                        Hackathons &rarr;
                                   </a>
                              </li>
                              <li>
                                   I was part of FIRST robotics competitions for
                                   4+ years as a Lead Programmer. I was the Lead
                                   Programmer on{' '}
                                   <a href='/' className='underline'>
                                        FRC Team 4192
                                   </a>{' '}
                                   &{' '}
                                   <a href='/' className='underline'>
                                        FTC Team 21813
                                   </a>
                                   <span className='text-[#7B8189]'>
                                        , where I implemented a motion profiling
                                        software for holonomic robots, and used
                                        concepts such as PIDF Controllers and
                                        Kalman Filters to accurately calculate
                                        and control systems, wining multiple
                                        awards for robot control and design.
                                   </span>
                              </li>
                         </ul>
                    </div>
               </main>
               <hr className='bg-[#7B8189]' />
               <footer>
                    <ul className=''>
                         <li className='float-left'>
                              <a href='/'>LinkedIn</a>
                         </li>
                         <li className=''>
                              <a href='/'>GitHub</a>
                         </li>
                    </ul>
                    <p className='text-[#7B8189]'>
                         <a href='mailto:dhanushc@vt.edu' className='underline'>
                              dhanushc@vt.edu
                         </a>{' '}
                         ~ Dhanush R. Chilakala © 2024
                    </p>
               </footer>
          </>
     );
}
