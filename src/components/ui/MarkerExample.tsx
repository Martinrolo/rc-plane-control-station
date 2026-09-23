import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  useMap,
} from "@/components/ui/map";
import { useEffect } from "react";

const locations = [
  {
    id: 1,
    name: "Empire State Building",
    lng: -73.9857,
    lat: 40.7484,
  },
  {
    id: 2,
    name: "Central Park",
    lng: -73.9654,
    lat: 40.7829,
  },
  { id: 3, name: "Times Square", lng: -73.9855, lat: 40.758 },
];




function GeolocateOnLoad() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;
    if (!("geolocation" in navigator)) return;

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








function MarkerExample() {
  return (
    <div className="h-[600px] w-full">
      <Map center={[-73.98, 40.76]} zoom={18}>
        <GeolocateOnLoad />
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              <div className="bg-primary size-4 rounded-full border-2 border-white shadow-lg" />
            </MarkerContent>
            <MarkerTooltip>{location.name}</MarkerTooltip>
            <MarkerPopup>
              <div className="space-y-1">
                <p className="text-foreground font-medium">{location.name}</p>
                <p className="text-muted-foreground text-xs">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default MarkerExample;
