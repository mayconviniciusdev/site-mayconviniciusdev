import { Element } from 'react-scroll';

import Image from "next/image";
import perfil from "../../../../public/foto-perfil.png"
import { Button } from "@/components/button";

export const About = () => {
  return (
    <Element name="about">
      <div className="max-w-4xl mx-auto py-32">
        <div className="grid grid-cols-3 items-center mx-4">
          <div className="flex justify-center">
            <Image
            src={perfil}
            quality={100}
            style={{width: '300px', height: 'auto'}}
            className="rounded-3xl shadow-blue-cyan shadow-2xl"
            alt="Maycon Vinicius"/>
          </div>

          <div className="grid col-span-2 ml-10">
            <p className="text-blue-cyan font-bold">Olá, meu nome é</p>
            <h2 className="text-3xl text-blue font-bold">Maycon Vinícius e sou <br/> Desenvolvedor Front-End</h2>
            <p className="text-blue-cyan font-medium py-4">Me encontrei no mundo da programação ao perceber os resultados e conquistas que algumas linhas de códigos podem desencadear. Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com o objetivo de impulsionar empresas e projetos independentes em sua jornada online. Também sou um entusiasta por tecnologia, ideias inovadoras e um ótimo café.</p>
            <div className="flex"><Button/></div>
          </div>
        </div>
      </div>
    </Element>
  );
}