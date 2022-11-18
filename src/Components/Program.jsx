import React from 'react'
import './program.css'
import {programsData} from "../data/programsData"
import RightArrow from '../assets/rightArrow.png'

const Program = () => {
  return (
    <>
    <div className="program" id="programs">
        {/* header */}
        <div className="program-header">
            <span className='stroke-text'>Explore</span>
            <span>Programs</span>
            <span className='stroke-text'>to Shape</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="Join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Program