'use client'

import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { title: string } }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`/api/work-experience?title=${encodeURIComponent(params.title)}`)
            console.log(data)
            setData(await data.json())
        }
        fetchData()
    }, [params.title])

    if (!data) return <p>Failed to fetch data.</p>

    // TODO: Define the type of data
    console.log(data)

    return (
        <React.Fragment>
            <h1>{params.title}</h1>
            <div>Work In Progress...</div>
        </React.Fragment>
    )
}
