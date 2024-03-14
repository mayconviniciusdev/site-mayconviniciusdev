import React from "react";

import { Header } from "./content/header";
import { Banner } from "./content/banner";
import { About } from "./content/about";
import { Work } from "./content/work";

const Page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Work/>
    </div>
  );
}

export default Page;