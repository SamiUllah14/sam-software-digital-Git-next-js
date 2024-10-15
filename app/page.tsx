import PageHeroSection from "./components/HeroSection/PageHeroSection";
import TestimonialPage from "./components/TestimonialCase/TestimonialPage";
import BrandsHomeSectionComponent from "./components/BrandsHomeSection/BrandsHomeSectionComponent";
import ContactUsFormComponent from "./components/ContactUsFormComponent/ContactUsFormComponent";

export default function Home() {
  return (
      <main>
        <PageHeroSection/>
        <TestimonialPage/>
        
        <BrandsHomeSectionComponent/>
        <ContactUsFormComponent/>
      
      </main>
  );
}
