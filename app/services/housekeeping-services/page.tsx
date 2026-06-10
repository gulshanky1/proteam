import CommercialOfficeCleaning from "@/components/services/innerServicePages/housekeeping/CommercialOfficeCleaning";
import HouseKeepingHero from "@/components/services/innerServicePages/housekeeping/HouseKeepingHero";
import HousekeepingManagement from "@/components/services/innerServicePages/housekeeping/HousekeepingManagementExcellence";
import HouseKeepingOverview from "@/components/services/innerServicePages/housekeeping/houseKeepingOverview";
import MechanizedCleaning from "@/components/services/innerServicePages/housekeeping/MechanizedCleaningServices";
import OurHousekeepingApproach from "@/components/services/innerServicePages/housekeeping/OurHousekeepingApproach";
import FAQ from "@/components/services/main/ServicesFAQ";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";



export default function PayrollManagement() {
  return (
       <>
         <Header/>
            <HouseKeepingHero />
            <HouseKeepingOverview />
            <MechanizedCleaning />
            <OurHousekeepingApproach />
            <CommercialOfficeCleaning />
            <HousekeepingManagement />
            <FAQ/>
         <Footer />
       </>
    );
}    