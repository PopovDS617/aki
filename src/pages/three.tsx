import React from 'react';

import Button from '../components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PawIcon from '../components/icons/PawIcon';
import CatSpinner from '../components/ui/CatSpinner';

type Props = {};

const PageThree = (props: Props) => {
  const optionsStart = {
    initial: { opacity: 0, x: -180 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -180 },
  };

  const spinnerOptions = {
    initial: { opacity: 0, x: -330 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -330 },
  };

  const textOptions = {
    initial: { opacity: 0, x: 330 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 330 },
  };

  return (
    <div className="page-three">
      <motion.div className="page-three-content">
        <div className="page-three-spinner-container">
          <motion.div
            variants={spinnerOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <CatSpinner duration="0.9s" />
          </motion.div>
          <motion.p
            variants={textOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Fast
          </motion.p>
        </div>
        <div className="page-three-spinner-container">
          <motion.div
            variants={spinnerOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, delay: 2 }}
          >
            <CatSpinner duration="1s" />
          </motion.div>
          <motion.p
            variants={textOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, delay: 2 }}
          >
            Agile and
          </motion.p>
        </div>
        <div className="page-three-spinner-container">
          <motion.div
            variants={spinnerOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            <CatSpinner duration="1.2s" />
          </motion.div>
          <motion.p
            variants={textOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            Handsome{' '}
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className="header-text-start-page-three"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >{`Also I am:`}</motion.div>

      <Button styles="button-next">
        <Link href="/four">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>next</p>
      </Button>
      <Button styles="button-back">
        <Link href="/two">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>back</p>
      </Button>
    </div>
  );
};

export default PageThree;
