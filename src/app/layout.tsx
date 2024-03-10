import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: {
    template: 'Projeto - %s',
    default: "Maycon Vinícius | Dev"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
