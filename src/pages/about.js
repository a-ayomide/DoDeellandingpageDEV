import React from 'react'
import Layout from '../components/Layout/Layout'
import InterestForm from "../components/Form/InterestForm"
import sig1 from "../assets/sig1.svg"
import sig2 from "../assets/sig2.svg"
import sig3 from "../assets/sig3.svg"
import squid from "../assets/squid.svg"
import './about.css'
import Fade from 'react-reveal/Fade';

export default function about() {
    const REACT_APP_BASE_URL = "https://dodeel.douglasokolaa.codes"
    return (
        <Layout>
            <div className="max-w-6xl container mx-auto px-4">
                <div className='pt-10'>
                    <div>
                        <Fade bottom>
                            <div className='text-justify'>
                                <img src={sig1} alt="" />
                                <div className='flex justify-between'>
                                    <h1 className='mt-5 about-header-1 text-3xl font-Gilroy font-semibold'>Do-DEEL CDS</h1>
                                    <img src={squid} alt="" />
                                </div>
                                <p className='mt-8 text-gray-600 max-w-4xl leading-7'>DEEL stands for Digital Literacy, Employment, Entrepreneurship, and Leadership Mentoring.
                                    It’s a CDS group designed to mentor and support members to identify and build a Digital career,
                                    while enabling other youths, businesses, and their host communities to connect with the Digital Economy by:
                                </p>
                                <div className='text-gray-600'>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3 leading-7'>Assisting 100 youths in their communities to “make the most of the web” and
                                        protect themselves online - <span className='text-green-500 font-semibold'>Digital Citizen.</span></p>
                                    </span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3 leading-7'>Assisting 10 small and growing businesses to understand and gradually adopt
                                        the use of digital technology to grow their businesses - <span className='text-green-500 font-semibold'>Digital Enterprises.</span></p>
                                    </span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3 leading-7'>Assisting their host community to gradually adopt the use of digital
                                        technology to mobilize, organize, and promote the development of the community - <span className='text-green-500 font-semibold'>Digital Communities.</span></p>
                                    </span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3 leading-7'>Amplify and heighten attention on youth issues in their host communities as
                                        <span className='text-green-500 font-semibold'> Digital Youths.</span>#TakeTheDeal</p>
                                    </span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3 leading-7'>Participate in the annual “Digitize My Community Project/Hackathon” inter-state competition.</p>
                                    </span>
                                </div>
                            </div>

                        </Fade>
                        <Fade bottom>
                            <div className='max-w-4xl text-justify mt-10 sm:mt-20'>
                                <img src={sig2} alt="" />
                                <h1 className='about-header-1 text-3xl font-semibold'>Why?</h1>
                                <p className='mt-8 text-gray-600 leading-7'>It is estimated that Nigeria will need over 10 million digital jobs by 2030 to drive the achievement of the Digital Economy Masterplan.
                                    However, with the increasing gap between the educational system and the talents businesses need,
                                    NYSC remains the most strategic platform to leapfrog Nigeria’s youths through project-based strategic skills development methodology.
                                </p>
                            </div>
                            <div className='max-w-4xl text-justify mt-20 sm:mt-36'>
                                <h1 className='text-3xl about-header-1 font-semibold'>Our Evaluation</h1>
                                <p className='mt-8 text-gray-600 leading-7'>10,000 Digital Youths Task Force who have identified and are pursuing
                                    a digital career and have become a force for good in their host and digital communities.
                                </p>
                            </div>
                            <div className='mt-10 sm:mt-36'>
                                <div className='flex justify-between'>
                                    <h1 className='mt-5 text-3xl about-header-1 font-semibold'>Additional support</h1>
                                    <img className='mr-32' src={sig3} alt="" />
                                </div>

                                <div className='text-gray-600 mt-8 leading-7'>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>NYSC & Partners branded T-shirts for CDS members.</p></span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>Monthly training and Digital career certification/mentoring with internet data support.</p></span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>MySDG corporate and crowd funding for personal and group CDS projects.</p></span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>Mobilization and recruitment of new members during orientation camp.</p></span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>Post-NYSC job placement and business support for commercial members.</p></span>
                                    <span className='flex max-w-3xl mt-4'>•<p className='px-3'>Schedule officers training & monitoring support.</p></span>
                                </div>
                            </div>
                        </Fade>
                        
                    </div>
                    <InterestForm api={REACT_APP_BASE_URL} />
                </div>

            </div>

        </Layout>
    )
}
