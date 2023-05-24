import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Base } from "../../../chunks/base.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { t as trailService } from "../../../chunks/trail-service.js";
import { LatLng } from "leaflet";
import { L as LeafletMap } from "../../../chunks/LeafletMap.js";
import { T as TrailForm, a as TrailList } from "../../../chunks/TrailList.js";
import { l as latestTrail } from "../../../chunks/stores.js";
function getMarkerLayer(trails) {
  const markerSpecs = Array();
  trails.forEach((trail) => {
    markerSpecs.push({
      id: trail._id,
      title: `${trail.placemark.name} ${trail.placemark.trailType}: ${trail.time}`,
      location: new LatLng(trail.lat, trail.lng),
      popup: true
    });
  });
  return { title: "trails", markerSpecs };
}
function generateByPlacemark(trailsByPlacemark) {
  const totalByPlacemark = {
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let byPlacemark;
  let placemarkList = [];
  let trails = [];
  let map;
  async function refreshDashboard() {
    trails = await trailService.getTrails();
    placemarkList = await trailService.getPlacemarks();
    const trailMarkerLayer = getMarkerLayer(trails);
    if (trails.length > 0) {
      const trailsByPlacemark = await trailService.getTrailsByPlacemarks();
      byPlacemark = generateByPlacemark(trailsByPlacemark);
      map.populateLayer(trailMarkerLayer);
      const lastMarker = trailMarkerLayer.markerSpecs[trailMarkerLayer.markerSpecs.length - 1];
      map.moveTo(lastMarker.location, 8);
    }
  }
  latestTrail.subscribe(async (donation) => {
    await refreshDashboard();
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
      }
    })}

<div class="columns m-2 p-2"><div class="column box has-text-centered"><h1 class="title is-4">Trails By Mode of Transport</h1>
        ${validate_component(Base, "Chart").$$render($$result, { data: byPlacemark, type: "pie" }, {}, {})}</div>
    <div class="column box has-text-centered"><h1 class="title is-4">Input Trail Details</h1>
        ${validate_component(TrailForm, "TrailForm").$$render($$result, { placemarkList }, {}, {})}</div></div>
<div class="columns"><div class="column box has-text-centered"><h1 class="title is-4">Trail Map</h1>
        ${validate_component(LeafletMap, "LeafletMap").$$render(
      $$result,
      { height: 40, this: map },
      {
        this: ($$value) => {
          map = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="column box has-text-centered"><h1 class="title is-4">Trail List</h1>
        ${validate_component(TrailList, "TrailList").$$render($$result, { trails }, {}, {})}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
