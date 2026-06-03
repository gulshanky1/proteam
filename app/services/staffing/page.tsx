import StaffingHero from "@/components/services/innerServicePages/staffing/staffingHero";
import StaffingOverview from "@/components/services/innerServicePages/staffing/StaffingOverview";
import Footer from "@/components/root/footer";
import Header from "@/components/root/header";
import WhyChooseStaffing from "@/components/services/innerServicePages/staffing/whyChooseStaffing";
import RecruitmentProcess from "@/components/services/innerServicePages/staffing/RecruitmentProcess";
import FAQ from "@/components/services/main/ServicesFAQ";

export default function StaffingPage() {
  return (
    <main>
      <Header/>
      <StaffingHero />
      <StaffingOverview />
      <WhyChooseStaffing />
      <RecruitmentProcess />
      <FAQ />
      <Footer/>
    </main>
  );
}