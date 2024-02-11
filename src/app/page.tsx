import React from "react"
import { MAIL, URL_LINKEDIN, URL_WANTEDLY } from "../constants/identity"
import { Author } from "@/components/Author"
import { Contact } from "@/components/Contact"
import { WorkExperience } from "@/components/WorkExperience"

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
