import React, { useEffect, useRef } from "react";
import L from "leaflet";

const Map = ({ location }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current && location) {
      map.current = L.map(mapContainer.current).setView(
        [location.latitude, location.longitude],
        13
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        minZoom: 2,
        attribution:
          '&copy; <a href="https://github.com/TheValll" target="_blank">TheValllMap</a>',
      }).addTo(map.current);
      L.marker([location.latitude, location.longitude]).addTo(map.current); // ajouter le marqueur ici
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [location]);

  return (
    <div
      className="map-container"
      style={{
        height: "390px",
        width: "450px",
        margin: "10px auto",
      }}
    >
      <div
        ref={mapContainer}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export default Map;
