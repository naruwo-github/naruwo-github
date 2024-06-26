"use client";

import React from "react";
import { useWorkExperience } from "@/hooks/useWorkExperience";
// biome-ignore lint/suspicious/noShadowRestrictedNames: Because next provides a global Error component
import Error from "next/error";

export default function Page({ params }: { params: { title: string } }) {
    const { workExperience, isLoading, isError } = useWorkExperience(
        params.title,
    );

    if (isLoading) return <p>Loading...</p>;
    if (isError)
        return (
            <Error statusCode={500} title="Failed to fetch work experience data" />
        );

    const description = workExperience.description;
    const richText = description.rich_text[0];
    if (!Object.keys(richText).includes('plain_text')) return <p>Failed to fetch work experience data</p>;

    const plainText = (richText as { plain_text: unknown }).plain_text;
    if (typeof plainText !== 'string') return <p>Failed to fetch work experience data</p>;

    return (
        <React.Fragment>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">{params.title}</h1>
            {plainText}
        </React.Fragment>
    );
}
