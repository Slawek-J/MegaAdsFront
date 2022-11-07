import React, { useContext, useEffect, useState } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {SimpleAddEntity} from 'types'
import '../../utils/fix-map.icon'

import 'leaflet/dist/leaflet.css'
import './Map.css'
import { SearchContext } from '../../context/search.context'
import {SingleAd} from './SingleAd'

export const Map = () => {
    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAddEntity[]>([])

    useEffect(() => {
        (async() => {
            const data = await(await fetch(`http://localhost:3001/ad/search/${search}`)).json()
            setAds(data);
            
        })()
    }, [search])

    // useEffect(() => {
    //     console.log(`Make a request: ${search}`);
        
    // }, [search])
  return (
    <div className="map">
        <MapContainer center={[53.34110, -6.25251]} zoom={14}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreeTMap</a> & contributors"
            />
            {
                ads.map(ad => {
                    return (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    </div>
  )
}
