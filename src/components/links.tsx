import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface SocialProps {
  githubIcon?: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
  siteIcon?: IconProp;
}

export const LinktreeBlue = ({githubIcon, linkedinIcon, instagramIcon}: SocialProps) => {
  return (
    <div className="flex justify-center gap-4 text-blue">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>{githubIcon && <FontAwesomeIcon icon={githubIcon} className="h-8 hover:text-blue/80"/>}</Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev/"}><FontAwesomeIcon icon={linkedinIcon} className="h-8 hover:text-blue/80"/></Link>
      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev/"}><FontAwesomeIcon icon={instagramIcon} className="h-8 hover:text-blue/80"/></Link>
    </div>
  );
}

export const LinktreeWhite = ({linkedinIcon, instagramIcon, githubIcon}: SocialProps) => {
  return (
    <div className="flex justify-center gap-4 text-white">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>{githubIcon && <FontAwesomeIcon icon={githubIcon} className="h-8 hover:text-white/80"/>}</Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev/"}><FontAwesomeIcon icon={linkedinIcon} className="h-8 hover:text-white/80"/></Link>
      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev/"}><FontAwesomeIcon icon={instagramIcon} className="h-8 hover:text-white/80"/></Link>
    </div>
  );
}

export const LinktreePage = ({githubIcon, linkedinIcon, instagramIcon, siteIcon}: SocialProps) => {
  return (
    <div className="text-white">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
        {githubIcon && ( 
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-28 my-4 rounded-xl">
          <FontAwesomeIcon icon={githubIcon} className="h-6 mr-4"/>
          <span>GitHub</span>
        </div>)}
      </Link>
      
      <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
        {siteIcon && ( 
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-28 my-4 rounded-xl">
          <FontAwesomeIcon icon={siteIcon} className="h-6 mr-4"/>
          <span>Website</span>
        </div>)}
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-28 my-4 rounded-xl">
          <FontAwesomeIcon icon={instagramIcon} className="h-6 mr-4"/>
          <span>Instagram</span>
        </div>
      </Link>

      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev"}>
        <div className="flex items-center justify-center hover:text-white/80 bg-blue-cyan py-4 px-28 my-4 rounded-xl">
          <FontAwesomeIcon icon={linkedinIcon} className="h-6 mr-4"/>
          <span>Linkedin</span>
        </div>
      </Link>
    </div>
  );
}