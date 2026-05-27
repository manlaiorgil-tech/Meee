import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const aboutImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966.JPG-xTGxKHzqx2YIOrdfduKm5fTQXXw5My.jpeg';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section stamp + headline */}
        <div className="mb-10 border-b-2 border-ink pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-vermillion border-vermillion">Section 01</span>
            <span className="dateline text-ink/40">Mongolia · Dublin · 2025</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="masthead-title text-ink text-4xl leading-[1.0] md:text-6xl lg:text-7xl max-w-4xl"
          >
            From the Steppes of Mongolia to the Streets of Dublin.
          </motion.h2>
        </div>

        {/* 3-column newspaper grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

          {/* Column 1 — portrait photo */}
          <div className="md:col-span-4 md:border-r-2 md:border-ink md:pr-8 mb-8 md:mb-0">
            <div className="overflow-hidden">
              <motion.img
                src={aboutImage}
                alt="Eagle hunter, Mongolia"
                loading="lazy"
                style={{ y: imageY, width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center top' }}
                className="halftone"
              />
            </div>
            <p className="dateline text-ink/45 mt-2">
              Eagle hunter, Bayan-Ölgii · Монгол Улс
            </p>
          </div>

          {/* Column 2 — main body text with drop cap */}
          <div className="md:col-span-4 md:border-r-2 md:border-ink md:px-8 mb-8 md:mb-0">
            <p className="newspaper-text drop-cap text-ink">
              I&apos;m a creative professional working at the intersection of
              marketing, design, and photography. My work blends Mongolian
              heritage with a modern visual language — two worlds that seem
              distant but share the same instinct for story.
            </p>
            <p className="newspaper-text text-ink mt-4">
              Born on the steppe, raised under vast Mongolian skies, I grew up
              surrounded by colour, pattern, and craft — in the weave of a
              felt rug, in the painted door of a ger, in the silver filigree
              of my grandmother&apos;s jewelry. These are not decorations.
              They are a language.
            </p>
            <p className="newspaper-text text-ink mt-4">
              Today I carry that visual grammar into brand work, photography,
              and digital design — translating culture into modern creative output.
            </p>
          </div>

          {/* Column 3 — pull quote + secondary text */}
          <div className="md:col-span-4 md:pl-8">
            <div className="pull-quote text-ink mb-8">
              Two cultures. One visual language. Stories that travel.
            </div>
            <p className="newspaper-text text-ink">
              Whether it&apos;s capturing the perfect shot at golden hour on the
              Irish coast or designing brand identities that fuse East and West,
              I bring creativity, cultural depth, and a global perspective to
              every project I touch.
            </p>
            <div className="mt-8 border-t border-ink pt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="dateline text-ink/45 mb-1">Base</p>
                <p className="font-playfair text-sm font-normal">Dublin, Ireland</p>
              </div>
              <div>
                <p className="dateline text-ink/45 mb-1">Origin</p>
                <p className="font-playfair text-sm font-normal">Ulaanbaatar, Mongolia</p>
              </div>
              <div>
                <p className="dateline text-ink/45 mb-1">Discipline</p>
                <p className="font-playfair text-sm font-normal">Marketing & Design</p>
              </div>
              <div>
                <p className="dateline text-ink/45 mb-1">Languages</p>
                <p className="font-playfair text-sm font-normal">Mongolian, English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
