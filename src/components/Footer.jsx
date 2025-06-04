import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-11/12 md:w-3/4 mx-auto mt-28 mb-6 px-6 py-4">
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
        .pdf-viewer {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 0.5rem;
        }
      `}</style>

      <motion.div
        className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow-md rounded-2xl glass-container relative"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-animation" />
        <div className="relative z-10 p-8 text-center text-blue-900 font-medium">
          
          <a
            href="/assets/Gupta_Abhay_Resume.pdf"
            download="Gupta_Abhay_Resume.pdf"
            className="mt-4 inline-flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaDownload />
            Download Resume
          </a>
          <p className="mt-4">© {new Date().getFullYear()} Abhay Gupta. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;