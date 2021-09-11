import React from 'react'
import {FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {TiLocation} from 'react-icons/ti'
import {SiGooglemessages, SiFacebook} from 'react-icons/si'
import { IoIosCall} from 'react-icons/io'

const Footer = () => {
    return (
         <div className="footer">
            <div className="information">
                <h3>About us</h3>
                <p>Terms and Conditions</p>
                <p>Privacy Policies</p>
            </div>
            <div className="social">
                <h3>Social Media</h3>
                <div className="social-icons">
                    <FaYoutube size={4+'vw'}/>
                    <FaInstagram size={4+'vw'}/>
                    <SiFacebook size={4+'vw'}/>
                    <FaLinkedin size={4+'vw'}/>
                </div>
            </div>
            <div className="Contacts">
                <h3>Contacts</h3>
                <div>
                    <TiLocation size={28}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div>
                    <SiGooglemessages size={25}/>
                    <p>dummy@gmail.com</p>
                </div>
                <div>
                    <IoIosCall size={25}/>
                    <div className='numbers'>
                        <p>+9157250239324</p>
                        <p>+9157250239324</p>
                    </div>
                </div>
            </div>
         </div>   
    )
}

export default Footer;