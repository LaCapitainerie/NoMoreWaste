'use client'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'

import 'leaflet/dist/leaflet.css';
import { Marker, Polyline, Popup } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { stringOrDate } from 'react-big-calendar';
import L from 'leaflet';

interface CollecteMapProps {
  startPoint: Point;
  endPoint: Point;
  actualPosition?: Point;
  Markers?: { position: [number, number], popup: React.ReactNode }[];
  className?: string;
  warehouses: Point[];
}

interface Point {
  hour?: stringOrDate;
  lat: number;
  lng: number;
}

export default function Map({startPoint, endPoint, actualPosition, className, warehouses}: CollecteMapProps) {

  const IconSize = 48;

  const TruckIcon = L.icon({
    iconUrl: '/truck_icon.png',
    shadowUrl: '/truck_shadow.png',

    iconSize:     [IconSize, IconSize],
    shadowSize:   [IconSize, IconSize],
    iconAnchor:   [IconSize>>1, IconSize],
    shadowAnchor: [IconSize>>1, IconSize],
    popupAnchor:  [0, -(IconSize>>1)]
  });

  const WarehouseIcon = L.icon({
    iconUrl: '/warehouse_icon.png',
    shadowUrl: '/warehouse_shadow.png',

    iconSize:     [IconSize, IconSize],
    shadowSize:   [IconSize, IconSize],
    iconAnchor:   [IconSize>>1, IconSize],
    shadowAnchor: [IconSize>>1, IconSize],
    popupAnchor:  [0, -(IconSize>>1)]
  });

  const [path, setPath] = useState<[number, number][]>([[0,0]]);

  useEffect(() => {
    const fetchRoute = async () => {
      const url = `https://router.project-osrm.org/route/v1/driving/${startPoint.lng},${startPoint.lat};${actualPosition ? (actualPosition?.lng + "," + actualPosition?.lat + ";") : ""}${endPoint.lng},${endPoint.lat}?overview=full&geometries=geojson`;

      try {
        const response = await axios.get(url);
        const route = response.data.routes[0].geometry.coordinates.map((coord: any[]) => [coord[1], coord[0]]);
        setPath(route);
      } catch (error) {
        console.error("Error fetching the route data", error);
      }
    };

    fetchRoute();
  }, [startPoint, endPoint]);

  return (
    <MapContainer center={[startPoint.lat, startPoint.lng]} zoom={5} className={className}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {path.length > 0 && <Polyline positions={path} color="blue" />}
      <Marker position={[startPoint.lat, startPoint.lng]} icon={WarehouseIcon}>
        <Popup>Départ prévue le {startPoint.hour?.toString()}</Popup>
      </Marker>
      {/* <Marker position={[endPoint.lat, endPoint.lng]} icon={WarehouseIcon}>
        <Popup>Arrivée prévue le {endPoint.hour?.toLocaleString()}</Popup>
      </Marker> */}
      {actualPosition && <Marker position={[actualPosition.lat, actualPosition.lng]} icon={TruckIcon}>
        <Popup>Position actuelle le {actualPosition.hour?.toString()}</Popup>
      </Marker>}


      {warehouses.map((warehouse, index) => (
        <Marker key={index} position={[warehouse.lat, warehouse.lng]} icon={WarehouseIcon}>
          <Popup>Entrepôt {index + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
