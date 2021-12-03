import React from 'react'
import Layout from '../components/Layout/Layout'
import squid from '../assets/squid.svg'
import './faq.css'
import GeneralAccordion from '../components/Faqs/GeneralAccordion'
import MembershipAccordion from '../components/Faqs/MembershipAccordion'
import ProjectsAccordion from '../components/Faqs/ProjectsAccordion'
import InterestForm from '../components/Form/InterestForm'
import Fade from 'react-reveal/Fade';


export default function faq() {
    const REACT_APP_BASE_URL= "https://api.dodeelcds.com.ng"
    return (
        <Layout>
            <div>
                <div className="faq-bg py-10 sm:py-20">
                    <div className="max-w-6xl container mx-auto px-5 mb-20">
                        <div className='flex justify-end'>
                            <img src={squid} alt="" />
                        </div>
                        <div className="items-center mt-5">
                            <h1 className="text-2xl faq-header-1 sm:text-5xl font-semibold text-center">Frequently asked questions</h1>
                            <div className="mx-auto mt-7 sm:w-3/4">
                                <input placeholder="Search for a question..." className="rounded appearance-none py-3 px-5 outline-none"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <Fade>
                    <div className='max-w-6xl container mx-auto px-5 py-10'>
                        <div className='flex flex-col sm:flex-row sm:mr-20 sm:ml-20'>
                            <h1 className='text-2xl sm:text-3xl font-semibold sm:mr-20'>General</h1>
                            <div className='mt-3 sm:-mt-1'>
                            <GeneralAccordion />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:mr-20 sm:mt-20 sm:ml-20'>
                        <h1 className='text-2xl mt-10 sm:-mt-0 sm:text-3xl font-semibold sm:mr-20'>Projects</h1>
                        <div className='mt-3 sm:-mt-1'>
                            <ProjectsAccordion />
                        </div>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:mr-20 sm:mt-20 sm:ml-20'>
                        <h1 className='text-2xl mt-10 sm:-mt-0 sm:text-3xl font-semibold sm:mr-3'>Membership</h1>
                        <div className='sm:ml-2.5 mt-3 sm:-mt-1'>
                            <MembershipAccordion />
                        </div>
                        </div>
                        <InterestForm api={REACT_APP_BASE_URL}/>
                    </div>
                </Fade>
                
            </div>
        </Layout>
    )
}
