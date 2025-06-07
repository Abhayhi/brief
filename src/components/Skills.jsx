import React from 'react';
    import { motion } from 'framer-motion';
    import {
      SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
      SiTailwindcss, SiPython, SiPostgresql, SiDocker,
      SiGit, SiGo, SiCplusplus
    } from 'react-icons/si';
    import { FaAws } from 'react-icons/fa';

    const skills = [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React.js', icon: <SiReact className="text-sky-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
      { name: 'SQL', icon: <SiPostgresql className="text-indigo-500" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
      { name: 'Git', icon: <SiGit className="text-red-400" /> },
      { name: 'Go', icon: <SiGo className="text-cyan-600" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> }
    ];

    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
      }
    };

    const skillVariants = {
      hidden: { opacity: 0, scale: 0.5, y: 50, rotate: -10 },
      visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        transition: {
          delay: Math.random() * 0.3 + i * 0.1,
          duration: 0.6,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120
        }
      }),
      hover: {
        scale: 1.1,
        rotate: 5,
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
        transition: { duration: 0.3 }
      }
    };

    const Skills = () => {
      return (
        <div className="relative w-11/12 sm:w-3/4 mx-auto mt-12 py-8 px-4 sm:px-6">
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
            .skill-card {
              transition: all 0.3s ease;
            }
            @media (max-width: 640px) {
              .skill-card {
                padding: 0.5rem;
              }
              .skill-icon {
                font-size: 1.5rem;
              }
              .section-title {
                font-size: 1.5rem;
                line-height: 2rem;
              }
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
            <div className="relative z-10 p-4 sm:p-8">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6 sm:mb-8 section-title">
                My Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card flex items-center justify-center gap-3 px-2 sm:px-4 py-2 bg-white/20 dark:bg-white/10 text-blue-900 dark:text-white rounded-full border border-white/40 shadow-lg backdrop-blur-lg"
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={index}
                    whileHover="hover"
                  >
                    <span className="text-xl sm:text-2xl skill-icon">{skill.icon}</span>
                    <span className="hidden sm:inline text-sm font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      );
    };

export default Skills;