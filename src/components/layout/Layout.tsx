import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex min-h-screen w-screen flex-col'>
      <Header />
      <div className='mb-60'>{children}</div>
      <Footer />
    </div>
  );
}
