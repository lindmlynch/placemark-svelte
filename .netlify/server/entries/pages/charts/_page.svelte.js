import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Base } from "../../../chunks/base.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let byPlacemark;
  let byMethod;
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns"><div class="column box has-text-centered"><h1 class="title is-4">Trails By Means of Transport</h1>
        ${validate_component(Base, "Chart").$$render($$result, { data: byMethod, type: "bar" }, {}, {})}</div>
    <div class="column box has-text-centered"><h1 class="title is-4">Time to date</h1>
        ${validate_component(Base, "Chart").$$render($$result, { data: byPlacemark, type: "pie" }, {}, {})}</div></div>`;
});
export {
  Page as default
};
