import GitHubIcon from "~/svg/GitHubIcon";
import LinkedInIcon from "~/svg/LinkedInIcon";
import TwitterIcon from "~/svg/TwitterIcon";

export default function SocialLinks() {
  return (
    <>
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
    </>
  );
}
