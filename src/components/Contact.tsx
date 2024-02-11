import React from 'react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SNSIcons'

export const Contact = (email: string) => {
    return (
        <React.Fragment>
            <div className="flex flex-col space-y-2">
                <p className="text-gray-500 dark:text-gray-400">{email}</p>
                <div className="flex space-x-4">
                    <TwitterIcon />
                    <GithubIcon />
                    <LinkedinIcon />
                </div>
            </div>
        </React.Fragment>
    )
}
