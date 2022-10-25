import React from 'react';

import CatModel from '../components/3dmodel/three-loader';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Link from 'next/link';

const AboutPage = () => {
  const buttonOptions = {
    hidden: { opacity: 0, x: 0, y: 120 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 120 },
  };
  return (
    <div className="about-page">
      <div className="cat-three-model">
        <CatModel />
      </div>
      <div className="about-description">one two three</div>
      <motion.div
        variants={buttonOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.1, delay: 2 }}
      >
        <Button styles="homepage-button">
          <Link href="/">{`start again`}</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
