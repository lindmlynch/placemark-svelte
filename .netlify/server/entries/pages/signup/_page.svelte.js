import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><label for="firstname" class="label">First Name</label>
                <input id="firstname" class="input" type="text" placeholder="Enter first name" name="firstName"${add_attribute("value", firstName, 0)}></div>
            <div class="field"><label for="lastname" class="label">Last Name </label>
                <input id="lastname" class="input" type="text" placeholder="Enter last name" name="lastName"${add_attribute("value", lastName, 0)}></div></div></div>
    <div class="field"><label for="email" class="label">Email</label>
        <input id="email" class="input" type="text" placeholder="Enter email" name="email"${add_attribute("value", email, 0)}></div>
    <div class="field"><label for="password" class="label">Password</label>
        <input id="password" class="input" type="password" placeholder="Enter Password" name="password"${add_attribute("value", password, 0)}></div>
    <div class="field is-grouped"><button class="button is-link">Sign Up</button></div></form>
${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns"><div class="column"><div class="box"><h1 class="title">Login</h1>
            ${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})}</div></div>
    <div class="column has-text-centered"><img alt="fenit" src="/fenit.jpg" width="300"></div></div>`;
});
export {
  Page as default
};
