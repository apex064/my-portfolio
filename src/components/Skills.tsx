import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Skills() {
  const [skillCategories, setSkillCategories] = useState<Array<{ title: string; skills: Array<{ name: string; icon?: string }> }>>([]);

  useEffect(() => {
    axios.get('/api/skills').then((res) => {
      // expecting flat list, group by category if you store a category field in the DB
      // for simplicity we assume `title` == category if available
      const categories: any = {};
      res.data.forEach((s: any) => {
        const cat = s.category || 'Misc';
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push(s);
      });
      setSkillCategories(
        Object.entries(categories).map(([title, skills]) => ({ title, skills }))
      );
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-center mb-12 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="white"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.07}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer border border-white/20">
                <h3 className="font-semibold text-white mb-4 text-lg">{category.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center hover:text-white transition-colors duration-200"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="inline w-5 h-5 mr-2"
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

