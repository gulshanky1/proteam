import ContractualHero from "@/components/services/innerServicePages/contractual/contractualHero";
import ContractualOverview from "@/components/services/innerServicePages/contractual/ContractualOverview";
import IndustriesWeServe from "@/components/services/innerServicePages/contractual/IndustriesWeServe";
import WhyChooseContractual from "@/components/services/innerServicePages/contractual/WhyChooseContractual";
import Header from "@/components/home/header";  
import Footer from "@/components/home/footer";
import FAQ from "@/components/services/main/ServicesFAQ";


export default function ContractualManpowerPage() {
  return (
    <>
      <Header/>
      <ContractualHero />
      <ContractualOverview />
      <WhyChooseContractual />
      <IndustriesWeServe />
      <FAQ/>
      <Footer />
    </>
  );
}