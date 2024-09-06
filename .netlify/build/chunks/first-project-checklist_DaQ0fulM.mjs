import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_D4kuVlj5.mjs';
import './prerender_DBRjKgWf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Erste Projekt-Checkliste",
  "description": "Entdecken Sie die umfassende Dokumentation von Rikoshea für einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "projektvorbereitung",
    "text": "Projektvorbereitung"
  }, {
    "depth": 2,
    "slug": "projektumsetzung",
    "text": "Projektumsetzung"
  }, {
    "depth": 3,
    "slug": "erste-phase",
    "text": "Erste Phase"
  }, {
    "depth": 2,
    "slug": "zusätzliche-ressourcen",
    "text": "Zusätzliche Ressourcen"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Den Beginn eines neuen Projekts anzugehen kann gleichermaßen aufregend und herausfordernd sein. Mit der richtigen Vorbereitung und Anleitung ist Ihr Vorhaben auf Erfolgskurs. Die Rikoshea First Project Checklist wurde entwickelt, um einen klaren und strukturierten Ansatz zu bieten und sicherzustellen, dass Sie bei jedem Schritt des Weges gut vorbereitet sind.</p>\n<h2 id=\"projektvorbereitung\">Projektvorbereitung</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Umfang und Ziele",
        "set:html": "<ul>\n<li>Stellen Sie sicher, dass der Umfang des Projekts, die Liefergegenstände und die angestrebten Ergebnisse klar definiert sind.</li>\n<li>Legen Sie klare Ziele und Erfolgskriterien für den Abschluss des Projekts fest.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Werkzeuge und Ausrüstung",
        "set:html": "<ul>\n<li>Erstellen Sie eine Liste aller benötigten Rikoshea Werkzeuge und Ausrüstungen.</li>\n<li>Überprüfen Sie die Verfügbarkeit und den Zustand des Inventars vor Beginn.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Dienstleistungen arrangieren",
        "set:html": "<ul>\n<li>Wenn zusätzliche Expertise oder Arbeitskräfte benötigt werden, vereinbaren Sie rechtzeitig Rikoshea Bauarbeiten.</li>\n<li>Klären Sie Service Level Agreements und Zeitpläne mit Ihrem Rikoshea Vertreter.</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"projektumsetzung\">Projektumsetzung</h2>\n<h3 id=\"erste-phase\">Erste Phase</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Richten Sie den Projektstandort gemäß den Rikoshea Einrichtungsrichtlinien ein.</p>\n</li>\n<li>\n<p>Führen Sie ein erstes Teammeeting durch, um sich auf die Projektziele und Rikoshea Methodologien abzustimmen.</p>\n</li>\n<li>\n<p>Legen Sie Projektprüfpunkte und Meilensteine für regelmäßige Bewertungen fest.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"zusätzliche-ressourcen\">Zusätzliche Ressourcen</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Ausführliche Anleitungen",
        description: "Greifen Sie auf umfangreiche Dokumentationen und Benutzerhandbücher für Rikoshea Werkzeuge und Dienstleistungen zu.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Support-Kontakte",
        description: "Halten Sie die Kontaktdaten für den Rikoshea Support bereit, der Ihnen während Ihres Projekts zur Verfügung steht.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Fortgeschrittenes Lernen",
        description: "Erkunden Sie weitere Bildungsressourcen von Rikoshea, um Ihre Fähigkeiten und Ihr Wissensniveau zu verfeinern.",
        href: "de/guides/getting-started"
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

const url = "src/content/docs/de/guides/first-project-checklist.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/de/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/de/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
