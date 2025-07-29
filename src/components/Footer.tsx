import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/apex064',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chima-chidiebere-sunday-a4117933b',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/apex064',
      icon: Twitter,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

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
    <motion.footer
      ref={ref}
      style={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-zinc-900 text-center py-10 rounded-xl"
    >
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <IconComponent size={24} />
            </motion.a>
          );
        })}
        <motion.a
          href="https://codepen.io/apex064"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.228 7.716l-.015.015-.044.035-.06.05-.035.04-.05.056-.025.048-.035.057-.02.05c-.004.018-.01.04-.01.06l-.017.04-.018.05L0 8.198v7.645l.018.042.017.053c.01.02.018.04.03.072.003.018.015.037.02.055l.035.064.03.053.044.057.046.045.06.042.046.03.06.042.044.04.015.02L11.42 23.81c.347.232.796.232 1.142 0l11.212-7.526.015-.015.044-.035.06-.05.035-.04.05-.056.025-.048.035-.057.02-.05c.004-.018.01-.04.01-.06l.017-.04.018-.05.018-.045v-7.635zM12 1.21l9.925 6.628-4.45 2.98L12 7.828l-5.475 2.99-4.45-2.98L12 1.21zm-6.9 8.375l3.9 2.61v5.125l-8-5.35v-4.775l4.1 2.39zm.9 3.685l4.1-2.74 4.1 2.74-4.1 2.74-4.1-2.74zm6 2.61v-5.125l3.9-2.61 4.1-2.39v4.775l-8 5.35z"/>
          </svg>
        </motion.a>
      </div>
      <p className="text-gray-500 text-sm">© 2025 Apex064 – All rights reserved</p>
    </motion.footer>
  );
}

