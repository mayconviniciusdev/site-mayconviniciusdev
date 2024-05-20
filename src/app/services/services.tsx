"use client"
import { Element } from "react-scroll"

import { LinktreeBlue } from "@/components/links"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Services = () => {
  return (
    <Element name="services">
      <div className="max-w-7xl mx-auto py-12 ">
        <div className="mx-4 flex justify-between items-center lg:grid lg:gap-y-4 ">
          <h2 className="font-bold text-blue">MEUS SERVIÇOS</h2>
          <div className="flex">
            <LinktreeBlue githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/>
          </div>
        </div>

        <div className="mx-4 lg:grid lg:grid-cols-2">
          <div className="flex flex-col border-b-2 py-10 border-blue-cyan/70 lg:items-center lg:border-r-2 lg:w-full">
            <h2 className="font-bold text-blue-cyan pb-4">Desenvolvimento de Sites</h2>
            <p className="flex text-base text-grey max-w-lg lg:max-w-sm lg:text-center">Busco ajudar negócios, abrangendo desde o design do layout até o desenvolvimento completo do site. Especializo-me na criação de páginas institucionais e profissionais, além de landingpages, garantindo soluções personalizadas que destacam a sua marca no ambiente digital.</p>
          </div>
          
          <div className="flex flex-col items-end py-10 border-t-2 border-blue-cyan/70 lg:items-center lg:border-l-2 lg:w-full">
            <h2 className="font-bold text-blue-cyan pb-4">Manutenção e suporte</h2>
            <p className="flex text-end text-base text-grey max-w-lg lg:max-w-sm lg:text-center">Disponibilizo serviços de manutenção e suporte técnico para assegurar a eficiência e a estabilidade de sistemas e aplicativos. Além disso, ofereço soluções completas em hospedagem e gestão de sites, garantindo que sua presença digital esteja sempre otimizada e sem interrupções.</p>
          </div>
        </div>
      </div>
    </Element>
  )
}