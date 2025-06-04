import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: 'IBM SkillsBuild Program',
    role: 'AI/ML Intern',
    location: 'Remote',
    period: 'June 2024 - July 2024',
    description: 'Built and operationalized machine learning models using Python, NumPy, and Pandas on IBM Watson Studio, improving prediction accuracy by 70% and reducing processing latency by 30%. Streamlined preprocessing workflows, enhancing data handling efficiency and model performance.',
    tech: ['Python', 'NumPy', 'Pandas', 'IBM Watson Studio'],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-11/12 md:w-3/4 mx-auto mt-28 py-12 px-6">
      <style>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          position: relative;
        }
        .bg-animation {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(29, 78, 216, 0.3), rgba(67, 56, 202, 0.3), rgba(29, 78, 216, 0.3));
          background-size: 200% 200%;
          animation: gradientFlow 8s ease infinite;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <motion.div
        className="glass-container relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-animation" />
        <div className="relative z-10 p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
            My Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white/20 dark:bg-white/10 p-6 rounded-xl border border-white/40 shadow-lg backdrop-blur-lg"
                variants={cardVariants}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-indigo-500 text-2xl" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.role} | {exp.period}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/30 dark:bg-white/10 text-blue-900 dark:text-white
                                 rounded-full text-xs font-medium border border-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;