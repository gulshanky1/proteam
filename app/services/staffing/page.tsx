import StaffingHero from "@/components/services/innerServicePages/staffing/staffingHero";
import StaffingOverview from "@/components/services/innerServicePages/staffing/StaffingOverview";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import WhyChooseStaffing from "@/components/services/innerServicePages/staffing/whyChooseStaffing";
import RecruitmentProcess from "@/components/services/innerServicePages/staffing/RecruitmentProcess";
import FAQ from "@/components/services/main/ServicesFAQ";
import StaffingCTA from "@/components/services/innerServicePages/staffing/staffingCTA"
export default function StaffingPage() {
  return (
    <main>
      <Header/>
      <StaffingHero />
      <StaffingOverview />
      <WhyChooseStaffing />
      <RecruitmentProcess />
      <FAQ />
      <StaffingCTA/>
      <Footer/>
    </main>
  );
}