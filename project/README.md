# Espace projet

Ce dossier contient le travail de conception de la trousse **Coder avec l’IA** et des formations associées.

Le contenu de ce dossier n’est pas nécessairement prêt à publier. Il sert à garder une trace des idées, décisions, plans, specs, prompts et tâches avant leur transformation éventuelle en pages Docusaurus dans `web/docs/`.

## Structure

- `current/` : travail actif.
- `specs/` : spécifications de contenus, formations ou fonctionnalités.
- `adr/` : décisions structurantes du projet.
- `prompts/` : prompts réutilisables pour travailler avec des agents IA.
- `backlog/` : tâches, idées et suivis.
- `notes/` : notes de réunions et idées non classées.
- `archive/` : matériel ancien ou mis de côté.

## Principe de travail

Le flux recommandé est :

```text
idée brute → note → décision ou spec → plan → contenu publiable → page Docusaurus
```

Les agents IA doivent travailler dans `project/` par défaut, sauf lorsqu’une demande indique explicitement de modifier le site publié dans `web/`.
