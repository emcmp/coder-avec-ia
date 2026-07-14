# GitHub Copilot — mapping vers le cours IA

## Correspondance principale

| Contenu GitHub Copilot | Modules du cours | Usage pédagogique |
|---|---|---|
| Suggestions inline, Chat, Inline Chat | M2, M5 | Passer d’une demande locale à une modification vérifiable |
| Agent Mode | M1, M6, M7 | Comprendre le harness, la boucle agentique et la validation |
| Cloud Agent | M4, M6, M7 | Issue → agent → branche → draft PR → revue humaine |
| MCP Server | M3, M5, M6 | Relier l’agent à des outils, données et workflows |
| Copilot instructions | M2, M3, M7 | Règles persistantes, contexte de dépôt et critères de qualité |
| Code Review et PR summaries | M4, M7, M8 | Revue, preuve, documentation et transfert |
| Modules JavaScript et Python | M2, M6, M7 | Laboratoires d’entrée avec tâches petites et observables |

## Arrimage détaillé

### M1 — Harness Engineering

Apports : Agent Mode, accès au workspace, terminal, outils, permissions, exécution itérative et rapport final.

À ajouter : anatomie explicite du harness, conditions d’arrêt, traces et comparaison de configurations.

### M2 — Spécification

Apports : amélioration des prompts, commentaires vers code, issues utilisées comme tâches.

À ajouter : objectif, portée, exclusions, critères d’acceptation, validations obligatoires et définition du done.

### M3 — Contexte, mémoire et skills

Apports : `.github/copilot-instructions.md`, instructions par chemins, MCP et contexte du workspace.

À ajouter : sélection du contexte, mémoire de session, skills réutilisables, source de vérité et budget de contexte.

### M4 — Git, GitHub et isolation

Apports : issues, branches `copilot/`, draft PR, commentaires `@copilot`, protections et approbations.

À ajouter : worktrees locaux, stratégie de branches pour plusieurs agents, rollback et revue de diff avant commit.

### M5 — Comprendre un système existant

Apports : analyse du workspace et sélection des fichiers pertinents.

À ajouter : carte système, points d’entrée, dépendances, blast radius, logs et cas de diagnostic réseau.

### M6 — Agents et orchestration

Apports : Agent Mode, Cloud Agent, outils MCP, exécution de tâches multi-étapes.

À ajouter : workflow déterministe avant autonomie, routage, sous-tâches, limites de tours et intervention humaine.

### M7 — Tests, évaluations et validation

Apports : code review, PR review, génération de tests, journaux d’exécution et politiques de branche.

À ajouter : preuves obligatoires, PASS/FAIL/PARTIAL, tests vs evals, grille de trajectoire, coût et latence.

### M8 — Documentation et transfert

Apports : PR summaries, commentaires de revue et instructions de dépôt.

À ajouter : runbooks, décisions, postmortems, FAQ, documentation versionnée et mémoire durable.

## Lacunes prioritaires après cette recherche

1. Crawl complet de la Partie 1.
2. Documentation officielle détaillée de Copilot CLI.
3. Skills, hooks et permissions dans les versions actuelles de VS Code/Copilot.
4. Git worktrees dans un workflow multi-agent.
5. Laboratoires réseautiques réalistes.
6. Grille d’évaluation uniforme des runs agentiques.
7. Comparaison pratique Copilot vs Codex vs Claude Code sur une même tâche.

## Séquence pédagogique possible

1. Suggestions inline sur une tâche minuscule.
2. Chat contextuel et explication du diff.
3. Agent Mode dans un dépôt de démonstration.
4. Ajout d’instructions de dépôt.
5. Connexion d’un outil MCP en lecture seule.
6. Délégation d’une issue au Cloud Agent.
7. Revue de la draft PR avec tests et critères.
8. Documentation du run et retour d’expérience.
