import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./index2.js";
import { a as loggedInUser } from "./stores.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loggedInUser, $$unsubscribe_loggedInUser;
  $$unsubscribe_loggedInUser = subscribe(loggedInUser, (value) => $loggedInUser = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_loggedInUser();
  return `<div class="box has-text-centered columns m-2"><div class="column is-2"><img src="/hiking.jpg" width="120" alt="img"></div>
    <div class="column"><div class="title is-6">${escape(title)}</div>
        <div class="subtitle is-6">${escape(subTitle)}</div></div>
    <div class="column"><i class="fas fa-tree fa-3x" style="color:rgb(95, 96, 173)"></i>
        ${$loggedInUser?.email ? `<div class="is-size-7">${escape($loggedInUser.email)}</div>` : `<div class="is-size-7">Placemark-Svelte</div>`}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-half">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Kingdom Trails",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div>
    <div class="column">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
