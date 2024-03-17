import React from "react";

import { Button } from "@/components/button";
import { Social } from "@/components/social";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <div className="my-14">
      <div className="flex justify-center gap-4 text-blue">
        <Social githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
      </div>
      
      <div className="mt-8 flex justify-center items-center gap-4 font-semibold text-sm text-blue-cyan cursor-pointer">
        <p>QUEM SOU?</p>
        <p>PORTFÓLIO</p>
        <p>MEUS SERVIÇOS</p>
        <Button/>
      </div>
    </div>
    
  );
}