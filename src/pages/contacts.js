import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/Form/ContactForm'
import InterestForm from '../components/Form/InterestForm'
import './contacts.css'
import Fade from 'react-reveal/Fade';

export default function contacts() {

    const REACT_APP_BASE_URL= "https://dodeel.douglasokolaa.codes"
    return (
        <Layout>
            <Fade>
            <div className="max-w-6xl container mx-auto px-4">
                <div className='sm:py-10 sm:pb-64 pb-32'>
                    <div className='flex flex-col sm:flex-row mt-10'>
                        <div className='sm:w-1/3'>
                            <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-0 font-semibold text-center'>Contact Us</h1>
                            <p className='mt-5 hidden sm:flex sm:ml-5'>If you have any questions or queries, we will always be happy to help.  
                                Send us an email and we will be sure to get back to you as soon as possible.</p>
                        </div>
                        <div className='w-full'>
                            <ContactForm api={REACT_APP_BASE_URL} />
                        </div>
                    </div>
                    <div className="mt-32 sm:mt-36 sm:mb-36">
                        <InterestForm api={REACT_APP_BASE_URL} />
                    </div>
                </div>
            </div>
            </Fade>     
    </Layout>
    )
}
