import { motion } from 'framer-motion'; // correct import

export function Testimonials() {
  const testimonials = [
    {
      quote: "Apex064 delivered polished, high-performance code exactly as promised.",
      author: "Mattys Inc",
    },
    {
      quote: "His design sensibility and attention to code structure felt truly world‑class.",
      author: "Product Owner",
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
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)",
            }}
            className="bg-white/10 p-6 rounded-xl transition-all duration-300 cursor-pointer"
          >
            <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <strong className="block text-gray-100">– {testimonial.author}</strong>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

