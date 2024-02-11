import React from "react"
import { URL_LINKEDIN, URL_WANTEDLY, MAIL } from "../constants/identity"
import { Author } from "@/components/Author"
import { Contact } from "@/components/Contact"
import { WorkExperience } from "@/components/WorkExperience"

type SectionElement = {
  title: string
  content: React.ReactNode
}

const SectionElements: SectionElement[] = [
  {
    title: "Author",
    content: <Author urlLinkedin={URL_LINKEDIN} urlWantedly={URL_WANTEDLY} />,
  },
  {
    title: "Work Experience",
    content: <WorkExperience />,
  },
  {
    title: "Contact",
    content: <Contact email={MAIL} />,
  },
]

export default function Home() {
  return (
    <React.Fragment>
      {SectionElements.map((element, _index) => {
        const title = element.title
        const content = element.content

        return (
          <section key={title} className="py-5 md:py-10 lg:py-15">
            <div className="container px-4 md:px-6">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{title}</h2>
                {content}
              </div>
            </div>
          </section>
        )
      })}
    </React.Fragment>
  )
}
