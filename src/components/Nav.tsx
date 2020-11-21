import { ReactEventHandler, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "@/svg/CloseIcon";
import MenuIcon from "@/svg/MenuIcon";
import BrandIcon from "svg/BrandIcon";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectItem() {
    setIsOpen(false);
  }

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <BrandIcon className="block lg:hidden h-16 mt-2 -ml-2 w-auto" />
              <BrandIcon className="hidden lg:block h-16 mt-2 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <DesktopItem href="/">Home</DesktopItem>
              <DesktopItem href="/about">About</DesktopItem>
              <DesktopItem href="/tech">Tech</DesktopItem>
              <DesktopItem href="/contact">Ask me things</DesktopItem>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className={`${isOpen ? "hidden" : "block"} h-6 w-6`} aria-hidden="true" />
              <CloseIcon className={`${isOpen ? "block" : "hidden"} h-6 w-6`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileItem href="/" onClick={() => handleSelectItem()}>
            Home
          </MobileItem>
          <MobileItem href="/about" onClick={() => handleSelectItem()}>
            About
          </MobileItem>
          <MobileItem href="/tech" onClick={() => handleSelectItem()}>
            Tech
          </MobileItem>
          <MobileItem href="/contact" onClick={() => handleSelectItem()}>
            Ask me things
          </MobileItem>
        </div>
      </div>
    </nav>
  );
}

interface HeaderItemProps {
  href: string;
  children: ReactNode;
}

function DesktopItem({ href, children }: HeaderItemProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none ${
          isActive
            ? "border-red-500 text-gray-900 dark:text-white"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}

interface MobileHeaderItemProps extends HeaderItemProps {
  onClick: ReactEventHandler;
}

function MobileItem({ href, children, onClick }: MobileHeaderItemProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
          isActive
            ? "border-red-500 text-red-700 bg-red-50"
            : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
