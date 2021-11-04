import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from "gatsby"
import { useState } from "react"
import Logo from '../../assets/Logo.png'
import LogoText from '../../assets/logo-text.svg'

export default function Navbar() {

        const [open, setOpen] = useState(false);

    return (
        <>
          <div className="relative bg-white max-w-6xl container mx-auto px-4">
            <div className="container bg-white mx-auto">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 ">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link className='flex' to="/">
                    <span className="sr-only">Logo</span>
                    <img src={Logo} className='mr-1' alt="DoDeel Logo"/>
                    <img src={LogoText} alt="DoDeel Logo"/>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open menu</span>
                    {/* Heroicon name: outline/menu */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      /> 
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-18">
                <span className="sr-only">Navigation Links</span>
                  <div id='nav-text'>
                    <Link className='mx-5 border-transparent border-b-2 hover:border-green-600 hover:text-green-600 font-Gilroy font-normal' to="/about">About</Link>
                    <Link className='mx-5 border-transparent border-b-2 hover:border-green-600 hover:text-green-600 font-Gilroy font-normal' to="/faq">FAQ</Link>
                    <Link className='mx-5 border-transparent border-b-2 hover:border-green-600 hover:text-green-600 font-Gilroy font-normal' to="/contacts">Contacts</Link>
                    <a className='mx-5 border-transparent border-b-2 hover:border-green-600 hover:text-green-600 font-Gilroy font-normal' href="https://www.youthnomics.com" target="__blank">Blog</a>
                    <Link className='mx-5 border-transparent border-b-2 hover:border-green-600 hover:text-green-600 font-Gilroy font-normal' to="/partners">Partners</Link>
                  </div>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <button id='button-outline' className='rounded-md py-2 px-4'>
                    <p className='button-text font-Gilroy font-semibold md:text-lg'>I'm interested!</p>
                  </button>
                </div>
              </div>
            </div>
            {/*
          Mobile menu, show/hide based on mobile menu state.

          Entering: "duration-200 ease-out"
            From: ""
            To: ""
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        */}

            <div
              className={
                open
                  ? "opacity-100 z-30 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
                  : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
              }
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className='ml-2'>
                      <Link className='flex text-lg' to="/" onClick={() => setOpen(!open)}>
                        <img src={Logo} className='mr-1' alt="DoDeel Logo"/>
                        <img src={LogoText} alt="DoDeel Logo"/>
                      </Link>
                    </div>
                    <div className="mx-0">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="sr-only">Close menu</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        to="/about"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        onClick={() => setOpen(!open)}
                      >
                          <span className="ml-2 text-base font-Gilroy font-normal text-gray-600">
                            About
                          </span>
                      </Link>
                      <Link
                        to="/faq"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="ml-2 text-base font-Gilroy font-normal text-gray-600">
                            FAQ
                          </span>
                      </Link>
                      <Link
                        to="/contacts"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="ml-2 text-base font-Gilroy font-normal text-gray-600">
                            Contacts
                          </span>
                      </Link>
                      <a
                        href="https://www.youthnomics.com"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        onClick={() => setOpen(!open)}
                        target="__blank"
                      >
                        <span className="ml-2 text-base font-Gilroy font-normal text-gray-600">
                            Blog
                        </span>
                      </a>
                      <Link
                        to="/partners"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="ml-2 text-base font-Gilroy font-normal text-gray-600">
                            Partners
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
