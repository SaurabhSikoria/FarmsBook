import React, { useState, useEffect, useRef } from 'react'
import logo from './images/farmsbooklogo.png';
import {FaBars} from 'react-icons/fa'

const Header = () => {
    const [open, setOpen] = useState(false);
    const openBar = () => {
        {open ? setOpen(false) : setOpen(true)}
    }
    const wrapper = useRef(null);
    useOutsideAlerter(wrapper);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false); 
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return (
        <header className="App-header">
            <div className="logo-container">
            <img src={logo} alt="" />
            <h3>FarmsBook</h3>
            </div>
            <div className="menu-bar" ref={wrapper} >
            <FaBars className="bar" onClick={openBar}/>
            <ul className="menu-content" style={{display: open ? 'block' : 'none'}}>
                <li>Stats</li>
                <li>Buy Crops</li>
            </ul>
            </div>
        </header>
    )
}

export default Header;