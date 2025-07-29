import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        transitionSpeed={400}
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl transition-transform duration-300 p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">About Me</h2>
          <p className="text-gray-300 text-center leading-relaxed">
            I'm Apex064, a passionate and highly motivated full-stack developer with over three years of hands-on experience building powerful, efficient, and elegant digital solutions. My journey into software development started from a deep curiosity about how technology works — and quickly evolved into a lifelong pursuit of mastering how to build it.
            <br /><br />
            I specialize in a broad range of technologies, including Python, JavaScript, and Swift, and work comfortably across both frontend and backend stacks. On the frontend, I create sleek, responsive user interfaces using modern tools like React, Tailwind CSS, and vanilla JavaScript, ensuring that every user experience feels intuitive and polished. On the backend, I build robust and scalable systems using Django, Flask, and Node.js, handling everything from database architecture and API integration to performance optimization and deployment.
            <br /><br />
            I'm also deeply involved in mobile development, particularly iOS. I use Swift and Xcode to create smooth, high-performing mobile apps with real-world utility. One of my proudest projects is building RiaBot, a personal AI assistant designed to run on Raspberry Pi — blending hardware, AI, and software into a truly smart companion. I've also developed auto-trading bots, voice-based translators, real-time weather apps, and custom Linux OS environments to expand the limits of what software can do.
            <br /><br />
            What sets me apart is not just technical skill, but my relentless desire to learn, experiment, and improve. Whether I'm building a smart assistant, automating a business workflow, or creating a beautifully designed website, I approach each project with care, precision, and a problem-solving mindset.
            <br /><br />
            I thrive in challenges, and I enjoy building tools that actually make life easier, better, or more efficient for others. I'm always exploring new technologies, pushing boundaries, and turning ideas into real, working products that deliver value. For me, coding is not just a profession — it's a craft, a creative outlet, and a way to build the future I want to see.
            <br /><br />
            If you're looking for someone who blends technical depth with a designer's eye and a builder's mindset, I'd love to connect.
          </p>
        </div>
      </Tilt>
    </motion.section>
  );
}

