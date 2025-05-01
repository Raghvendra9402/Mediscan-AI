import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-10 md:mx-14 lg:mx-20 xl:mx-64">
      <Header />

      <main className="flex-1">
        <Hero />

        <Features />

        <HowItWorks />

        <Testimonials />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
