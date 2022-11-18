import React from 'react'
import './header.css'
import  Logo from '../../src/assets/logo.png'
import Bars from '../../src/assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile =window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
    <>
    <div className="header">
        <img className='logo' src={Logo} alt="" />
        {
          (menuOpened===false&&mobile===true)?(
            <div style={{
              backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px',position:'sticky'
            }}
            onClick={()=>setMenuOpened(true)}
            
            ><img src={Bars} alt='' style={{width:'1.5rem',height:'1.5rem'}}/></div>
          ):(<ul className='header-menu'>
          <li >
            <Link onClick={()=>setMenuOpened(false)}
            to='Hero'
            span={true}
            smooth={true}
            >Home</Link>
            </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
            >Program</Link>
            </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
            to='joinUs'
            span={true}
            smooth={true}
            >Join Us</Link>
            </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
            to='Plan'
            span={true}
            smooth={true}
            >plan</Link>
            </li>
            <li >
            <Link onClick={()=>setMenuOpened(false)}
            to='test'
            span={true}
            smooth={true}
            >Testimonials</Link>
            </li>
          
      </ul>)
        }

        
    </div>
    </>
  )
}

export default Header