"use client"

import { Header } from "./content/header";
import { Banner } from "./content/banner";
import { About } from "./content/about";
import { Work } from "./content/work";
import { Services } from "./content/services";
import { Testimonials } from "./content/testimonials";
import { Contact } from "./content/contact";
import { Footer } from "./content/footer";

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