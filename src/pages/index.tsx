import Link from "next/link";
import Image from "next/image";
import BrandIcon from "@/svg/BrandIcon";

export default function Home() {
  return (
    <section className="py-16">
      <div className="text-center">
        <BrandIcon className="inline-block h-24 w-24 rounded-full" />
        <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Hi, I'm Shane.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500">
          I build software for the web.
        </p>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/shnparker/image/upload/c_crop,g_custom/v1605639970/photos/PSX_20190114_223926_diytaa.jpg"
                      alt="Picture of the author with trees in the background"
                      width="1184"
                      height="1376"
                      loading="eager"
                      className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500">
                    Photograph by Megan Burnett
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p>
                  I'm a software engineer with an affinity for frontend development and
                  people-orientated collaboration. I also co-founded{" "}
                  <a
                    href="http://sitestack.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-brand-red hover:text-brand-red-dark"
                  >
                    Sitestack
                  </a>{" "}
                  to add a human layer ontop of technology for small businesses.
                </p>
              </div>
              <div className="mt-4 prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  I currently spend the majority of my time in React and Next.js. After hours, I'm a
                  gaming nerd and enjoy hiking in the luxuries Cape Town has to offer.
                </p>
                <p>Here's some cool facts about me:</p>
                <ul>
                  <li>
                    I try to be as minimalist as possible in all life aspects. Get rid of your
                    things if you want to be happy.
                  </li>
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
                    My 1RM deadlift was 170kg, before a shoulder injury ruined it all (we'll get
                    back there eventually).
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