import { k as Fragment, _ as __astro_tag_component__, z as createVNode } from './astro_CRlzzAQT.mjs';
import { $ as $$Image } from './pages/generic_C7AFnguZ.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_D4kuVlj5.mjs';
import './prerender_DBRjKgWf.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lista de Verificación del Primer Proyecto",
  "description": "Explora la documentación completa de Rikoshea para obtener una visión detallada de nuestras herramientas premium y servicios de construcción.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "preparación-del-proyecto",
    "text": "Preparación del Proyecto"
  }, {
    "depth": 2,
    "slug": "ejecución-del-proyecto",
    "text": "Ejecución del Proyecto"
  }, {
    "depth": 3,
    "slug": "fase-inicial",
    "text": "Fase Inicial"
  }, {
    "depth": 2,
    "slug": "recursos-adicionales",
    "text": "Recursos Adicionales"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Comenzar un nuevo proyecto puede ser emocionante y desafiante en igual medida. Con la preparación adecuada y orientación, tu empresa está lista para el éxito. La Lista de Verificación del Primer Proyecto de Rikoshea está diseñada para proporcionar un enfoque claro y estructurado para garantizar que estés bien preparado en cada paso del camino.</p>\n<h2 id=\"preparación-del-proyecto\">Preparación del Proyecto</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Alcance y Objetivos",
        "set:html": "<ul>\n<li>Asegurar claridad sobre el alcance del proyecto, entregables y resultados deseados.</li>\n<li>Definir objetivos claros y criterios de éxito para la finalización del proyecto.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Herramientas y Equipamiento",
        "set:html": "<ul>\n<li>Hacer una lista de todas las herramientas y equipos de Rikoshea necesarios.</li>\n<li>Verificar la disponibilidad y condición del inventario antes de comenzar.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Organización de Servicios",
        "set:html": "<ul>\n<li>Si se necesita experiencia adicional o mano de obra, organiza los servicios de construcción de Rikoshea con anticipación.</li>\n<li>Aclarar los acuerdos de nivel de servicio y los plazos con tu representante de Rikoshea.</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"ejecución-del-proyecto\">Ejecución del Proyecto</h2>\n<h3 id=\"fase-inicial\">Fase Inicial</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Configurar el sitio del proyecto según las pautas de configuración de Rikoshea.</p>\n</li>\n<li>\n<p>Realizar una reunión inicial de equipo para alinear los objetivos del proyecto y las metodologías de Rikoshea.</p>\n</li>\n<li>\n<p>Establecer puntos de control y hitos del proyecto para evaluaciones regulares.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"recursos-adicionales\">Recursos Adicionales</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Guías Detalladas",
        description: "Accede a documentación detallada y manuales de usuario para herramientas y servicios de Rikoshea.",
        href: "es/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Contactos de Soporte",
        description: "Mantén a mano los detalles de contacto para el soporte de Rikoshea, disponible para ayuda durante todo tu proyecto.",
        href: "es/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Aprendizaje Avanzado",
        description: "Explora recursos educativos adicionales proporcionados por Rikoshea para refinar tus habilidades y conocimientos.",
        href: "es/guides/getting-started"
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

const url = "src/content/docs/es/guides/first-project-checklist.mdx";
const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/es/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/docs/es/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
