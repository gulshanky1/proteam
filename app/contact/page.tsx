import ContactForm from "@/components/contactUs/contactForm";
import Footer from "@/components/home/footer";
import Hero from "@/components/contactUs/hero";
import Header from "@/components/home/header";
import ServicesFAQ from "@/components/services/main/ServicesFAQ";
import MapSection from "@/components/contactUs/map";



export default function ContactPage() {
  return (
    <>
    <Header/>
    <Hero/>
    <ContactForm/>
    <MapSection/>
    <ServicesFAQ/>
    <Footer/>
    </>
  );
}