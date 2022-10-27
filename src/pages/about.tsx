import React from 'react';
import Image from 'next/image';
import catIcon from '../../public/images/red-cat-icon.png';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Link from 'next/link';

const AboutPage = () => {
  const pageOptions = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  const buttonOptions = {
    hidden: { opacity: 0, x: 0, y: 120 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 120 },
  };
  return (
    <div className="about-page">
      <motion.div
        className="about-content"
        variants={pageOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <div className="about-cat-icon">
          <Image src={catIcon} height={300} width={300} alt="cat icon" />
        </div>
        <div className="about-description">
          <h3>This project is built by Dmitry Popov with:</h3>
          <ul className="tech-stack-list">
            <li>- Typescript</li>
            <li>- NextJS</li>
            <li>- Sass</li>
            <li>- Framer Motion </li>
            <li>- ThreeJS</li>
          </ul>
        </div>
        <motion.div
          variants={buttonOptions}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1.1, delay: 1.2 }}
        >
          <Button styles="github-button">
            <a
              href="https://github.com/PopovDS617/aki"
              target="_blank"
              rel="noreferrer"
            >
              {`GitHub repo`}
            </a>
          </Button>
          <Button styles="start-again-button">
            <Link href="/">{`start again`}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
