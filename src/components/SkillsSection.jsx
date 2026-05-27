import { motion } from 'motion/react';
import { OrnamentalRule } from './Ornament';

const skills = [
  { num: '01', label: 'Marketing',     detail: 'Campaign strategy, social, community' },
  { num: '02', label: 'Brand Design',  detail: 'Identity, visual systems, guidelines' },
  { num: '03', label: 'Photography',   detail: 'Documentary, portrait, editorial' },
  { num: '04', label: 'Web Design',    detail: 'Sites, landing pages, UI' },
  { num: '05', label: 'Business Dev',  detail: 'Partnerships, growth, strategy' },
  { num: '06', label: 'DJing',         detail: 'Events, sets, curation' },
  { num: '07', label: 'Modeling',      detail: 'Editorial, commercial' },
  { num: '08', label: 'Selling',       detail: 'Direct sales, digital commerce' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-felt text-bone">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section header */}
        <div className="mb-10 border-b-2 border-bone/30 pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-gold border-gold">Section 04</span>
            <span className="dateline text-bone/35">What I bring to the table</span>
          </div>
          <h2 className="masthead-title text-bone text-4xl md:text-6xl lg:text-7xl leading-[1.0]">
            Disciplines.
          </h2>
        </div>

        {/* Ornamental rule in dark context */}
        <div className="mb-8 text-bone/30">
          <OrnamentalRule bg="#1B3A4A" />
        </div>

        {/* Newspaper index — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left column */}
          <div className="md:border-r-2 md:border-bone/20 md:pr-10">
            {skills.slice(0, 4).map((skill, i) => (
              <motion.div
                key={skill.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-bone/15 py-7"
              >
                <p className="col-span-2 dateline text-bone/35">{skill.num}</p>
                <p className="col-span-5 font-playfair italic text-2xl text-bone">{skill.label}</p>
                <p className="col-span-5 dateline text-bone/50 tracking-[0.15em] text-right">{skill.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="md:pl-10">
            {skills.slice(4).map((skill, i) => (
              <motion.div
                key={skill.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-bone/15 py-7"
              >
                <p className="col-span-2 dateline text-bone/35">{skill.num}</p>
                <p className="col-span-5 font-playfair italic text-2xl text-bone">{skill.label}</p>
                <p className="col-span-5 dateline text-bone/50 tracking-[0.15em] text-right">{skill.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom ornamental rule */}
        <div className="mt-8 text-bone/30">
          <OrnamentalRule bg="#1B3A4A" />
        </div>
      </div>
    </section>
  );
}
