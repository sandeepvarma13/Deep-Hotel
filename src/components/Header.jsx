import React, { useState } from 'react';
import { MdOutlineHotelClass } from "react-icons/md";
import {MdClose  } from "react-icons/md";
import {HiOutlineViewList  } from "react-icons/hi";

function Header() {
const[active, setActive]= useState('navBar');
 function showNav(){
    setActive('navBar activeNavbar')
 }
 function removeNavbar(){
  setActive('navBar')
}
    return (
      <section className='navBarSection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineHotelClass  className="icon"/>Deep Hotel</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                   <li className='navItem'>
                    <a href="#" className="navLink">Home</a>
                    </li>
                    <li className='navItem'>
                    <a href="#" className="navLink">About</a>
                    </li>
                    <li className='navItem'>
                    <a href="features#" className="navLink">Features</a>
                    </li>
                    <li className='navItem'>
                    <a href="#pages" className="navLink">Pages</a>
                    </li>
                    <li className='navItem'>
                    <a href="#contact" className="navLink">Contact Us</a>
                    </li>
                    <button className='btn'>
                      <a href='#'>BOOK NOW</a>
                    </button>
                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                <MdClose className="icon" />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
            <HiOutlineViewList className="icon" />
            </div>
        </header>
      </section>
    );
  }

export default Header;