import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import PayrollHero from "@/components/services/innerServicePages/payroll/PayrollHero";
import PayrollOverview from "@/components/services/innerServicePages/payroll/PayrollOverview";
import WhatWeEnsure from "@/components/services/innerServicePages/payroll/WhatWeEnsure";

import FAQ from "@/components/services/main/ServicesFAQ";
import ComplianceService from "@/components/services/innerServicePages/payroll/complianceService";
import OutSourcingService from "@/components/services/innerServicePages/payroll/outSourcingService";



export default function PayrollManagement() {
    return (
        <>
        <Header/>
        <PayrollHero />
        <PayrollOverview />
        <ComplianceService />
        <OutSourcingService/>
        <WhatWeEnsure />
        <FAQ/>
        <Footer />
        </>
    );
}