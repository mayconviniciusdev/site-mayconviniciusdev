"use client";
import { Element } from "react-scroll";
import Link from "next/link";

import { LinktreeBlue } from "@/components/links";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Work = () => {
  return (
    <Element name="work">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex items-center justify-between mx-4 pb-5">
          <>
            <h2 className="font-bold text-blue text-2xl">PORTFÓLIO |
              <Link target="_blank" href={"https://github.com/mayconviniciusdev"} className="font-bold text-xs text-blue-cyan hover:text-blue-cyan/50 block md:inline"> VER TODOS</Link>
            </h2>
          </>
          <div><LinktreeBlue linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-4 lg:grid-cols-3 md:grid-cols-2">
          <div className="hover:opacity-80">
            <Link target="_blank" href={'/works/jorgefreitasdesign'}>
              <img
              alt="Base"
              src="/base.png"
              style={{width: '100%', height: 'auto'}}
              className="rounded-tl-3xl"/>
            </Link>
          </div>

          <div className="hover:opacity-80">
            <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
              <img
              alt="Base"
              src="/base.png"
              style={{width: '100%', height: 'auto'}}/>
            </Link>
          </div>
          
          <div className="hover:opacity-80">
            <Link target="_blank" href={"https://mayconviniciusdev.com/"}>
              <img
              alt="Base"
              src="/base.png"
              style={{width: '100%', height: 'auto'}}
              className="rounded-tr-3xl"/>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  )
}