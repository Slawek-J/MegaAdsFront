import React, { useEffect, useState } from 'react'
import { AddEntity } from 'types'

interface Props {
    id: string
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<AddEntity | null>(null)
    useEffect(() => {
        (async() => {
            const data = await(await fetch(`http://localhost:3001/ad/${props.id}`)).json()
            setAd(data);
        })()   
    }, [])

    if(ad === null) {
        return <p>Loading...</p>
    }

    return (
        <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {!!ad.price && <p><b>{ad.price} euro</b></p>}
        <a href={ad.url} target="_blank" rel="noreferrer">Open ad in a new tab</a>
        </>
    
  )
}
