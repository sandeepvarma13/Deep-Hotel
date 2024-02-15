import React from "react";
import video1 from '../../src/Assests/video1.mp4';
import {GrLocation} from  'react-icons/gr';
import {FiFacebook} from 'react-icons/fi';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";


function Home(){

 
    return(
      <section id="home" className="home">
        <div className="overlay"></div>
        <video src={video1}  muted  autoPlay loop type="video/mp4"></video>
        

        <div className="homeContent container">
            <div className="textDiv">
                <span  className="smallText">
                 Our Hotels
                </span>
                <h1  className="homeTitle">
                    Book Your Dates
                </h1>
            </div>
            <div  className="cardDiv grid">
            <div className="destinationInput">
                    <label htmlFor="city"> where are you going?</label>
                    <div className="input flex">
                        <input type="text"  placeholder="Destination or Hotel"/>
                        <GrLocation className="icon"/>
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date"> check-in :</label>
                    <div className="input flex">
                        <input type="date"/>
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date"> check-out :</label>
                    <div className="input flex">
                        <input type="date"/>
                    </div>
                </div>
                <div className="guest_select">
                    <label htmlFor="date"> Guests <select><option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    </select></label>
                    
                    </div>
                    
                    <div className="availabity">
                <button className='btn'>
                      <a href='#'>View Availabilty</a>
                    </button>
                </div>
           
                
            </div>
            
          

            <div  className="homeFooterIcons flex">
                <div className="rightIcons">
                <FiFacebook className="icon"/>
                <AiOutlineInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
                </div>
                <div className="leftIcons">
               <FaListUl className="icon"/>
               <TbApps className="icon"/>

                </div>
            </div>
        </div>

      </section>
    )
}

export default Home;