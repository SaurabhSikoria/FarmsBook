import React, { useState, useEffect, useRef } from 'react'
import logo from './images/farmsbooklogo.png';
import {Link} from 'react-scroll'
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
            <ul className="menu-content" style={{display: open ? 'flex' : 'none'}}>
                <Link to='fbGoals' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Goals</Link>
                <Link to='stats' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Stats</Link>
                <Link to='crops' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Buy Crops</Link>
                <Link to='team' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Team</Link>
                <Link to='farmers' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>farmers</Link>
                <Link to='partners' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Supporting Partners</Link>
                <Link to='achievements' smooth={true} spy={true} exact='true' duration={500} onClick={openBar}>Achievements</Link>
            </ul>
            </div>
        </header>
    )
}

export default Header;