import Link from "next/link"
import { JSX, SVGProps } from "react"
import { AUTHOR, MAIL, URL_GITHUB, URL_LINKEDIN, URL_TWITTER } from "../constants/identity"

export default function Home() {
  return (
    <main className="flex-1 px-4 md:px-6 shadow-md">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {AUTHOR}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Web Developer, Tennis and Snowboard Lover. 🧑‍💻🎾🏂
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m a full-stack web developer.
              <br />
              I have experience in a
              variety of technologies and I&apos;m always looking for new challenges to improve User Interface and Developer Experience.
              <br />
              <br />
              Please see these links for more information.
            </p>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
            , <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Wantedly</a>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-semibold">Commmune Inc</h3>
                <p className="text-gray-500 dark:text-gray-400">2023 - Present</p>
                <p className="text-gray-500 dark:text-gray-400">Web Developer/Team Leader</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-semibold">MonotaRO Inc</h3>
                <p className="text-gray-500 dark:text-gray-400">2021 - 2023</p>
                <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-semibold">Smiloops Inc</h3>
                <p className="text-gray-500 dark:text-gray-400">2019 - 2021</p>
                <p className="text-gray-500 dark:text-gray-400">Mobile Developer(Internship)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-500 dark:text-gray-400">{MAIL}</p>
              <div className="flex space-x-4">
                <Link href={URL_TWITTER}>
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link href={URL_GITHUB}>
                  <GithubIcon className="h-6 w-6" />
                </Link>
                <Link href={URL_LINKEDIN}>
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const TwitterIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

const GithubIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const LinkedinIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}