import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
import { $ as $$CardGrid, a as $$Card } from './Code_CYjyQ-e6.mjs';
import './prerender_DPSU56eQ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comprehensive Service Overview",
  "description": "Explore Rikoshea's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Service Overview",
    "order": 1
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Welcome to Rikoshea Construction Services – your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency.</p>\n<p>At Rikoshea, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:</p>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Pre-construction Consultations",
        icon: "star",
        "set:html": "<p>A thorough assessment to understand your project requirements, site conditions, and to provide a clear roadmap for your project.</p>"
      }), createVNode($$Card, {
        title: "Design and Engineering",
        icon: "star",
        "set:html": "<p>Leveraging innovative software and expertise to craft bespoke solutions that bring your structural vision to life with accuracy and innovation.</p>"
      }), createVNode($$Card, {
        title: "Project Management",
        icon: "star",
        "set:html": "<p>Dedicated on-site leadership to ensure that your project runs smoothly, on time, and within budget.</p>"
      }), createVNode($$Card, {
        title: "Construction and Installation",
        icon: "star",
        "set:html": "<p>Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard.</p>"
      })]
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
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/construction/service-overview.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/construction/service-overview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/construction/service-overview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
