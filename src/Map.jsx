import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Circle } from "react-leaflet";

export default function Map() {
  const zoomLevel = 11;
  const [position, setPos] = useState([8.1386, 5.1026]);
  const [ganti, setGanti] = useState(0.001);
  // const [i, hit] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPos(() => [(position[0] += 0.001), (position[1] += 0.001)]);
    }, 1000);

    return () => {
      // clear up
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div>
        <h1 className="text-xl">GPS</h1>latitude: {position[0].toFixed(4)} longitude:{" "}
        {position[0].toFixed(4)}
      </div>
      <br />
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={position}
          radius={80}
          fillColor="red"
          color="red"
          className="bg-color-red"
        />
      </MapContainer>
    </>
  );
}
