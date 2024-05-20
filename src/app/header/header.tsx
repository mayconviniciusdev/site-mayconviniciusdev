"use client"

import { Element, Link } from "react-scroll";

import { Button } from "@/components/button";
import { LinktreeBlue } from "@/components/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {setMenuOpen(!menuOpen);};

  return (
    <Element name="header">
      <div className="py-12">
        <div className="flex justify-between md:justify-center px-4">
          <LinktreeBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>

          <div className="md:hidden">
            <button onClick={toggleMenu}><FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" className="text-blue-cyan"/></button>
          </div>
        </div>
        
        {/* desktop Menu */}
        <div className="hidden md:flex mt-8 justify-center items-center gap-4 font-semibold text-sm text-blue-cyan cursor-pointer">
          <Link to="about"smooth={true} duration={500}><p>QUEM SOU?</p></Link>
          <Link to="work"smooth={true} duration={500}><p>PORTFÓLIO</p></Link>
          <Link to="services"smooth={true} duration={500}><p>MEUS SERVIÇOS</p></Link>
          <Link to="contact" smooth={true} duration={500}><Button/></Link>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-end gap-4 font-semibold text-sm text-blue-cyan cursor-pointer mr-4 mt-4">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}><p>QUEM SOU?</p></Link>
            <Link to="work" smooth={true} duration={500} onClick={toggleMenu}><p>PORTFÓLIO</p></Link>
            <Link to="services" smooth={true} duration={500} onClick={toggleMenu}><p>MEUS SERVIÇOS</p></Link>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}><Button /></Link>
          </div>
        )}
      </div>
    </Element>
  );
}