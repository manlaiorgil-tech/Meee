import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SunMoon, KheeCorner } from './Ornament';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-felt">
      {/* Hero image — parallax */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <img
          src="/hero.png"
          alt="Manlai Orgil — portrait in a Mongolian yurt"
          className="h-full w-full object-cover"
          style={{ filter: 'saturate(1.1) contrast(1.08) brightness(0.98) sepia(0.08)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-felt/40 via-felt/5 to-newsprint/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/35 to-transparent" />
      </motion.div>

      {/* Sun / Moon ornament — repositioned below taller masthead */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute right-10 z-10 lg:right-20"
        style={{ top: 'calc(var(--header-h, 180px) + 1.5rem)' }}
      >
        <SunMoon className="h-14 w-14 text-white lg:h-20 lg:w-20" />
      </motion.div>

      {/* Mongolian script — vertical right edge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 text-white/60 font-mongolian text-2xl lg:text-3xl leading-loose lg:right-8"
        style={{ writingMode: 'vertical-lr' }}
      >
        ᠮᠠᠨᠯᠠᠶ · ᠣᠷᠭᠢᠯ
      </motion.div>

      {/* Khee corner ornaments — newspaper frame corners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute left-4 bottom-[22%] z-10 text-white/25 w-14 h-14 lg:w-20 lg:h-20 lg:left-8"
      >
        <KheeCorner rotate={180} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute right-14 bottom-[22%] z-10 text-white/20 w-14 h-14 lg:w-20 lg:h-20 lg:right-24"
      >
        <KheeCorner rotate={270} />
      </motion.div>

      {/* Content overlay */}
      <motion.div
        style={{ opacity, paddingTop: '11.5rem' }}
        className="relative z-10 flex h-full flex-col justify-between px-8 pb-14 lg:px-16 lg:pb-20"
      >
        {/* Dateline / eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="dateline text-white/65 tracking-[0.4em]"
        >
          Аян · Journey
        </motion.p>

        {/* Name — masthead headline in Playfair Display 900 Italic */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="masthead-title text-white leading-[0.85] tracking-tightest text-[17vw] lg:text-[11vw]"
          >
            Manlai
            <br />
            Orgil
          </motion.h1>
        </div>

        {/* Deck copy + scroll hint */}
        <div className="flex items-end justify-between gap-8 pr-14 lg:pr-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-display italic max-w-md text-white/80 text-lg leading-snug lg:text-xl"
          >
            From the steppes of Mongolia to the streets of Dublin — a marketer,
            designer &amp; photographer telling stories along the way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden text-white/50 text-xs tracking-[0.3em] uppercase whitespace-nowrap md:block"
          >
            ↓ Scroll
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
