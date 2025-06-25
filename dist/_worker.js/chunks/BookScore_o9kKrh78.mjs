globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_cFezqeVD.mjs';
import { a as setOnSetGetEnv } from './runtime_DGGbeewH.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const score = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="badge bg-secondary rounded-pill" id="score">
⭐️ Puntuacion: ${score.trim()}/5
</span>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/src/components/BookScore.astro", void 0);

const $$file = "C:/comun/source/repos/astro/midudev/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
