import CleaningVsSanitizing from "@/components/services/innerServicePages/sanitation/CleaningVsSanitizing";
import SanitationOverview from "@/components/services/innerServicePages/sanitation/SanitationOverview";
import SanitationProcess from "@/components/services/innerServicePages/sanitation/SanitationProcess";
import Header from "@/components/root/header";
import Footer from "@/components/root/footer";
import FAQ from "@/components/services/main/ServicesFAQ";
import SanitationHero from "@/components/services/innerServicePages/sanitation/sanitationHero";




export default function SanitationWorksPage() {
  return (
    <>
    <Header/>
    <SanitationHero/>
    <SanitationOverview />
    <SanitationProcess/>
    <CleaningVsSanitizing />
    <FAQ/>
    <Footer />

    </>
  );
}