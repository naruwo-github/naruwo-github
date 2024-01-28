import { AUTHOR, MAIL } from "../constants/identity"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SNSIcons"

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
                <TwitterIcon />
                <GithubIcon />
                <LinkedinIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
