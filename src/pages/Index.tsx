import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Industries from "@/components/sections/Industries";
import Clients from "@/components/sections/Clients";
import Team from "@/components/sections/Team";
import Hiring from "@/components/sections/Hiring";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Industries />
        <Clients />
        <Team />
        <Hiring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
