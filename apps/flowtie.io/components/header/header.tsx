import './header.module.css';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

import swan from './assets/Swan.png';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {}

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
];

const HeaderLogo: FC = () => {
  return (
    <div className="flex items-start">
      <Link href="#">
        <a>
          <h1 className="text-3xl tracking-tight font-extrabold text-secondary">
            Flowtie
          </h1>
          {/*<img*/}
          {/*  alt="Flowtie logo"*/}
          {/*  src="/assets/img/Swan.png"*/}
          {/*  className="h-16 sm:h-20 w-auto"*/}
          {/*/>*/}
        </a>
      </Link>
    </div>
  );
};

export function Header(props: HeaderProps) {
  return (
    <Popover as="header" className="relative bg-background">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <HeaderLogo />
          <div className="hidden ml-10 space-x-8 lg:block"> </div>
          <div className="ml-10 space-x-4"> </div>
        </div>
      </nav>
    </Popover>
  );
}

export default Header;
