import React from "react";

import { Header } from "./content/header";
import { Banner } from "./content/banner";
import { About } from "./content/about";
import { Work } from "./content/work";
import { Services } from "./content/services";

const Page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Work/>
      <Services/>
    </div>
  );
}

export default Page;