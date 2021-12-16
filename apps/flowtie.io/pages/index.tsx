/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import MailingListSubscribe from '../components/subscribe/subscribe';
import Header from '../components/header/header';
import Head from 'next/head';

import swan from '../components/header/assets/Swan.png';

const navigation = [];

const features = [
  {
    name: 'Invite team members',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'List view',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
];

export default function Example() {
  return (
    <div
      className="cccccbcrkftibekjndgrkbrkhfjleltigruchcfntgbk
     "
    >
      <Head>
        <title>Flowtie | Coming Soon!</title>
      </Head>
      <div className="mx-auto lg:max-w-[1280px] flex flex-col px-2">
        {/* <div className="flex px-4 py-4">
          <span className="inline-block text-4xl font-extrabold tracking-tight text-[#F288B9]/60">
            Flowtie
          </span>
        </div> */}
        <div className="flex flex-wrap lg:pt-12 lg:px-0">
          <div className="order-1 lg:order-2 min-w-[375px] lg:max-w-[45%] flex flex-col items-center w-full">
            <div className="md:max-w-[500px]">
              <Image src={swan} priority={true} alt="swan-shaped floatie" />
            </div>
          </div>
          <div className="order-2 lg:order-1 min-w-[375px] lg:max-w-[50%] flex flex-col lg:items-center w-[100%]">
            <div className="px-4 flex justify-center flex-col">
              {/*<p className="items-start mt-4 lg:mt-12 md:mt-8 text-white text-xl md:text-2xl md:max-w-[650px] md:text-center md:mx-auto lg:text-left  mb-4">*/}
              {/*  <span className="bg-primary p-1 rounded uppercase tracking-tight text-sm">*/}
              {/*    Serverless DX*/}
              {/*  </span>*/}
              {/*</p>*/}
              <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl tracking-tight font-extrabold text-[#F288B9]/80 md:text-center lg:text-left ">
                <span>Any way you want it,</span>
                <span className="block text-secondary">
                  that&apos;s the way you need it.
                </span>
              </h1>
              <p className="mt-4 lg:mt-12 md:mt-8 text-gray-600 text-xl md:text-2xl md:max-w-[650px] md:text-center md:mx-auto lg:text-left">
                <span className="font-bold">Flowtie</span> streams logs,
                metrics, CI/CD updates, and other relevant information about
                your serverless deployments directly to you, wherever you are,
                on all your devices.
              </p>
            </div>
          </div>
        </div>
        <MailingListSubscribe />
        {/*<div className="flex justify-center my-12 px-4 mt-24">*/}
        {/*  <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:grid-flow-col lg:gap-x-6 lg:gap-y-10 lg:gap-x-8">*/}
        {/*    {features.map((feature) => (*/}
        {/*      <div key={feature.name} className="relative">*/}
        {/*        <dt>*/}
        {/*          <CheckIcon*/}
        {/*            className="absolute h-6 w-6 text-gray-600"*/}
        {/*            aria-hidden="true"*/}
        {/*          />*/}
        {/*          <p className="ml-9 text-lg leading-6 font-bold tracking-tight text-gray-600">*/}
        {/*            {feature.name}*/}
        {/*          </p>*/}
        {/*        </dt>*/}
        {/*        <dd className="mt-2 ml-9 text-lg text-gray-600">*/}
        {/*          {feature.description}*/}
        {/*        </dd>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </dl>*/}
        {/*</div>*/}
        <div className="mt-6 py-12">
          {/*<h2 className="text-center text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl tracking-tight font-extrabold text-primary md:text-center lg:text-left">*/}
          {/*  <span className="block text-secondary">Coming soon...</span>*/}
          {/*  <span>Act now for early access!</span>*/}
          {/*</h2>*/}
        </div>
      </div>
    </div>
  );

  // <p className="mt-3 text-base text-gray-600 sm:mt-5 xs:text-lg xs:font-bold sm:text-xl lg:text-xl xl:text-4xl xl:mt-12">
  //   <span className="font-bold">Flowtie</span> streams logs,
  //   metrics, and other relevant data about your serverless
  //   functions to all your devices. From development to
  //   production; keep your head above water with Flowtie.
  // </p>
  // <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-[#F288B9] sm:mt-5 sm:text-6xl lg:mt-6 lg:text-6xl xl:text-7xl">
  //   <span className="">Any way you want it</span>
  //   <span className="block text-[rgb(242,164,69)]">
  //     that&apos;s the way you need it
  //   </span>
  // </h1>;

  return (
    <div className="relative overflow-hidden theme-light bg-background min-h-screen">
      <Header brandName="Flowtie" />

      <main className="">
        <div className="sm:pt-6 lg:pt-0 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:place-content-center lg:px-2 lg:mt-8">
              <div className="mx-auto max-w-md px-2 sm:max-w-2xl sm:px-6 sm:text-center md:text-center xl:max-w-4xl xl:px-0 lg:col-start-1">
                <div className="lg:pb-6" style={{}}>
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a> */}
                  <div className="lg:col-start-1 lg:row-start-1 lg:col-start-2">
                    <img
                      alt="Flowtie logo"
                      src="/assets/img/Swan.png"
                      className="w-auto object-contain lg:hidden"
                    />
                  </div>

                  <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-[#F288B9] sm:mt-5 sm:text-6xl lg:mt-6 lg:text-6xl xl:text-7xl">
                    <span className="">Any way you want it</span>
                    <span className="block text-[rgb(242,164,69)]">
                      that&apos;s the way you need it
                    </span>
                  </h1>

                  {/* <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p> */}
                  <MailingListSubscribe />
                  {/* <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          >
                            Join the waitlist
                          </button>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1 mt-12 lg:col-start-2">
                <img
                  alt="Flowtie logo"
                  src="/assets/img/Swan.png"
                  className="w-auto object-contain hidden lg:block"
                />
              </div>
              {/*<div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">*/}
              {/*  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"></div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        <div className="py-12"></div>
      </main>
    </div>
  );
}

// <Popover as="header" className="relative">
//   <div className="bg-[#fef55c] ">
//     <nav
//       className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
//       aria-label="Global"
//     >
//       <div className="flex items-center flex-1">
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <a href="#">
//             <span className="sr-only">Workflow</span>
//           </a>
//           <div className="-mr-2 flex items-center md:hidden">
//             {/* <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
//                     <span className="sr-only">Open main menu</span>
//                     <MenuIcon className="h-6 w-6" aria-hidden="true" />
//                   </Popover.Button> */}
//           </div>
//         </div>
//         <div className="hidden space-x-8 md:flex md:ml-10">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-base font-medium text-[#F288B9] hover:text-gray-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>
//
//       <div className="hidden md:flex md:items-center md:space-x-6">
//         {/* <a
//                 href="#"
//                 className="text-base font-medium text-white hover:text-gray-300"
//               >
//                 Log in
//               </a>
//               <a
//                 href="#"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
//               >
//                 Start free trial
//               </a> */}
//       </div>
//     </nav>
//   </div>
//
//   <Transition
//     as={Fragment}
//     enter="duration-150 ease-out"
//     enterFrom="opacity-0 scale-95"
//     enterTo="opacity-100 scale-100"
//     leave="duration-100 ease-in"
//     leaveFrom="opacity-100 scale-100"
//     leaveTo="opacity-0 scale-95"
//   >
//     <Popover.Panel
//       focus
//       className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
//     >
//       <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
//         <div className="px-5 pt-4 flex items-center justify-between">
//           <div>
//             {/* <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt=""
//                   /> */}
//           </div>
//           <div className="-mr-2">
//             <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
//               <span className="sr-only">Close menu</span>
//               <XIcon className="h-6 w-6" aria-hidden="true" />
//             </Popover.Button>
//           </div>
//         </div>
//         <div className="pt-5 pb-6">
//           <div className="px-2 space-y-1">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="mt-6 px-5">
//             <a
//               href="#"
//               className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
//             >
//               Start free trial
//             </a>
//           </div>
//           <div className="mt-6 px-5">
//             <p className="text-center text-base font-medium text-gray-500">
//               Existing customer?{' '}
//               <a href="#" className="text-gray-900 hover:underline">
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </Popover.Panel>
//   </Transition>
// </Popover>
