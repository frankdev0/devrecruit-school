import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header, { HeaderDark } from '@/components/layout/Header';

interface Props {
  isNav?: boolean;
  isDark?: boolean;
  isFooter?: boolean;
  children: React.ReactNode;
  isActive?: string[] | undefined;
}

export default function Layout({ children, isNav = true, isFooter = true, isActive, isDark }: Props) {
  // Put Header or Footer Here
  return (
    <div className='flex min-h-screen w-screen flex-col'>
      {isNav && (
        !isDark ?
          <Header isActive={isActive} /> :
          <HeaderDark isActive={isActive} />
      )}
      <div className='mb-60'>{children}</div>
      {isFooter && <Footer />}
    </div>
  );
}
