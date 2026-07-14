# Microsoft Learn Copilot pour le cours IA technique

## Résumé exécutif

Le module Microsoft Learn **Introduction to GitHub Copilot** est un bon **point d’entrée pratique** pour un cours collégial en informatique, parce qu’il offre des gestes immédiatement transférables en laboratoire : installation dans VS Code, suggestions inline, chat, inline chat, génération de tests, explication de code et collecte de diagnostics. En revanche, il reste **trop introductif** pour servir de colonne vertébrale à un cours moderne orienté travail réel avec l’IA. Il présente Copilot surtout comme un *AI pair programmer*, alors que les pratiques actuelles documentées par GitHub et VS Code vont déjà vers les **agents, la CLI, les skills, les hooks, les MCP servers, les niveaux de permissions, le sandboxing et le choix du modèle**. Pour notre clientèle — étudiants et enseignants en programmation **et** réseautique — ce module doit donc être utilisé comme **amorce**, puis rapidement complété par du contenu plus structurant sur le harness engineering, le contexte, Git/worktrees, la validation et la sécurité. citeturn2view0turn0view0turn3view1turn4view0turn19view0turn23view2turn23view3

Le contenu ci-dessous est rédigé **comme un document Markdown prêt à enregistrer** sous `project\inbox\microsoft-copilot-module.md`. Les URL demandées sont incluses en **code inline** pour rester compatibles avec l’environnement de réponse. La création de fichier n’a pas abouti dans cette session, donc le Markdown complet est fourni directement ici. Les pages Microsoft Learn étaient accessibles publiquement, mais **l’auteur** et la **date de mise à jour** n’étaient pas visibles dans le HTML public récupéré; une tentative d’accès direct à une variante Learn en français a aussi échoué côté cache. citeturn11view1turn11view2turn11view3turn24view0

## Métadonnées et structure du module

### Métadonnées de la page demandée

| Champ | Valeur |
|---|---|
| Titre | GitHub Copilot, your AI pair programmer |
| URL | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer` |
| Module parent | Introduction to GitHub Copilot |
| Type | Microsoft Learn — unité de module |
| Dernière mise à jour | Non exposée dans le HTML public récupérable |
| Auteur | Non exposé dans le HTML public récupérable |
| Date de collecte | 2026-07-13 |
| Note d’accès | HTML public accessible; métadonnées éditoriales non visibles |

Le module parent est présenté comme un module **Beginner** de **7 unités** destiné entre autres aux rôles *Developer*, *Administrator*, *Student* et *Solution Architect*. Ses objectifs officiels sont d’apprendre comment Copilot aide à coder, comment le déclencher, quelles sont les différences entre les plans, comment le configurer et comment le dépanner. Les prérequis officiels sont un compte GitHub et une compréhension de base des fondamentaux GitHub. citeturn2view0turn3view0

### Unités consultées

| Unité | Titre | URL |
|---|---|---|
| Module | Introduction to GitHub Copilot | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/` |
| Unité | Introduction | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/1-introduction` |
| Unité | GitHub Copilot, your AI pair programmer | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer` |
| Unité | Interact with Copilot | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Unité | Set up, configure, and troubleshoot GitHub Copilot | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot` |
| Unité | Exercise - Develop with AI-powered code suggestions by using GitHub Copilot and VS Code | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/5-exercise` |
| Unité | Summary | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/7-summary` |

### Titres de sections et objectifs utiles à extraire

Le module contient surtout trois unités pédagogiquement riches pour nous. La page cible **GitHub Copilot, your AI pair programmer** couvre les sections *GitHub Copilot features*, *Copilot chat*, *Copilot pull request summaries*, *Copilot code review assistance*, *Copilot for the CLI*, *Copilot Spaces*, *Copilot Cloud Agent* et *Subscription plans*. L’unité **Interact with Copilot** couvre *Inline suggestions*, *Command palette*, *Copilot chat*, *Inline chat*, *Comments to code*, *Multiple suggestions*, *Explanations* et *Automated test generation*. L’unité **Set up, configure, and troubleshoot GitHub Copilot** couvre l’inscription, la configuration VS Code, l’activation ou désactivation, puis le dépannage par journaux et diagnostics. citeturn0view0turn3view1turn4view0

## Concepts et définitions utiles à enseigner

### Ce que le module Learn apporte bien

Le langage du module est simple, mais plusieurs concepts peuvent être reformulés de façon utile pour une technique. **AI pair programmer** peut être présenté non pas comme une formule marketing, mais comme un ensemble de gestes concrets : suggérer du code, expliquer du code existant, refactoriser, aider au débogage et proposer des tests directement dans l’environnement de développement. **Inline suggestions** et **inline chat** sont particulièrement intéressants parce qu’ils correspondent à des interventions locales, visibles et courtes, donc idéales pour des ateliers collégiaux. **Comments to code** est aussi très pertinent pour introduire le passage d’une mini-spécification vers une implémentation. Enfin, **Explain This** et **Generate Unit Tests** se transfèrent très bien aux besoins des enseignants qui veulent faire comprendre ou faire valider du code existant. citeturn3view0turn3view1

### Vocabulaire pratique à conserver

| Concept | Définition utile pour le cours | Source URL |
|---|---|---|
| Inline suggestions | Suggestions de code grisées devant le curseur, acceptées ou rejetées au clavier | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Command palette | Point d’entrée rapide pour les commandes Copilot dans VS Code | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Copilot chat | Chat dans l’IDE pour poser des questions, demander des explications, générer du code, de la doc ou des tests | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer` |
| Inline chat | Chat contextuel à l’emplacement du code visé | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Slash commands | Raccourcis textuels comme `/explain`, `/suggest`, `/tests`, `/comment` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Comments to code | Transformation d’un commentaire naturel en code proposé | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Automated test generation | Génération de tests à partir d’une fonction ou classe sélectionnée | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Copilot for the CLI | Assistance terminal pour commandes, scripts et erreurs | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer` |
| Copilot Cloud Agent | Assistant autonome pour tâches multi-étapes | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer` |

### Ce que le module ne nomme pas clairement, mais qu’il faut ajouter

Pour notre cours, il faut compléter ce vocabulaire avec des notions que la documentation plus récente rend centrales : **agent type**, **language model**, **permission level**, **skills**, **hooks**, **MCP servers**, **sandboxing**, **custom instructions** et **prompt files**. La documentation VS Code sur les agents explique explicitement qu’une session agentique se configure selon le **type d’agent**, le **modèle**, le **niveau de permission**, puis se personnalise par des **instructions**, des **skills**, des **MCP servers** et des **hooks**. C’est beaucoup plus proche de la réalité du travail actuel que la seule logique “AI pair programmer”. citeturn23view2turn23view3turn23view4

## Commandes, extraits et étapes UI réutilisables en labo

### Raccourcis et gestes VS Code du module

| Élément | Verbatim à conserver | Source URL |
|---|---|---|
| Ouvrir la palette de commandes | `Ctrl+Shift+P` (Windows or Linux) / `Cmd+Shift+P` (Mac) | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Ouvrir l’inline chat | `Ctrl+I` (Windows or Linux) / `Cmd+I` (Mac) | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Accepter une suggestion | `Tab` ou `>` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Rejeter une suggestion | `Esc` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Voir une autre suggestion | `Alt+]` (Windows/Linux) ou `Option+]` (Mac) | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| Diagnostics | `GitHub Copilot: Collect Diagnostics` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot` |
| Logs | `Developer: Open Log File` / `Developer: Open Extensions Logs Folder` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot` |
| Outils développeur | `Help > Toggle Developer Tools` | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot` |

Les commandes slash du module sont aussi directement exploitables :

| Commande | Rôle | Source URL |
|---|---|---|
| `/explain` | Expliquer le code sélectionné | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| `/suggest` | Proposer des modifications | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| `/tests` | Générer des tests unitaires | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |
| `/comment` | Convertir un commentaire en code | `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot` |

### Exemples de code verbatim à réutiliser

```python
def calculate_average(numbers):
    # Start typing here and watch Copilot suggest the function body
```

Source URL: `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot`

```text
How do I implement a binary search in Python?
```

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

Source URL: `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot`

```python
# Function to reverse a string
def reverse_string(s):
    # Copilot suggests the function body here
```

```python
## Function to reverse a string
def reverse_string(s):
    return s[::-1]
```

Source URL: `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot`

```python
def add(a, b):
    return a + b
# Copilot might generate a test like this:
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

Source URL: `https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot`

### Étapes UI exactes pour le setup

Ces étapes sont assez bonnes pour un premier labo d’installation :

1. In Visual Studio Marketplace, go to the GitHub Copilot extension page and select **Install**.  
2. A popup dialog asks you to open VS Code. Select **Open**.  
3. In VS Code, on the **Extension: GitHub Copilot** tab, select **Install**.  
4. If you didn't previously authorize VS Code in your GitHub account, you're prompted to sign in to GitHub in VS Code. Select **Sign in to GitHub**.  

Puis, pour désactiver ou réactiver Copilot :

1. On the bottom pane of the VS Code window, select the status icon, and then select **Enable** or **Disable**.  
2. When you're disabling GitHub Copilot, VS Code asks whether you want to disable completions globally or for the language of the file that you're currently editing.  

Enfin, pour les suggestions inline dans les paramètres :

1. On the File menu, select **Preferences > Settings**.  
2. On the left-side pane of the Settings tab, select **Extensions**, and then select **GitHub Copilot**.  
3. Under **Editor: Enable Auto Completions**, select or clear the checkbox. citeturn4view0

### Compléments officiels immédiatement utiles pour nos labs

Le module Learn reste léger sur la CLI et le harness, mais les docs officielles permettent d’ajouter du concret tout de suite :

```bash
npm install -g @github/copilot
winget install GitHub.Copilot
brew install --cask copilot-cli
```

```text
/skills reload
/skills info SKILL-NAME
What skills do you have?
```

```bash
copilot mcp add context7 -- npx -y @upstash/context7-mcp
copilot mcp list
copilot mcp get SERVER-NAME
```

```text
/sandbox
/sandbox enable
/sandbox disable
```

```bash
git worktree add ../hotfix
git worktree add ../feature-x feature-x
git worktree list
git worktree remove ../hotfix
git worktree prune
```

Ces commandes permettent de raccorder immédiatement le contenu Learn aux modules **harness**, **contexte**, **outils externes** et **Git/worktree** de notre cours. citeturn19view0turn19view2turn19view3turn19view4turn22view0

## Activités de labo mappées à nos modules

### Mapping direct

| Activité | Module de notre cours | Variante programmation | Variante réseautique | Deliverable suggéré |
|---|---|---|---|---|
| Installation de Copilot dans VS Code | harness | extension + connexion | extension + connexion sur poste labo Windows | preuve de setup |
| Suggestions inline | exécution | micro-fonction Python/JS/C# | mini-script PowerShell ou parsing | code + commentaire critique |
| Explain This | exploration | expliquer une fonction inconnue | expliquer un script PowerShell, une commande ou une config | fiche d’explication |
| Comments to code | spec | mini-fonction à partir d’un besoin | procédure ou script à partir d’une consigne courte | mini-spec + code |
| Generate Unit Tests | validation | tests d’une fonction simple | checklist de validation d’un script ou service | tests ou checklist |
| Logs et diagnostics | harness / validation | diagnostiquer extension/connexion | diagnostiquer poste derrière proxy/pare-feu | rapport de dépannage |
| Copilot CLI | harness / exécution | lancer un prompt terminal et comparer au chat IDE | générer ou expliquer une commande terminal | transcript CLI |
| Skills / Hooks / MCP | contexte / harness | skill de projet, hook, outil externe doc | skill de diagnostic, outil externe réseau ou doc | config ou dossier de skill |
| Exercise GitHub Skills | exécution / docs | Codespaces + repo modèle | même activité, mais avec adaptation des consignes | repo complété + résumé final |

Ce mapping est cohérent avec le contenu du module et de la doc complémentaire : le Learn couvre bien l’onboarding IDE; les docs GitHub/VS Code actuelles couvrent les extensions nécessaires pour en faire un vrai canevas de cours technique. citeturn4view1turn7view0turn19view0turn23view2

### Activités recommandées à intégrer tout de suite

Pour la **programmation**, le meilleur enchaînement est : installation → suggestions inline → inline chat → Explain This → Generate Unit Tests → lecture des logs si incident. Pour la **réseautique**, il faut adapter dès le départ les artefacts : scripts PowerShell, commandes Windows, lecture de journaux, connectivité, certificats, proxies, et tests de validation manuelle plutôt que seulement des tests unitaires. La documentation réseau GitHub Copilot mentionne explicitement les certificats personnalisés, les proxys HTTP et les variables comme `NODE_EXTRA_CA_CERTS`, ce qui rend cet angle tout à fait réaliste pour des enseignants ou étudiants réseau. citeturn3view1turn4view0turn19view6

## Ce qui manque pour notre cours et comment le combler

Le module ne couvre **presque pas** les sujets qui nous semblent maintenant fondamentaux : **harness engineering**, **worktrees**, **choix du modèle**, **permissions**, **sandboxing**, **hooks**, **skills**, **MCP servers**, **observabilité**, **sécurité opérationnelle**, ni de véritables cas **réseautique**. Il montre des fonctionnalités comme *Copilot for the CLI*, *Copilot Spaces* et *Copilot Cloud Agent*, mais sans en faire une méthode de travail structurée. Or la doc actuelle VS Code explique que les agents se configurent par type d’agent, modèle, niveau de permission, puis se personnalisent via instructions, skills, custom agents, MCP et hooks; elle insiste aussi sur le contrôle, les permissions et le sandboxing. citeturn0view0turn23view2turn23view3turn23view4

### Gaps majeurs à signaler dans le document du cours

| Gap | Pourquoi c’est problématique | Ressource officielle à ajouter |
|---|---|---|
| Harness engineering | Le vrai premier contact des apprenants est un environnement outillé, pas juste un LLM | `https://code.visualstudio.com/docs/agents/overview` |
| Exemples réseautique | Le module est très orienté code applicatif | `https://docs.github.com/fr/copilot/concepts/network-settings` |
| Git / worktrees | Rien sur l’isolation sécuritaire du travail généré par IA | `https://git-scm.com/docs/git-worktree/fr` |
| Choix du modèle | Rien sur quick edits vs stronger reasoning | `https://code.visualstudio.com/docs/agents/overview` et `https://docs.github.com/fr/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model` |
| Sécurité / permissions | Très peu au-delà des logs et du proxy | `https://docs.github.com/fr/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings` |
| Observabilité | Peu de chose au-delà des logs de base | `https://code.visualstudio.com/docs/agents/overview` |
| Skills / hooks / MCP | essentiels pour un vrai workflow reproductible | `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/add-skills` ; `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/use-hooks` ; `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers` |

Le positionnement le plus juste est donc : **conserver ce module comme amorce**, mais **ne pas en faire le cœur du cours**. Il est bien adapté à une première séance ou à une mise à niveau, puis il faut bifurquer rapidement vers un parcours plus structuré : harness → contexte → Git/worktree → exécution → validation → documentation. citeturn2view0turn23view2turn22view0

## Ressources complémentaires et checklist enseignant

### Ressources recommandées en priorité

| Priorité | Ressource | Langue | URL |
|---|---|---|---|
| Haute | Qu’est-ce que GitHub Copilot ? | FR | `https://docs.github.com/fr/copilot/get-started/what-is-github-copilot` |
| Haute | Accéder GitHub Copilot gratuitement en tant qu’étudiant | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students` |
| Haute | Accéder Copilot Pro gratuitement en tant qu’enseignant | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-teachers-and-os-maintainers` |
| Haute | Suggestions de code IDE avec GitHub Copilot | FR | `https://docs.github.com/fr/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions?tool=vscode` |
| Haute | Affichage des journaux d’activité | FR | `https://docs.github.com/fr/copilot/how-tos/troubleshoot-copilot/view-logs` |
| Haute | Commencer avec l’interface en ligne de commande GitHub Copilot | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-cli/cli-getting-started` |
| Moyenne | Ajout de compétences d’agent | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/add-skills` |
| Moyenne | Utilisation de crochets avec CLI GitHub Copilot | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/use-hooks` |
| Moyenne | Ajout de serveurs MCP | FR | `https://docs.github.com/fr/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers` |
| Moyenne | Configuration des paramètres de bac à sable local | FR | `https://docs.github.com/fr/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings` |
| Moyenne | Paramètres réseau pour GitHub Copilot | FR | `https://docs.github.com/fr/copilot/concepts/network-settings` |
| Moyenne | Build with agents in VS Code | EN | `https://code.visualstudio.com/docs/agents/overview` |
| Haute | git-worktree | FR | `https://git-scm.com/docs/git-worktree/fr` |
| Moyenne | GitHub CLI manual | EN | `https://cli.github.com/manual/` |

Les ressources les plus directement utiles pour nos clientèles sont les pages GitHub Docs en français sur l’accès gratuit étudiant et enseignant, la page CLI, les logs, puis la documentation VS Code sur les agents pour toute la partie harness/mode agent. citeturn17view0turn19view8turn19view0turn20view5turn23view2

### Checklist courte pour les enseignants

| Point | Recommandation |
|---|---|
| Prérequis | compte GitHub; VS Code; extension Copilot; pour la CLI, Node.js 22+ ou WinGet/Homebrew |
| Durée minimale | 30 à 45 min en démo, 60 à 90 min en premier labo |
| Durée avancée | 90 à 120 min si on ajoute CLI, logs, skills ou MCP |
| Livrables | preuve de setup, mini-code ou mini-script, explication de code, tests ou checklist, rapport court |
| Critères d’évaluation | maîtrise de l’outil, qualité de la demande, contrôle humain sur les suggestions, validation, documentation |

### Prompts de réutilisation à copier dans un gros modèle

```text
Transforme cette synthèse Markdown en plan de cours collégial de 90 minutes avec démonstration, labo, livrables et évaluation.
```

```text
Reprends cette synthèse et produis une version orientée réseautique avec PowerShell, diagnostics réseau, services Windows, DNS, proxys et validation manuelle.
```

```text
Prends le tableau de mapping vers nos modules et ajoute pour chaque module : objectifs spécifiques, activité, commande clé, pièges à éviter, livrable et rubrique d’évaluation.
```

```text
Utilise cette synthèse comme point de départ et construis une séquence de cours centrée sur le harness engineering : agent type, modèle, permissions, sandbox, tools, hooks, skills, MCP et observabilité.
```

### Notes d’accès rencontrées

Les pages Learn étaient accessibles publiquement en HTML, l’exercice pointait vers un dépôt GitHub Skills public, mais l’auteur et la date de mise à jour n’étaient pas visibles dans le HTML Learn récupéré. Une tentative d’accès direct à une variante Learn en français a échoué côté cache, et une page GitHub Docs liée aux cloud sandboxes a aussi renvoyé une erreur interne, ce qui a été compensé par la page de sandbox local et la documentation VS Code plus générale sur les agents. citeturn4view1turn7view0turn11view1turn11view2turn11view3turn24view0turn19view4turn23view2