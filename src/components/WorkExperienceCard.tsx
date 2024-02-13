'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type WorkExperienceCardProps = {
    title: string
    role: string
    startedAt: string
    endedAt: string
}
export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ title, startedAt, endedAt, role }) => {
    const router = useRouter()

    return (
        <Card
            className='flex flex-col space-y-2 hover:shadow-lg hover:bg-gray-100 cursor-pointer'
            onClick={() => {
                router.push(`/work-experience/${title}`)
            }}
        >
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>{title} Inc</CardTitle>
                <CardDescription>{startedAt} - {endedAt}</CardDescription>
            </CardHeader>
            <CardContent className='text-gray-500 dark:text-gray-400'>{role}</CardContent>
        </Card>
    )
}