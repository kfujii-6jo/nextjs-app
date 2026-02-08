import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LandingHeader } from "@/components/landing-header";

const LandingPage = async () => {
  return (
    <main className="min-h-screen">
      <LandingHeader />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default LandingPage;
