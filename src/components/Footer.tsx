import GitHubIcon from "svg/GitHubIcon";
import LinkedInIcon from "svg/LinkedInIcon";
import TwitterIcon from "svg/TwitterIcon";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://www.twitter.com/shnparker"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.github.com/shnparker"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/shnparker/"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-600 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Shane Parker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
