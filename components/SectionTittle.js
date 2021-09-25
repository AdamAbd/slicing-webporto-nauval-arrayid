import React from 'react'

export default function SectionTittle({ tittle, subTittle }) {
    return (
        <>
            <h2 className="text-2xl font-semibold font-mono text-center">
                {tittle}
            </h2>
            <p className="text-lg mt-2 text-gray-400 text-center">
                {subTittle}
            </p>
        </>
    )
}
