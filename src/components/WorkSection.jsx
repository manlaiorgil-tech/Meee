import { motion } from 'motion/react';

const projects = [
  {
    num: '01',
    category: 'Marketing',
    title: 'Social Campaign Strategy',
    deck: 'A brand awareness campaign across Instagram and TikTok, growing reach organically through community and content.',
    description:
      'Planned and executed a full-funnel awareness campaign. Leveraged ethnographic content strategy rooted in cultural storytelling — not trend-chasing. Organic reach grew 38% in 60 days without paid amplification.',
    result: '+38% reach in 60 days',
    year: '2024',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1817-GyRoF2HVVrvkrZBGgA9nfbvwi9cCzz.jpeg',
  },
  {
    num: '02',
    category: 'Brand Design',
    title: 'Visual Identity System',
    deck: 'A complete visual identity for a Dublin-based startup — logo, palette, typography, and brand guidelines.',
    description:
      'From first sketch to final brand book. Built a distinctive identity that avoided generic startup aesthetics in favour of something grounded — drawing on craft traditions from both the Mongolian and Irish visual canon.',
    result: 'Launched on schedule',
    year: '2024',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A107F01-6988-4B63-AD3D-61815E994894-qct7pXTUGPNWJoHYzQFsYmplg1spf6.jpg',
  },
  {
    num: '03',
    category: 'Photography',
    title: 'Documentary Portrait Series',
    deck: 'A photo series exploring identity and culture across Mongolia and Ireland — photojournalism meets portraiture.',
    description:
      'Thirty images shot across two countries over two years. The series examines what remains when you cross hemispheres — the way land and light shape a face, the way heritage persists even in diaspora.',
    result: '30 images · ongoing',
    year: '2023',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7274.JPG-Nme9dws3RXRTfBlT8vGqiKXSmQvrIu.jpeg',
  },
];

export default function WorkSection() {
  return (
    <section id="work">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section header */}
        <div className="mb-10 border-b-2 border-ink pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-vermillion border-vermillion">Section 02</span>
            <span className="dateline text-ink/40">Selected works · 2023—2025</span>
          </div>
          <h2 className="masthead-title text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.0]">
            Selected Projects.
          </h2>
        </div>

        {/* Projects as newspaper articles */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-b-2 border-ink py-12 lg:py-16"
            >
              {/* Article dateline / meta */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="section-stamp text-vermillion border-vermillion">{project.category}</span>
                <span className="dateline text-ink/40">{project.num} of 03</span>
                <span className="dateline text-ink/40">·</span>
                <span className="dateline text-ink/40">{project.year}</span>
              </div>

              {/* Headline */}
              <h3 className="masthead-title text-ink text-3xl md:text-5xl lg:text-6xl leading-tight mb-3">
                {project.title}
              </h3>

              {/* Deck */}
              <p className="font-display italic text-ink/65 text-lg leading-snug mb-8 max-w-2xl">
                {project.deck}
              </p>

              {/* Two-column article body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Image column */}
                <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2 md:pl-8' : 'md:border-r-2 md:border-ink md:pr-8'}`}>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full object-cover halftone transition-transform duration-700 hover:scale-[1.02]"
                      style={{ height: '420px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Text column */}
                <div className={`md:col-span-5 mt-6 md:mt-0 ${i % 2 === 1 ? 'md:order-1 md:border-r-2 md:border-ink md:pr-8' : 'md:pl-8'}`}>
                  <p className="newspaper-text text-ink">{project.description}</p>
                  <div className="mt-8 pt-5 border-t border-ink">
                    <p className="dateline text-ink/45 mb-1">Result</p>
                    <p className="font-playfair italic text-xl text-vermillion">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
