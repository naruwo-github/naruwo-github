import React from 'react'
import { getAuthorData } from '@/lib/cmsClient';

export const Author: React.FC = async () => {
    const contents = await getAuthorData()

    return (
        <React.Fragment>
            {contents && contents.results.map((block) => {
                // @ts-ignore
                const text = block[block.type]['rich_text'][0].text
                const content = text.content
                const link = text.link
                return link ?
                    <a key={block.id} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">{content}, </a> :
                    <p key={block.id} className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{content}</p>
            })}
        </React.Fragment>
    )
}
