# Index maître — recherches du cours IA

## Rôle

Ce dossier contient la matière première de recherche utilisée pour construire le cours collégial sur l'utilisation technique de l'IA en programmation et en réseautique.

Flux de traitement :

```text
recherche web → project/inbox → synthèse → contenu pédagogique → cours publié
```

## Modules de référence

| ID | Module | Question centrale |
|---|---|---|
| M1 | Harness comme environnement de travail | Dans quel système réel l'agent travaille-t-il? |
| M2 | Intention et spécification | Que doit-on construire et sous quelles contraintes? |
| M3 | Contexte, mémoire et skills | Que doit connaître l'agent? |
| M4 | Outils et interface agent-ordinateur | Avec quels outils et contrats l'agent agit-il? |
| M5 | Git, worktrees et isolation | Comment protéger le dépôt et l'environnement? |
| M6 | Boucles, agents et orchestration | Comment déléguer et contrôler l'exécution? |
| M7 | Tests, évaluations et rétroaction | Comment vérifier le résultat et la trajectoire? |
| M8 | Documentation et mémoire durable | Comment conserver et réutiliser le savoir produit? |
| MX | IA locale et infrastructure | Comment exécuter et héberger localement? |

## Classement des documents existants

### 00-syntheses

- `../Rapport de recherche modulaire.md` — synthèse des huit modules, décisions de contenu et lacunes. Modules : M1 à M8.
- `../Recherche approfondie pour bâtir le cours IA technique.md` — rapport transversal principal. Modules : M1 à M8 et MX.
- `../2026-07-13-structure-modules-et-lacunes.md` — état de référence de la structure et des informations manquantes. Modules : M1 à M8.
- `../2026-07-13-index-recherches.md` — ancien index, conservé comme historique.

### 01-microsoft

- `../Microsoft Learn Copilot pour le cours IA technique.md` — parcours introductif Copilot, IDE, chat, suggestions, tests et dépannage. Modules : M1, M2, M4, M6, M7.
- `../Extraction structurée du parcours GitHub Copilot Partie 2.md` — Agent Mode, Cloud Agent, MCP, revue de code, JavaScript et Python. Modules : M1, M3 à M7.

### 06-harness

- `../2026-07-13-harness-engineering.md` — recherche centrale sur le harness, les outils, la sandbox, les boucles, la mémoire, les évaluations et l'observabilité. Modules : M1 à M7.

## Arborescence de classement

```text
project/inbox/
├── INDEX.md
├── README.md
├── 00-syntheses/
├── 01-microsoft/
├── 02-openai/
├── 03-anthropic/
├── 04-google/
├── 05-github/
├── 06-harness/
├── 07-local-ai/
├── 08-outils-codebase/
├── 09-evaluation-qualite/
├── 10-reseautique/
└── archive/
```

Les sous-dossiers sont créés immédiatement comme catégories de dépôt. Les documents historiques restent temporairement à la racine afin d'éviter une migration destructive avant validation; les nouveaux rapports doivent être déposés directement dans la bonne catégorie.

## Inventaire des recherches couvertes

| Domaine | Couverture actuelle | État |
|---|---:|---|
| Structure générale du cours | Forte | exploitable |
| Harness engineering | Forte | exploitable |
| Microsoft Learn Copilot introduction | Forte | exploitable |
| Microsoft Learn Copilot partie 2 | Forte | exploitable |
| OpenAI Codex et Agents | Faible | recherche prioritaire |
| Anthropic Claude Code | Faible | recherche prioritaire |
| Google Gemini CLI et ADK | Faible | recherche prioritaire |
| GitHub worktrees, Actions et coding agent | Moyenne | à consolider |
| IA locale | Moyenne | à vérifier et actualiser |
| Réseautique assistée par IA | Faible | lacune majeure |
| Laboratoires prêts à lancer | Très faible | production requise |
| Évaluation pédagogique | Faible | production requise |

## Prochaines recherches prioritaires

### Priorité 1 — OpenAI / Codex

1. Codex CLI : commandes, configuration, permissions, modes interactif et non interactif.
2. Codex dans GitHub et travail à distance.
3. `AGENTS.md`, skills, MCP et règles de projet dans l'écosystème OpenAI.
4. Choix des modèles et niveaux de reasoning pour planification, exécution et revue.
5. Sandboxing, approbations, reprise de session et traces.
6. Evals et graders pour agents de code.

Livrable visé : `02-openai/openai-codex-parcours-technique.md`.

### Priorité 2 — Anthropic / Claude Code

1. Workflow Claude Code complet.
2. `CLAUDE.md`, mémoire, sous-agents et skills.
3. Hooks, permissions et modes de sécurité.
4. Plan mode, extended thinking et gestion du contexte.
5. MCP et travail parallèle avec worktrees.

Livrable visé : `03-anthropic/claude-code-parcours-technique.md`.

### Priorité 3 — Google

1. Gemini CLI : commandes, fichiers d'instructions, outils et permissions.
2. Google ADK : agents, sessions, mémoire, tools, evals et observabilité.
3. A2A et orchestration, seulement au niveau pertinent pour une technique.
4. NotebookLM pour la documentation et la préparation pédagogique.

Livrable visé : `04-google/google-agents-et-gemini-cli.md`.

### Priorité 4 — GitHub comme environnement agentique

1. Git worktrees, branches et isolation multi-agents.
2. GitHub CLI : issues, PR, reviews et Actions.
3. Copilot coding agent et environnement cloud.
4. Instructions de dépôt, rulesets et revues automatisées.
5. Codespaces comme sandbox pédagogique.

Livrable visé : `05-github/github-workflow-agentique.md`.

### Priorité 5 — Cas réseautiques

1. Diagnostic DNS, TCP, services et journaux avec IA.
2. Génération et validation de scripts PowerShell.
3. Runbooks, rollback et idempotence.
4. Inventaire, configuration et documentation d'infrastructure.
5. Sécurité des commandes et gestion des secrets.

Livrable visé : `10-reseautique/banque-cas-reseautique-ia.md`.

### Priorité 6 — Évaluation et laboratoires

1. Grille uniforme d'évaluation d'un run agentique.
2. Tests déterministes vs evals qualitatives.
3. Laboratoire complet commun programmation/réseautique.
4. Kit de départ : `AGENTS.md`, `STATE.md`, `SYSTEM_MAP.md`, `VALIDATION.md`.
5. Banque de mauvaises méthodes et reconstructions guidées.

Livrables visés :

- `09-evaluation-qualite/grille-evaluation-run-agentique.md`
- `00-syntheses/plan-laboratoires-prioritaires.md`

## Règle pour les prochaines recherches

Chaque nouveau rapport doit contenir :

- résumé exécutif;
- concepts clés;
- commandes et configurations;
- exemples programmation et réseautique;
- laboratoires possibles;
- pièges et limites opérationnelles;
- mapping explicite vers M1–M8;
- éléments nouveaux par rapport aux rapports existants;
- informations encore manquantes;
- sources officielles et date de collecte.
