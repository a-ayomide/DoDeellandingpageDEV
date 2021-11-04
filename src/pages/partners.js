import React from 'react'
import Layout from '../components/Layout/Layout'
import sig1 from '../assets/sig1.svg'
import sig3 from '../assets/sig3.svg'
import './partners.css'
import mindthegaplogo from '../assets/mindthegaplogo.png'
import Fade from 'react-reveal/Fade';


export default function partners() {
    return (
        <Layout>
            <div className="max-w-6xl container mx-auto">
                <div className='px-5 pt-5 sm:pb-32 pb-16'>
                    <img className='mt-5' src={sig1} alt="" />
                    <div className='mt-10'>
                        <Fade up>
                        <h1 className='text-3xl partners-header font-semibold'>PARTNERS</h1>
                        <h2 className='partners-subheader font-normal font-Gilroy text-green-600 mt-5 sm:mt-10'>The work we do requires team effort</h2>
                        </Fade>
                        <Fade up>
                        <div>
                            <p className='partners-text leading-7 text-justify mt-8 sm:mt-24'>We are fortunate to work with partners – foundations, institutions, and brands –
                                who share our passion and vision.
                                Together we work to create a crop of youth who are disciplined, driven and
                                committed to impacting the world positively.
                            </p>
                            <div className='partners-link text-md font-normal sm:mt-10 mt-5'><button>Contact us to discuss a partnership &gt;</button></div>
                        </div>

                        </Fade>
                        <Fade up>
                        <div className='mt-10 sm:mt-14'>
                            <h1 className='text-3xl partners-header-2 sm:text-5xl font-semibold mt-16 :mt-52'>OUR SPONSORS</h1>
                            <div className='flex justify-center'><img src={mindthegaplogo} alt="" /></div>
                            <p className='sponsors-text leading-7 text-justify'>Mindthegap aims to help  Nigerian youths  leverage technological innovation in order to exit unemployment in the populace.
                                They provide technical and professional support for the cds.</p>
                        </div>
                        </Fade>

                        
                        <div className='flex justify-end mt-2 sm:mt-64'><img src={sig3} alt="" /></div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
