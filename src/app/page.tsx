import React from "react";

import { Header } from "./content/header";
import { Banner } from "./content/banner";
import { About } from "./content/about/about";

const Page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
    </div>
  );
}

export default Page;