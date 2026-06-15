import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import IndustryProblem from "@/components/services/innerServicePages/training/industryProblem";
import ProgramStructure from "@/components/services/innerServicePages/training/programStructure";
import TrainingHero from "@/components/services/innerServicePages/training/trainingHero";
import TrainingOverview from "@/components/services/innerServicePages/training/trainingOverview";
import FAQ from "@/components/services/main/ServicesFAQ";
import TrainingCTA from "@/components/services/innerServicePages/training/trainingCTA"


export default function TraningPage() {
    return (
        <>
        <Header/>
         <TrainingHero />
         <TrainingOverview />
         <IndustryProblem/>
         <ProgramStructure/>
         <FAQ/>
         <TrainingCTA/>
        <Footer/>
        </>
    );
}