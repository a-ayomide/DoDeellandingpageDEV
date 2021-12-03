import React from "react"
// import { Link } from "gatsby"
import Circle from "../../assets/Circle.svg"
import Rectangle from "../../assets/Rectangle.svg"
import Polygon from "../../assets/Polygon 2.svg"
import ScrollDown from "../../assets/Scroll down.svg"
import "./Hero.css"
// import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from "typewriter-effect"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Hero() {
  return (
    <>
      <div id="main" className=" flex flex-col justify-center">
        <div className="">
          <div className="flex justify-center items-center -mt-10 sm:-mt-32">
            <div>
              <Fade left>
                <img src={Circle} alt="" />
              </Fade>
            </div>
            <div id="hero-div" className="sm:mx-16">
              <Fade bottom>
                <div className="text-center">
                  <h1
                    id="hero-header"
                    className="text-center font-Gilroy font-semibold text-6xl md:text-6xl"
                  >
                    <Typewriter
                      options={{
                        strings: ["DO-DEEL CDS."],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2500,
                        deleteSpeed: 200,
                      }}
                    />
                  </h1>
                </div>

                <p
                  id="hero-text"
                  className="justify-center mt-1 md:px-14 leading-10"
                >
                  Enabling Nigerian Youth, Businesses and Communities for the
                  Digital Economy.
                </p>
              </Fade>
            </div>
            <Fade right>
              <div>
                <img src={Rectangle} alt="" />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="flex justify-center mt-8">
              <AnchorLink
                href="#InterestForm"
                id="button-fill"
                className="px-4 py-3"
              >
                <button className="font-semibold font-Gilroy button-text">
                  I'm Interested!
                </button>
              </AnchorLink>
            </div>
          </Fade>
          <Fade left>
            <div className="sm:ml-48">
              <img src={Polygon} alt="" />
            </div>
          </Fade>
        </div>
        <div className="flex justify-end animate-bounce">
          <img src={ScrollDown} alt="" />
        </div>
      </div>
    </>
  )
}

// data.heroImg.childImageSharp.fluid

// export const query = graphql`
//     query Shapes {
//         file(relativePath: {eq: "Circle.png"}) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `;

// site {
//     siteMetadata {
//         social {
//             Circle
//         }
//     }
// }
