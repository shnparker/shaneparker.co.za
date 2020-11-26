import Form from "@/components/form/Form";
import GitHubIcon from "svg/GitHubIcon";
import LinkedInIcon from "svg/LinkedInIcon";
import TwitterIcon from "svg/TwitterIcon";

export default function Contact() {
  return (
    <section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
            Ask me any question about anything you want.
          </p>
        </div>
        <div className="my-14">
          <Form />
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="mt-8 text-xl  text-gray-500 dark:text-gray-400 leading-8">
            Want to grab a coffee instead? Give me a call at +(27)-23... I'm not putting my phone
            number on the internet lol. Hit me up on this form or on my LinkedIn and we can arrange
            to meet up.
          </p>
          <div className="flex pt-4 space-x-6">
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
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-3xl mb-4">
            Learn more about contact preferences
          </h2>
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            <p className="mb-4">
              I'm a rather private person concerned about the state of personal information on the
              internet. I prefer not to share personal details with bots and scrapers, and have
              provided appropriate methods of contact above. It might not prevent data harvesting,
              but it's something.
            </p>
            <p>
              I believe social media to be a plague on society. I have no social media of any kind,
              unless you count LinkedIn for professional use only. Twitter is a tool to keep up with
              updates in the tech space and I will not reply on there, but you can follow me for any
              news I might post. Please email me instead to make contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
