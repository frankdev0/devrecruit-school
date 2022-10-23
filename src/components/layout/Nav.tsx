import React from 'react';

import MenuDropdown from './dropdown';

export default function Nav() {
  return (
    <nav className='h-20 px-2 py-2.5 sm:px-4 w-full'>
      <div className='container mx-auto flex flex-wrap justify-end'>
        <MenuDropdown />
      </div>
    </nav>
  );
}
