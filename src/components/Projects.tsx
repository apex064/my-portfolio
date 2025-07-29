import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Local image imports
import riaHardware from '../assets/ria-hardware.jpg';
import linuxOS from '../assets/linux-os.jpg';
import tradingBot from '../assets/trading-bot.jpg';
import ttsTranslator from '../assets/tts-translator.jpg';
import riaAI from '../assets/ria-ai.jpg';
import enterprise from '../assets/enterprise.jpg';
import apexWeather from '../assets/apex-weather.jpg';
import offlineChatbot from '../assets/offline-chatbot.jpg';
import fileShare from '../assets/file-share.jpg'; // ✅ Make sure this image exists

export function Projects() {
  const projects = [
    {
      title: 'Ria Hardware',
      description: 'Hardware prototype for Ria (IoT personal assistant on Raspberry Pi)',
      image: riaHardware,
      link: 'https://github.com/apex064?tab=repositories',
    },
    {
      title: 'Custom Linux OS',
      description: 'Custom Linux OS (in development)',
      image: linuxOS,
      link: 'https://github.com/apex064/apexos-trixie',
    },
    {
      title: 'Trading Bot',
      description: 'Trading bot with arbitrage detection for multiple exchanges',
      image: tradingBot,
      link: 'https://apex-exchange-bot-main-1.onrender.com/',
    },
    {
      title: 'TTS Translator',
      description: 'Text-to-speech translator supporting all languages',
      image: ttsTranslator,
      link: 'https://apex-tts-translate.onrender.com/',
    },
    {
      title: 'Ria AI Bot',
      description: 'Ria AI: Python-based assistant bot',
      image: riaAI,
      link: 'https://github.com/apex064',
    },
    {
      title: 'Enterprise Website',
      description: 'Enterprise website development & design',
      image: enterprise,
      link: 'https://github.com/apex064',
    },
    {
      title: 'Apex Weather',
      description: 'Beautiful weather app built with TypeScript, Tailwind, and Weather API',
      image: apexWeather,
      link: 'https://apex-weather2.vercel.app/',
    },
    {
      title: 'Offline Chatbot',
      description: 'AI-powered chatbot that works without internet, built with local LLM and Python',
      image: offlineChatbot,
      link: 'https://github.com/apex064/offline-chatbot',
    },
    {
      title: 'File Share',
      description: 'Peer-to-peer file sharing app with drag-and-drop and secure encryption',
      image: fileShare,
      link: 'https://file-share2.vercel.app/',
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
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                transitionSpeed={400}
              >
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20">
                  <img
                    src={project.image}
                    alt={project.title || 'Project image'}
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </Tilt>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

