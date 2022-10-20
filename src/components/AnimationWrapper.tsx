import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const AnimationWrapper = (props: Props) => {
  const options = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={options}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
export default AnimationWrapper;
