import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/projects').then((res) => setProjects(res.data));
  }, []);

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

