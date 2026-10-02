import { useEffect } from "react";
import { useMap } from "@/components/ui/map";
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

function SatelliteOnLoad() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;

    console.log("Setting satellite style..."); 
    map.setStyle(SATELLITE_STYLE);

  }, [isLoaded, map]);

  return null;
}

export default SatelliteOnLoad;
