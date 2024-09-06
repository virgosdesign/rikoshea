import { renderers } from './renderers.mjs';
import { manifest } from './manifest_KMuSNpzb.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_zWsabGlZ.mjs');
const _page1 = () => import('./chunks/404_Ccax-K3F.mjs');
const _page2 = () => import('./chunks/about_BqjZ0wsY.mjs');
const _page3 = () => import('./chunks/index_D5sTz90T.mjs');
const _page4 = () => import('./chunks/_.._CJFnTecU.mjs');
const _page5 = () => import('./chunks/contact_BeLnoP6v.mjs');
const _page6 = () => import('./chunks/favicon_DOwkvXUi.mjs');
const _page7 = () => import('./chunks/404_Dfqnm0FF.mjs');
const _page8 = () => import('./chunks/index_QrIN-USF.mjs');
const _page9 = () => import('./chunks/_.._8ZcfRl9x.mjs');
const _page10 = () => import('./chunks/contact_C-Zo-Brc.mjs');
const _page11 = () => import('./chunks/index_DGx1IOJZ.mjs');
const _page12 = () => import('./chunks/services_COpQaGKM.mjs');
const _page13 = () => import('./chunks/index_CcpCjfOB.mjs');
const _page14 = () => import('./chunks/_.._B1dExzrh.mjs');
const _page15 = () => import('./chunks/manifest_BZVw2aZh.mjs');
const _page16 = () => import('./chunks/robots_azYpUSnz.mjs');
const _page17 = () => import('./chunks/index_fTK2ERsE.mjs');
const _page18 = () => import('./chunks/_.._Boad_Cyp.mjs');
const _page19 = () => import('./chunks/index_C2eDvFZi.mjs');
const _page20 = () => import('./chunks/index_DVVnCAIz.mjs');
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
    "middlewareSecret": "a8a48015-15ac-4c35-aa3f-2f880de5572d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
