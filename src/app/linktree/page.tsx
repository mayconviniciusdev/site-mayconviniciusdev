import { Metadata } from "next";
export const metadata: Metadata = {title: 'Linktree'}

import Image, { ImageLoaderProps } from "next/image";

import { LinktreePage } from "@/components/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMugHot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const Page = () => {
  return (
    <div className="bg-gradient-to-br from-blue-cyan to-white py-12 flex justify-center items-center h-screen flex-col">
      <div className="py-20">
        <img
        src='/foto-perfil.png'
        width={250}
        height={250} 
        className="rounded-tl-3xl rounded-br-3xl shadow-slate-500 shadow-2xl"
        alt="Maycon Vinicius"/>
      </div>

      <LinktreePage githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram} siteIcon={faLink}/>

      <div className="pt-5 text-blue-cyan text-center text-base">
        <div className="flex justify-center">
          <p>Desenvolvido com muito</p>
          <span><FontAwesomeIcon icon={faMugHot} className="h-5 ml-2 text-blue"/></span>
        </div>
        <span>por: <Link className="font-bold underline" target="_blank" href={"https://mayconviniciusdev.com/"}>Maycon Vinícius</Link></span>
      </div>
    </div>
  )
}

export default Page;