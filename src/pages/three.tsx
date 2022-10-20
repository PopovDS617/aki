import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';

type Props = {};

const PageThree = (props: Props) => {
  return (
    <div className="page-one">
      three
      <Button styles="button-next">
        <Link href="/">home</Link>
      </Button>
      <Button styles="button-back">
        <Link href="/two">two</Link>
      </Button>
    </div>
  );
};

export default PageThree;
