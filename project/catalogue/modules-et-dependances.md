# Catalogue des modules et dépendances

> Identifiant : `[DOC-CAT-003]`  
> Version : 0.1  
> Dernière modification : 2026-06-11  
> Statut : brouillon structurant

Ce catalogue sert à cartographier les micro-modules du parcours **Coder avec l’IA** et leurs dépendances.

Il ne constitue pas encore une table des matières finale. Il sert plutôt de carte de conception pour décider ensuite quels modules seront faits en classe, à la maison, en extension ou dans une version plus longue du cours.

## Règle de conception

Chaque module doit rester :

- concret;
- applicable rapidement;
- découpable en paliers I, II, III;
- déplaçable dans la structure de diffusion;
- indépendant d’un produit dans son identifiant.

L’outil de référence est GitHub Copilot. Les équivalences Codex ou Claude Code sont ajoutées seulement lorsqu’elles aident à transférer la notion.

## Champs de catalogue

Chaque module devrait documenter :

- ID;
- domaine;
- titre;
- intention;
- What’s in it for me?;
- durée estimée;
- paliers I, II, III;
- prérequis;
- débloque;
- outil principal;
- équivalences utiles;
- statut;
- version;
- dernière modification.

## Vue des dépendances principales

```text
MIC-IA-001  → MIC-CTX-001 → MIC-INS-001
            → MIC-VCS-001 → MIC-SPE-001 → MIC-MAP-001
                                      └→ MIC-AGT-001
MIC-MAP-001 → MIC-CLI-001 → MIC-AGT-001 → MIC-VCS-002
MIC-CTX-001 → MIC-RET-001
MIC-CTX-001 → MIC-EVA-001 → MIC-OBS-001
MIC-SEC-001 traverse tous les modules avec outils et agents
MIC-PED-001 s’appuie sur les modules stabilisés
MIC-LOC-001 est optionnel et vient après CLI, OBS et SEC
```

## Modules pressentis

### [MIC-IA-001] Se repérer dans les familles d’outils IA

- Domaine : IA
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : distinguer assistant conversationnel, assistant IDE, agent CLI, agent cloud et outil local.
- What’s in it for me? : choisir le bon outil pour la bonne tâche au lieu de tout demander au même assistant.
- Durée : 20 à 30 min
- Palier I : classer quelques outils dans les bonnes familles.
- Palier II : associer chaque famille à des tâches typiques.
- Palier III : discuter les limites et risques de chaque famille.
- Prérequis : aucun.
- Débloque : tous les modules suivants.
- Outil principal : GitHub Copilot comme point d’ancrage.
- Équivalences utiles : Codex et Claude Code pour illustrer agents et CLI.

### [MIC-CTX-001] Donner un contexte utile à l’IA

- Domaine : CTX
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : apprendre à fournir un contexte suffisant sans noyer le modèle.
- What’s in it for me? : obtenir une réponse plus utile, plus ciblée et plus vérifiable.
- Durée : 20 à 30 min
- Palier I : comparer un prompt flou et un prompt contextualisé.
- Palier II : choisir quelles informations inclure ou exclure.
- Palier III : gérer un contexte long ou multi-fichiers.
- Prérequis : MIC-IA-001 recommandé.
- Débloque : MIC-INS-001, MIC-MAP-001, MIC-EVA-001, MIC-RET-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex et Claude Code pour taille de contexte ou reprise de session.

### [MIC-INS-001] Utiliser des instructions réutilisables

- Domaine : INS
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : formaliser les règles de travail pour éviter de répéter les mêmes consignes.
- What’s in it for me? : rendre l’IA plus cohérente d’une tâche à l’autre.
- Durée : 20 à 30 min
- Palier I : écrire une courte instruction de projet.
- Palier II : distinguer instruction globale, instruction de dépôt et instruction de tâche.
- Palier III : tester l’effet d’une instruction sur plusieurs tâches.
- Prérequis : MIC-CTX-001.
- Débloque : MIC-SPE-001, MIC-CLI-001, MIC-AGT-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : fichiers d’instructions pour Codex et Claude Code.

### [MIC-VCS-001] Utiliser Copilot dans un dépôt GitHub

- Domaine : VCS
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : travailler avec l’IA dans un vrai dépôt plutôt que dans un prompt isolé.
- What’s in it for me? : réduire les erreurs causées par un contexte incomplet.
- Durée : 20 à 30 min
- Palier I : poser une question utile sur un dépôt.
- Palier II : demander une modification limitée.
- Palier III : analyser une proposition avant de l’accepter.
- Prérequis : MIC-CTX-001.
- Débloque : MIC-SPE-001, MIC-MAP-001, MIC-VCS-002.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex branché au repo, Claude Code en local.

### [MIC-SPE-001] Spécifier avant d’implémenter

- Domaine : SPE
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : transformer une demande floue en mini-spécification exploitable.
- What’s in it for me? : éviter que l’IA parte vite dans la mauvaise direction.
- Durée : 20 à 30 min
- Palier I : écrire une mini-spec avant une modification.
- Palier II : ajouter contraintes, critères d’acceptation et cas limites.
- Palier III : utiliser une spec pour comparer deux solutions.
- Prérequis : MIC-CTX-001, MIC-INS-001 recommandé.
- Débloque : MIC-AGT-001, MIC-EVA-001, MIC-VCS-002.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex ou Claude Code pour exécuter une tâche guidée par spec.

### [MIC-MAP-001] Cartographier un codebase

- Domaine : MAP
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : comprendre où intervenir dans un projet existant.
- What’s in it for me? : modifier le bon endroit au lieu de demander à l’IA de deviner.
- Durée : 20 à 30 min
- Palier I : retrouver le fichier ou la zone probable à modifier.
- Palier II : lire dépendances, symboles et appels.
- Palier III : comparer une lecture manuelle avec un outil de cartographie.
- Prérequis : MIC-CTX-001, MIC-VCS-001 recommandé.
- Débloque : MIC-CLI-001, MIC-AGT-001, MIC-EVA-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : CodeGraph, Claude Code, Codex selon disponibilité.

### [MIC-CLI-001] Travailler avec un agent CLI

- Domaine : CLI
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : comprendre ce qu’un agent CLI change dans le workflow local.
- What’s in it for me? : déléguer une tâche encadrée tout en gardant le contrôle.
- Durée : 20 à 30 min
- Palier I : lancer une tâche courte et lire le résultat.
- Palier II : suivre l’état, les fichiers touchés et les erreurs.
- Palier III : reprendre ou corriger une tâche partiellement réussie.
- Prérequis : MIC-SPE-001, MIC-MAP-001 recommandé.
- Débloque : MIC-AGT-001, MIC-OBS-001, MIC-LOC-001.
- Outil principal : GitHub Copilot si disponible en mode agent; sinon démonstration conceptuelle.
- Équivalences utiles : Claude Code, Codex CLI.

### [MIC-AGT-001] Piloter une tâche agentique

- Domaine : AGT
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : encadrer une tâche longue sans laisser l’agent improviser.
- What’s in it for me? : obtenir un résultat révisable au lieu d’un gros changement opaque.
- Durée : 20 à 30 min
- Palier I : définir une tâche agentique courte.
- Palier II : demander un plan, une exécution et un rapport.
- Palier III : ajouter validation, rollback et critères d’arrêt.
- Prérequis : MIC-SPE-001, MIC-MAP-001, MIC-CLI-001 recommandé.
- Débloque : MIC-VCS-002, MIC-OBS-001, MIC-SEC-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex, Claude Code.

### [MIC-VCS-002] Travailler avec branches, issues et pull requests

- Domaine : VCS
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : intégrer l’IA dans un flux Git révisable.
- What’s in it for me? : éviter que l’IA modifie directement sans trace ni revue.
- Durée : 20 à 30 min
- Palier I : relier une tâche IA à une issue ou une branche.
- Palier II : lire une diff et formuler une revue.
- Palier III : utiliser un agent pour produire ou corriger une PR.
- Prérequis : MIC-VCS-001, MIC-SPE-001, MIC-AGT-001 recommandé.
- Débloque : MIC-EVA-001, MIC-PED-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex sur GitHub, Claude Code local avec Git.

### [MIC-EVA-001] Vérifier une réponse IA plausible

- Domaine : EVA
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : apprendre à repérer les réponses convaincantes mais fausses ou incomplètes.
- What’s in it for me? : ne pas remettre ou accepter une solution qu’on ne comprend pas.
- Durée : 20 à 30 min
- Palier I : appliquer une checklist de validation.
- Palier II : écrire un test ou une vérification ciblée.
- Palier III : comparer plusieurs réponses IA avec critères explicites.
- Prérequis : MIC-CTX-001, MIC-SPE-001 recommandé.
- Débloque : MIC-OBS-001, MIC-PED-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : tout provider qui produit une réponse à valider.

### [MIC-OBS-001] Lire traces, usage et contexte

- Domaine : OBS
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : comprendre ce que l’outil montre sur l’état, l’usage et le contexte.
- What’s in it for me? : mieux diagnostiquer une réponse faible ou une tâche bloquée.
- Durée : 20 à 30 min
- Palier I : trouver le statut d’une tâche ou d’une session.
- Palier II : repérer l’usage, les limites ou la taille de contexte lorsque disponible.
- Palier III : comparer la transparence de plusieurs providers.
- Prérequis : MIC-CLI-001 ou MIC-AGT-001 recommandé.
- Débloque : MIC-SEC-001, MIC-LOC-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex, Claude Code.

### [MIC-SEC-001] Gérer permissions, confidentialité et limites

- Domaine : SEC
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : encadrer ce que l’IA peut lire, modifier ou envoyer.
- What’s in it for me? : éviter les fuites, les actions dangereuses et les permissions trop larges.
- Durée : 20 à 30 min
- Palier I : identifier les données ou actions sensibles.
- Palier II : choisir une stratégie de permission adaptée.
- Palier III : comparer les risques IDE, cloud, CLI et local.
- Prérequis : MIC-IA-001, MIC-VCS-001 recommandé.
- Débloque : MIC-AGT-001, MIC-LOC-001, MIC-PED-001.
- Outil principal : GitHub Copilot.
- Équivalences utiles : Codex, Claude Code, modèle local.

### [MIC-RET-001] Retrouver l’information dans des documents

- Domaine : RET
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : comprendre l’intérêt du retrieval et du RAG sans tomber dans la théorie abstraite.
- What’s in it for me? : obtenir des réponses appuyées sur les bonnes sources.
- Durée : 20 à 30 min
- Palier I : poser une question sur un petit corpus fourni.
- Palier II : comparer réponse sans source et réponse avec source.
- Palier III : discuter limites, fraîcheur et citations.
- Prérequis : MIC-CTX-001.
- Débloque : MIC-PED-001, MIC-EVA-001.
- Outil principal : GitHub Copilot lorsque branché au contexte disponible.
- Équivalences utiles : outils RAG, Codex ou Claude Code selon environnement.

### [MIC-LOC-001] Comprendre les modèles locaux

- Domaine : LOC
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : optionnel
- Intention : savoir quand un modèle local est pertinent.
- What’s in it for me? : distinguer confidentialité, coût, performance et maintenance.
- Durée : 20 à 30 min
- Palier I : identifier les raisons d’utiliser un modèle local.
- Palier II : comprendre les compromis matériel, contexte et vitesse.
- Palier III : analyser un mini-workflow local.
- Prérequis : MIC-IA-001, MIC-OBS-001, MIC-SEC-001 recommandé.
- Débloque : approfondissement infrastructure.
- Outil principal : aucun, module conceptuel.
- Équivalences utiles : Claude Code local, serveur local, modèles ouverts.

### [MIC-PED-001] Intégrer l’IA dans le travail d’un prof

- Domaine : PED
- Version : 0.1
- Dernière modification : 2026-06-11
- Statut : brouillon
- Intention : transférer les pratiques techniques vers la préparation, l’encadrement et l’évaluation.
- What’s in it for me? : utiliser l’IA sans perdre le contrôle pédagogique.
- Durée : 20 à 30 min
- Palier I : améliorer une consigne ou une grille.
- Palier II : concevoir une activité où l’étudiant garde les mains sur le volant.
- Palier III : définir une politique ou une pratique départementale.
- Prérequis : MIC-EVA-001, MIC-SEC-001 recommandé.
- Débloque : conception des activités du parcours.
- Outil principal : GitHub Copilot ou ChatGPT selon tâche.
- Équivalences utiles : Codex ou Claude Code rarement nécessaires.

## Modules essentiels pour une première version courte

Si le temps est limité, prioriser :

1. [MIC-IA-001]
2. [MIC-CTX-001]
3. [MIC-VCS-001]
4. [MIC-SPE-001]
5. [MIC-MAP-001]
6. [MIC-EVA-001]
7. [MIC-SEC-001]

## Modules d’extension

À rendre facultatifs ou à traiter dans une version plus longue :

- [MIC-CLI-001]
- [MIC-AGT-001]
- [MIC-VCS-002]
- [MIC-OBS-001]
- [MIC-RET-001]
- [MIC-LOC-001]
- [MIC-PED-001]
