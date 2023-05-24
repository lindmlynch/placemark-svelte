import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { L as LeafletMap } from "../../../chunks/LeafletMap.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
      }
    })}

${validate_component(LeafletMap, "LeafletMap").$$render(
      $$result,
      { this: map },
      {
        this: ($$value) => {
          map = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
