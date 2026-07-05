import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import LICPlans from '../components/LICPlans';
import MutualFund from '../components/MutualFund';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <LICPlans />
      <MutualFund />
      <Calculator />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
