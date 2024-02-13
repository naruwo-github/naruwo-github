import React from "react";

export default function Page({ params }: { params: { title: string } }) {
    return (
        <React.Fragment>
            <h1>{params.title} Inc</h1>
            <div>Work In Progress...</div>
        </React.Fragment   >
    )
}