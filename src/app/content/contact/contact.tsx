import { Element } from "react-scroll"

import { ButtonForm } from "@/components/button"
import { SocialForm } from "@/components/social"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Contact = () => {
  return (
    <Element name="contact">
      <div className="bg-gradient-to-r from-blue to-blue-cyan py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mx-4">
            <h2 className="font-bold text-white">CONTATO</h2>
            <p className="py-2 text-base text-white/80">Sinta-se a vontade de entrar em contato comigo, seja para conversar sobre suas dúvidas, para dicas de livros, séries e filmes ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>

            <form action="" className="mt-8">
              <input placeholder="Como você se chama?" type="text"id="name" 
              className="w-full py-2 pl-4 mb-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>

              <div className="grid grid-cols-2 gap-x-4">
                <input placeholder="Seu melhor e-mail..." type="email" id="email" 
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                <input placeholder="Agora seu Whatsapp..." type="tel" id="whatsapp" 
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
              </div>
              <textarea placeholder="Fale um pouco sobre sua ideia ou necessidade!" id="message" 
              className="w-full py-2 pl-4 my-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"></textarea>
              <div className="text-center"><ButtonForm/></div>
              <div className="flex mt-4"><SocialForm githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  )
}