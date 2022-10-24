import React, { useState, useEffect } from 'react';
import PawIcon from './icons/PawIcon';
import { motion } from 'framer-motion';

type Props = {};

const MovingPaws = (props: Props) => {
  const [catStep, setCatStep] = useState(-1);

  const options = {
    initial: { opacity: 1, x: 0, y: 0 },
    animate: { opacity: 0, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  useEffect(() => {
    const updateCatStep = () => {
      if (catStep > 22) {
        return setCatStep(1);
      } else {
        setCatStep((prev) => {
          return prev + 1;
        });
      }
    };
    const updateTimer = setInterval(updateCatStep, 1000);

    return () => clearInterval(updateTimer);
  }, [catStep]);

  return (
    <div className="moving-paws-container">
      <div style={{ gridColumn: '1/10', gridRow: '1/2' }}>
        {(catStep === 2 || catStep === 22) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '2/10', gridRow: '2/2' }}>
        {(catStep === 3 || catStep === 21) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '3/10', gridRow: '1/2' }}>
        {(catStep === 4 || catStep === 20) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '4/10', gridRow: '2/2' }}>
        {(catStep === 5 || catStep === 19) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '5/10', gridRow: '1/2' }}>
        {(catStep === 6 || catStep === 18) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '6/10', gridRow: '2/2' }}>
        {(catStep === 7 || catStep === 17) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '7/10', gridRow: '1/2' }}>
        {(catStep === 8 || catStep === 16) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '8/10', gridRow: '2/2' }}>
        {(catStep === 9 || catStep === 15) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '9/10', gridRow: '1/2' }}>
        {(catStep === 10 || catStep === 14) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
      <div style={{ gridColumn: '10/10', gridRow: '2/2' }}>
        {(catStep === 11 || catStep === 13) && (
          <motion.div
            className={
              catStep <= 12
                ? 'moving-paw-right-to-left'
                : 'moving-paw-left-to-right'
            }
            variants={options}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, delay: 0 }}
          >
            <PawIcon />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MovingPaws;
