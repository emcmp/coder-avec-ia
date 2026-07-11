# Coder avec l’IA

Trousse modulaire pour apprendre à utiliser l’IA dans un vrai contexte de programmation au collégial.

Le dépôt contient à la fois :

- l’espace de conception pédagogique sous `project/`;
- le site Docusaurus publié sous `web/`;
- les conventions, catalogues, compétences et décisions qui encadrent la production du cours.

## État du projet

- La structure pédagogique et la nomenclature sont en place.
- Quinze micro-modules sont répertoriés dans le catalogue de conception.
- Trois modules pilotes sont développés et publiés :
  - Contexte utile;
  - Cartographier un codebase;
  - Vérifier une réponse IA.
- La spécification du MVP et la table des matières complète restent à stabiliser avant la production des autres modules.
- Le prochain grand chantier porte sur le contenu réel du cours, produit progressivement par petits lots révisables.

## Sources de vérité

- `project/catalogue/modules-et-dependances.md` : identités, statuts et dépendances des micro-modules.
- `project/catalogue/competences.md` : compétences et indicateurs observables.
- `project/current/cours-ia-avance/modules/` : sources détaillées des modules produits.
- `web/docs/cours/` : pages publiques destinées aux étudiants et enseignants.
- `project/adr/` : décisions structurantes.

## Déploiement GitHub

- Dépôt : https://github.com/emcmp/coder-avec-ia
- Site : https://emcmp.github.io/coder-avec-ia/
- Configuration : `organizationName = emcmp`, `projectName = coder-avec-ia`, `url = https://emcmp.github.io`, `baseUrl = /coder-avec-ia/`

## Commandes de base

Depuis le dossier `web` :

```powershell
npm ci
npm run start
```

Pour générer la version de production :

```powershell
npm run build
```

Pour prévisualiser le site généré :

```powershell
npm run serve
```

## Règle de travail

Les agents doivent lire `AGENTS.md` et leur fichier d’instructions spécifique avant d’intervenir.

Le travail de conception se fait d’abord dans `project/`. Une page publique est produite dans `web/docs/cours/` lorsque le contenu est suffisamment stabilisé.
