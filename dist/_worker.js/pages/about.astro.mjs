globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_cFezqeVD.mjs';
import { $ as $$Layout } from '../chunks/Layout_BwIFwdDI.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card"> <div class="card-header"> <h4 class="card-title mb-0">About Us</h4> </div> <div class="card-body"> <p>We are a team of developers who are passionate about creating beautiful and functional websites.</p> </div> </div> ` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/src/pages/about.astro", void 0);

const $$file = "C:/comun/source/repos/astro/midudev/dev-books/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
