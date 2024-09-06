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
    "title": "ドキュメンテーションハブ",
    "tagline": "効率的なツールのガイド、詳細なサービス文書、およびプロジェクトのサポートのための中心的なハブ。",
    "image": {
      "alt": "A Rikoshea's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/ja/guides/getting-started/"
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
      title: "クイックスタートガイド",
      icon: "document",
      "set:html": "<p>当社のわかりやすく簡潔なガイドで迅速に立ち上がり、新規ユーザーと熟練した専門家の両方に適したものを利用してください。</p>"
    }), createVNode($$Card, {
      title: "ツール＆装備",
      icon: "seti:eslint",
      "set:html": "<p>Rikosheaの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
    }), createVNode($$Card, {
      title: "建設サービス",
      icon: "seti:puppet",
      "set:html": "<p>Rikosheaの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
    }), createVNode($$Card, {
      title: "高度なトピック",
      icon: "seti:terraform",
      "set:html": "<p>Rikosheaの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
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
const url = "src/content/docs/ja/welcome-to-docs.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/ja/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/ja/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
