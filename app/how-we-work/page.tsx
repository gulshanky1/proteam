import HowWeWork from "@/components/howWeWork/work";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import HeroSection from "@/components/howWeWork/heroWork";
import FAQ from "@/components/services/main/ServicesFAQ";

export default function Page() {
  return (
   <>
    <Header/>
    <HeroSection/>
     <HowWeWork />
     <FAQ />
    <Footer/>
    </>
  );
}