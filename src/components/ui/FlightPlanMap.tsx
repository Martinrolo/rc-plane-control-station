import {
  Map
} from "@/components/ui/map";
import GeolocateOnLoad from "@/components/ui/GeolocateOnLoad";
import MapClicked from "@/components/ui/MapClicked";
import SatelliteOnLoad from "@/components/ui/SatelliteOnLoad";

function FlightPlanMap()
{
    return (
    <div className="h-[600px] w-full">
        <Map center={[-73.50, 45.50]} zoom={10}>
            <GeolocateOnLoad />
            <SatelliteOnLoad />
            <MapClicked/>
        </Map>
    </div>
    )
}

export default FlightPlanMap;