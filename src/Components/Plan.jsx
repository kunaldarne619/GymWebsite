import React from 'react'
import './plan.css'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'
const Plan = () => {
  return (
    <>
    <div className="plans-container" id='Plan' style={{
        gap:'2rem'
    }}>
        <div className="blur plan-blur1"></div>
        <div className="blur plan-blur2"></div>
        
        <div className="program-header">
            <span className='stroke-text'>READY TO START </span>
            <span>YOUR JOURNEY </span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        {/* plans card */}
<div className="plans">
    {plansData.map((plan,i)=>(
        <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price}</span>
            <div className="features">
                {plan.features.map((feature,i)=>(
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div className="span">See More benefits-></div>
            <button className="btn">Join Now</button>
        </div>
    ))}
</div>
    </div>
    </>
  )
}

export default Plan