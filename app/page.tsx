import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Stats } from '@/components/stats';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Testimonials } from '@/components/testimonials';
import { Blog } from '@/components/blog';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}