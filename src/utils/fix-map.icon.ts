import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconshadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconshadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41], 
})

L.Marker.prototype.options.icon = DefaultIcon;
// import 'leaflet/dist/leaflet.css';

// import marker from 'leaflet/dist/images/marker-icon.png';
// import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// L.Icon.Default.mergeOptions({
// iconUrl: marker,
// iconRetinaUrl: marker2x,
// shadowUrl: markerShadow,
// iconSize: [25, 41],
// iconAnchor: [12,41],
// });