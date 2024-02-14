import Link from 'next/link'
import React from 'react'
import { getAuthorData } from '@/lib/cmsClient'

type AuthorLinkProps = {
    link: string
    content: string
}
const AuthorLink: React.FC<AuthorLinkProps> = ({ link, content }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">{content}, </Link>
)

type AuthorParagraphProps = {
    content: string
}
const AuthorParagraph: React.FC<AuthorParagraphProps> = ({ content }) => (
    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{content}</p>
)

export const Author = async (): Promise<React.JSX.Element> => {
    const contents = await getAuthorData()

    if (contents === null) return <p>Failed to fetch author data</p>

    return (
        <React.Fragment>
            {contents.results.map((block) => {
                // TODO: define types
                const text = block[block.type]['rich_text'][0].text
                const content = text.content
                const link = text.link
                return link ?
                    <AuthorLink key={block.id} link={link.url} content={content} /> :
                    <AuthorParagraph key={block.id} content={content} />
            })}
        </React.Fragment>
    )
}
