import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
 
export default function Map () {
  const position = [8.1386, 5.1026]; // [latitude, longitude]
  const zoomLevel = 13;
 
  return (
    <div className="col-span-8">
        <MapContainer 
            center={position} 
            zoom={zoomLevel} 
            scrollWheelZoom={false}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        </MapContainer>
    </div>
  );
};