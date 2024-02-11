import React from "react"
import { AUTHOR, MAIL, URL_LINKEDIN, URL_WANTEDLY } from "../constants/identity"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SNSIcons"

const Author = (urlLinkedin: string, urlWantedly: string) => {
  return (
    <React.Fragment>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        Web(Full-stack) Developer, Tennis and Snowboard Lover. 🧑‍💻🎾🏂
      </p>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        I have experience in a
        variety of technologies and I&apos;m always looking for new challenges to improve User Interface and Developer Experience.
        <br />
        <br />
        Please see these links for more information.
      </p>
      <a href={urlLinkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
      , <a href={urlWantedly} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Wantedly</a>
    </React.Fragment>
  )
}

const WorkExperience = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

const Contact = (email: string) => {
  return (
    <React.Fragment>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-500 dark:text-gray-400">{email}</p>
        <div className="flex space-x-4">
          <TwitterIcon />
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </div>
    </React.Fragment>
  )
}

type SectionElement = {
  id: string;
  content: React.JSX.Element;
}

const SectionElements: SectionElement[] = [
  {
    id: "Author",
    content: Author(URL_LINKEDIN, URL_WANTEDLY)
  },
  {
    id: "Work Experience",
    content: WorkExperience()
  },
  {
    id: "Contact",
    content: Contact(MAIL)
  },
]

export default function Home() {
  return (
    <React.Fragment>
      {SectionElements.map((element, _index) => (
        <section key={element.id} className="py-5 md:py-10 lg:py-15">
          <div className="container px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{element.id}</h2>
              {element.content}
            </div>
          </div>
        </section>
      ))}
    </React.Fragment>
  )
}
