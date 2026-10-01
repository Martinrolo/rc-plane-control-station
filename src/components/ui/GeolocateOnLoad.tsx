import { useEffect } from "react";
import { useMap } from "@/components/ui/map";

function GeolocateOnLoad() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;
    if (!("geolocation" in navigator)) return;

    console.log("Geolocation is available. Attempting to get current position..."); 

    navigator.geolocation.getCurrentPosition(
      (position) => {
        map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 18,
        });
      },
      (err) => console.error("Geolocation error:", err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, [isLoaded, map]);

  return null;
}

export default GeolocateOnLoad;
