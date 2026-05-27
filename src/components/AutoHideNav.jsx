import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { OrnamentalRule } from './Ornament';

const navLinks = [
  { href: '#about',   label: 'About' },
  { href: '#work',    label: 'Work' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#skills',  label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function AutoHideNav() {
  const [hidden, setHidden] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
      })
    );
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -280 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Outer newspaper border — stamp-style frame */}
      <div className="border-b-[3px] border-ink bg-newsprint/96 backdrop-blur-sm">

        {/* ── Row 1: dateline strip ── */}
        <div className="border-b border-ink/30 px-5 lg:px-8 py-[5px]">
          <div className="mx-auto max-w-[1600px] grid grid-cols-3 items-center">
            <span className="dateline text-ink/50 text-left">Mongolia · Ireland · MMXXV</span>
            <span className="dateline text-ink/40 text-center hidden sm:block">Vol. I — Дугаар 001</span>
            <span className="dateline text-ink/50 text-right">{today}</span>
          </div>
        </div>

        {/* ── Ornamental rule ── */}
        <div className="px-5 lg:px-8 py-[3px] text-ink/50">
          <OrnamentalRule bg="#E8DCBA" />
        </div>

        {/* ── Row 2: masthead title ── */}
        <div className="px-5 lg:px-8 py-[6px]">
          <div className="mx-auto max-w-[1600px] flex items-center justify-center gap-3 lg:gap-6">
            {/* Left: Mongolian traditional script */}
            <div className="hidden md:flex flex-col items-end gap-0.5">
              <span className="font-mongolian text-ink/25 text-sm leading-none tracking-widest">ᠮᠠᠨᠯᠠᠶ</span>
            </div>

            {/* Vertical rule */}
            <div className="hidden md:block h-8 w-px bg-ink/20" />

            {/* Main title */}
            <a
              href="#"
              className="masthead-title text-ink tracking-tight leading-none text-[1.6rem] lg:text-[2.2rem] hover:text-vermillion transition-colors duration-300"
            >
              Manlai Orgil
            </a>

            {/* Vertical rule */}
            <div className="hidden md:block h-8 w-px bg-ink/20" />

            {/* Right: Mongolian script */}
            <div className="hidden md:flex flex-col items-start gap-0.5">
              <span className="font-mongolian text-ink/25 text-sm leading-none tracking-widest">ᠣᠷᠭᠢᠯ</span>
            </div>
          </div>
        </div>

        {/* ── Ornamental rule ── */}
        <div className="px-5 lg:px-8 py-[3px] text-ink/50">
          <OrnamentalRule bg="#E8DCBA" />
        </div>

        {/* ── Row 3: navigation ── */}
        <div className="border-t border-ink/20 px-5 lg:px-8 py-[7px]">
          <div className="mx-auto max-w-[1600px] flex items-center justify-between">
            {/* Nav links with column-rule separators */}
            <nav className="flex items-center">
              {navLinks.map(({ href, label }, i) => (
                <span key={href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2.5 text-ink/25 text-[10px] select-none">│</span>
                  )}
                  <a
                    href={href}
                    className="dateline text-muted hover:text-vermillion transition-colors tracking-[0.22em]"
                  >
                    {label}
                  </a>
                </span>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="dateline text-ink/55 hover:text-vermillion transition-colors tracking-[0.18em]"
            >
              Get in touch ──→
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
