import HeroSection from "./hero";
import Header from "./header";
import Client from "./partners";
import Services from "./services";
import Footer from "./footer";
import WhyChoose from "./WhyChoose";
import CTA from "./cta";
import Stats from "./stats";
import Process from "./process";
import Industries from "./industries";
import Testimonials from "./testinomials";


const Root = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Client/>
    <Services/>
    <WhyChoose/>
    <Stats/>
    <Industries/>
    {/* <Process/> */}
    <Testimonials/>
    <CTA/>
    <Footer/>
    </>
  );
};

export default Root;
