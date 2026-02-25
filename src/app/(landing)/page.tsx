import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LandingHeader } from "@/components/landing-header";
import { LoginModal } from "@/features/auth/components/login-modal";

const LandingPage = async () => {
  return (
    <main className="min-h-screen">
      <LoginModal />
      <LandingHeader />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default LandingPage;
