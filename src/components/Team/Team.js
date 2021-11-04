import React from "react"
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';
import './Team.css'

export default function Team() {
  return (
        <div className="mt-20 sm:mt-36">
          <Fade up>
            <h1 className="team-header font-Gilroy text-3xl font-semibold">The Team</h1>
          </Fade>
          <Fade>
            <p className="mt-5 text-gray-500">This entire project was brought to life by a well diverse team of developers and product designers.</p>
            <Link to="/team"><div className='text-green-600 text-sm mt-5'><button>See the team &gt;</button></div></Link>
          </Fade>
        </div>
  )
}
