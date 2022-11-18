import React from 'react'
import "./footer.css"
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
           
        
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur1"></div>
        <div className="blur footer-blur2"></div>
    </div>
    </>
  )
}

export default Footer