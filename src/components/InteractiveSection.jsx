import { motion } from 'motion/react';
import SnakeGame from '../SnakeGame';
import SpotifyPlayer from '../SpotifyPlayer';

export default function InteractiveSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-36">

        {/* Section header — newspaper style */}
        <div className="mb-10 border-b-2 border-ink pb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-stamp text-vermillion border-vermillion">Section 05</span>
            <span className="dateline text-ink/40">Built-in curiosities</span>
          </div>
          <h2 className="masthead-title text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.0]">
            A game & a track.
          </h2>
          <p className="newspaper-text text-ink/55 mt-3 max-w-md">
            A small retro game and a current favourite — built right into the page.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          <div className="col-span-12 lg:col-span-6">
            <SpotifyPlayer />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SnakeGame />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
