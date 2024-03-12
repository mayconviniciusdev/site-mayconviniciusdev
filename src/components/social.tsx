import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  return (
    <div className="flex justify-center gap-4 text-blue text-b">
      <FontAwesomeIcon icon={faGithub} className="w-8"/>
      <FontAwesomeIcon icon={faLinkedin} className="w-8"/>
      <FontAwesomeIcon icon={faInstagram} className="w-8"/> 
    </div>
    
  );
}