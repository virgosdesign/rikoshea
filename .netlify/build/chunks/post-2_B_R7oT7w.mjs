import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CRlzzAQT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Améliorer la Sécurité et l'Artisanat avec les Services de Construction de Rikoshea","description":"Services de construction de qualité pour des résultats durables","author":"Brad","authorImage":"@/images/blog/brad.avif","authorImageAlt":"Avatar Description","pubDate":"2024-02-10T00:00:00.000Z","cardImage":"@/images/blog/post-2.avif","cardImageAlt":"Man in black sweatpants using DEWALT circular saw and cutting a wood plank","readTime":5,"tags":["sécurité","artisanat","gestion"],"contents":["En matière de construction, la sécurité et la qualité de l'artisanat sont non négociables. Chez Rikoshea, nous sommes fiers de proposer une gamme de services de construction qui privilégient les deux, garantissant que vos projets sont construits pour durer.","Notre équipe d'artisans qualifiés apporte précision et expertise à chaque travail, des installations mineures aux travaux structuraux à grande échelle. Avec des outils et des matériaux de haute qualité issus de notre vaste inventaire, nous garantissons les normes de sécurité et d'artisanat les plus élevées sur chaque projet.","Mais notre engagement envers l'excellence ne s'arrête pas là. Nous fournissons également des services complets de gestion de projet pour maintenir votre construction sur la bonne voie et dans les limites du budget. De la coordination du flux de travail à la communication avec les parties prenantes, Rikoshea gère les complexités pour que vous puissiez vous concentrer sur votre vision.","Ce qui distingue Rikoshea, c'est notre dévouement à un soutien continu. Nous ne terminons pas simplement le travail et partons - nous sommes là pour le long terme. Nos services de maintenance garantissent que votre construction reste en parfait état, offrant une tranquillité d'esprit pour les années à venir.","Pour les clients d'entreprise de plus grande envergure, nous proposons des solutions personnalisées adaptées à vos défis uniques. En comprenant vos besoins spécifiques, nous concevons des stratégies visant à maximiser l'efficacité et à faire avancer votre entreprise.","Avec les services de construction de Rikoshea, vous pouvez avoir confiance que vos projets sont entre de bonnes mains. Découvrez la différence dès aujourd'hui et voyez pourquoi tant de clients choisissent Rikoshea pour leurs besoins en construction."]};
				const file = "/Users/kthrob/Repos/PurpleMartin/rikoshea/src/content/blog/fr/post-2.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
