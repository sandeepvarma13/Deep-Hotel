import React from "react";
import { MdOutlineHotelClass } from "react-icons/md";
import video2 from '../Assests/video2.mp4';
import { FiSend } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import {FiFacebook} from 'react-icons/fi';
import { FiChevronRight } from "react-icons/fi";


function Footer(){
return(
<section id="contact" className="footer">
    <div className="videoDiv">
        <video src={video2}  muted  autoPlay loop type="video/mp4"></video>
    </div>

    <div className="secContent container">
        <div className="contactDiv flex">
             <div className="text">
                <small>Enhance your resort experience </small>
                <h3>Unlock a world of benefits with Deep Rewards</h3>
             </div>

             <div className="inputDiv flex">
                <input type="text" placeholder="Enter Email Address" />
                <button className="btn flex" type="submit">
                  SEND<FiSend className="icon" />
                </button>
             </div>
        </div>

        <div className="footerCard flex">
              <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href="" className="logo">
                    <MdOutlineHotelClass  className="icon"/> Deep Hotel
                    </a>
                </div>
               
                <div className="footerSocial flex">
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
                <AiOutlineInstagram className="icon"/>
                <FiFacebook className="icon"/>
                </div>

              </div>
              <div className="footerLinks grid">
                <div className="linkGroup">
                    <span className="groupTitle">
                       EXPLORE
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                   Our Story
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Responsible Luxury
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Hotels & Resorts
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Dining
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Offers & Experiences
                    </li>
                </div>
                <div className="linkGroup">
                    <span className="groupTitle">
                       EXPLORE
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                   Our Story
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Responsible Luxury
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Hotels & Resorts
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Dining
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Offers & Experiences
                    </li>
                </div>
                <div className="linkGroup">
                    <span className="groupTitle">
                    CONNECT WITH US
                    </span>

                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Assistance
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Feedback
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Twitter Concierge
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Contact Us
                    </li>
                    <li className="footerList flex">
                    <FiChevronRight className="icon"/>
                    Hotel Development
                    </li>
                </div>
              </div>
              <div className="footerDiv">
                <small>COPYRIGHTS RESERVED - DEEP
                    2024
                </small>
              </div>
        </div>
    </div>
</section>
)
}

export default Footer;