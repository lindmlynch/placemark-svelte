import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { t as trailService } from "../../../chunks/trail-service.js";
import { a as TrailList, T as TrailForm } from "../../../chunks/TrailList.js";
import { l as latestTrail } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let placemarkList = [];
  let trails = [];
  latestTrail.subscribe(async (trail) => {
    trails = await trailService.getTrails();
  });
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns"><div class="column has-text-centered"><h1 class="title is-4">Trail Info</h1>
        ${validate_component(TrailList, "TrailList").$$render($$result, { trails }, {}, {})}</div>
    <div class="column box has-text-centered"><h1 class="title is-4">Update Trail Details</h1>
        ${validate_component(TrailForm, "TrailForm").$$render($$result, { placemarkList }, {}, {})}</div></div>`;
});
export {
  Page as default
};
