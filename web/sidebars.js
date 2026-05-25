// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "accueil",
    {
      type: "category",
      label: "Comprendre la trousse",
      collapsed: false,
      items: [
        "comprendre-trousse/pourquoi-cette-trousse",
        "comprendre-trousse/comment-lutiliser",
        "comprendre-trousse/public-cible",
      ],
    },
    {
      type: "category",
      label: "Niveaux d’usage de l’IA en informatique",
      collapsed: false,
      items: [
        "niveaux-usage/vue-densemble-des-niveaux",
        "niveaux-usage/niveau-0-usage-interdit",
        "niveaux-usage/niveau-1-soutien-a-la-reflexion",
        "niveaux-usage/niveau-2-assistance-a-la-production",
        "niveaux-usage/niveau-3-collaboration-encadree",
      ],
    },
    {
      type: "category",
      label: "Guide étudiant",
      collapsed: false,
      items: [
        "guide-etudiant/utiliser-lia-sans-perdre-sa-competence",
        "guide-etudiant/ce-quil-ne-faut-jamais-deleguer",
        "guide-etudiant/verifier-tester-expliquer",
        "guide-etudiant/declarer-son-utilisation",
      ],
    },
    {
      type: "category",
      label: "Guide enseignant",
      collapsed: false,
      items: [
        "guide-enseignant/choisir-un-niveau-dusage",
        "guide-enseignant/rediger-une-consigne-claire",
        "guide-enseignant/corriger-un-travail-assiste-par-ia",
      ],
    },
    {
      type: "category",
      label: "Activités prêtes à utiliser",
      collapsed: false,
      items: [
        "activites/bon-prompt-mauvais-prompt",
        "activites/deboguer-avec-lia",
        "activites/critiquer-du-code-genere",
        "activites/generer-et-valider-des-tests",
      ],
    },
    {
      type: "category",
      label: "Banque de prompts",
      collapsed: false,
      items: [
        "banque-prompts/comprendre-du-code",
        "banque-prompts/deboguer",
        "banque-prompts/generer-des-tests",
        "banque-prompts/revue-de-code",
        "banque-prompts/documentation",
      ],
    },
    {
      type: "category",
      label: "Modèles et fiches",
      collapsed: false,
      items: [
        "modeles-fiches/modele-de-declaration-courte",
        "modeles-fiches/modele-de-declaration-detailee",
        "modeles-fiches/fiche-puis-je-demander-ca-a-lia",
        "modeles-fiches/fiche-avant-de-remettre-du-code-assiste",
      ],
    },
    {
      type: "category",
      label: "À propos",
      collapsed: false,
      items: [
        "a-propos/index",
        "a-propos/licence",
        "a-propos/credits",
        "a-propos/usage-de-lia-dans-la-creation-de-cette-rel",
        "a-propos/historique-du-gabarit",
      ],
    },
  ],
};

module.exports = sidebars;
