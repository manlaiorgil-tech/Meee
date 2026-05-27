import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import AutoHideNav from './components/AutoHideNav';
import Dust from './components/Dust';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import GallerySection from './components/GallerySection';
import SkillsSection from './components/SkillsSection';
import InteractiveSection from './components/InteractiveSection';
import ContactSection from './components/ContactSection';
import { OrnamentalRule } from './components/Ornament';

function SectionDivider() {
  return (
    <div className="px-6 lg:px-10 py-3 text-rule/60 border-t-2 border-ink">
      <OrnamentalRule bg="#E8DCBA" />
    </div>
  );
}

export default function PersonalWebsite() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <AutoHideNav />
      <div className="grain min-h-screen bg-newsprint text-ink relative">
        <Dust />
        <Hero />
        <Marquee />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <WorkSection />
        <SectionDivider />
        <GallerySection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <InteractiveSection />
        <SectionDivider />
        <ContactSection />
        <footer className="border-t-[3px] border-ink">
          <div className="mx-auto max-w-[1600px] px-6 py-6 lg:px-10">
            <div className="flex items-center justify-between text-ink/50">
              <span className="dateline">© 2025 Manlai Orgil — All rights reserved</span>
              <span className="font-mongolian text-base">ᠮᠠᠨᠯᠠᠶ · ᠣᠷᠭᠢᠯ</span>
              <span className="dateline">Mongolia · Dublin</span>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
