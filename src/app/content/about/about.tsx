import Image from "next/image";
import perfil from "../../../../public/foto-perfil.png"
import { Button } from "@/components/button";

export const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-32">
      <div className="grid grid-cols-2 items-center mx-4">
        <div className="pr-4">
          <Image
          src={perfil}
          quality={100}
          style={{width: '430px', height: 'auto'}}
          className="rounded-3xl shadow-blue-cyan shadow-2xl"
          alt="Maycon Vinicius"/>
        </div>

        <div className="grid gap-y-6">
          <p className="text-blue-cyan font-bold">Olá, meu nome é</p>
          <h2 className="text-2xl text-blue font-bold">Maycon Vinícius e sou <br/> Desenvolvedor Front-End</h2>
          <p className="text-blue-cyan font-medium">Me encontrei no mundo da programação quando percebi os resultados e conquistas que algumas linhas de códigos podem fazer. Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com objetivo de implementar tecnologias e ajudar empresas ou projetos independentes em sua jornada online. Também sou um entusiasta por tecnologia, ideias inovadoras e um ótimo café.</p>
          <div className="flex"><Button/></div>
        </div>
      </div>
    </div>
  );
}