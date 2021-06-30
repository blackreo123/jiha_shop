import { useState } from 'react'
import './test.css'
import { OpenBtn, MySidebar } from './style'


export default function Sidebar(){

    const [sideNavWidth, setSideNavWidth] = useState();
    const [sideNavMarginLeft, setSidNavMarginLeft] = useState();
    const openNav = () => {
        setSideNavWidth('250px')
        setSidNavMarginLeft('250px')
    }
    const closeNav = () => {
        setSideNavWidth('0')
        setSidNavMarginLeft('0')
    }
    return(
        <>
        <MySidebar id="mySidebar" className="sidebar" sideNavWidth={sideNavWidth}>
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </MySidebar>

        <div id="main">
            <OpenBtn className="openbtn" onClick={openNav} sideNavMarginLeft={sideNavMarginLeft} >&#9776;</OpenBtn> 
            <h2>Collapsed Sidebar</h2>
            <p>Content...</p>
        </div>
        </>
    )
}