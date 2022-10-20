import React from 'react';

import Button from '../components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PawIcon from '../components/icons/PawIcon';

type Props = {};

const PageTwo = (props: Props) => {
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

  return (
    <div className="page-two">
      <motion.div
        className="header-text-start"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >{`I'm already one year old`}</motion.div>
      <motion.div
        className="header-text-end"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >{`not a kitten anymore!`}</motion.div>
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
