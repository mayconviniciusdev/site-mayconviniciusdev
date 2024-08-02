"use client";
import Head from 'next/head';
import { useEffect } from 'react';

import TagManager from 'react-gtm-module';
const tagManagerArgs = {gtmId: 'GTM-T5BGHK4C'};

import { Header } from "./header";
import { Banner } from "./banner";
import { About } from "./about";
import { Work } from "./work";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Footer } from "./footer";

const Page = () => {
  useEffect(() => { TagManager.initialize(tagManagerArgs);}, []);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
          __html: 
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5BGHK4C');`,
        }}/>
      </Head>

      <div>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5BGHK4C" height="0" width="0" style={{display: 'none', visibility:'hidden'}}></iframe>
        </noscript>
        
        <Header/>
        <Banner/>
        <About/>
        <Work/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default Page;