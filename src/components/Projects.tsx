import { motion } from 'motion/react';

// Local image imports
import riaHardware from '../assets/ria-hardware.jpg';
import linuxOS from '../assets/linux-os.jpg';
import tradingBot from '../assets/trading-bot.jpg';
import ttsTranslator from '../assets/tts-translator.jpg';
import riaAI from '../assets/ria-ai.jpg';
import enterprise from '../assets/enterprise.jpg';
import apexWeather from '../assets/apex-weather.jpg';
import offlineChatbot from '../assets/offline-chatbot.jpg';

export function Projects() {
  const projects = [
    {
      title: 'Ria Hardware',
      description: 'Hardware prototype for Ria (IoT personal assistant on Raspberry Pi)',
      image: riaHardware,
    },
    {
      title: 'Custom Linux OS',
      description: 'Custom Linux OS (in development)',
      image: linuxOS,
    },
    {
      title: 'Trading Bot',
      description: 'Trading bot with arbitrage detection for multiple exchanges',
      image: tradingBot,
    },
    {
      title: 'TTS Translator',
      description: 'Text-to-speech translator supporting all languages',
      image: ttsTranslator,
    },
    {
      title: 'Ria AI Bot',
      description: 'Ria AI: Python-based assistant bot',
      image: riaAI,
    },
    {
      title: 'Enterprise Website',
      description: 'Enterprise website development & design',
      image: enterprise,
    },
    {
      title: 'Apex Weather',
      description: 'Beautiful weather app built with TypeScript, Tailwind, and Weather API',
      image: apexWeather,
    },
    {
      title: 'Offline Chatbot',
      description: 'AI-powered chatbot that works without internet, built with local LLM and Python',
      image: offlineChatbot,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20"
          >
            <img
              src={project.image}
              alt={project.title || "Project image"}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

