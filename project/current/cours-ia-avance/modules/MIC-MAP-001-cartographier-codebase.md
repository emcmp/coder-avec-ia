# [MIC-MAP-001] Cartographier un codebase

> Version : 0.2  
> Dernière modification : 2026-06-12  
> Statut : pilote  
> Domaine : MAP  
> Durée cible : 20 à 30 min  
> Outil principal : GitHub Copilot  
> Équivalences utiles : Codex, Claude Code, CodeGraph ou outil équivalent lorsque disponible

## Intention

Apprendre à comprendre rapidement où intervenir dans un projet existant avant de demander à l’IA de modifier du code.

## What’s in it for me?

La cartographie évite de corriger au mauvais endroit.

Elle permet de mieux guider l’IA, de valider ses propositions et de réduire les changements inutiles.

## Friction de départ

Mauvaise manière volontaire :

```text
Ajoute cette fonctionnalité dans le projet.
```

Sans cartographie, l’IA risque de :

- modifier un fichier secondaire;
- ignorer une architecture existante;
- dupliquer une logique déjà présente;
- proposer une solution qui fonctionne localement mais qui ne respecte pas le projet;
- créer un changement difficile à réviser.

## Théorie ciblée

Cartographier un codebase, ce n’est pas tout lire.

C’est repérer :

1. le point d’entrée probable;
2. les fichiers liés;
3. les responsabilités principales;
4. les dépendances ou appels importants;
5. les endroits à ne pas toucher.

La bonne question n’est pas :

```text
Est-ce que je comprends tout le projet?
```

La bonne question est :

```text
Est-ce que je comprends assez pour faire cette modification sans deviner?
```

## Démonstration courte

### Démo principale — GitHub Copilot

Dans un petit projet existant, demander :

```text
Avant de modifier le code, aide-moi à identifier les fichiers probablement concernés par cette fonctionnalité.
Explique brièvement le rôle de chaque fichier et ce qu’il faudrait vérifier avant de changer quoi que ce soit.
```

Observer :

- les fichiers proposés;
- les hypothèses de l’IA;
- les zones d’incertitude;
- les fichiers à ouvrir avant modification.

### Équivalence provider

| Provider | Ce qu’on montre | Vigilance |
|---|---|---|
| GitHub Copilot | Repérer les fichiers dans le dépôt | Ne pas accepter une cartographie sans vérifier |
| Codex | Demander un plan avant modification | Éviter une tâche trop large dès le départ |
| Claude Code | Lire les fichiers pertinents avant d’agir | Surveiller les fichiers réellement consultés |
| CodeGraph ou équivalent | Explorer symboles, dépendances ou appels | Ne pas confondre graphe et compréhension complète |

## Mini-exercice

On donne une demande de changement :

```text
Ajouter un message d’erreur personnalisé quand le formulaire est invalide.
```

Avant toute modification, la personne doit produire :

- une liste de fichiers probablement concernés;
- le rôle supposé de chaque fichier;
- une question à poser à l’IA pour confirmer la zone de modification;
- un risque si on modifie directement sans cartographier.

## Retour rapide

À retenir :

- cartographier, ce n’est pas lire tout le projet;
- l’objectif est de réduire les hypothèses;
- l’IA peut aider à cartographier, mais il faut vérifier;
- une bonne cartographie rend les modifications plus petites et plus révisables.

## Paliers

### Palier I — Noyau essentiel

Retrouver le fichier ou la zone probable à modifier.

Résultat attendu : la personne peut expliquer où elle interviendrait et pourquoi.

### Palier II — Consolidation

Lire les dépendances, symboles ou appels liés à la zone ciblée.

Résultat attendu : la personne peut nommer ce qui risque d’être affecté.

### Palier III — Approfondissement

Comparer une lecture manuelle avec un outil de cartographie.

Résultat attendu : la personne peut expliquer ce que l’outil aide à voir et ce qu’il ne remplace pas.

## Prérequis

- [MIC-CTX-001] Donner un contexte utile à l’IA
- [MIC-VCS-001] Utiliser Copilot dans un dépôt GitHub

## Débloque

- [MIC-CLI-001] Travailler avec un agent CLI
- [MIC-AGT-001] Piloter une tâche agentique
- [MIC-EVA-001] Vérifier une réponse IA plausible

## Ressources liées

- [THE-MAP-001] Comprendre un codebase par cartographie
- [DEM-MAP-001] Demander une cartographie avant modification
- [EX-MAP-001] Identifier les fichiers à inspecter
- [VIS-MAP-001] Schéma fichiers, symboles et dépendances
