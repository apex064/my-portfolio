import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Apex064 delivered polished, high-performance code exactly as promised.",
      author: "Mattys Inc",
    },
    {
      quote: "His design sensibility and attention to code structure felt truly world‑class.",
      author: "mr awesome",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="testimonials"
      className="max-w-4xl mx-auto px-6 py-20 bg-white/10 backdrop-blur-lg rounded-2xl"
    >
      <h2 className="text-2xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={250}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 p-6 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <strong className="block text-gray-100">– {testimonial.author}</strong>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
}

