import React from 'react';

import Button from '../components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PawIcon from '../components/icons/PawIcon';
import Pic from '../../public/images/pic-page-four.jpg';
import Image from 'next/image';

type Props = {};

const PageFour = (props: Props) => {
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

  const optionsBottom = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 180 },
  };

  const optionsPic = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="page-four">
      <motion.div
        className="fourth-page-photo"
        variants={optionsPic}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Image
          src={Pic}
          width={700}
          height={700}
          alt="cat-pic"
          objectFit="contain"
          priority
        />
      </motion.div>

      <motion.div
        className="header-text-start-page-four"
        variants={optionsStart}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p>{`And sometimes`}</p>
      </motion.div>
      <motion.div
        className="header-text-end-page-four"
        variants={optionsEnd}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p>{`I'm lazy`}</p>
      </motion.div>

      <Button styles="button-next">
        <Link href="/five">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>next</p>
      </Button>
      <Button styles="button-back">
        <Link href="/three">
          <div>
            <PawIcon />
          </div>
        </Link>
        <p>back</p>
      </Button>
    </div>
  );
};

export default PageFour;
