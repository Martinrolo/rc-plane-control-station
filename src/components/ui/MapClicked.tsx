import { useEffect } from "react";
import { useMap } from "@/components/ui/map";
import { Marker } from "maplibre-gl";
import * as maplibregl from 'https://unpkg.com/maplibre-gl@6.11.2/dist/maplibre-gl.mjs';
import type { StyleSpecification } from "maplibre-gl";

const SATELLITE_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    satellite: {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution:
        "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
    },
  },
  layers: [{ id: "satellite", type: "raster", source: "satellite" }],
};


function MapClicked() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;

    map.on("click", (event) => {
      const { lngLat } = event;
      console.log("Map clicked at:", lngLat);

      let marker = new Marker()
        .setLngLat(lngLat)
        .addTo(map);
    });

    map.setStyle(SATELLITE_STYLE);


  }, [isLoaded, map]);

  return null;
}

export default MapClicked;