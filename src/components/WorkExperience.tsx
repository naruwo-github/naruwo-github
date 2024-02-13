import React from 'react'

export const WorkExperience: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">Commmune Inc</h3>
                    <p className="text-gray-500 dark:text-gray-400">2023 - Present</p>
                    <p className="text-gray-500 dark:text-gray-400">Web Developer/Team Leader</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">MonotaRO Inc</h3>
                    <p className="text-gray-500 dark:text-gray-400">2021 - 2023</p>
                    <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">Smiloops Inc</h3>
                    <p className="text-gray-500 dark:text-gray-400">2019 - 2021</p>
                    <p className="text-gray-500 dark:text-gray-400">Mobile Developer(Internship)</p>
                </div>
            </div>
        </React.Fragment>
    )
}
