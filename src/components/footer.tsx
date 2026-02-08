import { Container } from "@/components/container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <Container className="py-12 text-center">
        <p className="text-base text-neutral-200">
          &copy; 2026 TechBlog. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
