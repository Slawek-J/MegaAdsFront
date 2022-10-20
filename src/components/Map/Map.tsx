import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../../utils/fix-map.icon'

import 'leaflet/dist/leaflet.css'
import './Map.css'

export const Map = () => {
  return (
    <div className="map">
        <MapContainer center={[53.34110, -6.25251]} zoom={14}>
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreeTMap</a> & contributors"
            />
            <Marker position={[53.34110, -6.25251]}>
                <Popup>
                    <h2>National Gallery of Ireland</h2>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}
