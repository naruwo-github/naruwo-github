import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import { WorkExperienceCard } from './WorkExperienceCard'
import { getWorkExperienceData } from '@/lib/cmsClient'

export const WorkExperience = async (): Promise<React.JSX.Element> => {
    const data: QueryDatabaseResponse | null = await getWorkExperienceData()

    if (data === null) return <p>Failed to fetch work experience data</p>

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.results.map((result) => {
                    // TODO: define types
                    const properties = result.properties
                    const section = properties.section.title[0].plain_text
                    const startedAt = properties.startedAt.date.start
                    const endedAt = properties.endedAt.date?.start ? properties.endedAt.date.start : 'Present'
                    const role = properties.role['rich_text'][0].plain_text
                    return <WorkExperienceCard key={section} title={section} startedAt={startedAt} endedAt={endedAt} role={role} />
                })}
            </div>
        </React.Fragment>
    )
}
