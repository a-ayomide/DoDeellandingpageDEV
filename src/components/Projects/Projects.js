import React from 'react'
import '../Projects/Projects.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Projects() {
    return (
        <div className='flex flex-col sm:flex-row sm:space-x-20 mt-5 sm:mt-28 sm:my-10'>
            <div id='left-col' className=' mt-10'>
                <div>
                    <Fade up>
                    <h1 className='text-3xl sm:text-5xl font-Gilroy font-semibold'>Projects</h1>

                    </Fade>
                    <Fade up>
                    <p className='project-header-text mt-5 text-md'>Take a look at some of our featured projects done by the CDS.</p>
                    </Fade>
                    
                </div>
                
                <Zoom>
                    <div id='purple-card' className='mt-10 px-10 py-10'>
                        <h2 id='card-header' className='font-bold'>Google My Business</h2>
                        <p id='card-text' className='mt-3 leading-7'>Get training on how to onboard and verify businesses on Google my business 
                        and help 10 businesses in your community improve their visibility by onboarding them on GMB.</p>
                        {/* <a href="https://bit.ly/mtgng" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a> */}
                    </div>
                </Zoom>
                
                <Zoom>
                <div id='green-card' className='mt-10 px-10 py-10'>
                    <h2 id='card-header' className='font-bold'>Mentorship</h2>
                    <p id='card-text' className='mt-3 leading-7'>CDS members in all states adopt schools and mentor students on the importance of 
                    digital skills and how to stay safe online.
                    </p>
                    {/* <a href="https://genleaders.ng" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a> */}
                </div>
                </Zoom>
                
           

            </div>
            <div id='right-col'>
                <Zoom>
                    <div id='pink-card' className='mt-10 px-10 py-10'>
                            <h2 id='card-header' className='font-bold'>Hackathon</h2>
                            <p id='card-text' className='mt-3 leading-7'>CDS members from the different states create digital solutions for problems in their communities and enter this project 
                            in an hackathon competition with other states for a chance to win amazing prices.
                            </p>
                            {/* <a href="https://youthnomics.com" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a> */}
                    </div>
                </Zoom>
                
                <Zoom>
                    <div id='yellow-card' className='mt-10 px-10 py-10'>
                        <h2 id='card-header' className='font-bold'>Other projects include:</h2>
                        <p id='card-text' className='mt-3 leading-7'>1. Learn how to optimize businesses on google my business. <br></br>2. Undergo trainings on how to use various digital tools to improve productivity.
                        </p>
                    </div>
                </Zoom>
                </div>
            </div>
    )
}
