# Charte pédagogique

> Identifiant : `[DOC-CHR-003]`  
> Version : 0.5  
> Dernière modification : 2026-06-11  
> Statut : convention de travail initiale

Cette charte définit les principes pédagogiques du projet **Coder avec l’IA**.

Elle complète la charte visuelle et la charte rédactionnelle. Elle fixe maintenant les principes généraux, le format modulaire des séances, la progression en paliers et l’usage des outils IA de référence. Les formats détaillés des exercices, démonstrations, laboratoires et évaluations seront définis ensuite.

## 1. Public visé

Le projet s’adresse principalement à :

- des enseignants d’expérience en informatique;
- des étudiants en Techniques de l’informatique au cégep;
- des étudiants de deuxième année, de troisième année ou en fin de parcours;
- des équipes qui connaissent déjà les bases du développement logiciel.

Le contenu n’est pas conçu comme une initiation générale à l’informatique.

On peut présumer que le public connaît déjà plusieurs outils, pratiques et notions de base, par exemple :

- GitHub;
- Visual Studio Code;
- les user stories;
- les notions de projet logiciel;
- les bases de la programmation;
- les bases du travail en équipe;
- les outils courants de développement.

## 2. Positionnement collégial technique

Le projet est pensé pour un contexte de technique au cégep.

On ne cherche pas à produire un cours universitaire abstrait. On ne veut pas « pelleter des nuages ».

Chaque notion doit aider à mieux programmer, mieux comprendre un projet, mieux utiliser un outil, mieux évaluer une solution ou mieux encadrer l’usage de l’IA.

## 3. Principe central : concret et applicable

Tout contenu doit mener rapidement à quelque chose d’applicable.

Une page, une notion ou une activité devrait répondre clairement à la question :

> What’s in it for me?

Autrement dit :

- Pourquoi est-ce utile?
- Dans quel contexte vais-je m’en servir?
- Quel problème concret est-ce que ça m’aide à régler?
- Qu’est-ce que je peux essayer maintenant?

## 4. Une notion doit montrer rapidement son utilité

Lorsqu’on présente une notion, on doit rapidement montrer une application utile.

Exemples :

- Si on parle de contexte, montrer comment un meilleur contexte améliore une réponse de l’IA.
- Si on parle de design pattern, montrer comment il aide à structurer une discussion avec l’IA.
- Si on parle de CLI, montrer comment automatiser une vraie tâche de développement.
- Si on parle de RAG ou de graphe de code, montrer comment retrouver plus vite une information dans un projet.
- Si on parle d’évaluation, montrer comment détecter une réponse plausible mais fausse.

La théorie peut être présente, mais elle doit soutenir une action concrète.

## 5. Ne pas sur-expliquer les prérequis

Le contenu ne doit pas perdre du temps à réexpliquer ce que le public connaît déjà.

On n’explique pas longuement ce qu’est GitHub, Visual Studio Code, une user story, un commit ou un projet logiciel.

On peut faire un rappel court si nécessaire, mais le cœur du contenu doit porter sur l’usage avancé, réfléchi et efficace de l’IA dans ces contextes.

## 6. Respecter l’expérience du public

Le ton pédagogique doit respecter l’expérience des enseignants et le niveau des étudiants avancés.

Il faut éviter :

- le ton infantilisant;
- les explications trop élémentaires;
- les longs détours théoriques;
- les activités artificielles sans lien clair avec la pratique;
- les exemples jouets qui ne ressemblent pas à une vraie situation de développement.

Il faut privilégier :

- les cas proches du terrain;
- les exemples de code ou de projet;
- les erreurs réalistes;
- les décisions de conception;
- les arbitrages concrets;
- les comparaisons entre une mauvaise et une meilleure pratique.

## 7. Commencer par une friction réelle

Lorsque possible, une séquence pédagogique devrait partir d’un problème reconnaissable :

- un prompt flou;
- trop de contexte envoyé à l’IA;
- une réponse plausible mais fausse;
- une correction qui casse autre chose;
- une mauvaise compréhension d’un code existant;
- une demande trop vaste;
- une solution qui semble impressionnante mais qui n’est pas maintenable.

Le contenu doit ensuite montrer comment améliorer la situation avec une méthode plus fiable.

## 8. Modularité

Le projet doit rester modulaire.

Un bloc pédagogique doit pouvoir être déplacé d’une séance à une autre sans être réécrit complètement.

Les notions, démonstrations, exercices et aides visuelles doivent donc être conçus comme des éléments réutilisables.

## 9. Format des séances : micro-modules de 20 à 30 minutes

Comme la durée réelle des séances et la longueur totale du cours peuvent varier, le contenu doit être conçu en micro-modules de **20 à 30 minutes**.

Une séance de 1 h, 2 h ou 3 h devient un assemblage de micro-modules. On peut donc ajouter, retirer, déplacer ou remplacer une notion sans casser tout le cours.

Ce format permet une approche agile et flexible plutôt qu’une approche monolithique du type : longue théorie, puis longue séance pratique.

Chaque micro-module devrait couvrir une seule notion principale.

Structure recommandée :

1. **Friction ou problème concret** — partir d’une situation reconnaissable.
2. **What’s in it for me?** — dire rapidement pourquoi la notion est utile.
3. **Théorie ciblée** — expliquer juste ce qu’il faut pour agir.
4. **Mini-démo au besoin** — montrer la notion en action si cela aide.
5. **Mini-exercice** — faire appliquer immédiatement la notion.
6. **Retour rapide** — nommer ce qu’on retient et ce qu’on pourra réutiliser.

Répartition indicative :

| Segment | Durée approximative |
|---|---:|
| Friction ou problème | 2 à 5 min |
| Valeur immédiate | 1 à 3 min |
| Théorie ciblée | 5 à 8 min |
| Mini-démo | 0 à 8 min |
| Mini-exercice | 8 à 12 min |
| Retour rapide | 2 à 3 min |

La mini-démo est optionnelle. Certains modules peuvent passer directement de la notion au mini-exercice.

L’important est que la personne puisse essayer quelque chose rapidement.

## 10. Progression en paliers : I, II, III

Une même notion peut être découpée en plusieurs paliers progressifs.

Exemple :

```text
Cartographie I
Cartographie II
Cartographie III
```

Ce découpage donne de la souplesse lorsque la durée réelle du cours est inconnue ou lorsque la première livraison du cours sert aussi à calibrer le rythme.

### Palier I — noyau essentiel

Le palier I contient ce qu’il faut absolument couvrir pour que la notion soit utile.

Il devrait être faisable en classe dans un micro-module de 20 à 30 minutes.

Objectif : la personne repart avec une application concrète minimale, même si on ne fait jamais les paliers suivants.

### Palier II — consolidation ou extension

Le palier II ajoute de la profondeur ou un cas plus réaliste.

Il peut être fait :

- en classe si le temps le permet;
- en exercice facultatif;
- en devoir court;
- en activité de consolidation.

Objectif : renforcer la notion sans rendre le palier I incomplet.

### Palier III — approfondissement ou défi

Le palier III sert à aller plus loin.

Il peut viser :

- un cas plus complexe;
- une comparaison d’approches;
- une limite importante;
- un défi technique;
- une réflexion critique.

Objectif : rendre l’information disponible pour les groupes plus rapides, les étudiants motivés ou une version plus longue du cours.

## 11. Règles pour les paliers

Chaque palier doit rester utile par lui-même.

Le palier I ne doit pas être une simple introduction théorique qui dépend du palier II pour devenir utile.

Les paliers II et III doivent être conçus comme des extensions, pas comme des morceaux obligatoires cachés.

Dans un contexte serré :

```text
On fait le palier I en classe.
On rend les paliers II et III disponibles comme matériel facultatif ou travail à la maison.
```

Cette approche permet de conserver l’information sans forcer une progression trop lourde.

Elle permet aussi d’ajuster le cours après une première livraison, quand les durées réelles deviennent plus claires.

## 12. Outil de référence et équivalences

L’outil de référence du cours est **GitHub Copilot**.

Sauf indication contraire, les démonstrations, captures, consignes et exemples pratiques doivent d’abord être pensés pour GitHub Copilot, parce que c’est l’outil principal attendu pour le public visé.

Cependant, certaines notions gagnent à montrer l’équivalence dans d’autres outils, notamment **Codex** et **Claude Code**.

Exemples de notions où une équivalence est utile :

- voir l’état d’une tâche;
- comprendre la taille du contexte;
- lire l’usage ou les limites de session;
- comparer un mode agent avec un mode conversation;
- comprendre comment un outil lit le dépôt;
- repérer les différences entre IDE, CLI et agent connecté à GitHub.

La règle est la suivante :

```text
Copilot d’abord.
Équivalences seulement lorsque cela aide à comprendre ou transférer la notion.
```

Les équivalences ne doivent pas transformer chaque page en comparatif exhaustif d’outils.

Pour les pages qui comparent plusieurs outils, utiliser de préférence un panneau visuel ou des onglets par provider :

```text
GitHub Copilot | Codex | Claude Code
```

Chaque onglet doit répondre à la même question pratique, par exemple :

- Où voir le statut?
- Où voir l’usage?
- Comment inspecter le contexte?
- Comment relancer une tâche?
- Comment reprendre une session?

## 13. À définir dans le prochain volet

Les éléments suivants seront définis ensuite :

- format détaillé des exercices;
- format détaillé des démonstrations;
- format des laboratoires;
- format des blocs théoriques;
- format des aides visuelles;
- format des quiz ou questions formatives;
- niveau de guidage attendu pour les étudiants;
- niveau de détail attendu pour les enseignants.
