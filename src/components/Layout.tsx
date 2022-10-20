import React from 'react';
import HomeIcon from './icons/HomeIcon';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="layout">
      {currentPath !== '/' && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Navbar />
        </motion.div>
      )}

      {props.children}
    </div>
  );
};

export default Layout;
