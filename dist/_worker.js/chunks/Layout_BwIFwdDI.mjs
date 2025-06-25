globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as createAstro, d as addAttribute, j as renderScript, a as renderTemplate, m as maybeRenderHead, k as renderSlot, r as renderComponent, F as Fragment, u as unescapeHTML, s as spreadAttributes, l as clsx, n as renderHead } from './astro/server_cFezqeVD.mjs';
/* empty css                         */

const $$Astro$X = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro/components/ClientRouter.astro", void 0);

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

/* @ts-self-types="./index.d.ts" */
let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id
};

const $$Astro$W = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    flush,
    class: className,
    data = [],
    id: userId,
    alwaysOpen,
    headerClass,
    itemClass,
    bodyClass
  } = Astro2.props;
  const id = userId || `accordion-${nanoid(8)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion", className, { "accordion-flush": flush }], "class:list")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${data && data.map((item, index) => renderTemplate`${renderComponent($$result, "Accordion.Item", Accordion.Item, { "class": itemClass }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Accordion.Header", Accordion.Header, { "parent": id, "index": index, "class": headerClass, "show": item.show }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.header)}` })} ` })} ${renderComponent($$result2, "Accordion.Body", Accordion.Body, { "parent": id, "index": index, "class": bodyClass, "show": item.show, "alwaysOpen": alwaysOpen }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.body)}` })} ` })} ` })}`)} `)} </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Accordion.astro", void 0);

const $$Astro$V = createAstro();
const $$AccordionBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$AccordionBody;
  const {
    parent: id,
    index: i,
    show,
    alwaysOpen = false,
    class: className,
    text
  } = Astro2.props;
  const dataBsParent = alwaysOpen ? null : `#${id}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${id}-collapse-${i}`, "id")}${addAttribute(["accordion-collapse", "collapse", { show }], "class:list")}${addAttribute(`${id}-heading-${i}`, "aria-labelledby")}${addAttribute(dataBsParent, "data-bs-parent")}> <div${addAttribute(["accordion-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div> </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/AccordionBody.astro", void 0);

const $$Astro$U = createAstro();
const $$AccordionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$AccordionHeader;
  const { parent: id, class: className, index: i, show, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(["accordion-header", className], "class:list")}${addAttribute(`${id}-heading-${i}`, "id")}> <button class="accordion-button" type="button" data-bs-toggle="collapse"${addAttribute(`#${id}-collapse-${i}`, "data-bs-target")}${addAttribute(show, "aria-expanded")}${addAttribute(`${id}-collapse-${i}`, "aria-controls")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </button> </h2>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/AccordionHeader.astro", void 0);

const $$Astro$T = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion-item", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/AccordionItem.astro", void 0);

const Accordion = Object.assign($$Accordion, { Body: $$AccordionBody, Header: $$AccordionHeader, Item: $$AccordionItem });

const $$Astro$S = createAstro();
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Alert;
  const { variant, class: className, dismissable } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "alert",
    `alert-${variant}`,
    className,
    { "alert-dismissible": dismissable }
  ], "class:list")} role="alert"> <div>${renderSlot($$result, $$slots["default"])}</div> ${dismissable && renderTemplate`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`} </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Alert.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Alert.astro", void 0);

const $$Astro$R = createAstro();
const $$AlertHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$AlertHeading;
  const { text, h = 4, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert-heading", `h-${h}`, className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/AlertHeading.astro", void 0);

const $$Astro$Q = createAstro();
const $$AlertLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$AlertLink;
  const { href, text, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["alert-link", className], "class:list")}>${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}</a>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/AlertLink.astro", void 0);

Object.assign($$Alert, { Heading: $$AlertHeading, Link: $$AlertLink });

const $$Astro$P = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    class: className,
    variant = "primary",
    colorVariant,
    bgVariant,
    pill
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([
    "badge",
    variant ? `text-bg-${variant}` : "",
    bgVariant ? `bg-${bgVariant}` : "",
    colorVariant ? `text-${colorVariant}` : "",
    { "rounded-pill": pill },
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Badge.astro", void 0);

const TOKENS = /(\S+)|(.)/g;
const IS_SPECIAL_CASE = /[\.#][\p{L}\p{N}]/u; // #tag, example.com, etc.
const IS_MANUAL_CASE = /\p{Ll}(?=[\p{Lu}])/u; // iPhone, iOS, etc.
const ALPHANUMERIC_PATTERN = /[\p{L}\p{N}]+/gu;
const IS_ACRONYM = /^([^\p{L}])*(?:\p{L}\.){2,}([^\p{L}])*$/u;
const WORD_SEPARATORS = new Set(["—", "–", "-", "―", "/"]);
const SENTENCE_TERMINATORS = new Set([".", "!", "?"]);
const TITLE_TERMINATORS = new Set([
    ...SENTENCE_TERMINATORS,
    ":",
    '"',
    "'",
    "”",
]);
const SMALL_WORDS = new Set([
    "a",
    "an",
    "and",
    "as",
    "at",
    "because",
    "but",
    "by",
    "en",
    "for",
    "if",
    "in",
    "neither",
    "nor",
    "of",
    "on",
    "only",
    "or",
    "over",
    "per",
    "so",
    "some",
    "than",
    "that",
    "the",
    "to",
    "up",
    "upon",
    "v",
    "versus",
    "via",
    "vs",
    "when",
    "with",
    "without",
    "yet",
]);
function titleCase(input, options = {}) {
    const { locale = undefined, sentenceCase = false, sentenceTerminators = SENTENCE_TERMINATORS, titleTerminators = TITLE_TERMINATORS, smallWords = SMALL_WORDS, wordSeparators = WORD_SEPARATORS, } = typeof options === "string" || Array.isArray(options)
        ? { locale: options }
        : options;
    const terminators = sentenceCase ? sentenceTerminators : titleTerminators;
    let result = "";
    let isNewSentence = true;
    // tslint:disable-next-line
    for (const m of input.matchAll(TOKENS)) {
        const { 1: token, 2: whiteSpace, index = 0 } = m;
        if (whiteSpace) {
            result += whiteSpace;
            continue;
        }
        // Ignore URLs, email addresses, acronyms, etc.
        if (IS_SPECIAL_CASE.test(token)) {
            const acronym = token.match(IS_ACRONYM);
            // The period at the end of an acronym is not a new sentence,
            // but we should uppercase first for i.e., e.g., etc.
            if (acronym) {
                const [_, prefix = "", suffix = ""] = acronym;
                result +=
                    sentenceCase && !isNewSentence
                        ? token
                        : upperAt(token, prefix.length, locale);
                isNewSentence = terminators.has(suffix.charAt(0));
                continue;
            }
            result += token;
            isNewSentence = terminators.has(token.charAt(token.length - 1));
        }
        else {
            const matches = Array.from(token.matchAll(ALPHANUMERIC_PATTERN));
            let value = token;
            let isSentenceEnd = false;
            for (let i = 0; i < matches.length; i++) {
                const { 0: word, index: wordIndex = 0 } = matches[i];
                const nextChar = token.charAt(wordIndex + word.length);
                isSentenceEnd = terminators.has(nextChar);
                // Always the capitalize first word and reset "new sentence".
                if (isNewSentence) {
                    isNewSentence = false;
                }
                // Skip capitalizing all words if sentence case is enabled.
                else if (sentenceCase || IS_MANUAL_CASE.test(word)) {
                    continue;
                }
                // Handle simple words.
                else if (matches.length === 1) {
                    // Avoid capitalizing small words, except at the end of a sentence.
                    if (smallWords.has(word)) {
                        const isFinalToken = index + token.length === input.length;
                        if (!isFinalToken && !isSentenceEnd) {
                            continue;
                        }
                    }
                }
                // Multi-word tokens need to be parsed differently.
                else if (i > 0) {
                    // Avoid capitalizing words without a valid word separator,
                    // e.g. "apple's" or "test(ing)".
                    if (!wordSeparators.has(token.charAt(wordIndex - 1))) {
                        continue;
                    }
                    // Ignore small words in the middle of hyphenated words.
                    if (smallWords.has(word) && wordSeparators.has(nextChar)) {
                        continue;
                    }
                }
                value = upperAt(value, wordIndex, locale);
            }
            result += value;
            isNewSentence =
                isSentenceEnd || terminators.has(token.charAt(token.length - 1));
        }
    }
    return result;
}
function upperAt(input, index, locale) {
    return (input.slice(0, index) +
        input.charAt(index).toLocaleUpperCase(locale) +
        input.slice(index + 1));
}

const items = (path) => {
  const slugs = path.split("/").filter((x) => x);
  let currentPath = "";
  const parts = [
    {
      text: "Home",
      href: path !== "/" ? "/" : void 0
    }
  ];
  slugs.forEach((slug) => {
    const text = slug.replace(/[-_]/g, " ");
    currentPath = `${currentPath}/${slug}`;
    const href = currentPath;
    parts.push({
      text: titleCase(text),
      href
    });
  });
  return parts;
};

const $$Astro$O = createAstro();
const $$VanishLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$VanishLink;
  const { href, class: className, text, ...props } = Astro2.props;
  let Tag = "";
  if (href) {
    Tag = "a";
  } else {
    Tag = "span";
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": className, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/utils/VanishLink.astro", void 0);

const $$Astro$N = createAstro();
const $$BreadcrumbItemIterate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$BreadcrumbItemIterate;
  const { class: className } = Astro2.props;
  const path = Astro2.url.pathname;
  const parts = items(path);
  return renderTemplate`${parts.map(({ text, href }) => {
    const active = path === href;
    const link = active ? void 0 : href;
    return renderTemplate`${renderComponent($$result, "Breadcrumb.Item", Breadcrumb.Item, { "class": className, "active": active }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "VanishLink", $$VanishLink, { "href": link, "class": className }, { "default": ($$result3) => renderTemplate`${text}` })}` })}`;
  })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/BreadcrumbItemIterate.astro", void 0);

const $$Astro$M = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    id,
    class: className,
    itemClass,
    "aria-label": ariaLabel = "Breadcrumb"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(id, "id")}> <ol class="breadcrumb"${addAttribute(className, "class")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderComponent($$result, "BreadcrumbItemIterate", $$BreadcrumbItemIterate, { "class": itemClass })} `)} </ol> </nav>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Breadcrumb.astro", void 0);

const $$Astro$L = createAstro();
const $$BreadcrumbItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$BreadcrumbItem;
  const { class: className, active } = Astro2.props;
  const ariaCurrent = active ? "page" : void 0;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["breadcrumb-item", className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/BreadcrumbItem.astro", void 0);

const Breadcrumb = Object.assign($$Breadcrumb, { Item: $$BreadcrumbItem });

const $$Astro$K = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    class: className,
    dropdown = false,
    variant,
    text,
    size,
    modalClose = false
  } = Astro2.props;
  let props = {};
  if (dropdown) {
    props = { "data-bs-toggle": "dropdown", "aria-expanded": "false" };
  } else if (modalClose) {
    props = { "data-bs-dismiss": "modal" };
  }
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "btn",
    `btn-${variant}`,
    className,
    {
      "dropdown-toggle": dropdown,
      "btn-sm": size === "sm",
      "btn-lg": size === "lg"
    }
  ], "class:list")} type="button"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Button.astro", void 0);

const $$Astro$J = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { id, class: className, dark, fade } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([
    "carousel",
    "slide",
    className,
    { "carousel-dark": dark, "carousel-fade": fade }
  ], "class:list")} data-bs-ride="carousel"> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Carousel.astro", void 0);

const $$Astro$I = createAstro();
const $$CarouselControl = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$CarouselControl;
  const { class: className, id, direction } = Astro2.props;
  const text = direction == "prev" ? "Previous" : "Next";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([className, `carousel-control-${direction}`], "class:list")} type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(direction, "data-bs-slide")}> <span${addAttribute(`carousel-control-${direction}-icon`, "class")} aria-hidden="true"></span> <span class="visually-hidden">${text}</span> </button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselControl.astro", void 0);

const $$Astro$H = createAstro();
const $$CarouselControls = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$CarouselControls;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "prev", "class": className })} ${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "next", "class": className })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselControls.astro", void 0);

const $$Astro$G = createAstro();
const $$CarouselIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$CarouselIndicator;
  const {
    class: className,
    id,
    index,
    active,
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(index, "data-bs-slide-to")}${addAttribute([className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}${addAttribute(ariaLabel, "aria-label")}></button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselIndicator.astro", void 0);

const $$Astro$F = createAstro();
const $$CarouselIndicators = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$CarouselIndicators;
  const { slides, class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel-indicators"> ${slides.map((slide, index) => {
    const ariaCurrent = slide.active ? "page" : void 0;
    return renderTemplate`${renderComponent($$result, "Carousel.Indicator", Carousel.Indicator, { "id": id, "index": index, "class": className, "aria-current": ariaCurrent, "aria-label": slide.alt, "active": slide.active })}`;
  })} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselIndicators.astro", void 0);

const $$Astro$E = createAstro();
const $$CarouselInner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$CarouselInner;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-inner", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselInner.astro", void 0);

const $$Astro$D = createAstro();
const $$CarouselItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$CarouselItem;
  const { class: className, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-item", className, { active }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/CarouselItem.astro", void 0);

const Carousel = Object.assign($$Carousel, {
  Controls: $$CarouselControls,
  Control: $$CarouselControl,
  Indicator: $$CarouselIndicator,
  Indicators: $$CarouselIndicators,
  Inner: $$CarouselInner,
  Item: $$CarouselItem
});

const $$Astro$C = createAstro();
const $$DropdownDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$DropdownDivider;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<hr${addAttribute(["dropdown-divider", className], "class:list")}>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/DropdownDivider.astro", void 0);

const $$Astro$B = createAstro();
const $$ActiveLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ActiveLink;
  const {
    href,
    class: className,
    disabled = false,
    activeClass = "active",
    disabledClass = "disabled",
    text,
    parent,
    ...props
  } = Astro2.props;
  let active = href === Astro2.url.pathname;
  const ariaCurrent = active ? "page" : void 0;
  const activeClassStr = active ? `${activeClass}` : void 0;
  const disabledClassStr = disabled ? disabledClass : void 0;
  const classCompiled = clsx([activeClassStr, disabledClassStr, className]);
  if (parent) {
    if (Astro2.url.pathname.includes(href)) {
      active = true;
    }
  }
  return renderTemplate`${renderComponent($$result, "VanishLink", $$VanishLink, { "href": disabled ? void 0 : href, "class": classCompiled, "aria-current": ariaCurrent, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/utils/ActiveLink.astro", void 0);

const $$Astro$A = createAstro();
const $$DropdownItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$DropdownItem;
  const { href, text, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["dropdown-item", className], ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/DropdownItem.astro", void 0);

const $$Astro$z = createAstro();
const $$DropdownHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$DropdownHeader;
  const { text, class: className, nav = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["dropdown-toggle", className, { "nav-link": nav }], "class:list")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </a>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/DropdownHeader.astro", void 0);

const $$Astro$y = createAstro();
const $$DropdownMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["dropdown-menu", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/DropdownMenu.astro", void 0);

const $$Astro$x = createAstro();
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, nav = false } = Astro2.props;
  const Tag = nav ? "li" : "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["dropdown", className, { "nav-item": nav }] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Dropdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Dropdown.astro", void 0);

const Dropdown = Object.assign($$Dropdown, { Divider: $$DropdownDivider, Item: $$DropdownItem, Header: $$DropdownHeader, Menu: $$DropdownMenu });

const $$Astro$w = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    id,
    class: className,
    fade,
    scrollable,
    centered,
    size,
    fullscreen
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal", className, { fade }], "class:list")}${addAttribute(id, "id")} tabindex="-1"${addAttribute(`${id}-label`, "aria-labelledby")} aria-hidden="true"> <div${addAttribute([
    "modal-dialog",
    {
      "modal-dialog-scrollable": scrollable,
      "modal-dialog-centered": centered,
      "modal-sm": size === "sm",
      "modal-lg": size === "lg",
      "modal-xl": size === "xl"
    },
    fullscreen === true ? "modal-fullscreen" : typeof fullscreen === "string" ? `modal-fullscreen-${fullscreen}` : ""
  ], "class:list")}> <div class="modal-content"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Modal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Modal.astro", void 0);

const $$Astro$v = createAstro();
const $$ModalBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ModalBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ModalBody.astro", void 0);

const $$Astro$u = createAstro();
const $$ModalClose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ModalClose;
  const { class: className, variant, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn", `btn-${variant}`, className], "class:list")} data-bs-dismiss="modal"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ModalClose.astro", void 0);

const $$Astro$t = createAstro();
const $$ModalFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ModalFooter;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-footer", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ModalFooter.astro", void 0);

const $$Astro$s = createAstro();
const $$ModalHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$ModalHeader;
  const { parent: id, h = 5, class: className } = Astro2.props;
  const Heading = `h${h}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-header", className], "class:list")}> ${renderComponent($$result, "Heading", Heading, { "class": "modal-title", "id": `${id}-label` }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ModalHeader.astro", void 0);

Object.assign($$Modal, { Body: $$ModalBody, Close: $$ModalClose, Footer: $$ModalFooter, Header: $$ModalHeader });

const $$Astro$r = createAstro();
const $$Offcanvas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Offcanvas;
  const { id, class: className, placement = "start" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["offcanvas", `offcanvas-${placement}`, className], "class:list")} tabindex="-1"${addAttribute(id, "id")}${addAttribute(`${id}-label`, "aria-labelledby")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Offcanvas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Offcanvas.astro", void 0);

const $$Astro$q = createAstro();
const $$OffcanvasBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$OffcanvasBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["offcanvas-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/OffcanvasBody.astro", void 0);

const $$Astro$p = createAstro();
const $$OffcanvasHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$OffcanvasHeader;
  const { parent: id, h = 5, class: className } = Astro2.props;
  const Heading = `h${h}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["offcanvas-header", className], "class:list")}> ${renderComponent($$result, "Heading", Heading, { "class": "offcanvas-title", "id": `${id}Label` }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/OffcanvasHeader.astro", void 0);

Object.assign($$Offcanvas, { Body: $$OffcanvasBody, Header: $$OffcanvasHeader });

const $$Astro$o = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Nav;
  const { class: className, tabs, pills, justified, fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav", className, { "nav-tabs": tabs, "nav-pills": pills, "nav-justified": justified, "nav-fill": fill }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Nav.astro", void 0);

const $$Astro$n = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, disabled, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["nav-link", className], "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavLink.astro", void 0);

const $$Astro$m = createAstro();
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { class: className, href, disabled, text, linkClass, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")}> ${renderComponent($$result, "Nav.Link", Nav.Link, { "class": linkClass, "disabled": disabled, "href": href, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })} </li>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavItem.astro", void 0);

const Nav = Object.assign($$Nav, { Link: $$NavLink, Item: $$NavItem });

const $$Astro$l = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["navbar", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Navbar.astro", void 0);

const $$Astro$k = createAstro();
const $$NavbarCollapse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$NavbarCollapse;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="collapse navbar-collapse"${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarCollapse.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarCollapse.astro", void 0);

const $$Astro$j = createAstro();
const $$NavbarItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$NavbarItems;
  const { items, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Navbar.Nav", Navbar.Nav, { "class": className }, { "default": ($$result2) => renderTemplate`${items.map(
    (item) => item.subItems ? renderTemplate`${renderComponent($$result2, "Dropdown", Dropdown, { "nav": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Dropdown.Header", Dropdown.Header, { "nav": true }, { "default": ($$result4) => renderTemplate`${item.text}` })} ${renderComponent($$result3, "Dropdown.Menu", Dropdown.Menu, {}, { "default": ($$result4) => renderTemplate`${item.subItems.map(
      (subItem) => subItem.divider ? renderTemplate`${renderComponent($$result4, "Dropdown.Divider", Dropdown.Divider, {})}` : renderTemplate`${renderComponent($$result4, "Dropdown.Item", Dropdown.Item, { ...subItem })}`
    )}` })} ` })}` : renderTemplate`${renderComponent($$result2, "Nav.Item", Nav.Item, { ...item })}`
  )}` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarItems.astro", void 0);

const $$Astro$i = createAstro();
const $$NavbarNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$NavbarNav;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["navbar-nav", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarNav.astro", void 0);

const $$Astro$h = createAstro();
const $$NavbarToggler = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$NavbarToggler;
  const { controls } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="navbar-toggler" type="button" data-bs-toggle="collapse"${addAttribute(`#${controls}`, "data-bs-target")}${addAttribute(controls, "aria-controls")} aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarToggler.astro", void 0);

const Navbar = Object.assign($$Navbar, {
  Collapse: $$NavbarCollapse,
  Nav: $$NavbarNav,
  Items: $$NavbarItems,
  Toggler: $$NavbarToggler
});

const getRange = (start, end) => {
  return Array(end - start + 1).fill(void 0).map((v, i) => i + start);
};
const createPageNumbers = (currentPage, pageCount) => {
  let delta;
  if (pageCount <= 7) {
    delta = 7;
  } else {
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }
  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2)
  };
  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }
  let pages = currentPage > delta ? getRange(
    Math.min(range.start, pageCount - delta),
    Math.min(range.end, pageCount)
  ) : getRange(1, Math.min(pageCount, delta + 1));
  const withDots = (value, pair) => pages.length + 1 !== pageCount ? pair : [value];
  if (pages[0] !== 1) {
    pages = withDots(1, [1, "..."]).concat(pages);
  }
  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ["...", pageCount]));
  }
  return pages;
};
const createComponentData = (page, pathname) => {
  const { currentPage, lastPage, url } = page;
  const { prev, next } = url;
  const pageNums = createPageNumbers(currentPage, lastPage);
  let baseURL = pathname.replace(/\d+$/, "");
  baseURL = baseURL.replace(/\/$/, "");
  const pages = [
    {
      disabled: prev == null,
      href: prev,
      page: "Previous"
    }
  ];
  pageNums.forEach((page2) => {
    pages.push({
      disabled: false,
      href: page2 === "..." ? void 0 : page2 === 1 ? `${baseURL}` : `${baseURL}/${page2}`,
      page: page2.toString()
    });
  });
  pages.push({
    disabled: next == null,
    href: next,
    page: "Next"
  });
  return pages;
};

const $$Astro$g = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    page,
    "aria-label": ariaLabel = "Page pagination control",
    class: className,
    itemClass,
    linkClass,
    size
  } = Astro2.props;
  const { pathname } = Astro2.url;
  const pages = createComponentData(page, pathname);
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}> <ul${addAttribute([
    "pagination",
    className,
    { "pagination-sm": size === "sm", "pagination-lg": size === "lg" }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${pages && pages.map(({ href, disabled, page: page2 }) => renderTemplate`${renderComponent($$result, "Pagination.Item", Pagination.Item, { "class": itemClass, "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pagination.Link", Pagination.Link, { "href": href, "class": linkClass }, { "default": ($$result3) => renderTemplate`${page2}` })} ` })}`)} `)} </ul> </nav>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Pagination.astro", void 0);

const $$Astro$f = createAstro();
const $$PaginationItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PaginationItem;
  const { disabled = false, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["page-item", className, { disabled }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/PaginationItem.astro", void 0);

const $$Astro$e = createAstro();
const $$PaginationLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PaginationLink;
  const { href, class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": `page-link ${className}` }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} <!-- class:list={['page-link', className]} -->`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/PaginationLink.astro", void 0);

const Pagination = Object.assign($$Pagination, { Item: $$PaginationItem, Link: $$PaginationLink });

const $$Astro$d = createAstro();
const $$TabList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TabList;
  const { id, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav nav-tabs", className], "class:list")}${addAttribute(`${id}-tabs`, "id")} role="tablist"> ${renderSlot($$result, $$slots["default"])} </ul> ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabList.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabList.astro", void 0);

const $$Astro$c = createAstro();
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    index,
    active = false,
    id,
    class: className,
    linkClass
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")} role="presentation"> <button${addAttribute(["nav-link", linkClass, { active }], "class:list")}${addAttribute(`${id}-tab-${index}`, "id")} data-bs-toggle="tab"${addAttribute(`#${id}-tab-pane-${index}`, "data-bs-target")} type="button" role="tab"${addAttribute(`${id}-tab-pane-${index}`, "aria-controls")}${addAttribute(index === 0, "aria-selected")}> ${renderSlot($$result, $$slots["default"])} </button> </li>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabItem.astro", void 0);

const $$Astro$b = createAstro();
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { class: className = "", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-content", className], "class:list")}${addAttribute(`${id}-tab-content`, "id")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabContent.astro", void 0);

const $$Astro$a = createAstro();
const $$TabPane = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TabPane;
  const {
    index,
    class: className,
    active = false,
    fade = false,
    id
  } = Astro2.props;
  const show = fade && active;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-pane", className, { fade, show, active }], "class:list")}${addAttribute(`${id}-tab-pane-${index}`, "id")} role="tabpanel"${addAttribute(`${id}-tab-${index}`, "aria-labelledby")} tabindex="0"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabPane.astro", void 0);

const Tab = Object.assign({ List: $$TabList, Item: $$TabItem, Content: $$TabContent, Pane: $$TabPane });

const $$Astro$9 = createAstro();
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tabs;
  const {
    tabs,
    id: userId,
    listClass,
    itemClass,
    linkClass,
    contentClass,
    paneClass,
    fade = false
  } = Astro2.props;
  const id = userId || `tabs-${nanoid(8)}`;
  return renderTemplate`${renderComponent($$result, "Tab.List", Tab.List, { "id": id, "class": listClass }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Item", Tab.Item, { "index": index, "id": id, "active": tab.active, "class": itemClass, "linkClass": linkClass }, { "default": ($$result3) => renderTemplate`${tab.title}` })}`)}` })} ${renderComponent($$result, "Tab.Content", Tab.Content, { "class": contentClass, "id": id }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Pane", Tab.Pane, { "index": index, "fade": fade, "id": id, "active": tab.active, "class": paneClass }, { "default": ($$result3) => renderTemplate`${tab.body}` })}`)}` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Tabs.astro", void 0);

const $$Astro$8 = createAstro();
const $$Toast = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Toast;
  const { id, class: className, animation = true, autohide = true, delay = 5e3 } = Astro2.props;
  const config = { delay, animation, autohide };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(["toast", className], "class:list")} role="alert" aria-live="assertive" aria-atomic="true"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Toast.astro", void 0);

const $$Astro$7 = createAstro();
const $$ToastBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ToastBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ToastBody.astro", void 0);

const $$Astro$6 = createAstro();
const $$ToastClose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ToastClose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn-close", className], "class:list")} data-bs-dismiss="toast" aria-label="Close"></button>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ToastClose.astro", void 0);

const $$Astro$5 = createAstro();
const $$ToastContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ToastContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-container", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ToastContainer.astro", void 0);

const $$Astro$4 = createAstro();
const $$ToastHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ToastHeader;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-header", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/ToastHeader.astro", void 0);

Object.assign($$Toast, { Body: $$ToastBody, Close: $$ToastClose, Container: $$ToastContainer, Header: $$ToastHeader });

const $$Astro$3 = createAstro();
const $$Tooltip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tooltip;
  const {
    title,
    placement,
    animation,
    delay,
    html,
    trigger,
    customClass
  } = Astro2.props;
  const config = { title, placement, animation, delay, html, trigger, customClass };
  return renderTemplate`${renderComponent($$result, "tooltip-wrapper", "tooltip-wrapper", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<span data-bs-toggle="tooltip"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </span> ` })} ${renderScript($$result, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Tooltip.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Tooltip.astro", void 0);

/**
 * marked v15.0.12 - a markdown parser
 * Copyright (c) 2011-2025, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */


// src/defaults.ts
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}

// src/rules.ts
var noopTest = { exec: () => null };
function edit(regex, opt = "") {
  let source = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};

// src/helpers.ts
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells.at(-1)?.trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}

// src/Tokenizer.ts
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[1];
        href = "mailto:" + text;
      } else {
        text = cap[1];
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[0];
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};

// src/Lexer.ts
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(other.carriageReturn, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src) {
      let token;
      if (this.options.extensions?.block?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let maskedSrc = src;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if (this.options.extensions?.inline?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};

// src/Renderer.ts
var _Renderer = class {
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(other.notSpaceStart)?.[0];
    const code = text.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens[0]?.type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${escape2(text, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text, tokens }) {
    if (tokens) {
      text = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
};

// src/TextRenderer.ts
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};

// src/Parser.ts
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer = this.renderer) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};

// src/Hooks.ts
var _Hooks = class {
  options;
  block;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
};

// src/Instance.ts
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src, options2) => {
      const origOpt = { ...options2 };
      const opt = { ...this.defaults, ...origOpt };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};

// src/marked.ts
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;

const $$Astro$2 = createAstro();
const $$Marked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Marked;
  const { inline = false } = Astro2.props;
  const slot = await Astro2.slots.render("default");
  return renderTemplate`${Astro2.slots.has("default") && (inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(marked.parseInline(slot))}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(marked.parse(slot))}` })}`)}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/utils/Marked.astro", void 0);

const $$Astro$1 = createAstro();
const $$InlineCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InlineCode;
  const { code } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Marked", $$Marked, { "inline": true }, { "default": ($$result2) => renderTemplate`\`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(code)}` })}\`` })}`;
}, "C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/utils/InlineCode.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"><link rel="stylesheet" href="/css/soft-ui-dashboard.css"><title>Astro Basics</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-gray-100" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Breadcrumb", Breadcrumb, { "data-astro-cid-sckkx6r4": true })} <div class="container" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/comun/source/repos/astro/midudev/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
