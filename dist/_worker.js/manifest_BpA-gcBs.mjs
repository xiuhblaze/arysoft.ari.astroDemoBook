globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_cFezqeVD.mjs';
import './chunks/astro-designed-error-pages_BnqzURxn.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BrAGoTro.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/comun/source/repos/astro/midudev/dev-books/","cacheDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/node_modules/.astro/","outDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/dist/","srcDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/src/","publicDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/public/","buildClientDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/dist/","buildServerDir":"file:///C:/comun/source/repos/astro/midudev/dev-books/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/comun/source/repos/astro/midudev/dev-books/src/pages/libro/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libro/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/comun/source/repos/astro/midudev/dev-books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/comun/source/repos/astro/midudev/dev-books/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/libro/[id]@_@astro":"pages/libro/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BpA-gcBs.mjs","C:/comun/source/repos/astro/midudev/dev-books/src/components/BookScore.astro":"chunks/BookScore_o9kKrh78.mjs","C:/comun/source/repos/astro/midudev/dev-books/src/components/BuyButton.astro":"chunks/BuyButton_4igK60b5.mjs","C:/comun/source/repos/astro/midudev/dev-books/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:\\comun\\source\\repos\\astro\\midudev\\dev-books\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","C:\\comun\\source\\repos\\astro\\midudev\\dev-books\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_ziKqr8RU.mjs","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C7b_yJIe.mjs","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Offcanvas.astro?astro&type=script&index=0&lang.ts":"_astro/Offcanvas.astro_astro_type_script_index_0_lang.BzhvxjCV.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Modal.astro?astro&type=script&index=0&lang.ts":"_astro/Modal.astro_astro_type_script_index_0_lang.pdzAktLV.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Alert.astro?astro&type=script&index=0&lang.ts":"_astro/Alert.astro_astro_type_script_index_0_lang.BMdmtgFv.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Dropdown.astro?astro&type=script&index=0&lang.ts":"_astro/Dropdown.astro_astro_type_script_index_0_lang.jUSy-RMI.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/TabList.astro?astro&type=script&index=0&lang.ts":"_astro/TabList.astro_astro_type_script_index_0_lang.BTYqdCid.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.va3PU9tO.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Tooltip.astro?astro&type=script&index=0&lang.ts":"_astro/Tooltip.astro_astro_type_script_index_0_lang.Cj8bVz2l.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/Accordion.astro?astro&type=script&index=0&lang.ts":"_astro/Accordion.astro_astro_type_script_index_0_lang.DF_GfFu-.js","C:/comun/source/repos/astro/midudev/dev-books/node_modules/astro-bootstrap/lib/components/NavbarCollapse.astro?astro&type=script&index=0&lang.ts":"_astro/NavbarCollapse.astro_astro_type_script_index_0_lang.DygtJDga.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/css/soft-ui-dashboard.css","/css/soft-ui-dashboard.css.map","/css/soft-ui-dashboard.min.css","/_astro/Accordion.astro_astro_type_script_index_0_lang.DF_GfFu-.js","/_astro/Alert.astro_astro_type_script_index_0_lang.BMdmtgFv.js","/_astro/Carousel.astro_astro_type_script_index_0_lang.va3PU9tO.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/component-functions.Ck66VISM.js","/_astro/Dropdown.astro_astro_type_script_index_0_lang.jUSy-RMI.js","/_astro/index.Bd3uvjiU.js","/_astro/Modal.astro_astro_type_script_index_0_lang.pdzAktLV.js","/_astro/NavbarCollapse.astro_astro_type_script_index_0_lang.DygtJDga.js","/_astro/Offcanvas.astro_astro_type_script_index_0_lang.BzhvxjCV.js","/_astro/scrollbar.DYvuecUD.js","/_astro/selector-engine.CNbHMjd9.js","/_astro/TabList.astro_astro_type_script_index_0_lang.BTYqdCid.js","/_astro/Tooltip.astro_astro_type_script_index_0_lang.Cj8bVz2l.js","/img/bgTrianglesBW.jpg","/img/bgWavesBlack.jpg","/img/bgWavesWhite.jpg","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro-designed-error-pages_BnqzURxn.mjs","/_worker.js/chunks/astro_BvdSU-I5.mjs","/_worker.js/chunks/BookScore_o9kKrh78.mjs","/_worker.js/chunks/BuyButton_4igK60b5.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_BtiuKDFU.mjs","/_worker.js/chunks/Layout_BwIFwdDI.mjs","/_worker.js/chunks/noop-middleware_BrAGoTro.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/path_C-ZOwaTP.mjs","/_worker.js/chunks/runtime_DGGbeewH.mjs","/_worker.js/chunks/sharp_C7b_yJIe.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Dv_ONyGe.mjs","/_worker.js/chunks/_astro_assets_CYK51Pgu.mjs","/_worker.js/chunks/_astro_content_CK4cPgki.mjs","/_worker.js/chunks/_astro_data-layer-content_ziKqr8RU.mjs","/_worker.js/pages/libro/_id_.astro.mjs","/_worker.js/chunks/astro/server_cFezqeVD.mjs","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/comun/source/repos/astro/midudev/dev-books/src/components/BookScore.astro","BookScore"],["C:/comun/source/repos/astro/midudev/dev-books/src/components/BuyButton.astro","BuyButton"]],"key":"qekZkuKgm+iWTuxHbP8iKN38gwPRWc/ejEcVSZVwAX8=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
