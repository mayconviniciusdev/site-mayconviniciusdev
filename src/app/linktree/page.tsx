import { Metadata } from "next";
export const metadata: Metadata = {title: 'Linktree'}

import { LinktreePage } from "@/components/links";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMugHot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const Page = () => {
  return (
    <div className="bg-gradient-to-br from-blue-cyan to-white flex justify-center items-center h-screen flex-col">
      <div className="pb-2 flex justify-center">
        <img
        src='/foto-perfil.png'
        style={{ maxWidth: '40%', height: 'auto',}}
        className="rounded-tl-3xl rounded-br-3xl shadow-slate-500 shadow-2xl"
        alt="Maycon Vinicius"/>
      </div>

      <LinktreePage githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram} siteIcon={faLink}/>

      <div className="pt-2 text-blue-cyan text-center text-sm">
        <div className="flex justify-center">
          <p>Desenvolvido com muito</p>
          <span><FontAwesomeIcon icon={faMugHot} className="h-4 ml-2 text-blue"/></span>
        </div>
        <span>por: <Link className="font-bold underline" target="_blank" href={"https://mayconviniciusdev.com/"}>Maycon Vinícius</Link></span>
      </div>
    </div>
  )
}

export default Page;