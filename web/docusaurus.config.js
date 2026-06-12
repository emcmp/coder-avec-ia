// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";

const siteConfig = require("./config");

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.nom,
  tagline: siteConfig.description,
  url: "https://emcmp.github.io",
  baseUrl: "/coder-avec-ia/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  organizationName: "emcmp",
  projectName: "coder-avec-ia",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/emcmp/coder-avec-ia/tree/main/web",
          exclude: [
            "01-comprendre-trousse/**",
            "02-niveaux-usage/**",
            "03-guide-etudiant/**",
            "04-guide-enseignant/**",
            "05-activites/**",
            "06-banque-prompts/**",
            "07-modeles-fiches/**",
            "08-a-propos/**",
          ],
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  plugins: [require.resolve("./plugins/docs-metadata")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: siteConfig.nom,
        logo: {
          alt: "Coder avec l’IA",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "accueil",
            position: "left",
            label: "Accueil",
          },
          {
            label: "Chartes",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "admin/charte-visuelle",
                label: "Charte visuelle",
              },
              {
                type: "doc",
                docId: "admin/page-exemple-style",
                label: "Page exemple",
              },
              {
                type: "doc",
                docId: "admin/exemple-provider",
                label: "Exemple provider",
              },
              {
                type: "doc",
                docId: "admin/charte-redactionnelle",
                label: "Charte rédactionnelle",
              },
              {
                type: "doc",
                docId: "admin/charte-pedagogique",
                label: "Charte pédagogique",
              },
              {
                type: "doc",
                docId: "admin/gabarits-pedagogiques",
                label: "Gabarits pédagogiques",
              },
            ],
          },
          {
            label: "Conception",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "admin/brainstorm",
                label: "Brainstorm",
              },
              {
                type: "doc",
                docId: "admin/nomenclature-blocs-pedagogiques",
                label: "Nomenclature",
              },
              {
                type: "doc",
                docId: "admin/competences",
                label: "Compétences",
              },
              {
                type: "doc",
                docId: "admin/catalogue-blocs-pedagogiques",
                label: "Catalogue des blocs",
              },
              {
                type: "doc",
                docId: "admin/catalogue-documents-projet",
                label: "Catalogue des documents",
              },
              {
                type: "doc",
                docId: "admin/modules-et-dependances",
                label: "Modules et dépendances",
              },
              {
                type: "doc",
                docId: "admin/glossaire",
                label: "Glossaire",
              },
              {
                type: "doc",
                docId: "admin/cours-ia-avance",
                label: "Parcours",
              },
              {
                type: "doc",
                docId: "admin/modules-pilotes",
                label: "Modules pilotes",
              },
            ],
          },
          {
            type: "doc",
            docId: "admin/index",
            position: "right",
            label: "Admin",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/emcmp/coder-avec-ia",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. ${
          siteConfig.nom
        }. CÉGEP Édouard-Montpetit.`,
      },
      // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java", "dart"],
      },
      metadata: [
        {
          name: "keywords",
          content: `${siteConfig.nom}, ${siteConfig.description}, informatique, technique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit`,
        },
      ],
    }),
};

module.exports = config;
