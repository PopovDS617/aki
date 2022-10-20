import Button from '../components/Button';
import Link from 'next/link';
import Image from 'next/image';
import catIcon from '../../public/images/red-cat-icon.png';
import PawIcon from '../components/icons/PawIcon';
import { motion } from 'framer-motion';

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
        <Image src={catIcon} height={500} width={500} alt="cat icon" />
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
    </div>
  );
};

export default HomePage;
