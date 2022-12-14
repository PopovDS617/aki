import Button from '../components/Button';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from '../components/3dmodel/model-container';
import { motion } from 'framer-motion';
import MovingPaws from '../components/MovingPaws';
import CatSpinner from '../components/ui/CatSpinner';
import ScrollDownIcon from '../components/icons/ScrollDownIcon';
import MobileVersion from '../components/MobileVersion';

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
    <div id="start" className="homepage-container">
      <motion.div
        variants={pageOptions}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <div className="cat-three-model">
          <Suspense
            fallback={<CatSpinner duration="1s" height="150px" width="150px" />}
          >
            <Canvas id="three-canvas-container" shadows>
              <Three />
            </Canvas>
          </Suspense>
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
        <div className="homepage-scroll__text">
          <ScrollDownIcon />
          <p>scroll</p>
        </div>
      </motion.div>
      <MovingPaws />
      <MobileVersion />
    </div>
  );
};

export default HomePage;
