import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import CakeIcon from "svg/CakeIcon";
export default function NotFound() {
  const { asPath } = useRouter();

  return (
    <section className="py-16 px-2 md:px-0">
      <div className="text-center">
        <h1 className="mt-2 md:mt-10 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white">
          The page could not be found
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
          Let's just{" "}
          <Link href="/">
            <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
              go home
            </a>
          </Link>{" "}
          and pretend this didn't happen...
        </p>
      </div>

      <div className="text-center">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  How did I get here?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  <p>Here are some possibilities:</p>
                  <ul className="mt-4">
                    <li>
                      The page <code>{asPath}</code> does not exist.
                    </li>
                    <li>
                      You've made a typo on the url <code>{asPath}</code>.
                    </li>
                    <li>
                      The link is broken,{" "}
                      <Link href="/contact">
                        <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
                          please mail me
                        </a>
                      </Link>
                      .
                    </li>
                  </ul>
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Where do I go now?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  <p>Let's get outta this place:</p>
                  <ul className="mt-4">
                    <li>
                      <Link href="/about">
                        <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
                          Learn more
                        </a>
                      </Link>{" "}
                      about me here.
                    </li>
                    <li>
                      <Link href="/tech">
                        <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
                          Find out how
                        </a>
                      </Link>{" "}
                      this site was built
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
                          Ask me anything
                        </a>
                      </Link>{" "}
                      you want to know.
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="text-center mt-16 text-gray-900 dark:text-white">
            <p className="text-xl font-bold">
              Still not sure? Have some cake. Cake fixes everything.
            </p>
            <CakeIcon className="inline-block h-40 w-40 text-cyan-700 dark:text-red-500 mt-20 lg:mt-28" />
          </div>
        </div>
      </div>
    </section>
  );
}
