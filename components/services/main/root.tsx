import HeroSection from "./heroSection";
import ServicesFAQ from "./ServicesFAQ";
import ServicesFeatures from "./ServicesFeatures";
import ServicesShowcase from "./ServicesShowcase";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";


const Services = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ServicesShowcase/>
    <ServicesFeatures/>
    <ServicesFAQ/>
    <Footer/>
    </>
  );
};

export default Services;