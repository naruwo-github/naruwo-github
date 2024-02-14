'use client'

import Error from "next/error";
import React from "react";
import { useWorkExperience } from "@/hooks/useWorkExperience";

export default function Page({ params }: { params: { title: string } }) {
    const { workExperience, isLoading, isError } = useWorkExperience(params.title)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <Error statusCode={500} title="Failed to fetch work experience data" />

    return (
        <React.Fragment>
            <h1>{params.title}</h1>
            <div>Work In Progress...</div>
            {workExperience.toString()}
        </React.Fragment>
    )
}
