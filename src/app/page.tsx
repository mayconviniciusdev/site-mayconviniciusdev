import React from "react";

import { Header } from "./content/header";
import { Banner } from "./content/banner";
import { About } from "./content/about";
import { Work } from "./content/work";
import { Services } from "./content/services";
import { Testimonials } from "./content/testimonials";
import { Contact } from "./content/contact";

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
    </div>
  );
}

export default Page;