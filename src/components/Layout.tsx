import React from 'react';
import HomeIcon from './icons/HomeIcon';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="layout">
      {currentPath !== '/' && (
        <Button styles="return-home-button">
          <Link href="/">
            <div>
              <HomeIcon />
            </div>
          </Link>
        </Button>
      )}

      {props.children}
    </div>
  );
};

export default Layout;
