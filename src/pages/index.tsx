import Button from '../components/Button';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import MovingPaws from '../components/MovingPaws';
import CatModel from '../components/3dmodel/three-loader';

const HomePage = () => {
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
    <div className="homepage-container">
      <motion.div
        variants={pageOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <div className="cat-three-model">
          <CatModel />
        </div>
      </motion.div>
      <motion.div
        variants={buttonOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.1, delay: 2 }}
      >
        <Button styles="homepage-button">
          <Link href="/one">{`let's go`}</Link>
        </Button>
      </motion.div>
      <MovingPaws />
    </div>
  );
};

export default HomePage;
