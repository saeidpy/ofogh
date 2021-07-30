import "leaflet/dist/leaflet.css";

import L from "leaflet";
import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import data from "../../Assets/data.json";
import IconSvg from "../../Assets/venue_location_icon.svg";
import { useStyle } from "./Map.style.js";
import fa from "../../Consistent/fa";

const VenueLocationIcon = L.icon({
  iconUrl: IconSvg,
  iconRetinaUrl: IconSvg,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={VenueLocationIcon}>
      <Popup>{fa.map.youAreHere}</Popup>
    </Marker>
  );
}

export default function MapComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;
  return (
    <MapContainer center={{ lat: 35.6892, lng: 51.389 }} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <Marker position={data.venues[0].geometry} icon={VenueLocationIcon} />
    </MapContainer>
  );
}
