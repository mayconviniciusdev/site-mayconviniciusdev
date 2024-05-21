import type { Metadata } from "next";

export const metadata: Metadata = {
  description:'Sou um desenvolvedor e programador web freelancer especializado ajudar empresas e projetos independentes a alcançar sucesso em sua jornada online. Entre em contato para serviços de desenvolvimento web personalizados e eficientes.',
  keywords: ['maycon vinicius', 'desenvolvedor web', 'programador freelancer', 'desenvolvedor freelancer', 'programador web', 'contato maycon vinicius', 'desenvolvimento web'],
  authors: [{name: 'Maycon Vinicius', url: 'https://www.linkedin.com/in/mayconviniciusdev'}],
  robots: {index: true, follow: true},

  openGraph: {
    type: 'website',
    url: 'https://mayconviniciusdev.com',
    title: 'Desenvolvedor Web',
    description: 'Tenho como objetivo implementar tecnologias e ajudar empresas ou projetos independentes em sua jornada online. Vamos trabalhar juntos?',
    images: [
      {url: '/foto-perfil.png',
      width: 1200,
      height: 630,
      alt: 'Foto de Perfil'}
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dmayconvinicius',
    creator: '@dmayconvinicius'
  },
};

import { Header } from "./header";
import { Banner } from "./banner";
import { About } from "./about";
import { Work } from "./work";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Footer } from "./footer";

const Page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Work/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Page;