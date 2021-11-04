import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { ToastContainer } from "react-toastify";

export default function Layout({children}) {
    return (
        <>
        <ToastContainer />
        <div>
            <Navbar/>
            <div>
                {/* content */}
                {children}
            </div>
        </div>
        <div>
            <Footer /> 
        </div>
        </>
    )
}
