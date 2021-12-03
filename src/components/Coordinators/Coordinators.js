import React from "react"
import mtg1 from "../../assets/mtg1.png"
import mtg2 from "../../assets/mtg2.png"
import mtg3 from "../../assets/mtg3.png"
import Fade from "react-reveal/Fade"
import "./Coordinators.css"

export default function Coordinators() {
  return (
    <>
      <div className="mx-auto mt-20 sm:mt-32">
        <Fade up>
          <h1 className="project-header text-3xl font-Gilroy mt-10 sm:mt-20 font-semibold my-3">
            Our Coordinators
          </h1>
        </Fade>

        <div className="flex flex-col text-center sm:flex-row mt-5 sm:space-x-32">
          <Fade up>
            <div className="mt-5">
              <img
                className="mx-auto w-1/3 h-1/3 sm:w-32 sm:h-32"
                src={mtg1}
                alt="Mr Tayo Olosunde"
              />
              <h2 className="mt-4 text-sm font-semibold">Mr Tayo Olosunde</h2>
              <p className="text-sm text-gray-500">CEO, MindTheGap</p>
            </div>
          </Fade>

          <Fade up>
            <div className="mt-5">
              <img
                className="mx-auto w-1/3 h-1/3 sm:w-32 sm:h-32"
                src={mtg2}
                alt="Mr Bukunmi Abiodun"
              />
              <h2 className="mt-4 text-sm font-semibold">Mr Bukunmi Abiodun</h2>
              <p className="text-sm text-gray-500">MindTheGap Liason</p>
            </div>
          </Fade>

          <Fade up>
            <div className="mt-5">
              <img
                className="mx-auto w-1/3 h-1/3 sm:w-32 sm:h-32"
                src={mtg3}
                alt="Odetayo Mayowa"
              />
              <h2 className="mt-4 text-sm font-semibold">Mr Odetayo Mayowa</h2>
              <p className="text-sm text-gray-500">MindTheGap Liason</p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
