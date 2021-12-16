import { FC, Fragment } from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { PlusSmIcon } from '@heroicons/react/solid';
// import Image from '../image/image';
import Button from '../button/button';
import './navigation.module.css';
import Image from 'next/image';

function className(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

/* eslint-disable-next-line */
export interface NavigationProps {
  items: NavigationItem[];
}

export interface NavigationBarProps {
  items: NavigationItem[];
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
  return (
    <Disclosure as="nav" className="theme-light bg-background shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/** This is where the brand logo and name goes */}

                <Link href={'/'}>
                  <a className="flex-shrink-0 flex items-center">
                    {/* <img
                      src={'/assets/img/Swan.png'}
                      alt="swan logo"
                      className="inline-block h-12 w-auto -mb-1"
                    /> */}
                    <p className="hidden ml-2 lg:block w-auto text-4xl font-extrabold tracking-tight text-[#F288B9]">
                      Flowtie
                    </p>
                  </a>
                </Link>

                {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}

                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  {props.items.map((item) =>
                    !item.isFlagged ? (
                      <NavigationItem
                        key={item.name}
                        name={item.name}
                        href={item.href}
                      />
                    ) : null
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <PlusSmIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Get Early Access</span>
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <button className="bg-white p-1 rounded-full text-secondary hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">V</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export function Navigation(props: NavigationProps) {
  return (
    <nav aria-label="Global">
      <div>
        <div>
          {props.items.map((item) =>
            !item.isFlagged ? (
              <NavigationItem
                name={item.name}
                key={item.name}
                href={item.href}
              />
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
}

export interface NavigationItem {
  name: string;
  href: string;
  isFlagged?: boolean;
}

export interface NavigationItemProps {
  name: string;
  href: string;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  return (
    <div className=" inline-flex items-center px-1 pt-1 ">
      <Link href={props.href}>
        <a className="text-[#F288B9] font-bold hover:text-primary text-sm border-transparent  hover:border-[#F288B9]/40 border-b-2  ">
          {props.name}
        </a>
      </Link>
    </div>
  );
};

// border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
export default NavigationBar;
