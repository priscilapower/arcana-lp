import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { ProblemSection } from '@/components/ProblemSection';
import { CardEngineSection } from '@/components/CardEngineSection';
import { DeckSection } from '@/components/DeckSection';
import { MemorySection } from '@/components/MemorySection';
import { TheWorldSection } from '@/components/TheWorldSection';
import { ConnectSection } from '@/components/ConnectSection';
import { OSSCloudSection } from '@/components/OSSCloudSection';
import { PricingSection } from '@/components/PricingSection';
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
      <div className="wrap"><div className="divline" /></div>
      <CardEngineSection />
      <DeckSection />
      <div className="wrap"><div className="divline" /></div>
      <MemorySection />
      <TheWorldSection />
      <ConnectSection />
      <div className="wrap"><div className="divline" /></div>
      <OSSCloudSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
      <TweaksPanel />
    </>
  );
}
