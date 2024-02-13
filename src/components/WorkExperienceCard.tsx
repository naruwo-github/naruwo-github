'use client'

import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type WorkExperienceCardProps = {
    title: string
    role: string
    startedAt: string
    endedAt: string
}
export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = memo(({ title, startedAt, endedAt, role }) => {
    const router = useRouter()

    return (
        <Card className='flex flex-col space-y-2 hover:shadow-lg hover:bg-gray-100'>
            <button onClick={() => {
                router.push(`/work-experience/${encodeURIComponent(title)}`)
            }}>
                <CardHeader>
                    <CardTitle className='text-xl font-semibold'>{title}</CardTitle>
                    <CardDescription>{startedAt} - {endedAt}</CardDescription>
                </CardHeader>
                <CardContent className='text-gray-500 dark:text-gray-400'>{role}</CardContent>
            </button>
        </Card>
    )
})
WorkExperienceCard.displayName = 'WorkExperienceCard'
