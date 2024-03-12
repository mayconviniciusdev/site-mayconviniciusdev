import Image from "next/image";
import perfil from "../../../../public/foto-perfil.png"
import { Button } from "@/components/button";

export const About = () => {
  return (
    <div className="grid grid-cols-2 py-32 items-center mx-4">
      <div className="flex justify-end pr-20">
        <Image className="rounded-3xl shadow-blue-cyan shadow-2xl"
        src={perfil}
        height={400}
        width={400}
        alt="Maycon Vinicius"/>
      </div>

      <div className="max-w-lg grid gap-y-4">
        <p className="text-blue-cyan font-bold">Olá, meu nome é</p>
        <h2 className="text-2xl text-blue font-bold">Maycon Vinícius e sou <br/> Desenvolvedor Front-End</h2>
        <p className="text-lg text-blue-cyan font-medium">Me encontrei no mundo da programação quando percebi os resultados e conquistas que algumas linhas de códigos podem fazer. Venho obtendo conhecimentos para o desenvolvimento web e de aplicativos com objetivo de implementar tecnologias e ajudar empresas ou projetos independentes em sua jornada online. Também sou um entusiasta por tecnologia, ideias inovadoras e um ótimo café.</p>
        <div className="flex"><Button/></div>
      </div>
    </div>
  );
}