import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
