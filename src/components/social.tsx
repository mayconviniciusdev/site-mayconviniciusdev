import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialProps {
  githubIcon?: IconProp;
  linkedinIcon: IconProp;
  instagramIcon: IconProp;
}

export const Social = ({githubIcon, linkedinIcon, instagramIcon }: SocialProps) => {
  return (
    <div className="flex justify-center gap-4 text-blue text-b">
      {githubIcon && <FontAwesomeIcon icon={githubIcon} className="w-8"/>}
      <FontAwesomeIcon icon={linkedinIcon} className="w-8"/>
      <FontAwesomeIcon icon={instagramIcon} className="w-8"/> 
    </div>
  );
}