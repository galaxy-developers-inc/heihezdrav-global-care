import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTAForm from "@/components/sections/CTAForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Doctors />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
