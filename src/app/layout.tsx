import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = 
{ title: {template: '%s | Maycon Vinícius', default: 'Maycon Vinícius | Dev'},

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
  },};

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ['500', '600', '700'] });

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="PT-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}