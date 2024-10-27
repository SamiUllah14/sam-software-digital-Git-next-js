import PageHeroSection from "./components/HeroSection/PageHeroSection";
import TestimonialPage from "./components/TestimonialCaseSlider/TestimonialPage";
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
