import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

export default function Map({lat, lon}) {
  var pos = [-7.769940,110.376276]

  return (
    <>
      <div>
        <h1 className="text-xl">GPS</h1>latitude: {lat} longitude:{" "}
        {lon}
      </div>
      <br />
      <MapContainer center={pos} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={[lat,lon]}
          radius={80}
          fillColor="red"
          color="red"
          className="bg-color-red"
        />
      </MapContainer>
    </>
  );
}
