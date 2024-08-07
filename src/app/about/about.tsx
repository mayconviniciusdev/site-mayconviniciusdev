"use client"

import { Element } from 'react-scroll';
import { Button } from "@/components/button";

export const About = () => {
  return (
    <Element name="about">
      <div className="max-w-4xl mx-auto py-32">
        <div className="mx-4 items-center md:grid grid-cols-3">
          <div className="flex justify-center">
            <img
            src="/foto-perfil.png"
            className="w-full max-w-60 lg:max-w-lg rounded-3xl shadow-blue-cyan shadow-2xl"
            alt="Maycon Vinicius"/>
          </div>

          <div className="mt-16 text-center md:grid md:col-span-2 md:ml-10 md:mt-0 md:text-start">
            <p className="text-blue-cyan font-bold">Olá, meu nome é</p>
            <h2 className="text-2xl text-blue font-bold">Maycon Vinícius e sou <br/> Desenvolvedor Front-End</h2>
            <p className="text-blue-cyan font-medium py-4">Me encontrei no mundo da programação ao perceber os resultados e conquistas que algumas linhas de códigos podem desencadear. Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com o objetivo de impulsionar empresas e projetos independentes em sua jornada online. Também sou um entusiasta por tecnologia, ideias inovadoras e um ótimo café.</p>
            <div className="flex justify-center md:justify-start"><Button/></div>
          </div>
        </div>
      </div>
    </Element>
  );
}