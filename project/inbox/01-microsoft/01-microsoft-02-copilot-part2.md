# GitHub Copilot Fundamentals — Partie 2

## Résumé exécutif

Le parcours **GitHub Copilot Fundamentals Part 2 of 2** comprend 6 modules et 41 unités. Il fait passer l’apprenant des fonctions agentiques locales dans l’IDE vers des workflows GitHub complets avec délégation, pull requests, MCP et revue de code assistée.

## Modules du parcours

1. **Building applications with GitHub Copilot Agent Mode** — 6 unités
2. **Accelerate development with GitHub Copilot Cloud Agent** — 7 unités
3. **Introduction to MCP Server** — 7 unités
4. **Leveling up code reviews and pull requests with GitHub Copilot** — 7 unités
5. **Using GitHub Copilot with JavaScript** — 7 unités
6. **Using GitHub Copilot with Python** — 7 unités

## 1. Agent Mode

Agent Mode dépasse l’autocomplétion : il analyse le workspace, sélectionne les fichiers pertinents, exécute des commandes terminal et itère selon les résultats observés.

### Capacités présentées

- création d’API;
- ajout de persistance ou de base de données;
- génération et exécution de tests;
- modification coordonnée de plusieurs fichiers;
- création de configurations et de pipelines CI;
- correction après observation des sorties de commandes.

### Valeur pour le cours

- anatomie d’un harness;
- boucle objectif → plan → action → observation → correction;
- différence entre chat local et agent multi-étapes;
- nécessité de critères d’arrêt et de validation.

Source : https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/

## 2. Copilot Cloud Agent

Le Cloud Agent reçoit une tâche à partir de GitHub, travaille dans un environnement isolé, crée une branche `copilot/`, prépare une pull request brouillon et permet le suivi du travail dans les journaux et les commentaires.

### Workflow

1. formuler ou sélectionner une issue;
2. assigner la tâche à Copilot;
3. suivre l’exécution;
4. examiner les logs et la draft PR;
5. demander des corrections avec `@copilot`;
6. réviser, valider et fusionner humainement.

### Éléments techniques

- consommation d’Actions minutes et de PRUs;
- restrictions de branches;
- approbations obligatoires;
- environnement GitHub Actions isolé;
- `copilot-setup-steps.yml` pour préconfigurer l’environnement;
- prise en charge de Git LFS, runners et MCP.

Source : https://learn.microsoft.com/en-us/training/modules/github-copilot-code-agent/

## 3. MCP Server

Le module présente MCP comme protocole standard pour relier Copilot à des outils et données externes.

### Contenu utile

- configuration dans VS Code;
- connexion par OAuth ou PAT;
- variante locale avec Docker;
- utilisation avec Copilot Chat en mode Agent;
- workflows multi-étapes pilotés par des outils;
- importance des permissions et du périmètre des outils.

### Ajout pédagogique recommandé

Faire comparer un mauvais contrat d’outil à un contrat clair avec paramètres validés, lecture seule par défaut et confirmation avant écriture.

Source : https://learn.microsoft.com/en-us/training/modules/mcp-server/

## 4. Code Reviews et Pull Requests

Le module couvre l’usage de Copilot comme aide à la revue et non comme autorité finale.

### Capacités

- résumés de pull requests;
- commentaires consultatifs;
- revue locale dans l’IDE;
- revue sur GitHub.com;
- détection précoce de problèmes;
- automatisation de certaines revues;
- mesure et optimisation des PRUs;
- instructions personnalisées de dépôt.

### Fichiers importants

- `.github/copilot-instructions.md`
- `.github/instructions/*.instructions.md`

Ces fichiers permettent de définir des règles globales ou ciblées par chemin.

Source : https://learn.microsoft.com/en-us/training/modules/code-reviews-pull-requests-github-copilot/

## 5. JavaScript

Le module JavaScript est orienté débutant et convient comme laboratoire d’entrée.

### Gestes enseignables

- passer d’un prompt vague à un prompt précis;
- accepter, rejeter et parcourir plusieurs suggestions;
- utiliser `Ctrl+Enter` ou `Cmd+Enter` pour consulter des alternatives;
- modifier un petit portfolio;
- vérifier manuellement le résultat dans le navigateur.

Source : https://learn.microsoft.com/en-us/training/modules/introduction-copilot-javascript/

## 6. Python

Le module Python reprend la même logique dans le contexte d’une petite API web.

### Gestes enseignables

- décrire clairement un endpoint;
- générer une première implémentation;
- lire le code proposé;
- exécuter et tester l’API;
- corriger le prompt ou le code selon les résultats observés.

Source : https://learn.microsoft.com/en-us/training/modules/introduction-copilot-python/

## Ce que Microsoft Learn couvre moins bien

- Git worktrees et travail parallèle sécurisé;
- observabilité détaillée d’un run agentique;
- comparaison mesurée entre travail manuel, assisté et agentique;
- scénarios réseautiques;
- scripts d’administration sensibles;
- procédures de rollback;
- conditions d’arrêt explicites;
- grille d’évaluation d’un run;
- banque de tâches qu’il ne faut pas déléguer sans supervision.

## Laboratoires à dériver

### Programmation

- transformer une issue vague en issue exécutable;
- déléguer une modification dans un worktree ou au Cloud Agent;
- analyser la draft PR;
- exécuter les tests;
- relever les décisions non justifiées;
- produire un rapport PASS / FAIL / PARTIAL.

### Réseautique

- faire produire un script PowerShell de diagnostic en lecture seule;
- limiter les commandes accessibles;
- vérifier DNS, connectivité et services;
- exiger un journal de commandes;
- bloquer toute action destructive sans confirmation;
- produire un runbook et une procédure de retour arrière.

## Sources principales

- https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/
- https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/
- https://learn.microsoft.com/en-us/training/modules/github-copilot-code-agent/
- https://learn.microsoft.com/en-us/training/modules/mcp-server/
- https://learn.microsoft.com/en-us/training/modules/code-reviews-pull-requests-github-copilot/
- https://learn.microsoft.com/en-us/training/modules/introduction-copilot-javascript/
- https://learn.microsoft.com/en-us/training/modules/introduction-copilot-python/
