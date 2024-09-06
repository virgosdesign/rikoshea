import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_CYjyQ-e6.mjs';
import './prerender_DPSU56eQ.mjs';
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
    "title": "文档中心",
    "tagline": "您的集中式工具指南、详细服务文档和项目支持中心。",
    "image": {
      "alt": "A Rikoshea's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/zh-cn/guides/getting-started/"
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
      title: "快速入门指南",
      icon: "document",
      "set:html": "<p>通过我们简明扼要的指南，快速掌握使用技巧，适用于新手和老手用户。</p>"
    }), createVNode($$Card, {
      title: "工具与设备",
      icon: "seti:eslint",
      "set:html": "<p>探索 Rikoshea 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
    }), createVNode($$Card, {
      title: "施工服务",
      icon: "seti:puppet",
      "set:html": "<p>探索 Rikoshea 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
    }), createVNode($$Card, {
      title: "高级主题",
      icon: "seti:terraform",
      "set:html": "<p>探索 Rikoshea 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
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
const url = "src/content/docs/zh-cn/welcome-to-docs.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/zh-cn/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/zh-cn/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
