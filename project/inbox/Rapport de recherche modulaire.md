# Rapport de recherche modulaire

## État général

La recherche approfondie a été structurée autour des huit modules validés du cours **IA appliquée aux pratiques techniques en informatique**, en gardant les contraintes pédagogiques déjà établies : contenu très concret, orienté commandes, workflows, artefacts versionnables, avec des exemples distincts pour **programmation** et **réseautique**. La hiérarchie des sujets a été resserrée pour éviter les doublons entre spécification, contexte, exécution agentique, tests et documentation. La décision de rendre **le module harness/agents central** est solidement appuyée par les sources récentes : OpenAI met en avant agent loop, tools, sessions, sandbox, guardrails et tracing; Anthropic organise sa guidance autour des workflows, orchestrator-workers et evaluator-optimizer; Google ADK expose explicitement runtime, routing, sessions/memory, observability, evaluation et safety/security; OpenHands structure son offre autour d’agent canvas, SDK, hooks, MCP et déploiement. citeturn25view3turn25view1turn25view0turn26view2turn26view0turn26view1turn11view1turn11view2turn11view4turn20view0

Le contenu a été préparé pour les huit fichiers Markdown demandés. En revanche, l’écriture effective dans `project/inbox` a été bloquée par une limite de session de l’environnement au moment de la sauvegarde. Le plan éditorial, les sections et les contenus des fichiers sont néanmoins définis et prêts à être déposés tels quels dans les noms de fichiers ci-dessous.

## Fichiers préparés

Les fichiers préparés pour le dossier `project/inbox` sont les suivants :

`module01-modeles-outils.md`  
`module02-specification.md`  
`module03-contexte-skills.md`  
`module04-git-worktrees.md`  
`module05-exploration-systeme.md`  
`module06-harness-agents.md`  
`module07-tests-evaluations.md`  
`module08-docs-rag.md`

Un mémo d’ensemble a aussi été structuré sous la forme d’un fichier de synthèse de recherche, destiné à conserver l’état de référence validé et les lacunes transversales.

## Décisions de contenu conservées

Le **module sur les modèles et outils** a été recentré sur le choix d’environnement réel de travail, plutôt que sur une revue abstraite de modèles. Ce choix est cohérent avec les docs officielles : OpenAI distingue les modèles selon capacité, coût, outils et raisonnement; Anthropic distingue les usages selon complexité et travail agentique; Claude Code se présente aujourd’hui comme un outil lisant le codebase, modifiant des fichiers et exécutant des commandes; Ollama et LM Studio offrent une voie locale, avec serveur/API, compatibilité et workflows outillés. citeturn9view0turn13view3turn9view3turn10view0turn10view2turn24view1turn24view2

Le **module spécification** a été séparé proprement du module contexte : ici, on passe de l’intention à une spec testable. Ce cadrage s’appuie sur les recommandations officielles de structurer les prompts en **Identity / Instructions / Examples / Context**, d’expliciter la validation pour le code, et d’utiliser des exemples ou des gabarits plutôt que des demandes vagues. GitHub Spec Kit renforce cette orientation en cadrant la logique de développement piloté par spécification. citeturn13view2turn13view1turn13view0turn22view0

Le **module contexte/memory/skills** a été traité comme un module d’ingénierie documentaire de l’agent, distinct de la specification. Les plateformes convergent ici aussi : OpenAI formalise sessions, sandbox, MCP et mémoire de travail; MCP sert de standard d’intégration des données, outils et workflows; ADK met en avant sessions, memory, context caching/compression et skills. citeturn25view1turn25view0turn13view5turn11view1turn11view2turn11view4

Le **module Git/GitHub/Worktrees** a été rendu très opératoire. Les sources officielles justifient pleinement ce choix : `git worktree` permet plusieurs arbres de travail liés au même dépôt, avec `add`, `list`, `remove`, `lock` et `repair`; GitHub CLI couvre auth, repo, issues, PR et état de travail; GitHub Actions reste le garde-fou naturel pour la validation automatisée. citeturn18view0turn18view1turn18view3turn18view4turn6view0turn6view1turn15view7

Le **module exploration de système** a été séparé des modules d’exécution et de documentation. Il s’appuie sur des outils simples mais solides : `ripgrep` pour la recherche dans le code, PowerShell et ses commandes système/réseau pour l’environnement Windows, ainsi que `ipconfig`, `nslookup`, `netstat` et `Test-NetConnection` pour les cas réseautiques. citeturn19view0turn7view1turn19view4turn19view5turn19view6turn19view7

Le **module tests/évaluations** a été conçu pour couvrir à la fois les tests déterministes et les boucles d’évaluation plus qualitatives. Cela est cohérent avec les sources officielles : pytest, Jest, Playwright et Pester couvrent les validations classiques, alors qu’OpenAI documente explicitement l’usage d’evals, de graders, de guardrails et de tracing pour évaluer les sorties et workflows agentiques. citeturn14view0turn15view6turn15view5turn14view1turn16view3turn15view0turn15view1turn15view2

Le **module documentation/RAG/veille** a été consolidé autour de la mémoire durable du projet. Les sources officielles soutiennent ce choix : OpenAI documente `file_search`, les vector stores et les embeddings; Docusaurus se positionne comme une base simple de documentation versionnée en Markdown; Obsidian reste pertinent pour un coffre de notes local; LM Studio ouvre aussi la voie à des pipelines locaux avec REST API, compatibilité OpenAI/Anthropic et embeddings/outils. citeturn21view0turn21view2turn21view3turn21view6turn24view1turn24view2

## Lacunes principales à combler

Les lacunes les plus importantes qui restent à couvrir ne concernent plus la structure du cours elle-même, mais son **outillage pédagogique concret**.

La première lacune est la production de **laboratoires complets, prêts à lancer**, avec dépôts d’exemple, fichiers fournis, commandes exactes, résultats attendus et critères d’évaluation détaillés. Le contenu de recherche donne déjà les sections et les gabarits nécessaires, mais pas encore les dépôts de laboratoire eux-mêmes.

La deuxième lacune est la constitution d’un **référentiel institutionnel d’environnements et d’outils autorisés**. Comme les docs officielles montrent aujourd’hui une forte diversité d’outils — cloud, local, CLI, IDE, runtimes, proxies, MCP, file search, sandboxes — il faudra décider ce qui est réellement supporté dans les labs du programme, notamment pour la confidentialité, les secrets, le réseau sortant et les machines du collège. citeturn25view3turn15view1turn13view5turn24view4turn24view3

La troisième lacune est l’ajout d’une **banque de cas réseautiques** aussi riche que les cas programmation. La structure actuelle couvre bien les deux publics, mais il faudra encore enrichir les modules avec des cas DNS, DHCP, services Windows, PowerShell, connectivité, inventaire et procédures de runbook adaptées au terrain technique.

La quatrième lacune est la création d’une **grille d’évaluation pédagogique uniforme** pour les enseignants. Le cours dispose maintenant d’une séparation claire entre intention, contexte, exécution, tests et documentation; il reste à traduire cette séparation en rubriques d’évaluation simples, courtes et réutilisables.

La cinquième lacune est la mise en place d’un **kit de départ du cours**, qui pourrait contenir :
- un dépôt de démonstration;
- des templates `AGENTS.md`, `STATE.md`, `SYSTEM_MAP.md`, `VALIDATION.md`;
- un squelette `docker-compose.yml` de harness local;
- des skills de base en programmation et en réseautique;
- une fiche récapitulative des commandes essentielles.

## Priorité immédiate pour la suite

La priorité la plus rentable est de transformer la recherche déjà assemblée en **artefacts de cours opérationnels** dans cet ordre :

d’abord le **module 6** avec un petit harness pédagogique local et un dépôt de démonstration;  
ensuite les **modules 4 et 7** avec worktrees, validation et PR;  
puis les **modules 2 et 3** avec gabarits de spec, contexte, skills et mémoire;  
enfin les **modules 5 et 8** avec cartes système, runbooks, docs et base de connaissances.

Cette séquence respecte à la fois l’état de référence validé et la réalité des outils actuels décrits dans les sources officielles. citeturn26view2turn25view3turn18view0turn15view7turn21view0