# État de référence — Structure des modules et informations manquantes

## Clientèle visée

Le cours s’adresse principalement à :

- des étudiants en technique de l’informatique, profils programmation et réseautique;
- des enseignants techniques en programmation et en réseautique.

Le cours doit rester concret, technique, applicable immédiatement et centré sur les pratiques réelles. Il ne doit pas devenir un cours universitaire sur les modèles ni répéter longuement que l’IA peut se tromper.

## Structure de référence avant recentrage sur le harness

1. Modèles, outils et environnements
2. De l’intention à la spécification
3. Ingénierie du contexte, mémoire et skills
4. Git, GitHub et isolation du travail
5. Comprendre un système existant
6. Exécution assistée et agents
7. Tests, évaluations et boucles de rétroaction
8. Documentation, connaissances et mémoire durable

## Blocs complémentaires

- IA locale et infrastructure
- Harness Engineering et exploitation

## Décisions de fusion et de déplacement

- Prompting, spécification et conception initiale sont regroupés.
- Génération/modification de code et agents CLI sont regroupés.
- RAG, documentation et mémoire durable sont regroupés.
- Architecture et design patterns deviennent transversaux.
- IA locale approfondie, graphes de connaissances, RAG avancé, orchestration multi-agents et harness complet restent optionnels ou avancés.

## Ce qui est déjà couvert par les documents collectés

### Modèles et environnements

- choix des modèles;
- niveaux de reasoning;
- coût, contexte et latence;
- cloud, API et exécution locale;
- routage selon la tâche.

### Spécification

- Specification-Driven Development;
- GitHub Spec Kit;
- intention → spécification → plan → tâches → implémentation;
- critères d’acceptation;
- décisions architecturales humaines.

### Ingénierie du contexte

- contexte statique et dynamique;
- instructions, connaissances, mémoire, exemples, outils et guardrails;
- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`;
- skills;
- mémoire persistante;
- source de vérité locale.

### Git et isolation

- branches;
- GitHub;
- pull requests;
- worktrees;
- isolation du travail agentique;
- sandbox et permissions.

### Compréhension d’un système existant

- cartographie de codebase;
- dépendances;
- points d’entrée;
- logs et configurations;
- CodeGraph, graphify et understand-everything;
- blast radius.

### Exécution agentique

- agent loop;
- méthode Architecte–Constructeur;
- conducteur et orchestrateur;
- CLI;
- sous-agents;
- conditions d’arrêt;
- budgets de temps, tokens et tentatives.

### Validation

- tests déterministes;
- evals pour les résultats non déterministes;
- hooks;
- feedback loops;
- observabilité;
- rapports de validation.

### Documentation et connaissances

- documentation officielle;
- RAG;
- wiki persistant;
- notes Markdown;
- graphes de connaissances;
- mémoire durable;
- veille technique.

### IA locale

- VRAM;
- quantification;
- cache KV;
- moteurs d’inférence;
- API locale;
- exécution multi-GPU.

### Harness

- outils et MCP;
- sandbox;
- guardrails;
- observabilité;
- routage de modèles;
- sessions;
- mémoire;
- permissions;
- reprise.

## Informations manquantes à développer

### 1. Exemples et laboratoires pour la réseautique

Les sources actuelles sont fortement orientées développement logiciel. Il faut créer des cas concrets :

- diagnostic DNS;
- problème de service Windows;
- analyse de logs;
- script PowerShell;
- déploiement de configuration;
- vérification de ports;
- inventaire de machines;
- gestion de comptes;
- pare-feu;
- rollback;
- validation de configuration.

### 2. Progression pédagogique

Il manque encore :

- les prérequis;
- la progression débutant, intermédiaire et avancé;
- la durée de chaque module;
- l’ordre des ateliers;
- les compétences attendues à chaque étape.

### 3. Laboratoires précis

Chaque module devra définir :

- la mauvaise méthode initiale;
- la situation de départ;
- les fichiers fournis;
- la tâche;
- les commandes;
- le résultat attendu;
- les critères de réussite;
- la solution;
- les erreurs fréquentes.

### 4. Environnement standard du cours

Décisions à prendre :

- Windows seulement ou multiplateforme;
- VS Code, Visual Studio ou autre IDE;
- GitHub Desktop ou CLI;
- PowerShell ou Bash;
- .NET, Python, JavaScript ou combinaison;
- agent principal;
- outils accessibles institutionnellement;
- besoin ou non d’un GPU;
- comptes et licences disponibles.

### 5. Politique de choix des outils

Distinguer :

- concepts durables;
- outils obligatoires;
- outils démontrés;
- outils optionnels;
- équivalents acceptables;
- contenu susceptible de vieillir rapidement.

### 6. Sécurité opérationnelle

À traiter concrètement, sans créer un module éthique général :

- secrets dans les prompts;
- commandes dangereuses;
- dépendances inventées ou malveillantes;
- accès au système de fichiers;
- permissions;
- scripts téléchargés;
- sandbox;
- sauvegarde;
- rollback;
- confirmation avant action destructive.

### 7. Évaluation pédagogique avec IA

Il faut définir comment évaluer :

- qualité de la spécification;
- choix du contexte;
- qualité du plan;
- analyse du diff;
- validation;
- justification technique;
- capacité à corriger l’agent;
- documentation du processus;
- qualité du résultat final.

### 8. Référentiel de commandes

Créer un référentiel par outil :

- Git;
- GitHub CLI;
- worktrees;
- Codex;
- Claude Code;
- Gemini CLI;
- PowerShell;
- outils de recherche;
- tests et build;
- logs;
- réseau;
- Docker;
- appels API.

### 9. Vérification factuelle

Plusieurs diaporamas NotebookLM contiennent des affirmations techniques sur :

- coûts;
- performances;
- VRAM;
- contextes;
- comparaisons de modèles;
- gains de productivité.

Ces affirmations doivent être vérifiées avant d’être enseignées comme des faits.

## Principes pédagogiques à conserver

Chaque séance devrait suivre ce rythme :

1. mauvaise méthode;
2. observation des problèmes;
3. présentation de la méthode;
4. mise en place technique;
5. expérimentation;
6. retour critique;
7. livrable concret.

## Livrables possibles par module

- prompt réutilisable;
- mini-spécification;
- fichier `AGENTS.md`;
- skill;
- worktree;
- carte de système;
- script;
- diff;
- rapport de validation;
- trace d’un run;
- fiche technique;
- note Markdown durable.

## Décision la plus récente

Le Harness Engineering doit devenir plus central et probablement servir d’architecture générale au cours. Les huit modules initiaux restent utiles, mais ils peuvent être réorganisés comme les couches d’un harness réel.
