import CloseIcon from "svg/CloseIcon";
import MenuIcon from "svg/MenuIcon";
import { ReactEventHandler, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectItem() {
    setIsOpen(false);
  }

  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex">
              <DesktopItem href="/">Home</DesktopItem>
              <DesktopItem href="/about">About</DesktopItem>
              <DesktopItem href="/tech">Tech</DesktopItem>
              <DesktopItem href="/contact">Ask me things</DesktopItem>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className={`${isOpen ? "hidden" : "block"} h-6 w-6`} />
              <CloseIcon className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className={`block sm:hidden`}
      >
        <div className="pt-2 pb-3">
          <MobileItem href="/" handleItemClick={() => handleSelectItem()}>
            Home
          </MobileItem>
          <MobileItem href="/about" handleItemClick={() => handleSelectItem()}>
            About
          </MobileItem>
          <MobileItem href="/tech" handleItemClick={() => handleSelectItem()}>
            Tech
          </MobileItem>
          <MobileItem href="/contact" handleItemClick={() => handleSelectItem()}>
            Ask me things
          </MobileItem>
        </div>
      </Transition>
    </nav>
  );
}

interface HeaderItemProps {
  href: string;
  children: ReactNode;
}

interface MobileHeaderItemProps extends HeaderItemProps {
  handleItemClick: ReactEventHandler;
}

function DesktopItem({ href, children }: HeaderItemProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
          isActive
            ? "text-gray-900 border-red-500 focus:border-red-700"
            : "text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}

function MobileItem({ href, children, handleItemClick }: MobileHeaderItemProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        onClick={handleItemClick}
        className={`mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out ${
          isActive
            ? "text-red-700 bg-red-50 focus:outline-none"
            : "hover:border-red-700 focus:text-red-800 focus:bg-red-100"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
