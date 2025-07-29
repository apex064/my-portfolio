import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export function Hero() {
  return (
    <section id="hero" className="text-center py-20 px-4">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={1500} scale={1.02}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Design work,<br />
          <span className="text-gray-400">done smarter</span>
        </motion.h1>
      </Tilt>

      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} className="max-w-xl mx-auto mt-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400"
        >
          I build elegant digital tools for tech-first companies craving distinctive, high‑impact design.
        </motion.p>
      </Tilt>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 space-x-4 flex flex-wrap justify-center"
      >
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block bg-[--color-neon] text-black px-6 py-3 rounded-full font-semibold neon-shadow hover:neon-shadow-hover transition-all duration-300"
          >
            View Projects
          </motion.a>
        </Tilt>

        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="cv.pdf"
            download
            className="inline-block border-2 border-[--color-neon] text-[--color-neon] px-6 py-3 rounded-full font-semibold hover:bg-[--color-neon] hover:text-black transition-all duration-300"
          >
            Download CV
          </motion.a>
        </Tilt>
      </motion.div>
    </section>
  );
}

