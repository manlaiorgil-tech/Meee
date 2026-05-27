import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const images = {
  street:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1817-GyRoF2HVVrvkrZBGgA9nfbvwi9cCzz.jpeg',
  childhood:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7274.JPG-Nme9dws3RXRTfBlT8vGqiKXSmQvrIu.jpeg',
  eagleHunter:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6966.JPG-xTGxKHzqx2YIOrdfduKm5fTQXXw5My.jpeg',
  clockTower:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A107F01-6988-4B63-AD3D-61815E994894-qct7pXTUGPNWJoHYzQFsYmplg1spf6.jpg',
  oldTown:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1710-zKKf1B38eBlhZbTtjLgWJmywfjrBSj.jpeg',
};

function ParallaxImage({ src, alt, caption, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div className={className}>
      <div ref={ref} className="overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y }}
          className="h-[110%] w-full object-cover halftone"
        />
      </div>
      {caption && (
        <p className="dateline text-ink/45 mt-2">{caption}</p>
      )}
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section header — newspaper style */}
        <div className="mb-10 border-b-2 border-ink pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-vermillion border-vermillion">Section 03</span>
            <span className="dateline text-ink/40">Photography · 2023—2025</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="masthead-title text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.0]"
          >
            Moments & Places.
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <ParallaxImage
            src={images.street}
            alt="Edinburgh street style"
            caption="Street style, Edinburgh · Éire"
            className="col-span-12 md:col-span-7 aspect-[3/4]"
          />
          <ParallaxImage
            src={images.eagleHunter}
            alt="Mongolian eagle hunter"
            caption="Eagle hunter, Bayan-Ölgii · Монгол Улс"
            className="col-span-12 md:col-span-5 aspect-[3/4] md:mt-32"
          />
          <ParallaxImage
            src={images.clockTower}
            alt="Edinburgh clock tower"
            caption="Clock tower, Edinburgh Old Town"
            className="col-span-12 md:col-span-5 aspect-[4/5]"
          />
          <ParallaxImage
            src={images.oldTown}
            alt="Old Town"
            caption="Old Town rooftops at dusk"
            className="col-span-12 md:col-span-7 aspect-[4/3] md:mt-24"
          />
          <ParallaxImage
            src={images.childhood}
            alt="Childhood in Mongolia"
            caption="Childhood in Mongolia · Монгол нутаг"
            className="col-span-12 aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
