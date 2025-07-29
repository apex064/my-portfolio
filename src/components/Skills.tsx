import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ]
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'Xcode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ]
    },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              glareMaxOpacity={0.15}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              scale={1.03}
              transitionSpeed={400}
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-white/20">
                <h3 className="font-semibold text-white mb-4 text-lg">{category.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center hover:text-white transition-colors duration-200">
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

