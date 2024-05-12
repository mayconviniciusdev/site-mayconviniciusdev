import { Element, Link } from "react-scroll";

import { Button } from "@/components/button";
import { LinktreeBlue } from "@/components/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <Element name="header">
      <div className="py-12">
        <div className="flex justify-center">
          <LinktreeBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-4 font-semibold text-sm text-blue-cyan cursor-pointer">
          <Link to="about"smooth={true} duration={500}><p>QUEM SOU?</p></Link>
          <Link to="work"smooth={true} duration={500}><p>PORTFÓLIO</p></Link>
          <Link to="services"smooth={true} duration={500}><p>MEUS SERVIÇOS</p></Link>
          <Link to="contact" smooth={true} duration={500}><Button/></Link>
        </div>
      </div>
    </Element>
  );
}