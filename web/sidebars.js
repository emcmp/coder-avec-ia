// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "accueil",
    {
      type: "category",
      label: "Admin",
      link: { type: "doc", id: "admin/index" },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Chartes",
          collapsed: false,
          items: [
            "admin/charte-visuelle",
            "admin/page-exemple-style",
            "admin/exemple-provider",
            "admin/charte-redactionnelle",
            "admin/charte-pedagogique",
          ],
        },
        {
          type: "category",
          label: "Conception",
          collapsed: false,
          items: [
            "admin/nomenclature-blocs-pedagogiques",
            "admin/catalogue-blocs-pedagogiques",
            "admin/catalogue-documents-projet",
            "admin/modules-et-dependances",
            "admin/glossaire",
          ],
        },
        {
          type: "category",
          label: "Décisions",
          collapsed: true,
          items: [
            "admin/adr-0001-structure-du-repo",
            "admin/adr-0002-identifiants-stables",
          ],
        },
        {
          type: "category",
          label: "Parcours",
          collapsed: true,
          items: ["admin/cours-ia-avance"],
        },
      ],
    },
  ],
};

module.exports = sidebars;
