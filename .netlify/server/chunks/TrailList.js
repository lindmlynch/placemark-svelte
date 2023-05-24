import { c as create_ssr_component, b as add_attribute, a as subscribe, d as each, v as validate_component, e as escape } from "./index2.js";
import { a as loggedInUser } from "./stores.js";
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lat = 0 } = $$props;
  let { lng = 0 } = $$props;
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  return `<div class="box field is-horizontal"><div class="field-label is-normal"><label for="lng" class="label">Lat</label></div>
    <div class="field-body"><div class="field"><p class="control is-expanded"><input id="lng" class="input" type="float"${add_attribute("value", lat, 0)}></p></div>
        <div class="field-label is-normal"><label for="lat" class="label">Lng</label></div>
        <div class="field"><p class="control is-expanded "><input id="lat" class="input" type="float"${add_attribute("value", lng, 0)}></p></div></div></div>`;
});
const TrailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loggedInUser;
  $$unsubscribe_loggedInUser = subscribe(loggedInUser, (value) => value);
  let { placemarkList = [] } = $$props;
  let time = 0;
  let lat = 52.160858;
  let lng = -7.15242;
  let methods = ["walk", "cycle"];
  let selectedMethod = "";
  let message = "Please update";
  if ($$props.placemarkList === void 0 && $$bindings.placemarkList && placemarkList !== void 0)
    $$bindings.placemarkList(placemarkList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><div class="field"><label class="label" for="time">Enter Time (hrs)</label>
        <input class="input" id="time" name="time" type="number"${add_attribute("value", time, 0)}></div>
    <div class="field"><div class="control">${each(methods, (method) => {
      return `<input class="radio" type="radio"${add_attribute("value", method, 0)}${method === selectedMethod ? add_attribute("checked", true, 1) : ""}> ${escape(method)}`;
    })}</div></div>
    <div class="field"><div class="select"><select>${each(placemarkList, (placemark) => {
      return `<option value="${escape(placemark.trailType, true) + "," + escape(placemark.name, true)}">${escape(placemark.trailType)},${escape(placemark.name)}</option>`;
    })}</select></div></div>
    ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { lat, lng },
      {
        lat: ($$value) => {
          lat = $$value;
          $$settled = false;
        },
        lng: ($$value) => {
          lng = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    <div class="field"><div class="control"><button class="button is-link is-light">Update</button></div></div>
    <div class="box">${escape(message)}</div></form>`;
  } while (!$$settled);
  $$unsubscribe_loggedInUser();
  return $$rendered;
});
const TrailList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { trails } = $$props;
  if ($$props.trails === void 0 && $$bindings.trails && trails !== void 0)
    $$bindings.trails(trails);
  return `<table class="table is-fullwidth"><thead><th>Completion Time</th>
    <th>Method</th>
    <th>Trail</th>
    <th>Member</th>
    <th>Image</th></thead>
    <tbody>${each(trails, (trail) => {
    return `<tr><td>${escape(trail.time)}</td>
            <td>${escape(trail.method)}</td>
            <td>${escape(trail.placemark.trailType)}, ${escape(trail.placemark.name)}</td>
            <td>${escape(trail.user.email)}</td>
            <td><img${add_attribute("src", "images/" + trail.placemark.name.toLowerCase() + ".jpg", 0)} alt="Trail Image"></td>

        </tr>`;
  })}</tbody></table>`;
});
export {
  TrailForm as T,
  TrailList as a
};
