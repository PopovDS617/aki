import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import PawIcon from '../components/icons/PawIcon';
import { motion } from 'framer-motion';
import picSource from '../../public/images/pic-page-five.jpg';
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
    <div className="page-five">
      <motion.div
        className="fifth-page-photo"
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
        className="header-text-start-page-five"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>{`But still`}</p>
      </motion.div>
      <motion.div
        className="header-text-end-page-five"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p>{`I'm a good boy!`}</p>
      </motion.div>
      <Button styles="button-next">
        <Link href="/about">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>about</p>
      </Button>
      <Button styles="button-back">
        <Link href="four">
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
