'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

type WorkExperienceCardProps = {
    title: string
    role: string
    startedAt: string
    endedAt: string
}
export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ title, startedAt, endedAt, role }) => {
    return (
        <Card className='flex flex-col space-y-2'>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>{title} Inc</CardTitle>
                <CardDescription>{startedAt} - {endedAt}</CardDescription>
            </CardHeader>
            <CardContent className='text-gray-500 dark:text-gray-400'>{role}</CardContent>
        </Card>
    )
}