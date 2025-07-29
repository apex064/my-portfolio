import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

export function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return;

      const xValue = (e.clientX - bounds.left) / bounds.width;
      const yValue = (e.clientY - bounds.top) / bounds.height;

      x.set(xValue);
      y.set(yValue);
    };

    const node = ref.current;
    node?.addEventListener('mousemove', handleMouseMove);
    return () => node?.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.header
      ref={ref}
      style={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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

