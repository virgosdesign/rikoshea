import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BpbFgQBW.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_zWsabGlZ.mjs');
const _page1 = () => import('./chunks/404_DRVsNXoT.mjs');
const _page2 = () => import('./chunks/about_Syfr4e6e.mjs');
const _page3 = () => import('./chunks/index_DMXQdUXx.mjs');
const _page4 = () => import('./chunks/_.._aBWHptOh.mjs');
const _page5 = () => import('./chunks/contact_DPW3i7ry.mjs');
const _page6 = () => import('./chunks/favicon_LljPfBVc.mjs');
const _page7 = () => import('./chunks/404_DUd-TxP2.mjs');
const _page8 = () => import('./chunks/index_BYf_pLZP.mjs');
const _page9 = () => import('./chunks/_.._BHEsmJzR.mjs');
const _page10 = () => import('./chunks/contact_YAvk2scu.mjs');
const _page11 = () => import('./chunks/index_DNbxXuEI.mjs');
const _page12 = () => import('./chunks/services_C3S0ZN6P.mjs');
const _page13 = () => import('./chunks/index_BQf0TjLh.mjs');
const _page14 = () => import('./chunks/_.._CJP-ZuIL.mjs');
const _page15 = () => import('./chunks/manifest_DRsZYZdE.mjs');
const _page16 = () => import('./chunks/robots_CxNGMXzm.mjs');
const _page17 = () => import('./chunks/index_CYMSh8px.mjs');
const _page18 = () => import('./chunks/_.._DI4QQNPY.mjs');
const _page19 = () => import('./chunks/index_5QPELW3T.mjs');
const _page20 = () => import('./chunks/index_uxVyOtS2.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/favicon.ico.ts", _page6],
    ["src/pages/fr/404.astro", _page7],
    ["src/pages/fr/blog/index.astro", _page8],
    ["src/pages/fr/blog/[...slug].astro", _page9],
    ["src/pages/fr/contact.astro", _page10],
    ["src/pages/fr/products/index.astro", _page11],
    ["src/pages/fr/services.astro", _page12],
    ["src/pages/fr/index.astro", _page13],
    ["src/pages/insights/[...slug].astro", _page14],
    ["src/pages/manifest.json.ts", _page15],
    ["src/pages/robots.txt.ts", _page16],
    ["src/pages/services/index.astro", _page17],
    ["src/pages/services/[...slug].astro", _page18],
    ["src/pages/index.astro", _page19],
    ["node_modules/@astrojs/starlight/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2dc2603e-03f2-45e3-8b6a-27c535324bdd"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
