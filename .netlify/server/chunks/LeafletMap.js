import { c as create_ssr_component, b as add_attribute, e as escape } from "./index2.js";
import L from "leaflet";
import { m as markerSelected } from "./stores.js";
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "home-map-id" } = $$props;
  let { height = 80 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let { minZoom = 7 } = $$props;
  let { activeLayer = "Terrain" } = $$props;
  let imap;
  let control;
  let markerMap = /* @__PURE__ */ new Map();
  function addPopupMarkerAndZoom(layer, marker) {
  }
  function populateLayer(markerLayer) {
    let group = L.layerGroup([]);
    markerLayer.markerSpecs.forEach((markerSpec) => {
      let marker = L.marker([markerSpec.location.lat, markerSpec.location.lng]);
      var newpopup = L.popup({ autoClose: false, closeOnClick: false });
      if (markerSpec.popup) {
        newpopup.setContent(markerSpec.title);
      }
      marker.bindPopup(newpopup);
      marker.bindTooltip(markerSpec.title);
      marker.addTo(group);
      markerMap.set(marker, markerSpec);
      marker.addTo(group).on("popupopen", (event) => {
        const marker2 = event.popup._source;
        const markerSpec2 = markerMap.get(marker2);
        markerSelected.set(markerSpec2);
      });
    });
    addLayer(markerLayer.title, group);
    control.addOverlay(group, markerLayer.title);
  }
  function addLayer(title, layer) {
    imap.addLayer(layer);
  }
  function moveTo(location2, zoom2 = 0) {
    if (zoom2 == 0) {
      imap.flyTo(location2);
    } else {
      imap.flyTo(location2, zoom2);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.activeLayer === void 0 && $$bindings.activeLayer && activeLayer !== void 0)
    $$bindings.activeLayer(activeLayer);
  if ($$props.addPopupMarkerAndZoom === void 0 && $$bindings.addPopupMarkerAndZoom && addPopupMarkerAndZoom !== void 0)
    $$bindings.addPopupMarkerAndZoom(addPopupMarkerAndZoom);
  if ($$props.populateLayer === void 0 && $$bindings.populateLayer && populateLayer !== void 0)
    $$bindings.populateLayer(populateLayer);
  if ($$props.moveTo === void 0 && $$bindings.moveTo && moveTo !== void 0)
    $$bindings.moveTo(moveTo);
  return `<div${add_attribute("id", id, 0)} class="box" style="${"height: " + escape(height, true) + "vh"}"></div>`;
});
export {
  LeafletMap as L
};
