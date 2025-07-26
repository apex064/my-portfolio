import { motion } from 'motion/react';
import profileImg from '../assets/profile.jpg'; // Adjust path based on file location

export function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl">✦</div>
        <img
          src={profileImg}
          alt="Apex064"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <nav className="flex gap-6 text-gray-300 text-sm">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-white transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
