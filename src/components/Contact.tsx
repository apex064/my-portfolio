import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="max-w-3xl mx-auto px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
      
      {/* Buy Me a Coffee Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8"
      >
        <a href="https://www.buymeacoffee.com/apex064" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☣️&slug=apex064&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
            alt="Buy Me a Coffee"
            className="mx-auto h-[60px]"
          />
        </a>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-neon] transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-neon] transition-all"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-neon] transition-all resize-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[--color-neon] text-black px-6 py-3 rounded-full font-semibold neon-shadow hover:neon-shadow-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </motion.section>
  );
}