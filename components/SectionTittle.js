import React from 'react'

export default function SectionTittle({ left, tittle, subTittle }) {
    return (
        <>
            <h2 className={`text-2xl font-semibold font-mono ${!left && " text-center"}`}>
                {tittle}
            </h2>
            <p className={`text-lg mt-2 text-gray-400 ${!left && " text-center"}`}>
                {subTittle}
            </p>
        </>
    )
}
