import type { Metadata } from "next";
export const metadata: Metadata = {title: {template: 'Projeto | %s', default: 'Maycon Vinícius | Dev'}};

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