# ADR-0002 — Identifiants stables et parcours flexible

> Identifiant : `[DOC-ADR-002]`  
> Version : 0.1  
> Dernière modification : 2026-06-11  
> Statut : acceptée

## Statut

Acceptée.

## Contexte

Le projet doit permettre de référencer précisément des notions, exercices, aides visuelles, vidéos, entrées de glossaire et autres blocs pédagogiques.

Ces éléments peuvent être déplacés d’une séance à une autre selon le temps disponible, le public cible ou l’évolution du cours.

Si l’identifiant d’un bloc contient son numéro de séance, son module temporaire ou un nom de produit, il devient fragile et doit être renommé dès que le parcours change.

## Décision

Les identifiants pédagogiques doivent être conceptuels, stables et indépendants du parcours.

Le format retenu est : `[TYPE-DOMAINE-NNN]`.

Exemples : `[THE-CON-001]`, `[EX-CON-001]`, `[VIS-MAP-001]`, `[GLO-SPE-001]`.

Les identifiants ne doivent pas contenir :

- de numéro de séance;
- de position dans une table des matières;
- de nom de produit;
- de nom de plateforme.

Les séances, modules et parcours référencent les blocs, mais ne les possèdent pas.

## Conséquences

- Un bloc peut être déplacé sans être renommé.
- Un outil comme CodeGraph peut être utilisé comme exemple sans apparaître dans l’identifiant.
- Les commentaires et demandes de correction peuvent cibler un bloc précis.
- Les agents IA peuvent retrouver plus facilement les éléments à modifier.
- Les produits et plateformes peuvent être remplacés sans casser toute la nomenclature.

## Référence

Voir `project/conventions/nomenclature-blocs-pedagogiques.md`.
