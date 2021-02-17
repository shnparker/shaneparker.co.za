import Link from "next/link";
import Image from "next/image";
import CheckIcon from "~/svg/CheckIcon";

export default function Tech(): JSX.Element {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="mt-2 md:mt-10 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl dark:text-white">
          Tech showcase
        </h2>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
          A showcase of skills used to build this website.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                React, Next.js, and Typescript
              </h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                A smooth development experience, with type safety and the benefits of static site
                generation.
              </p>

              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Performance and SEO
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        All pages on this site are statically pre-rendered and provide unmatched
                        performance and SEO thanks to Next.js.
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Automatic image optimization
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Images are optimized on demand for size, format and responsivitiy to reduce
                        load times and improve Core Web Vital scores.
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Rapid development
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        The tools and frameworks used allow for rapid and development with minimal
                        errors and roadblocks.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto"
                width="490"
                height="473"
                src="https://res.cloudinary.com/shnparker/image/upload/v1611415586/photos/Screenshot_2021-01-23_at_17.21.11_vzcq2r.png"
                alt="Lighthouse score of this website"
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                  Responsive design and night mode
                </h3>
                <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                  TailwindCSS is a phenomenal CSS framework that provides a utility first approach.
                  TailwindUI is a library of excellent designs for developers.
                </p>

                <div className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dl>
                        <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                          Night mode support
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          This website respects system preferences of the visitor and will adapt
                          it&apos;s color scheme accordingly.
                        </dd>
                      </dl>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dl>
                        <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                          Fully responsive
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          By using a mobile-first approach, appropriate scaling has been made for
                          every viewport.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <Image
                  className="relative mx-auto"
                  width="490"
                  height="473"
                  src="https://res.cloudinary.com/shnparker/image/upload/v1611433210/photos/Responsive-Design_r8uwb7.png"
                  alt="Night mode version of this website"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                Other features
              </h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                A small amount of external integrations enhance the capabilities of the website and
                Next.js provides some user-failure safety nets.
              </p>

              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Error monitoring
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Any errors on this website will be reported to Sentry and I&apos;ll be
                        alerted via email to attend to it.
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Form submission handling
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        The contact page handles and forwards submissions to my email address with
                        minimal config required.
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <CheckIcon className="h-6 w-6" aria-hidden="true"></CheckIcon>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dl>
                      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        Custom error handling
                      </dt>
                      <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Next.js provides error handling pages to support server errors by default.
                        I&apos;ve built a{" "}
                        <Link href="/nothing">
                          {/* eslint-disable-next-line */}
                          <a className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400">
                            custom 404 page
                          </a>
                        </Link>{" "}
                        to demonstrate overriding.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto"
                width="490"
                height="473"
                src="https://res.cloudinary.com/shnparker/image/upload/v1611417251/photos/Screenshot_2021-01-23_at_17.54.04_kwra8e.png"
                alt="Sentry dashboard for this website"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
