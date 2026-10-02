import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  useMap,
} from "@/components/ui/map";
import { Plane } from 'lucide-react';
import { useArduino } from "@/hooks/useArduino";
import GeolocateOnLoad from "@/components/ui/GeolocateOnLoad";
import SatelliteOnLoad from "@/components/ui/SatelliteOnLoad";

const markers = [
  { id: 1, name: "Times Square", lng: -73.9855, lat: 40.758 },
];

function MarkerExample() {
  const { connected, data, send } = useArduino();
  if(connected && data) {
    console.log("Arduino Data:", data);
  }

  return (
    <div className="h-[600px] w-full">
      <Map center={[-73.50, 45.50]} zoom={10}>
        <GeolocateOnLoad />
        <SatelliteOnLoad />

        {markers.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              {/* <div className="bg-primary size-4 rounded-full border-2 border-white shadow-lg" /> */}
              <div
                className="bg-primary size-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                style={{ transform: `rotate(${-45}deg)` }}
              >
                  <Plane className="size-4 text-white" />
              </div>
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
