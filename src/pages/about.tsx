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
        variants={pageOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <Image src={catIcon} height={400} width={400} alt="cat icon" />
        <div className="about-description">one two three</div>
        <motion.div
          variants={buttonOptions}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1.1, delay: 1.2 }}
        >
          <div>This project is built with:
          - Typescript
            - NextJS
            - Sass
            - Framer Motion
            - ThreeJS
            
            
            
          </div>
          
           <Button styles="homepage-button">
            <Link href="https://github.com/PopovDS617/aki">{`GitHub repo`}</Link>
          </Button>
          <Button styles="homepage-button">
            <Link href="/">{`start again`}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
