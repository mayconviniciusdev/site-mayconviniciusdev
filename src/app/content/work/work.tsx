import { Element } from "react-scroll";
import Link from "next/link";

import { Social } from "@/components/social";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import base from '../../../../public/base.png';

export const Work = () => {
  return (
    <Element name="work">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex items-center justify-between mx-4 pb-5">
          <div className="grid grid-cols-2 gap-x-2 items-center">
            <h2 className="font-bold text-blue">PORTFÓLIO |</h2>
            <Link target="_blank" href={"https://github.com/mayconviniciusdev"}>
              <p className="font-bold text-sm text-blue-cyan hover:text-blue-cyan/50">VER TODOS</p>
            </Link>
          </div>
          <div><Social linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
        </div>

        <div className="grid grid-cols-3 gap-4 mx-4">
          <div className="hover:opacity-80">
            <Link target="_blank" href={"//"}>
              <Image
              alt=""
              src={base}
              quality={100}
              className="rounded-tl-3xl"/>
            </Link>
          </div>

          <div className="hover:opacity-80">
            <Link target="_blank" href={"//"}>
              <Image
              alt=""
              src={base}
              quality={100}/>
            </Link>
          </div>
          
          <div className="hover:opacity-80">
            <Link target="_blank" href={"//"}>
              <Image
              alt=""
              src={base}
              quality={100}
              className="rounded-tr-3xl"/>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  )
}