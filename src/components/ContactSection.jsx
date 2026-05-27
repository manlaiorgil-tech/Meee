import { motion } from 'motion/react';

const links = [
  { label: 'Email', value: 'manlaiorgil@gmail.com', href: 'mailto:manlaiorgil@gmail.com' },
  { label: 'LinkedIn', value: 'in/manlaiorgil', href: 'https://www.linkedin.com/in/manlaiorgil' },
  { label: 'Instagram', value: '@gorehiv', href: 'https://www.instagram.com/gorehiv' },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section header — newspaper style */}
        <div className="mb-10 border-b-2 border-ink pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-vermillion border-vermillion">Section 06</span>
            <span className="dateline text-ink/40">Open for collaboration</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="masthead-title text-ink text-5xl md:text-7xl lg:text-8xl leading-[1.0]"
          >
            Let&apos;s work
            <br />
            together.
          </motion.h2>
        </div>

        <p className="newspaper-text text-ink/55 max-w-md mb-12">
          Looking for a creative marketer or designer for your next project?
          I&apos;d love to hear from you.
        </p>

        <ul className="border-t-2 border-ink">
          {links.map((link) => (
            <li key={link.label} className="border-b-2 border-ink">
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-between py-8 cursor-pointer transition-colors hover:text-vermillion"
              >
                <span className="dateline text-ink/50 group-hover:text-vermillion transition-colors duration-300">
                  {link.label}
                </span>
                <span className="flex items-center gap-4 masthead-title text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  {link.value}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
