# Recherche — Harness Engineering pour le cours IA

## Conclusion principale

Le **Harness Engineering** ne devrait pas être présenté comme un bloc avancé placé à la fin du cours. Dans la pratique, le harness est l’environnement de travail réel qui entoure le modèle dès le premier contact : instructions, outils, accès au dépôt, mémoire, contexte, permissions, sandbox, boucle d’exécution, validation, traces et intervention humaine.

Les étudiants ne travaillent presque jamais avec « un modèle nu »; ils travaillent avec ChatGPT, Codex, Claude Code, GitHub Copilot ou Gemini CLI, donc déjà avec un harness.

## Conséquence pour le cours

Le harness devrait devenir la colonne vertébrale du cours. Les autres modules expliquent progressivement ses composantes et la manière de les configurer, de les utiliser et de les améliorer.

## 1. Définition opérationnelle

Un harness est l’ensemble des mécanismes qui transforment un LLM en système de travail capable d’agir de manière contrôlée. Il comprend généralement :

- le modèle et ses paramètres;
- les instructions et règles persistantes;
- le contexte statique et dynamique;
- les outils, API, commandes et MCP;
- la mémoire et l’état de session;
- la boucle agentique;
- l’orchestration et les handoffs;
- les permissions et confirmations;
- le workspace ou la sandbox;
- les guardrails et conditions d’arrêt;
- les tests, évaluations et boucles de rétroaction;
- le tracing, les métriques et les journaux;
- les points de contrôle humains;
- le déploiement et la reprise d’exécution.

La documentation officielle de l’OpenAI Agents SDK regroupe précisément ces éléments : agent loop, tools, handoffs, sandbox agents, guardrails, sessions, human-in-the-loop et tracing.

Source : https://openai.github.io/openai-agents-python/

## 2. Le premier contact est déjà un harness

Lorsqu’un étudiant lance Codex, Claude Code, Copilot ou Gemini CLI, il utilise déjà :

- un prompt système;
- un ensemble de commandes autorisées;
- un mécanisme de lecture et d’écriture de fichiers;
- une stratégie de sélection du contexte;
- une boucle qui observe les résultats;
- des permissions;
- un terminal ou workspace;
- un système de rapport final.

Le cours devrait commencer par ouvrir cette « boîte » et montrer les couches normalement invisibles. Le but n’est pas de construire immédiatement un framework d’agents, mais de comprendre le système qui pilote l’agent déjà utilisé.

## 3. Workflows déterministes avant autonomie

Anthropic distingue :

- les **workflows**, dont les chemins sont définis par le code;
- les **agents**, qui choisissent dynamiquement leurs actions et leurs outils.

La recommandation est de choisir la solution la plus simple et d’ajouter de l’autonomie seulement lorsqu’elle améliore réellement le résultat.

Progression pédagogique proposée :

1. appel unique avec sortie structurée;
2. chaîne de prompts avec validation;
3. routage selon le type de tâche;
4. parallélisation;
5. orchestrateur-travailleurs;
6. évaluateur-optimiseur;
7. agent autonome avec conditions d’arrêt.

Source : https://www.anthropic.com/engineering/building-effective-agents

## 4. Interface agent-ordinateur

Il faut investir dans l’interface entre l’agent et ses outils. Un bon outil possède :

- des noms et paramètres évidents;
- des descriptions précises;
- des exemples;
- des limites claires;
- des formats faciles à produire;
- des mécanismes qui rendent les erreurs difficiles.

Contenu à enseigner :

- conception d’une commande ou fonction-outil;
- schéma des paramètres;
- validation des entrées;
- messages d’erreur utiles;
- distinction lecture/écriture;
- confirmation avant action destructive;
- tests de l’outil avec plusieurs formulations.

## 5. Ground truth et feedback

Un agent fiable doit recevoir une vérité terrain après chaque action : résultat de commande, sortie de test, contenu de fichier, état du dépôt, logs ou réponse API.

Boucle centrale :

```text
objectif → plan → outil → observation réelle → décision suivante → arrêt
```

### Programmation

- compiler;
- lancer les tests;
- lire le diff;
- exécuter l’application;
- vérifier les logs.

### Réseautique

- `ping` ou `Test-NetConnection`;
- `Resolve-DnsName`;
- état des services;
- ports ouverts;
- événements Windows;
- vérification de configuration.

## 6. Conditions d’arrêt

Un harness pédagogique devrait arrêter l’agent lorsque :

- les tests passent;
- la tâche est terminée;
- une décision architecturale est nécessaire;
- une permission manque;
- un budget de temps, tokens ou tentatives est dépassé;
- l’agent modifie trop de fichiers;
- le résultat ne progresse plus.

Livrable possible : un fichier de politique d’exécution définissant les limites du run.

## 7. Sandbox, workspace et permissions

Concepts à distinguer :

- **worktree** : isolation Git;
- **conteneur ou VM** : isolation système;
- **permissions** : actions autorisées;
- **snapshot** : point de reprise;
- **workspace** : fichiers visibles;
- **confirmation** : action sensible;
- **reprise** : continuer une exécution interrompue.

## 8. Mémoire, sessions et reprise

Un harness ne repose pas uniquement sur la fenêtre de contexte. Il gère :

- ce qui vient de se passer;
- les artefacts produits;
- les décisions persistantes;
- l’état d’une tâche interrompue;
- les résultats de commandes;
- les points nécessitant une validation humaine.

Google ADK présente le contexte comme du code : sessions, mémoire, sorties d’outils et artefacts sont assemblés dans une vue structurée; les événements non pertinents peuvent être filtrés, les anciens tours résumés et les artefacts chargés seulement au besoin.

Source : https://adk.dev/

## 9. Observabilité dès le développement

Le tracing permet de comprendre :

- quels outils ont été appelés;
- avec quels arguments;
- combien de tours ont été nécessaires;
- où du temps et des tokens ont été dépensés;
- où l’agent a divergé;
- quelle intervention humaine a été requise;
- pourquoi une exécution s’est arrêtée.

Atelier possible : comparer deux runs et déterminer pourquoi l’un est plus lent, plus coûteux ou moins fiable.

## 10. Évaluer le harness, pas seulement le modèle

Questions à poser :

- quelle configuration produit le meilleur résultat?;
- quel outil ou skill manque?;
- quelles règles ont été ignorées?;
- quel contexte a été chargé inutilement?;
- quelle condition d’arrêt a échoué?;
- quel feedback aurait permis de se corriger?;
- un petit modèle avec un bon harness surpasse-t-il un gros modèle mal configuré?

Niveaux d’évaluation :

- résultat final;
- trajectoire;
- usage des outils;
- respect des contraintes;
- coût;
- latence;
- capacité de reprise;
- besoin d’intervention humaine.

## 11. Harness local et harness géré

Continuum à montrer :

1. agent CLI local;
2. agent dans un worktree;
3. agent dans un conteneur;
4. API locale;
5. runtime hébergé;
6. observabilité centralisée.

L’objectif n’est pas de déployer une grande plateforme, mais de comprendre ce que la plateforme ajoute au harness local.

## 12. Structure de cours révisée autour du harness

### Module 1 — Le harness comme environnement de travail

- démonstration d’un agent CLI;
- anatomie du système;
- modèle, instructions, outils, contexte, boucle, permissions, validation et traces;
- workflow vs agent;
- premier run observé.

### Module 2 — Intention, spécification et règles

- objectifs;
- critères;
- fichiers d’instructions;
- limites;
- plans et tâches.

### Module 3 — Contexte, mémoire et skills

- contexte statique/dynamique;
- sélection des fichiers;
- sessions;
- état;
- skills chargés à la demande.

### Module 4 — Outils et interface agent-ordinateur

- shell;
- fichiers;
- GitHub;
- API;
- MCP;
- paramètres, schémas, erreurs et confirmations.

### Module 5 — Workspaces, Git et isolation

- branches;
- worktrees;
- sandbox;
- permissions;
- snapshots;
- rollback.

### Module 6 — Boucles, orchestration et routage

- chaînes;
- gates;
- routeurs;
- parallélisation;
- orchestrateur-travailleurs;
- agents et sous-agents;
- choix du modèle.

### Module 7 — Feedback, tests et évaluations

- ground truth;
- tests;
- evals;
- hooks;
- evaluator-optimizer;
- critères de sortie.

### Module 8 — Observabilité, coût et exploitation

- logs;
- traces;
- métriques;
- tokens;
- latence;
- reprise;
- déploiement local ou géré.

## 13. Activité d’ouverture recommandée

### Mauvaise méthode

Lancer un agent avec une consigne vague dans un repo non isolé et lui donner tous les droits.

### Observer

- choix silencieux;
- contexte inadéquat;
- modifications trop larges;
- absence de validation;
- difficulté à comprendre le run.

### Reconstruction progressive

1. créer un worktree;
2. écrire une tâche claire;
3. fournir les règles du repo;
4. limiter les outils;
5. ajouter les commandes de validation;
6. définir les conditions d’arrêt;
7. activer le rapport et les traces;
8. relancer et comparer.

## 14. Informations encore manquantes

- anatomie précise de Codex, Claude Code, Copilot et Gemini CLI;
- commandes de configuration et d’inspection propres à chaque outil;
- format exact des permissions, hooks, skills et fichiers d’instructions;
- exemple de harness minimal commun aux profils programmation et réseautique;
- laboratoires avec traces réelles;
- comparaison worktree, conteneur et sandbox;
- métriques simples utilisables par des étudiants;
- grille d’évaluation d’un run agentique;
- exemples de mauvais contrats d’outils;
- scénarios de reprise après erreur;
- exemple multi-agent raisonnable sans surarchitecture.

## Sources principales

- OpenAI Agents SDK : https://openai.github.io/openai-agents-python/
- Anthropic — Building Effective Agents : https://www.anthropic.com/engineering/building-effective-agents
- Google Agent Development Kit : https://adk.dev/
- OpenHands Software Agent SDK : https://arxiv.org/abs/2511.03690

## Décision recommandée

Harness Engineering devient le premier module et l’architecture générale du cours. Il ne remplace pas les autres sujets : il leur donne une place claire. Chaque module approfondit une couche du harness que les étudiants utilisent déjà dans leurs outils quotidiens.
