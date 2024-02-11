import React from 'react'

type AuthorProps = {
    urlLinkedin: string;
    urlWantedly: string;
}

export const Author: React.FC<AuthorProps> = ({ urlLinkedin, urlWantedly }) => {
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
