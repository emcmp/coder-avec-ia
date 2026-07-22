const sidebars = {
  docs: [
    "accueil",
    {
      type: "category",
      label: "Cours",
      link: { type: "doc", id: "cours/index" },
      collapsed: false,
      items: [
        "cours/contexte-utile",
        "cours/cartographier-codebase",
        "cours/verifier-reponse-ia",
        "cours/microsoft/index",
      ],
    },
    {
      type: "category",
      label: "Admin",
      link: { type: "doc", id: "admin/index" },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Parcours",
          collapsed: false,
          items: [
            "admin/brainstorm",
            "admin/cours-ia-avance",
            "admin/modules-et-dependances",
            "admin/modules-pilotes",
          ],
        },
        {
          type: "category",
          label: "Conventions",
          collapsed: true,
          items: [
            "admin/charte-pedagogique",
            "admin/gabarits-pedagogiques",
            "admin/charte-redactionnelle",
            "admin/charte-visuelle",
          ],
        },
        {
          type: "category",
          label: "Bibliothèque",
          collapsed: true,
          items: [
            "admin/nomenclature-blocs-pedagogiques",
            "admin/competences",
            "admin/catalogue-blocs-pedagogiques",
            "admin/catalogue-documents-projet",
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
            "admin/adr-0003-decoupler-contenu-parcours-provider",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
