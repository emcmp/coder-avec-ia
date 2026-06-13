# Gabarits pédagogiques

> Identifiant : `[DOC-CHR-005]`  
> Version : 0.4  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Ce document définit les gabarits réutilisables pour produire les contenus pédagogiques du parcours **Coder avec l’IA**.

## Principe général

Un gabarit n’est pas un formulaire administratif. C’est une structure légère pour produire des contenus cohérents sans alourdir les pages publiques.

Deux formats doivent être distingués :

| Format | Rôle | Public cible |
|---|---|---|
| Micro-module source/Admin | Concevoir, versionner et relier les contenus | Équipe de conception |
| Rencontre publique | Faire apprendre et guider une activité | Étudiants et enseignants en classe |

## Découplage contenu, parcours et provider

Une page publique affiche une rencontre dans un parcours donné, mais le contenu conserve une identité stable.

Règles :

- le titre stable ne contient pas `Cours 1`, `Cours 2`, etc.;
- la numérotation appartient à l’index, à la navigation ou au `sidebar_label`;
- un provider n’est pas un tag principal lorsque la notion est transversale;
- les métadonnées visibles décrivent d’abord la notion;
- le provider utilisé pour les exemples est conservé dans les références pédagogiques ou une section d’équivalence.

Exemples :

```text
title: Contexte utile
sidebar_label: Rencontre 1 - Contexte utile
métadonnées visibles: 20–30 min · Notion transversale · Prompt et contexte
références pédagogiques: exemple principal actuel : GitHub Copilot
```

## Règle de publication publique

Une page publique ne doit pas ressembler à une fiche de planification.

Sur une page publique :

- le titre ne commence pas par l’identifiant `[MIC-...]`;
- les métadonnées sont discrètes;
- les compétences visées ne sont pas placées au début;
- les statuts internes ne dominent pas la page;
- les termes de conception pédagogique sont remplacés par des titres naturels;
- les identifiants et compétences sont conservés dans un bloc replié à la fin.

## Gabarit — Rencontre publique

Structure recommandée :

```text
Titre stable
Métadonnées discrètes : durée, portée, contexte
Courte amorce
Section notionnelle avec emoji
Exemple de prompt ou de réponse IA
Explication guidée
À essayer
Récapitulatif
Pour aller plus loin
Références pédagogiques repliées
```

Les titres doivent ressembler à une page de cours, pas à un plan de conception.

## Correspondance des sections

| Source/Admin | Rencontre publique |
|---|---|
| Intention | Amorce ou introduction |
| What’s in it for me? | intégré à l’amorce |
| Friction de départ | Problème ou exemple initial |
| Théorie ciblée | Ce qu’il faut comprendre |
| Démonstration courte | Exemple guidé |
| Mini-exercice | À essayer |
| Retour rapide | Récapitulatif |
| Paliers | Pour aller plus loin |
| Compétences visées | Références pédagogiques, à la fin |

## Boîtes IA style Copilot

Tous les prompts, réponses simulées, extraits de sortie IA et résumés de modifications doivent être présentés dans une boîte IA.

Classes disponibles :

```text
aiBox
aiBoxPrompt
aiBoxResponse
aiBoxChanges
aiBoxHeader
aiBoxTitle
aiBoxMeta
aiBoxBody
aiBoxSmall
```

Usage recommandé :

- `aiBoxPrompt` pour une demande envoyée à l’IA;
- `aiBoxResponse` pour une réponse ou une hypothèse produite par l’IA;
- `aiBoxChanges` pour un résumé de fichiers modifiés ou de diff;
- `aiBoxSmall` pour une boîte courte.

## Gabarit — Micro-module source/Admin

Un micro-module source peut être plus explicite, car il sert à concevoir et maintenir le parcours.

Structure recommandée :

```text
[MIC-DOMAINE-NNN] Titre
Version
Dernière modification
Statut
Domaine
Durée cible
Outil principal
Équivalences utiles
Intention
Compétences liées
What’s in it for me?
Friction de départ
Théorie ciblée
Démonstration courte
Mini-exercice
Retour rapide
Paliers I / II / III
Prérequis
Débloque
Ressources liées
```

## Autres gabarits

Le fichier peut aussi servir de référence pour :

- paliers;
- démonstrations;
- exercices;
- panneaux provider;
- checklists.

## Règles de maintenance

- Chaque contenu produit à partir d’un gabarit doit avoir un identifiant stable.
- Chaque contenu doit avoir une version, une date de dernière modification et un statut.
- Le palier I doit être utile même si les paliers II et III ne sont jamais faits.
- Les exemples peuvent utiliser GitHub Copilot comme outil principal, mais la notion doit rester provider-agnostique lorsqu’elle est transversale.
- Les équivalences Codex et Claude Code doivent rester courtes et utiles.
- Une page publique doit être lisible pour l’étudiant avant d’être utile au suivi administratif.
- Les références pédagogiques doivent rester disponibles, mais discrètes.
- Les prompts et réponses IA doivent utiliser les boîtes IA réutilisables.
