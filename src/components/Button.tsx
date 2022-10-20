import React from 'react';

type Props = {
  styles: string;
  children: React.ReactNode;
};

const Button = (props: Props) => {
  return <div className={props.styles}>{props.children}</div>;
};

export default Button;
