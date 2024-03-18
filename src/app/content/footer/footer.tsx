import { Social } from "@/components/social"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 text-sm text-center">
      <div className="mx-4 text-blue-cyan font-bold">
        <button className="">VOLTAR PARA CIMA</button>
        <p className="mt-4">MAYCON VINÍCIUS, PROGRAMADOR FRONTEND. RIO GRANDE DO SUL.</p>
        <span className="text-blue">contato@mayconviniciusdev.com</span>
        <div className="mt-4"><Social githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
        </div>
    </div>
  )
}