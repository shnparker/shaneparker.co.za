import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h1 className="mt-2 md:mt-10 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white">
          Hi, I'm Shane.
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
          I build software for the web.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 dark:bg-gray-800 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mt-4 md:mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200 dark:text-gray-600"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 md:aspect-h-7 lg:aspect-none">
                    <Image
                      src="https://res.cloudinary.com/shnparker/image/upload/c_scale,w_560/v1605639970/photos/PSX_20190114_223926_diytaa.jpg"
                      alt="Picture of the author with trees in the background"
                      width="1184"
                      height="1376"
                      loading="eager"
                      className="rounded-lg shadow-lg object-cover object-center"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500 dark:text-gray-400">
                    Photograph by Megan Burnett
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500 dark:text-white">
                  I'm a software engineer with an affinity for frontend development and
                  people-orientated collaboration. I also co-founded{" "}
                  <a
                    href="http://sitestack.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    Sitestack
                  </a>{" "}
                  to add a human layer ontop of technology for small businesses.
                </p>
              </div>
              <div className="mt-5 prose dark:prose-dark text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 dark:text-gray-300">
                <p>
                  I currently spend the majority of my time in React and Next.js. After hours, I'm a
                  gamer, musician and gym enthusiast.
                </p>
                <p>Here's some cool facts about me:</p>
                <ul>
                  <li>I'm minimalist as possible in all life aspects. Get rid of your things.</li>
                  <li>
                    I love listening to and making music.{" "}
                    <a
                      href="http://bmthorizon.co/PH.SH/?iqid=website.masthead"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AOTY 2020 pick
                    </a>
                  </li>
                  <li>
                    I've been contemplating starting a youtube chanel for years. Teaching things is
                    one way to ensure you know what you're talking about.
                  </li>
                </ul>
                <p>
                  If you're interested in{" "}
                  <Link href="/about">
                    <a>learning more</a>
                  </Link>{" "}
                  about me, my career and my hobbies, feel free to browse around. You can also learn
                  more about{" "}
                  <Link href="/tech">
                    <a>how this site was built</a>
                  </Link>
                  , or{" "}
                  <Link href="/contact">
                    <a>ask me questions</a>
                  </Link>
                  . Remember to stay hydrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
