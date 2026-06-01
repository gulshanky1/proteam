import AboutHero from "@/components/about/hero";
import AboutStory from "@/components/about/story";
import AboutTimeline from "@/components/about/journy";
import AboutValues from "@/components/about/AboutValues";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutCTA from "@/components/about/cta";
import Header from "@/components/root/header";
import Footer from "@/components/root/footer";

export default function AboutPage() {
  return (
    <>
      <Header/>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutValues />
      <AboutLeadership />
      <AboutCTA />
      <Footer />
    </>
  );
}