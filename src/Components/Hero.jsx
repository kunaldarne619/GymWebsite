import React from 'react'
import Header from './Header'
import './hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from "../assets/heart.png"

import Calories from '../assets/calories.png'


const Hero = () => {
    const transition={type:'spring',duration:3}
  return (
    <>
    <div className="hero" id='Hero'>
        <div className="blur blur-h"></div>

    <div className="left">
        <Header/>
{/* The Best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>The best Fitness Club In Town</span>
        </div>
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape  </span>
                <span>Your</span>
            </div>
            <div><span>Ideal Body</span>
            </div>
            <div >
                <span>In Here We Will Help You To Shape And Build Your Ideal Body And Live Up Your Life To Fullest</span>
                </div>
            </div>
            {/* figures hero left */}
            <div className="figures">
        <div>
            <span>+140</span>
            <span>expert coachs</span>
            </div>
        <div>
            <span>+978</span>
            <span>members joined</span>
        </div>
        <div>
            <span>+50</span>
            <span>fitness program</span>
        </div>
    </div>
    {/* hero left button */}

    <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
    </div>
    </div>
    


    <div className="right">
    
   <button className='btn'>Join Now</button>
   <div className="heart-rate">
    <img src={Heart} alt="" />
    <span>Heart Rate</span>
    <span>116 BPM</span>
   </div>

   {/* herro images */}
   <img src={hero_image} alt="" className='hero-image' />
   <img src={hero_image_back} alt="" className='hero-image-black' />

   {/* caloriess */}
   <div className="calories">
    <img src={Calories} alt="" />
    <div><span>Calories Burned</span>
    <span>220 Kcal</span></div>
   </div>
    </div>
   
    </div>

    </>

  )
}

export default Hero