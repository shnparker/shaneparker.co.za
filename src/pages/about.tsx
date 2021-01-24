import Image from "next/image";

export default function About() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="mt-2 md:mt-10 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl dark:text-white">
          About me
        </h2>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
          The Tale of Shane: Definitive Edition
        </p>
      </div>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <p className="text-xl text-gray-500 leading-8">
              Nestled within the confines of the great Table Mountain and it's surrounding areas,
              was a devloper with a dream to create quality software. This chapter chronicles his
              journey from junior developer to present day.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Chapter 1: The Intern</h2>
            <p>
              I started off working as an intern at Full Facing during the final year of my studies.
              The interns were tasked with assisting the core development team on an assortment of
              web applications in Play Framework (Scala/Javascript). During my year at the company,
              I developed the skills required to build static websites, help with web applications
              and gained exposure to agile workflows.
            </p>
            {/* <Image
              className="w-full rounded-lg"
              src="https://res.cloudinary.com/shnparker/image/upload/v1611493499/photos/21BF3923-F89F-4A52-904B-59FCEBDCF7C8_1_105_c_eadmnj.jpg"
              alt="Image of the author in 2016"
              width="873"
              height="873"
            /> */}
            <p>
              As the year drew to a close and my studies finished, I decided to seek permanent
              employment on OfferZen.
            </p>
            <h2>Chapter 2: The Junior</h2>
            <p>
              My first job was to be the frontend developer in a very small team (I was the second
              member). I was solely responsible for the look and feel of the web application, with
              assistance of my senior mentor. I was exposed to Vue, React and Angular as we
              experimented with the best solutions for the job. Eventually we decided to stick with
              Vue. As time went by, we hired more developers. I was placed into a role of
              responsiblity where I would have to guide these new juniors and spearhead the
              frontend.
            </p>
            <p>
              Unfortunately, the company went south. After two years, the company was liquidated and
              everybody got retrenched. OfferZen saves the day, again.
            </p>
            {/* <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                width="1310"
                height="873"
              />
              <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
            </figure> */}
            <h2>Chapter 3: The Developer</h2>
            <p>
              Joining Go2Africa meant becoming more comfortable with a full-stack in Ruby and
              Javascript. When the team became large enough, we split responsibilities for each
              developer. I became part of the frontend team, with occassional assistance in backend
              work. The large majority of my time was spent in React and associated technologies.
              The true potential of what I am capable of was revealed to me through the work I did
              here.
            </p>
            <p>Legend has it that I still work here to this day.</p>

            <h2>Chapter 4: The Future</h2>
            <p>
              In the future, I would like to be able to stand alone as a full-stack developer and do
              any task that is required of me (my love will always remain for frontend). I would
              love to work with Go, React, and learn more about databases. Being a people person, I
              envison my future as a manager, looking after the needs of my team and bringing out
              the best in others.
            </p>
            <p>Prophecies have foretold of what is yet to come.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
