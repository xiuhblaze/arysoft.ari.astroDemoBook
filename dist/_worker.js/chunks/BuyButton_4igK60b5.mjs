globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_cFezqeVD.mjs';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const MX = "MX";
  const country = Astro2.request.headers.get("accept-language") ?? "MX";
  console.log(country);
  const storeCountry = country === MX ? "mexico" : "usa";
  const countryName = country === MX ? "Mexico" : "USA";
  const { buy } = Astro2.props;
  const buyLink = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(buyLink, "href")} class="btn bg-gradient-primary" target="_blank" rel="noopener noreferrer">
Comprar en ${countryName} </a>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/src/components/BuyButton.astro", void 0);

const $$file = "C:/comun/source/repos/astro/midudev/dev-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
