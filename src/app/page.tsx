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