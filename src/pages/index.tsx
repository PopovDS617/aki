import Button from '../components/Button';
import Link from 'next/link';
import Image from 'next/image';
import catIcon from '../../public/images/red-cat-icon.png';
import { motion } from 'framer-motion';
import MovingPaws from '../components/MovingPaws';

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
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <Image src={catIcon} height={400} width={400} alt="cat icon" />
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
