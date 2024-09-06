import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_D4kuVlj5.mjs';
import './prerender_DBRjKgWf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Rikoshea docs",
  "head": [{
    "tag": "title",
    "content": "Rikoshea docs"
  }],
  "description": "Explore Rikoshea's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "مرکز اسناد",
    "tagline": "مرکز مرکزی شما برای راهنمایی ساده‌سازی شده ابزار، اسناد خدمات تفصیلی و پشتیبانی پروژه.",
    "image": {
      "alt": "A Rikoshea's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fa/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "link": "https://github.com/mearashadowfax/Rikoshea"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "راهنمای شروع سریع",
      icon: "document",
      "set:html": "<p>با راهنماهای مستقیم و مختصر ما، برای کاربران جدید و کارشناسان تجربه‌یافته، به سرعت به راه بیافتید.</p>"
    }), createVNode($$Card, {
      title: "ابزارها و تجهیزات",
      icon: "seti:eslint",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Rikoshea را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    }), createVNode($$Card, {
      title: "خدمات ساخت و ساز",
      icon: "seti:puppet",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Rikoshea را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    }), createVNode($$Card, {
      title: "مباحث پیشرفته",
      icon: "seti:terraform",
      "set:html": "<p>تمامی ابزارها و تجهیزات با کیفیت برتر شرکت Rikoshea را کشف کنید. هر بخش شامل مشخصات دقیق، راهنمای استفاده و نکات نگهداری است.</p>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/fa/welcome-to-docs.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/fa/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/fa/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
