import React, { useEffect, useRef } from "react";
import L from "leaflet";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView(
        [39.1001059, -77.9430519],
        13
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        minZoom: 2,
        attribution:
          '&copy; <a href="https://github.com/TheValll" target="_blank">TheValllMap</a>',
      }).addTo(map.current);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      className="map-container"
      style={{
        height: "390px",
        width: "100%",
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
