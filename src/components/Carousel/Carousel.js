import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import KanoCDS from '../../assets/StateImgKano.jpg'
import LagosCDS from '../../assets/StateImgLagos.png'
import Osun from '../../assets/StateImgOsun.png'
import Abuja from '../../assets/StateImgAbuja.jpg'
import Benue from '../../assets/StateImgBenue.png'
import Anambra from '../../assets/StateImgAnambra.jpg'
import Rivers from '../../assets/StateImgRivers.jpg'
import AkwaIbom from '../../assets/StateImgAkwaIbom.jpg'
import './Carousel.css'
  
function CarouselComponent() {
  return (
	<div>
		<Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} swipeable showIndicators={false}>

          <div>
              <p className="bg-gray-900 opacity-80 text-white h-full">Anambra State</p>
              <img className='container' src={Anambra} alt="Anambra"/>
          </div>

          <div>
              <p className="bg-gray-900 opacity-80 text-white">Kano State</p>
              <img className='h-full container' src={KanoCDS} alt="KanoCDS"/>
          </div>

          <div>
            <p className="bg-gray-900 opacity-80 text-white h-full">Akwa Ibom State</p>
            <img className='h-full container' src={AkwaIbom} alt="AkwaIbom"/>
          </div>

          <div>
              <p className='bg-gray-900 opacity-80 text-white'>Benue State</p>
              <img className='h-full container' src={Benue} alt="Benue" />
          </div>


          <div>
              <p className="bg-gray-900 opacity-80 text-white h-full">FCT Abuja</p>
              <img className='container' src={Abuja} alt="Abuja"/>
          </div>

          <div>
              <p className="bg-gray-900 opacity-80 text-white h-full">Rivers State</p>
              <img className='container' src={Rivers} alt="Rivers"/>
          </div>

          <div>
            <p className="bg-gray-900 opacity-80 text-white h-full">Osun State</p>
            <img className='h-full container' src={Osun} alt="Osun"/>
          </div>

          <div>
              <p className="bg-gray-900 opacity-80 text-white h-full">Lagos State</p>
            <img className='h-full container' src={LagosCDS} alt="LagosCDS"/>
        </div>
		</Carousel>
	</div>
  );
}

export default CarouselComponent;