# Catalogue des compétences

> Identifiant : `[DOC-CAT-004]`  
> Version : 0.1  
> Dernière modification : 2026-06-12  
> Statut : brouillon structurant

Ce catalogue définit les compétences visées par le parcours **Coder avec l’IA** et les relie aux micro-modules.

Une compétence décrit ce que la personne doit être capable de faire. Elle est transversale : une même compétence peut être développée par plusieurs modules, et un module peut contribuer à plusieurs compétences.

## Règle de conception

Une compétence doit être :

- observable;
- formulée avec un verbe d’action;
- liée à des modules;
- liée éventuellement à des exercices, démonstrations ou évaluations;
- versionnée;
- indépendante d’un outil précis dans son identifiant.

Format d’identifiant :

```text
[CMP-DOMAINE-NNN]
```

## Champs recommandés

Chaque compétence devrait documenter :

- ID;
- titre;
- énoncé de compétence;
- domaine principal;
- niveau attendu;
- indicateurs observables;
- modules liés;
- exercices ou évaluations liés;
- version;
- dernière modification;
- statut.

## Compétences visées

### [CMP-IA-001] Choisir le bon type d’outil IA pour une tâche

- Domaine : IA
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : choisir un type d’outil IA adapté à une tâche de développement ou d’apprentissage.
- Niveau attendu : autonomie guidée.
- Modules liés : [MIC-IA-001], [MIC-VCS-001], [MIC-CLI-001], [MIC-AGT-001], [MIC-LOC-001].
- Indicateurs observables :
  - distingue assistant conversationnel, IDE, CLI, agent cloud et modèle local;
  - associe une tâche à une famille d’outils pertinente;
  - nomme au moins une limite ou un risque du choix proposé.

### [CMP-CTX-001] Fournir un contexte utile à un assistant IA

- Domaine : CTX
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : formuler une demande à l’IA avec le contexte, les contraintes et les critères de réussite nécessaires.
- Niveau attendu : essentiel.
- Modules liés : [MIC-CTX-001], [MIC-SPE-001], [MIC-EVA-001], [MIC-RET-001].
- Indicateurs observables :
  - transforme une demande floue en demande contextualisée;
  - identifie les informations utiles à inclure;
  - retire le contexte inutile;
  - ajoute un critère de réussite vérifiable.

### [CMP-INS-001] Utiliser des instructions réutilisables

- Domaine : INS
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : structurer des instructions réutilisables pour rendre le travail de l’IA plus cohérent.
- Niveau attendu : consolidation.
- Modules liés : [MIC-INS-001], [MIC-CTX-001], [MIC-SPE-001], [MIC-AGT-001].
- Indicateurs observables :
  - distingue instruction globale, instruction de dépôt et instruction de tâche;
  - rédige une règle de travail claire;
  - vérifie si l’IA respecte l’instruction.

### [CMP-SPE-001] Spécifier une tâche avant de l’implémenter avec l’IA

- Domaine : SPE
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : transformer une demande en mini-spécification exploitable par un assistant ou un agent IA.
- Niveau attendu : essentiel.
- Modules liés : [MIC-SPE-001], [MIC-CTX-001], [MIC-AGT-001], [MIC-VCS-002].
- Indicateurs observables :
  - définit le résultat attendu;
  - nomme les contraintes;
  - ajoute des critères d’acceptation;
  - prévoit au moins un cas limite.

### [CMP-MAP-001] Identifier où intervenir dans un codebase existant

- Domaine : MAP
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : repérer les fichiers, responsabilités et dépendances pertinentes avant de modifier du code avec l’IA.
- Niveau attendu : essentiel.
- Modules liés : [MIC-MAP-001], [MIC-VCS-001], [MIC-CLI-001], [MIC-AGT-001], [MIC-EVA-001].
- Indicateurs observables :
  - identifie une zone probable de modification;
  - explique le rôle des fichiers concernés;
  - nomme une dépendance ou un effet possible;
  - formule une question utile pour confirmer la cartographie.

### [CMP-CLI-001] Piloter une tâche IA en environnement local ou CLI

- Domaine : CLI
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : lancer, suivre et reprendre une tâche IA exécutée par un outil local ou en ligne de commande.
- Niveau attendu : extension.
- Modules liés : [MIC-CLI-001], [MIC-MAP-001], [MIC-AGT-001], [MIC-OBS-001], [MIC-LOC-001].
- Indicateurs observables :
  - lance une tâche courte avec un objectif clair;
  - repère les fichiers consultés ou modifiés;
  - lit le statut ou le rapport de tâche;
  - sait quand arrêter, corriger ou relancer.

### [CMP-AGT-001] Encadrer une tâche agentique

- Domaine : AGT
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : définir une tâche agentique révisable avec plan, contraintes, critères d’arrêt et validation.
- Niveau attendu : extension.
- Modules liés : [MIC-AGT-001], [MIC-SPE-001], [MIC-MAP-001], [MIC-VCS-002], [MIC-OBS-001], [MIC-SEC-001].
- Indicateurs observables :
  - limite la portée de la tâche;
  - demande un plan avant exécution;
  - exige un rapport des changements;
  - vérifie les résultats avant acceptation.

### [CMP-VCS-001] Intégrer l’IA dans un flux Git révisable

- Domaine : VCS
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : utiliser l’IA dans un workflow basé sur dépôt, branche, diff, issue ou pull request.
- Niveau attendu : essentiel à consolidation.
- Modules liés : [MIC-VCS-001], [MIC-VCS-002], [MIC-SPE-001], [MIC-EVA-001], [MIC-AGT-001].
- Indicateurs observables :
  - relie une tâche à une trace de travail;
  - lit une diff produite avec l’aide de l’IA;
  - formule une revue ou une correction;
  - évite les changements opaques non révisables.

### [CMP-EVA-001] Valider une réponse ou une production IA

- Domaine : EVA
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : vérifier une réponse, un plan ou un changement produit par l’IA avant de l’accepter.
- Niveau attendu : essentiel.
- Modules liés : [MIC-EVA-001], [MIC-CTX-001], [MIC-SPE-001], [MIC-MAP-001], [MIC-OBS-001], [MIC-PED-001].
- Indicateurs observables :
  - applique une checklist de validation;
  - repère une réponse plausible mais incomplète;
  - propose une vérification ou un test;
  - justifie accepter, corriger, rejeter ou demander une autre passe.

### [CMP-OBS-001] Lire les signaux d’état, d’usage et de contexte

- Domaine : OBS
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : interpréter les informations visibles sur l’état, l’usage, les limites ou le contexte d’un outil IA.
- Niveau attendu : extension.
- Modules liés : [MIC-OBS-001], [MIC-CLI-001], [MIC-AGT-001], [MIC-LOC-001], [MIC-SEC-001].
- Indicateurs observables :
  - trouve le statut d’une tâche ou session;
  - repère une limite ou une perte de contexte;
  - explique pourquoi une réponse peut devenir moins fiable;
  - compare brièvement la transparence de deux providers.

### [CMP-SEC-001] Encadrer les risques, permissions et données sensibles

- Domaine : SEC
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : identifier les risques liés aux données, permissions, outils connectés et actions automatisées.
- Niveau attendu : essentiel.
- Modules liés : [MIC-SEC-001], [MIC-IA-001], [MIC-VCS-001], [MIC-AGT-001], [MIC-LOC-001], [MIC-PED-001].
- Indicateurs observables :
  - identifie une information sensible;
  - distingue lecture, écriture, exécution et publication;
  - choisit une stratégie de permission adaptée;
  - explique quand éviter un outil connecté.

### [CMP-RET-001] Appuyer une réponse IA sur des sources pertinentes

- Domaine : RET
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : utiliser des documents, sources ou bases de connaissances pour obtenir une réponse plus fiable et vérifiable.
- Niveau attendu : consolidation.
- Modules liés : [MIC-RET-001], [MIC-CTX-001], [MIC-EVA-001], [MIC-PED-001].
- Indicateurs observables :
  - distingue réponse générale et réponse appuyée sur des sources;
  - vérifie la pertinence d’une source;
  - cite ou référence les éléments importants;
  - nomme une limite de fraîcheur ou de couverture.

### [CMP-LOC-001] Évaluer la pertinence d’un modèle local

- Domaine : LOC
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : optionnel
- Énoncé : analyser si un modèle local est pertinent selon la confidentialité, les coûts, les performances et la maintenance.
- Niveau attendu : approfondissement.
- Modules liés : [MIC-LOC-001], [MIC-CLI-001], [MIC-OBS-001], [MIC-SEC-001].
- Indicateurs observables :
  - nomme au moins deux avantages et deux limites;
  - relie le choix au matériel ou au contexte;
  - distingue local, cloud et outil connecté;
  - évite de présenter le local comme solution magique.

### [CMP-PED-001] Concevoir une activité pédagogique avec l’IA

- Domaine : PED
- Version : 0.1
- Dernière modification : 2026-06-12
- Statut : brouillon
- Énoncé : concevoir ou adapter une activité où l’IA soutient l’apprentissage sans remplacer la compréhension.
- Niveau attendu : consolidation.
- Modules liés : [MIC-PED-001], [MIC-EVA-001], [MIC-SEC-001], [MIC-RET-001], [MIC-CTX-001].
- Indicateurs observables :
  - précise ce que l’étudiant doit comprendre ou produire;
  - encadre l’usage permis de l’IA;
  - prévoit une trace de raisonnement ou de validation;
  - garde la personne en contrôle du résultat.

## Matrice modules → compétences

| Module | Compétences principales |
|---|---|
| [MIC-IA-001] | [CMP-IA-001], [CMP-SEC-001] |
| [MIC-CTX-001] | [CMP-CTX-001], [CMP-EVA-001], [CMP-RET-001] |
| [MIC-INS-001] | [CMP-INS-001], [CMP-CTX-001] |
| [MIC-VCS-001] | [CMP-VCS-001], [CMP-IA-001], [CMP-SEC-001] |
| [MIC-SPE-001] | [CMP-SPE-001], [CMP-CTX-001], [CMP-VCS-001] |
| [MIC-MAP-001] | [CMP-MAP-001], [CMP-EVA-001] |
| [MIC-CLI-001] | [CMP-CLI-001], [CMP-MAP-001], [CMP-OBS-001] |
| [MIC-AGT-001] | [CMP-AGT-001], [CMP-SPE-001], [CMP-SEC-001] |
| [MIC-VCS-002] | [CMP-VCS-001], [CMP-AGT-001], [CMP-EVA-001] |
| [MIC-EVA-001] | [CMP-EVA-001], [CMP-CTX-001], [CMP-MAP-001] |
| [MIC-OBS-001] | [CMP-OBS-001], [CMP-EVA-001], [CMP-AGT-001] |
| [MIC-SEC-001] | [CMP-SEC-001], [CMP-AGT-001], [CMP-LOC-001] |
| [MIC-RET-001] | [CMP-RET-001], [CMP-CTX-001], [CMP-EVA-001] |
| [MIC-LOC-001] | [CMP-LOC-001], [CMP-OBS-001], [CMP-SEC-001] |
| [MIC-PED-001] | [CMP-PED-001], [CMP-EVA-001], [CMP-SEC-001] |

## Compétences prioritaires pour une première version courte

1. [CMP-IA-001] Choisir le bon type d’outil IA pour une tâche.
2. [CMP-CTX-001] Fournir un contexte utile à un assistant IA.
3. [CMP-SPE-001] Spécifier une tâche avant de l’implémenter avec l’IA.
4. [CMP-MAP-001] Identifier où intervenir dans un codebase existant.
5. [CMP-VCS-001] Intégrer l’IA dans un flux Git révisable.
6. [CMP-EVA-001] Valider une réponse ou une production IA.
7. [CMP-SEC-001] Encadrer les risques, permissions et données sensibles.
