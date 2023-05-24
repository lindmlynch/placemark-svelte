import { LatLng } from "leaflet";
import type { ChartData } from "./charts";
import type { PlacemarkTrails, Trail } from "./trail-types";
import type { MarkerLayer, MarkerSpec } from "./markers";

export function getMarkerLayer(trails: Trail[]): MarkerLayer {
    const markerSpecs = Array<MarkerSpec>();
    trails.forEach((trail) => {
        markerSpecs.push({
            id: trail._id,
            title: `${trail.placemark.name} ${trail.placemark.trailType}: ${trail.time}`,
            location: new LatLng(trail.lat, trail.lng),
            popup: true
        });
    });
    return { title: "trails", markerSpecs: markerSpecs };
}

export function generateByPlacemark(trailsByPlacemark: PlacemarkTrails[]): ChartData {
    const totalByPlacemark: ChartData = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    };

    trailsByPlacemark.forEach((trailByPlacemark) => {
        const label = `${trailByPlacemark.placemark.trailType}, ${trailByPlacemark.placemark.name}`;
        totalByPlacemark.labels.push(label);
        let total = 0;
        trailByPlacemark.trails.forEach((trail) => {
            total += trail.time;
        });
        totalByPlacemark.datasets[0].values.push(total);
    });
    return totalByPlacemark;
}

export function generateByMethod(trailList: Trail[]): ChartData {
    const totalByMethod: ChartData = {
        labels: ["walk", "cycle"],
        datasets: [
            {
                values: [0, 0]
            }
        ]
    };

    trailList.forEach((trail) => {
        if (trail.method == "walk") {
            totalByMethod.datasets[0].values[0] += trail.time;
        } else if (trail.method == "cycle") {
            totalByMethod.datasets[0].values[1] += trail.time;
        }
    });

    return totalByMethod;
}
