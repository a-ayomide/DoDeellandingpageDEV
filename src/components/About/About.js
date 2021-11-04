import React from 'react'
// import stateImg from '../../assets/stateimg.png'
import '../About/About.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CarouselComponent from '../Carousel/Carousel';

export default function About() {
    return (
      <>
        <div className='flex -mt-5 flex-col max-w-screen-2xl md:flex-row'>
          <div id='AboutText' className='mr-5 sm:w-1/2'>
            <Fade>
              <h1 className='font-Gilroy text-3xl font-semibold'>The CDS</h1>
            </Fade>
            <Fade>
              <p className='text-md text-gray-600 mt-5 text-justify'>DEEL stands for Digital Literacy, Employment, Entrepreneurship, and Leadership Mentoring.
                It’s a CDS group designed to mentor and support members to identify and build a Digital career,
                while enabling other youths, businesses, and their host communities to connect
                with the Digital Economy.
              </p>
              <a className='about-link' href="https://youthnomics.com/nysc-digital-onboarders-cds-and-mentoring-programme" target="__blank"><button className='text-green-500 text-sm font-bold mt-5'>Learn more &gt;</button></a>
            </Fade>
          </div>
          <Zoom>
            <div className='sm:w-2/3 mt-5 sm:mt-0 sm:pl-10'>
              <CarouselComponent />
              {/* <img id="ImgCarousel" className='container' src={ stateImg } alt="" /> */}
            </div>
          </Zoom>
          
        </div>
      </>
    )
}
