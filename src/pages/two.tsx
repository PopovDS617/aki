import React from 'react';

import Button from '../components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PawIcon from '../components/icons/PawIcon';
import Image from 'next/image';
import leftPic from '../../public/images/second-pic-left.jpg';
import rightPic from '../../public/images/second-pic-right.jpg';

const PageTwo = () => {
  const optionsStart = {
    initial: { opacity: 0, x: -180 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -180 },
  };

  const optionsEnd = {
    initial: { opacity: 0, x: 180 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 180 },
  };

  const optionsLeftPic = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 180 },
  };
  const optionsRightPic = {
    initial: { opacity: 0, y: -180 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -180 },
  };

  return (
    <div className="page-two">
      <motion.div
        className="second-page-photo"
        variants={optionsLeftPic}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Image
          src={leftPic}
          width={380}
          height={550}
          alt="cat-pic"
          objectFit="contain"
          quality={100}
          priority
        />
      </motion.div>
      <motion.div
        className="second-page-photo"
        variants={optionsRightPic}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Image
          src={rightPic}
          width={380}
          height={550}
          alt="cat-pic"
          objectFit="contain"
          quality={100}
          priority
        />
      </motion.div>
      <motion.div
        className="header-text-start-page-two"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>{`I'm already one year old`}</p>
      </motion.div>
      <motion.div
        className="header-text-end-page-two"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p>{`not a kitten anymore!`}</p>
      </motion.div>
      <Button styles="button-next">
        <Link href="/three">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>next</p>
      </Button>
      <Button styles="button-back">
        <Link href="/one">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>back</p>
      </Button>
    </div>
  );
};

export default PageTwo;
