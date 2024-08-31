import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Feature />
      <NewsLetter />
      <Testimonial />
      <Footer />
    </main>
  );
}
