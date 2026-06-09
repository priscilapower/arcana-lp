import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { ProblemSection } from '@/components/ProblemSection';
import { ConceptSection } from '@/components/ConceptSection';
import { CardEngineSection } from '@/components/CardEngineSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { DeckSection } from '@/components/DeckSection';
import { QuickstartSection } from '@/components/QuickstartSection';
import { MemorySection } from '@/components/MemorySection';
import { TheWorldSection } from '@/components/TheWorldSection';
import { CloudSignalSection } from '@/components/CloudSignalSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { TweaksPanel } from '@/components/TweaksPanel';

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <Hero />
      <TrustStrip />
      <section className="wrap"><div className="divline" /></section>
      <ProblemSection />
      <ConceptSection />
      <div className="wrap"><div className="divline" /></div>
      <CardEngineSection />
      <HowItWorksSection />
      <DeckSection />
      <div className="wrap"><div className="divline" /></div>
      <QuickstartSection />
      <div className="wrap rdmp-tag">
        <span className="rdmp-tag-label">coming in v1.0</span>
        <div className="divline" />
      </div>
      <MemorySection />
      <TheWorldSection />
      <CloudSignalSection />
      <FinalCTA />
      <Footer />
      <TweaksPanel />
    </>
  );
}
