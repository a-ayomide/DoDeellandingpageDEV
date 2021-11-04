import { Link } from 'gatsby'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import './footer.css'

export default function Footer() {
    return (
        <footer className='mt-1 footer pt-1 sm:pt-10'>
            <div className='container mx-auto px-6 text-center pb-10 sm:max-w-4xl'>

                <div className='flex desktop-social mt-10 space-x-10 text-2xl justify-center'>
                    <BsFacebook className='text-white' />
                    <BsLinkedin className='text-white' />
                    <BsInstagram className='text-white' />
                </div>
                
                <div className='mt-10 grid grid-rows-5 sm:grid-cols-5 gap-y-5 sm:gap-y-0 text-white'>
                    <span className='grid grid-rows-1 sm:grid-cols-1 '><Link to="/about">About</Link></span>
                    <span className='grid grid-rows-1 sm:grid-cols-1  '><Link to="/faq">FAQ</Link></span>
                    <span className='grid grid-rows-1 sm:grid-cols-1 '><Link to="/contacts">Contact</Link></span>
                    <span className='grid grid-rows-1 sm:grid-cols-1 '><Link to="/partners">Partners</Link></span>
                    <span className='grid grid-rows-1 sm:grid-cols-1 '><Link to="/privacy-policy">Privacy</Link></span>
                </div>

                <div className='flex mobile-social mt-10 space-x-10 text-2xl sm:hidden justify-center'>
                    <BsFacebook className='text-white' />
                    <BsLinkedin className='text-white' />
                    <BsInstagram className='text-white' />
                </div>

               

                <div className='sm:-mt-10 mt-10'>
                    <p className='text-gray-800'> This website and the DO DEEL CDS app were designed and developed by 2021  
                    DODEEL CDS members across different states in Nigeria.</p>
                </div>

            </div>
        </footer>
    )
}
