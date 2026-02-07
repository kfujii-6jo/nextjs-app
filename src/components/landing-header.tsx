"use client";

import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { LandingHeaderNav } from "@/components/landing-header-nav";

export const LandingHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-10 border-b border-neutral-200 mb-16">
      <Container className="flex justify-between items-center h-16">
        <Logo />
        <LandingHeaderNav />
      </Container>
    </header>
  );
};
