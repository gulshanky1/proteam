import Header from "@/components/root/header";
import Footer from "@/components/root/footer";
import SecurityHero from "@/components/services/innerServicePages/security/SecurityHero";
import SecurityOverview from "@/components/services/innerServicePages/security/SecurityOverview";
import SecurityProtection from "@/components/services/innerServicePages/security/SecurityProtection";
import CorporateIntelligence from "@/components/services/innerServicePages/security/CorporateIntelligence";
import FAQ from "@/components/services/main/ServicesFAQ";




export  default function SecurityServicesPage() {
  return (
    <>
       <Header/>
       <SecurityHero/>
       <SecurityOverview />
       <SecurityProtection />
       <CorporateIntelligence />
       <FAQ/>
       <Footer />

    </>
  );

}  