import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_D4kuVlj5.mjs';
import './prerender_DBRjKgWf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Liste de vérification du premier projet",
  "description": "Explorez la documentation complète de Rikoshea pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "préparation-du-projet",
    "text": "Préparation du projet"
  }, {
    "depth": 2,
    "slug": "exécution-du-projet",
    "text": "Exécution du projet"
  }, {
    "depth": 3,
    "slug": "phase-initiale",
    "text": "Phase initiale"
  }, {
    "depth": 2,
    "slug": "ressources-supplémentaires",
    "text": "Ressources supplémentaires"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Se lancer dans un nouveau projet peut être à la fois excitant et stimulant. Avec la bonne préparation et orientation, votre entreprise est prête pour le succès. La Liste de vérification du premier projet de Rikoshea est conçue pour fournir une approche claire et structurée afin de vous assurer que vous êtes bien préparé à chaque étape du processus.</p>\n<h2 id=\"préparation-du-projet\">Préparation du projet</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Portée et objectifs",
        "set:html": "<ul>\n<li>Assurez-vous de la clarté de la portée du projet, des livrables et des résultats souhaités</li>\n<li>Définissez des objectifs clairs et des critères de réussite pour l’achèvement du projet</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Outils et équipement",
        "set:html": "<ul>\n<li>Faites une liste de tous les outils et équipements Rikoshea nécessaires</li>\n<li>Vérifiez la disponibilité de l’inventaire et son état avant de commencer</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Organisation des services",
        "set:html": "<ul>\n<li>Si une expertise supplémentaire ou une main-d’œuvre est nécessaire, organisez les services de construction Rikoshea à l’avance</li>\n<li>Clarifiez les accords de niveau de service et les délais avec votre représentant Rikoshea</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"exécution-du-projet\">Exécution du projet</h2>\n<h3 id=\"phase-initiale\">Phase initiale</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Configurez le site du projet selon les directives de configuration de Rikoshea</p>\n</li>\n<li>\n<p>Organisez une réunion initiale d’équipe pour aligner les objectifs du projet et les méthodologies Rikoshea</p>\n</li>\n<li>\n<p>Établissez des points de contrôle et des jalons du projet pour des évaluations régulières</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"ressources-supplémentaires\">Ressources supplémentaires</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Guides détaillés",
        description: "Accédez à une documentation approfondie et aux manuels d'utilisation des outils et services Rikoshea.",
        href: "fr/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Contacts de support",
        description: "Gardez à portée de main les coordonnées du support Rikoshea, disponible pour vous aider tout au long de votre projet.",
        href: "fr/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Apprentissage avancé",
        description: "Explorez d'autres ressources éducatives fournies par Rikoshea pour affiner vos compétences et vos connaissances.",
        href: "fr/guides/getting-started"
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

const url = "src/content/docs/fr/guides/first-project-checklist.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/fr/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/fr/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
