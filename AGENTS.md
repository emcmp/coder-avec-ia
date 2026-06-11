# AGENTS.md

## Rôle du dépôt

Ce dépôt contient la trousse ouverte **Coder avec l’IA**, destinée à soutenir l’enseignement, l’apprentissage, la programmation et l’évaluation avec l’IA générative en informatique.

Le dépôt sert aussi d’espace de conception pour une formation avancée destinée aux profs d’informatique sur les outils IA, les agents, les workflows de développement et les usages pédagogiques.

## Structure générale

- `project/` contient le travail de conception : plans, specs, décisions, prompts, backlog et notes.
- `project/current/` contient le travail actif.
- `project/archive/` contient les versions anciennes ou mises de côté.
- `web/` contient le site Docusaurus publié.
- `web/docs/` doit contenir uniquement du contenu propre, publiable et orienté lecteur.

## Règles pour les agents IA

- Ne pas modifier massivement `web/` sans demande explicite.
- Préférer créer ou modifier les documents dans `project/` avant de publier dans `web/docs/`.
- Garder les décisions structurantes dans `project/adr/`.
- Garder les specs dans `project/specs/`.
- Garder les prompts réutilisables dans `project/prompts/`.
- Garder les tâches ouvertes dans `project/backlog/`.
- Produire des changements petits, relisibles et faciles à réviser.
- Toujours résumer les fichiers modifiés et la raison des changements.

## Usage de CodeGraph

Pour toute demande qui touche un codebase, son architecture, ses dépendances ou ses zones probables de modification, l’agent doit vérifier si **CodeGraph** ou un outil équivalent est disponible.

Si CodeGraph est disponible, l’utiliser en premier pour repérer les fichiers, symboles et dépendances pertinents. Si CodeGraph n’est pas disponible, le mentionner brièvement et poursuivre avec les outils de recherche habituels. Ne pas configurer CodeGraph sans demande explicite.

## Sujet CodeGraph

Le dépôt doit conserver une trace de l’idée d’utiliser **CodeGraph** ou un outil équivalent pour aider les agents IA à comprendre la structure d’un codebase : symboles, dépendances, appels, impacts et zones probables de modification.

Ce sujet ne doit pas être développé dans le contenu publié tant que la table des matières du cours n’est pas stabilisée.

## Style attendu

- Français québécois clair.
- Ton professionnel, pédagogique et accessible.
- Public principal : enseignants et étudiants en informatique au collégial.
- Favoriser les exemples concrets liés à la programmation, aux projets, aux dépôts Git, aux outils IA et à l’évaluation.

## Validation attendue

Avant de proposer une modification importante :

1. vérifier la cohérence avec la structure du projet;
2. éviter de briser le site Docusaurus si `web/` est modifié;
3. privilégier des fichiers Markdown courts et bien nommés;
4. proposer une synthèse claire des changements.
