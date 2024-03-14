import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface SocialProps {
  githubIcon?: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
}

export const Social = ({githubIcon, linkedinIcon, instagramIcon }: SocialProps) => {
  return (
    <div className="flex justify-center gap-4 text-blue text-b">
      <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>{githubIcon && <FontAwesomeIcon icon={githubIcon} className="w-8 hover:text-blue/80"/>}</Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/mayconviniciusdev/"}><FontAwesomeIcon icon={linkedinIcon} className="w-8 hover:text-blue/80"/></Link>
      <Link target="_blank" href={"https://www.instagram.com/mayconviniciusdev/"}><FontAwesomeIcon icon={instagramIcon} className="w-8 hover:text-blue/80"/></Link>
    </div>
  );
}