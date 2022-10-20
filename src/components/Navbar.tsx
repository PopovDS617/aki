import React from 'react';
import Button from './Button';
import Link from 'next/link';
import HomeIcon from './icons/HomeIcon';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="navbar">
      <div className="nav-button-container"></div>
      <Button styles="return-home-button">
        <Link href="/">
          <div>
            <HomeIcon />
          </div>
        </Link>
      </Button>
      <div className="nav-links-container">
        <Link href="/one">
          <a className={currentPath === '/one' ? 'active-link link' : 'link'}>
            1
          </a>
        </Link>
        <Link href="/two">
          <a className={currentPath === '/two' ? 'active-link link' : 'link'}>
            2
          </a>
        </Link>
        <Link href="/three">
          <a className={currentPath === '/three' ? 'active-link link' : 'link'}>
            3
          </a>
        </Link>
        <Link href="/four">
          <a className={currentPath === '/four' ? 'active-link link' : 'link'}>
            4
          </a>
        </Link>
        <Link href="/five">
          <a className={currentPath === '/five' ? 'active-link link' : 'link'}>
            5
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
