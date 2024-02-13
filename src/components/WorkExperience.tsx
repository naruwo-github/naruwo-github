import React from 'react'
import { getWorkExperienceData } from '@/lib/cmsClient'

export const WorkExperience = async (): Promise<React.JSX.Element> => {
    const data = await getWorkExperienceData()

    if (data === null) return <p>Failed to fetch work experience data</p>

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.results.map((result) => {
                    // @ts-ignore
                    const properties = result.properties
                    const section = properties.section.title[0].plain_text
                    const startedAt = properties.startedAt.date.start
                    const endedAt = properties.endedAt.date?.start ? properties.endedAt.date.start : 'Present'
                    const role = properties.role['rich_text'][0].plain_text
                    return (
                        <div key={section} className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold">{section} Inc</h3>
                            <p className="text-gray-500 dark:text-gray-400">{startedAt} - {endedAt}</p>
                            <p className="text-gray-500 dark:text-gray-400">{role}</p>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
