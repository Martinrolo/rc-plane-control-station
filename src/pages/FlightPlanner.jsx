import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import FlightPlanMap from "@/components/ui/FlightPlanMap";

function FlightPlanner()
{
    return (
        <>
            <h2 style={{ color: "#000000" }}>This is Flight Planner</h2>
            <FlightPlanMap/>
        </>
        
    )
}

export default FlightPlanner;