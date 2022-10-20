import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import PawIcon from '../components/icons/PawIcon';
import { motion } from 'framer-motion';

type Props = {};

const PageOne = (props: Props) => {
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
    <div className="page-one">
      <motion.div
        className="header-text-start"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >{`Hi, I'm Aki`}</motion.div>
      <motion.div
        className="header-text-end"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >{`Nice to meet you!`}</motion.div>
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
