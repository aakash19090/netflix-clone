import React, { useState, useEffect } from 'react'
import Logo from './images/logo.png'
import Icon from './images/icon.png'

const Navbar = () => {

    const [ darkHeader, setHeader ] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", ()=> {
            if( window.scrollY > 100 ){
                setHeader(true);
            }
            else{
                setHeader(false);
            }
        })   
        
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`navbar ${darkHeader ? 'dark_header':''}`}>
            <div className="inner">
                <div className="logo_div">
                    <img src={Logo} alt="Netflix Logo"/>
                </div>
                <div className="icon_div">
                    <img src={Icon} alt="Netflix Icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
