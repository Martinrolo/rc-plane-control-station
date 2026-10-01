import {
  Map
} from "@/components/ui/map";
import GeolocateOnLoad from "@/components/ui/GeolocateOnLoad";
import MapClicked from "@/components/ui/MapClicked";

function FlightPlanMap()
{
    return (
    <div className="h-[600px] w-full">
        <Map center={[-73.50, 45.50]} zoom={10}>
            <GeolocateOnLoad />
            <MapClicked/>
        </Map>
    </div>
    )
}

export default FlightPlanMap;