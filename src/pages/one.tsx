import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import PawIcon from '../components/icons/PawIcon';
import { motion } from 'framer-motion';
import picSource from '../../public/images/first-pic.jpg';
import Image from 'next/image';

const PageOne = () => {
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

  const optionsPic = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="page-one">
      <motion.div
        className="first-page-photo"
        variants={optionsPic}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Image
          src={picSource}
          width={700}
          height={700}
          alt="cat-pic"
          quality={100}
          priority
          objectFit="contain"
        />
      </motion.div>

      <motion.div
        className="header-text-start-page-one"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>{`Hi, I'm Aki`}</p>
      </motion.div>
      <motion.div
        className="header-text-end-page-one"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p>{`Nice to meet you!`}</p>
      </motion.div>
      <Button styles="button-next">
        <Link href="/two">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>next</p>
      </Button>
      <Button styles="button-back">
        <Link href="/">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>home</p>
      </Button>
    </div>
  );
};

export default PageOne;
