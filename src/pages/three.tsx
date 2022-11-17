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
      <div className="page-three-content">
        <div className="page-three-header">
          <motion.h1
            variants={optionsStart}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Also I am:
          </motion.h1>
        </div>
        <div className="page-three-spinner-container">
          <div className="page-three-spinner-and-text">
            <motion.div
              variants={spinnerOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 1 }}
            >
              <CatSpinner duration="0.9s" width="150px" height="150px" />
            </motion.div>
            <motion.p
              variants={textOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 1 }}
            >
              Fast
            </motion.p>
          </div>
          <div className="page-three-spinner-and-text">
            <motion.div
              variants={spinnerOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <CatSpinner duration="1s" width="150px" height="150px" />
            </motion.div>
            <motion.p
              variants={textOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Agile &
            </motion.p>
          </div>
          <div className="page-three-spinner-and-text">
            <motion.div
              variants={spinnerOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <CatSpinner duration="1.2s" width="150px" height="150px" />
            </motion.div>
            <motion.p
              variants={textOptions}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              Handsome
            </motion.p>
          </div>
        </div>
      </div>

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
