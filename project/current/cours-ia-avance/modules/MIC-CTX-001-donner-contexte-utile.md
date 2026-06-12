# [MIC-CTX-001] Donner un contexte utile à l’IA

> Version : 0.2  
> Dernière modification : 2026-06-12  
> Statut : pilote  
> Domaine : CTX  
> Durée cible : 20 à 30 min  
> Outil principal : GitHub Copilot  
> Équivalences utiles : Codex, Claude Code pour contexte long, reprise de session ou limites visibles

## Intention

Apprendre à fournir à l’IA un contexte suffisant, ciblé et utile sans l’inonder d’informations inutiles.

## What’s in it for me?

Un meilleur contexte produit des réponses plus précises, plus vérifiables et plus faciles à réutiliser.

Le but n’est pas d’écrire un prompt plus long. Le but est de donner à l’IA les bons repères.

## Friction de départ

Mauvaise manière volontaire :

```text
Corrige mon code, ça ne marche pas.
```

Problèmes :

- on ne sait pas quel comportement est attendu;
- on ne sait pas quel fichier regarder;
- on ne sait pas quelle erreur apparaît;
- on ne sait pas ce qui a déjà été essayé;
- l’IA risque d’inventer une solution plausible.

## Théorie ciblée

Un bon contexte répond habituellement à cinq questions :

1. Quelle est la tâche exacte?
2. Quel est le résultat attendu?
3. Quels fichiers ou extraits sont pertinents?
4. Quelles contraintes doivent être respectées?
5. Comment saura-t-on que c’est réussi?

Le contexte doit être assez riche pour orienter l’IA, mais assez court pour rester contrôlable.

## Démonstration courte

### Démo principale — GitHub Copilot

Montrer deux demandes dans un même petit projet :

1. une demande floue;
2. une demande contextualisée.

Comparer :

- la précision de la réponse;
- les fichiers proposés;
- les hypothèses faites par l’IA;
- la facilité de validation.

### Équivalence provider

| Provider | Ce qu’on montre | Vigilance |
|---|---|---|
| GitHub Copilot | Demande contextualisée dans le dépôt | Vérifier quels fichiers sont réellement pris en compte |
| Codex | Tâche avec contexte et critères d’acceptation | Éviter une demande trop large |
| Claude Code | Prompt local avec fichiers ou zone de travail | Surveiller la taille du contexte et la reprise de session |

## Mini-exercice

Transformer ce prompt flou :

```text
Ajoute la validation du formulaire.
```

en prompt contextualisé.

Le prompt amélioré doit inclure :

- la fonctionnalité attendue;
- le fichier ou composant concerné;
- les règles de validation;
- le comportement attendu en cas d’erreur;
- un critère de réussite.

## Retour rapide

À retenir :

- un prompt flou force l’IA à deviner;
- un bon contexte réduit les hypothèses inutiles;
- le contexte doit servir la tâche, pas raconter toute l’histoire du projet;
- les critères de réussite sont aussi importants que la demande.

## Paliers

### Palier I — Noyau essentiel

Comparer un prompt flou et un prompt contextualisé sur une petite tâche.

Résultat attendu : la personne peut reformuler une demande pour rendre la réponse plus fiable.

### Palier II — Consolidation

Choisir quelles informations inclure ou exclure pour une tâche donnée.

Résultat attendu : la personne sait éviter le contexte surchargé.

### Palier III — Approfondissement

Gérer un contexte multi-fichiers ou une session longue.

Résultat attendu : la personne sait expliquer comment le contexte influence la qualité et les limites d’une réponse.

## Prérequis

- [MIC-IA-001] Se repérer dans les familles d’outils IA

## Débloque

- [MIC-INS-001] Utiliser des instructions réutilisables
- [MIC-MAP-001] Cartographier un codebase
- [MIC-EVA-001] Vérifier une réponse IA plausible
- [MIC-RET-001] Retrouver l’information dans des documents

## Ressources liées

- [THE-CTX-001] Ce qu’est un contexte utile
- [DEM-CTX-001] Comparer prompt flou et prompt contextualisé
- [EX-CTX-001] Réécrire une demande floue
- [CHK-CTX-001] Checklist de contexte utile
