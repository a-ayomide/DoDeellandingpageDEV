import React from 'react'
import '../Projects/Projects.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Projects() {
    return (
        <div className='flex flex-col sm:flex-row sm:space-x-20 sm:my-10'>
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
                        <h2 id='card-header' className='font-bold'>Google Digital Skills Training And Mentoring For 400,000 Youth</h2>
                        <p id='card-text' className='mt-3 leading-7'>Google digital skills training offers  flexible and personalised training courses designed 
                        to build your confidence and help young people thrive. We facilitated 400,000 youth to participate in these trainings.
                        </p>
                        <a href="https://bit.ly/mtgng" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a>
                    </div>
                </Zoom>
                
                <Zoom>
                <div id='green-card' className='mt-10 px-10 py-10'>
                    <h2 id='card-header' className='font-bold'>Generation Leaders</h2>
                    <p id='card-text' className='mt-3 leading-7'>National Leadership Development Programme. 
                        We are commited to raising and mentoring the next crop of leaders who are disciplined and 
                        passionate about nation building.
                    </p>
                    <a href="https://genleaders.ng" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a>
                </div>
                </Zoom>
                
           

            </div>
            <div id='right-col'>
                <Zoom>
                    <div id='pink-card' className='mt-10 px-10 py-10'>
                            <h2 id='card-header' className='font-bold'>Youthnomics!</h2>
                            <p id='card-text' className='mt-3 leading-7'>Book and Advocacy to Leapfrog Nigerian Youth. At Youthnomics, we also provide articles 
                            about youths doing exploits and having huge impact on the society.
                            </p>
                            <a href="https://youthnomics.com" target="__blank"><div className='text-green-500 text-sm font-normal mt-5'>Take a look &gt;</div></a>
                    </div>
                </Zoom>
                
                <Zoom>
                    <div id='yellow-card' className='mt-10 px-10 py-10'>
                        <h2 id='card-header' className='font-bold'>Other projects include:</h2>
                        <p id='card-text' className='mt-3 leading-7'>1. Lead Partner on the Google Digital Skill Programme and trained over 1,500,000 youths 
                        Nationwide <br></br>2. Coordinated the Public Private Partnership SDGs/Digital Skills Advocacy across the 109 Senatorial District with the Office of the Senior Special 
                        Assistance to the President on Sustainable Development Goals.
                        </p>
                    </div>
                </Zoom>
                </div>
            </div>
    )
}
