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
            type: "doc",
            docId: "cours/index",
            position: "left",
            label: "Cours",
          },
          {
            label: "Rencontres",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "cours/contexte-utile",
                label: "Rencontre 1 - Contexte utile",
              },
              {
                type: "doc",
                docId: "cours/cartographier-codebase",
                label: "Rencontre 2 - Cartographier un codebase",
              },
              {
                type: "doc",
                docId: "cours/verifier-reponse-ia",
                label: "Rencontre 3 - Vérifier une réponse IA",
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
            label: "Chartes",
            position: "right",
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
