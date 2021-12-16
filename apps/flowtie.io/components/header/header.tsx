import './header.module.css';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { FC } from 'react';
import Navigation from '../navigation/navigation';

/* eslint-disable-next-line */
export interface HeaderProps {
  brandName: string;
}

const HeaderLogo: FC = () => {
  return (
    <div className="flex items-start">
      <Link href="/">
        <a>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-500">
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
    <Navigation
      items={[
        { name: 'Features', href: '/features' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'About', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Support', href: '/support' },
      ]}
    />
  );
  return (
    <Popover as="header" className="relative bg-header-background">
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
