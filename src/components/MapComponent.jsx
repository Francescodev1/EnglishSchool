// MapComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map(mapRef.current, {
      maxZoom: 17 // Imposta il livello massimo di zoom
    }).setView([41.9028, 12.4964], 5); // Coordinate di Roma, livello di zoom iniziale

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    L.marker([41.9028, 12.4964]).addTo(mapInstance)
      .bindPopup('Via Pippo 1, 00100 Roma, Italia')
      .openPopup();

    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map) {
      animateZoom(map);
    }
  }, [map]);

  const animateZoom = (map) => {
    const startZoom = map.getZoom();
    const endZoom = map.getMaxZoom();

    let currentZoom = startZoom;
    const zoomInterval = setInterval(() => {
      if (currentZoom >= endZoom) {
        clearInterval(zoomInterval);
      } else {
        currentZoom += 1;
        map.flyTo(map.getCenter(), currentZoom); // Animazione della transizione di zoom
      }
    }, 400); // Durata dell'intervallo di zoom (in millisecondi)
  };

  return <div ref={mapRef} style={{ height: '300px', width: '100%' }} />;
};

export default MapComponent;
