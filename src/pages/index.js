import BrandIcon from "../components/BrandIcon";

export default function Home() {
  return (
    <section className="text-center py-16">
      <BrandIcon
        className="inline-block h-24 w-24 rounded-full"
        alt="A three dimensional red and light-blue square"
      />
      <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Hi, I'm Shane.
      </p>
      <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500">
        I build software for the web.
      </p>
    </section>
  );
}
