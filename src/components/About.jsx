    import React from 'react';
    import { motion } from 'framer-motion';
    import Typewriter from 'typewriter-effect';

    // Placeholder for profile image since local assets can't be imported in this context
    const profileImg = 'https://github.com/Abhay-hack/brief/blob/main/src/assets/Abhay.jpg?raw=true';

    const About = () => {
      return (
        <>
          <style>{`
            @keyframes gradientDescent {
              0% {
                background-position: 0% 0%;
              }
              50% {
                background-position: 0% 100%;
              }
              100% {
                background-position: 0% 0%;
              }
            }
            .animated-gradient-bg {
              background: linear-gradient(
                180deg,
                #bae6fd,  /* sky blue */
                #c7d2fe,  /* light indigo */
                #ffffff,  /* white */
                #9ca3af,  /* slate-400, softer gray-blue */
                #6366f1,  /* indigo-500 */
                #60a5fa   /* blue-300 */
              );
              background-size: 400% 400%;
              animation: gradientDescent 40s linear infinite;
              transition: background 0.5s ease;
            }
            @media (max-width: 640px) {
              .profile-img {
                width: 172px;
                height: 202px;
              }
              .section-title {
                font-size: 1.5rem;
                line-height: 2rem;
              }
            }
          `}</style>

          <motion.section
            id="about"
            className="relative w-11/12 sm:w-3/4 mx-auto mt-12 py-4 sm:py-8 px-4 sm:px-6 rounded-lg shadow-lg overflow-hidden animated-gradient-bg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div className="relative flex flex-col sm:flex-row items-center justify-between">
              {/* Left: Image */}
              <div className="w-full sm:w-[35%] flex justify-center mx-1 my-2">
                <img
                  src={profileImg}
                  alt="Abhay Gupta"
                  className="rounded-xl shadow-lg w-12 sm:w-70 h-12 sm:h-auto object-cover profile-img"
                />
              </div>

              {/* Right: Text */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full sm:w-[40%] text-center sm:text-left mx-1 my-4"
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-black section-title">Hi Abhay here</h2>
                <div className="hidden sm:block">
                  <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-black leading-snug">
                    <Typewriter
                      options={{
                        strings: [
                          "I'm a Full-Stack Developer",
                          "I'm an AI/ML Enthusiast",
                          "I'm an Open-Source Contributor",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                      }}
                    />
                  </h2>
                  <p className="text-base sm:text-lg text-blue-400 dark:text-blue-300 leading-relaxed">
                    Fourth-year Computer Science and Engineering (Data Science) student at Maharana Pratap Engineering College
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-blue-400">
                    Exploring Web, AI, and Open Source — one line of code at a time 🚀
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </>
      );
    };
export default About;
