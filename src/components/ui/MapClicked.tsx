import { useEffect } from "react";
import { useMap } from "@/components/ui/map";
import { Marker } from "maplibre-gl";

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

  }, [isLoaded, map]);

  return null;
}

export default MapClicked;