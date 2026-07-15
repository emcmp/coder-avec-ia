# OpenAI / Codex — index de recherche

## Statut

Ce dossier regroupe la recherche consacrée à l’écosystème OpenAI utile au cours **Coder avec l’IA**. Il couvre à la fois l’usage pratique de **Codex CLI** et les briques permettant de construire des systèmes agentiques avec l’API OpenAI.

Le contenu est destiné à être transformé ensuite en modules, démonstrations, laboratoires, fiches de commandes et grilles d’évaluation pour une clientèle collégiale en **programmation** et en **réseautique**.

## Documents du dossier

| Fichier | Sujet principal | Modules du cours concernés | État |
|---|---|---|---|
| `02-openai-00-README.md` | Index, périmètre et décisions de classement | Tous | Terminé |
| `02-openai-01-codex-cli.md` | Codex CLI, commandes, permissions, sandbox, `AGENTS.md`, workflow Git | M1, M3, M4, M5, M6, M7 | À créer |
| `02-openai-02-responses-api.md` | Responses API, outils, état, streaming, MCP, function calling | M3, M6, M8 | À créer |
| `02-openai-03-agents-sdk.md` | Agents SDK, tools, handoffs, sessions, guardrails, sandbox, tracing | M1, M3, M6, M7 | À créer |
| `02-openai-04-evals-and-quality.md` | Evals, tests, graders, trajectoires, qualité et observabilité | M7 | À créer |
| `02-openai-05-mapping-vers-cours.md` | Correspondance complète avec les modules, labs et compétences | Tous | À créer |

## Concepts structurants

### Codex CLI

Codex CLI est l’outil le plus directement pertinent pour montrer le travail agentique dans un dépôt réel. Les sujets à documenter sont :

- installation et authentification;
- démarrage dans un dépôt;
- inspection, modification et exécution de code;
- commandes interactives comme `/init`, `/status`, `/permissions`, `/model` et `/review`;
- création et utilisation de `AGENTS.md`;
- modes de sandbox et règles d’approbation;
- intégration à Git, aux branches, aux worktrees et aux validations;
- exécution interactive et non interactive;
- limites, arrêt, reprise et contrôle humain.

### Responses API

La Responses API constitue l’interface centrale pour créer des applications agentiques avec les modèles OpenAI. Elle réunit :

- entrées texte et image;
- contexte multi-tour;
- outils intégrés;
- fonctions personnalisées;
- recherche web et recherche de fichiers;
- computer use;
- serveurs MCP distants;
- streaming typé;
- état conversationnel et chaînage de réponses.

### Agents SDK

Le SDK Agents fournit une couche d’orchestration pour construire des workflows plus structurés :

- agents avec instructions et outils;
- boucle d’agent;
- agents utilisés comme outils;
- handoffs;
- sessions et mémoire;
- guardrails;
- human-in-the-loop;
- sandbox agents;
- tracing;
- intégration MCP.

### Évaluation et qualité

La qualité ne doit pas être jugée uniquement sur la réponse finale. Le cours doit aussi montrer comment vérifier :

- le choix du bon outil;
- les arguments fournis à l’outil;
- le respect des contraintes;
- la trajectoire suivie;
- la réussite des tests;
- le nombre d’itérations;
- les erreurs et reprises;
- le coût et la latence;
- le besoin d’intervention humaine.

## Correspondance avec les modules du cours

| Module | Contribution de la recherche OpenAI |
|---|---|
| **M1 — Harness Engineering** | Codex CLI comme premier harness concret; permissions, sandbox, outils, modèle, boucle, validation et traces. |
| **M2 — Intention et spécification** | Instructions exécutables, critères d’acceptation, définition du résultat attendu et limites de tâche. |
| **M3 — Contexte, mémoire et skills** | `AGENTS.md`, contexte du dépôt, état multi-tour, sessions, mémoire et outils chargés au besoin. |
| **M4 — Git, GitHub et isolation** | Travail dans une branche ou un worktree, revue de diff, commits, rollback et validation avant fusion. |
| **M5 — Comprendre un système existant** | Inspection d’un dépôt, recherche de points d’entrée, exécution de commandes, lecture de tests et production d’une carte du système. |
| **M6 — Exécution assistée et agents** | Boucle Codex, Responses API, Agents SDK, outils, handoffs, sous-tâches et routage. |
| **M7 — Tests, évaluations et rétroaction** | Tests déterministes, evals, graders, guardrails, tracing, critères de sortie et revue humaine. |
| **M8 — Documentation et mémoire durable** | Rapports de run, documentation générée, décisions persistantes, corpus de fichiers et recherche documentaire. |

## Angle pédagogique recommandé

Le contenu ne doit pas être présenté comme une revue de produits OpenAI. Il doit servir à enseigner un workflow technique durable :

```text
intention
  → spécification
  → contexte
  → environnement isolé
  → exécution agentique
  → observation réelle
  → validation
  → documentation
```

Chaque activité devrait commencer par une mauvaise méthode, par exemple :

- consigne vague;
- dépôt non isolé;
- permissions trop larges;
- absence de tests;
- contexte surchargé;
- agent laissé en boucle sans condition d’arrêt.

Les étudiants reconstruisent ensuite le harness de façon progressive et mesurent l’amélioration.

## Exemples de laboratoires à développer

### Programmation

- Corriger un bogue dans un worktree avec Codex CLI.
- Demander un plan, limiter les fichiers modifiables et exiger des tests.
- Comparer deux niveaux de raisonnement pour la même tâche.
- Construire un mini-agent avec un outil de lecture de fichier et un outil de validation.
- Évaluer le choix d’outil et la qualité du diff produit.

### Réseautique

- Diagnostiquer un problème DNS avec un agent limité à des outils de lecture.
- Générer puis vérifier une séquence PowerShell de diagnostic.
- Imposer une confirmation avant toute commande destructive.
- Produire un runbook à partir des observations réelles.
- Évaluer un agent sur la précision des commandes, l’ordre des tests et la qualité du rapport.

## Sources prioritaires

Les documents détaillés doivent privilégier les sources officielles suivantes :

- documentation Codex et dépôt `openai/codex`;
- documentation officielle de la Responses API;
- documentation officielle de l’OpenAI Agents SDK;
- guides OpenAI sur l’évaluation;
- guides OpenAI sur la construction d’agents;
- OpenAI Cookbook pour les exemples techniques.

Les exemples communautaires peuvent compléter la recherche, mais ils ne doivent pas remplacer la documentation officielle pour les commandes, paramètres, permissions, modèles ou comportements susceptibles d’évoluer.

## Règle de complétion

Une recherche n’est considérée terminée que lorsque :

1. le fichier Markdown est présent dans ce dossier;
2. les commandes et exemples ont été vérifiés;
3. les sources officielles sont indiquées;
4. le lien avec les modules du cours est explicite;
5. les usages en programmation et en réseautique sont couverts;
6. les lacunes et points à vérifier sont signalés honnêtement.
