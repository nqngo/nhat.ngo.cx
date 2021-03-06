import { Transition } from "@headlessui/react"
import { useState } from "react"

import MainLogo from "../assets/svg/programmer.svg"
import GithubLogo from "../assets/svg/github.svg"
import LinkedInLogo from "../assets/svg/linkedin.svg"

export default function Header({ location }) {
  const [showBurger, setshowBurger] = useState(false)
 
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left-side header */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger button */}
            <button
              onClick={() => setshowBurger(!showBurger)}
              className={` ${showBurger ? "nav-open" : ""} inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out`}
              aria-label="Main menu"
              aria-expanded={showBurger}
            >

              {/* Burger */}
                <svg
                  className={`h-8 w-8 ${showBurger ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              {/* X */}
              <svg
                className={`h-8 w-8 ${showBurger ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex-shrink-0 p-0.5 rounded-full bg-gradient-to-br from-indigo-500 via-yellow-400 to-red-800">
              <MainLogo className="block h-10 w-10 bg-indigo-900 rounded-full transform hover:rotate-12 hover:scale-105" />
            </div>
            {/* Desktop menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex pt-1">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Computing
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Cooking
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          
          {/* Right-side header */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="https://github.com/nqngo" target="_blank" title="My Github"
              className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              <GithubLogo className="h-8 w-8" fill="currentColor" stroke="currentColor" />
            </a>
            <a href="https://www.linkedin.com/in/nqngo/" target="_blank" title="My LinkedIn"
              className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Github"
            >
              <LinkedInLogo className="h-8 w-8" fill="currentColor" stroke="currentColor" />
            </a>
            <div className="ml-3 relative"></div>
          </div>
        </div>
        {/* Hamburger menu */}
        <Transition
          show={showBurger}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="-mx-2">
            <div className="px-2 pt-2 pb-3 bg-indigo-800 rounded-b-md">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Computing
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Cooking
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                About
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  )
}
