import React from 'react'
import Layout from '../components/Layout/Layout'
import './projects.css'
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"

export default function projects() {
  return (
    <Layout>
      <>
        <div className="max-w-6xl container mx-auto px-4">
          <div className="flex flex-col justify-center">
            <div className="py-10 px-4 flex flex-col">
              <h1 className="text-3xl sm:text-4xl sm:ml-10 font-semibold py-5">MyNYSCApp</h1>
              <div className="mt-7 z-10 sm:w-1/2 sm:ml-20">
                <img className="sm:ml-10" src={ Project1 } alt="Transport App"/>
              </div>
              <div className="sm:w-1/2 sm:ml-80 -mt-14 bg-blue-100 rounded-3xl text-justify py-16 px-5 sm:px-10 ">
                <p className="text-sm project-text">
                  The app was created to solve the transportation process most PCMs face when
                  they have to go to camp, while also providing a better sense of security and trust.
                  It’s an all-in-one app for the corper, with emphasis on facilitating easy movement of PCMs from
                  their various states to the camp;
                  with parents/guardian being able to track the movement of their children.
                  I also helps to solve problems that corp members face with rejection at PPAs.
                </p>
              </div>
            </div>

            <div className="py-10 px-4 flex flex-col">
              <h1 className="text-3xl sm:text-4xl sm:ml-10 font-semibold py-5">DoDeelApp</h1>
              <div className="mt-7 z-10 sm:w-1/2 sm:ml-20">
                <img className="sm:ml-10" src={Project2} alt="Transport App"/>
              </div>
              <div className="sm:w-1/2 sm:ml-80 -mt-14 bg-yellow-100 rounded-3xl text-justify py-16 px-5 sm:px-10 ">
                <p className="text-sm project-text">
                  The aim of the DOdeelApp is to automate all the present CDS
                  activity across all states from the integration process to the different
                  milestones for corp members during the service year.
                  The app allows CDS members track their progress on projects,
                  recieve notifications on job openings and news update and attend
                  trainings provided by the CDS and it’s partners.
                </p>
              </div>
            </div>
          </div>

        </div>

      </>
    </Layout>
  )
}
