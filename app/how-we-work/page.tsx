import HowWeWork from "@/components/howWeWork/work";
import Footer from "@/components/root/footer";
import Header from "@/components/root/header";
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