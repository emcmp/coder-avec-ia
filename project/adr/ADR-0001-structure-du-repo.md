# ADR-0001 — Structurer le dépôt avec un espace projet séparé du site

## Statut

Acceptée.

## Contexte

Le dépôt contient déjà un site Docusaurus dans `web/`. Ce site servira à publier du contenu propre et consultable.

Le projet a aussi besoin d’un espace pour conserver les traces de conception : plans, décisions, specs, prompts, backlog, notes et idées en cours.

## Décision

Ajouter un dossier `project/` à la racine du dépôt.

- `project/` contient le travail de conception.
- `web/` contient le site Docusaurus publié.
- Les agents IA doivent travailler dans `project/` par défaut, sauf demande explicite de modifier `web/`.

## Conséquences

- Les idées et plans peuvent évoluer sans affecter immédiatement le site public.
- Les décisions structurantes peuvent être conservées dans `project/adr/`.
- Le contenu peut être transformé progressivement en pages Docusaurus lorsque prêt.
- Les agents IA disposent d’une structure claire pour intervenir dans le dépôt.
