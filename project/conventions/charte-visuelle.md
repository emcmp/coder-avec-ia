# Charte visuelle

> Identifiant : `[DOC-CHR-001]`  
> Version : 0.6  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Cette charte définit le style visuel des pages du site **Coder avec l’IA**.

Elle fige la direction graphique générale et les motifs visuels réutilisables.

## Direction visuelle

Le style retenu est : **Superhero pédagogique**.

Il combine :

- une base claire et lisible pour les textes longs;
- des accents bleu profond et vert sarcelle inspirés d’un univers technique;
- des blocs à dégradé pour les introductions et les synthèses importantes;
- des cartes claires pour structurer les contenus;
- des matrices icône-item pour rendre les pages de synthèse plus vivantes;
- des boîtes IA inspirées de l’expérience GitHub Copilot dans VS Code;
- des éléments visuels sobres pour garder un ton professionnel.

## Structure générale d’une page

Chaque page devrait contenir :

1. un titre clair;
2. une courte intention ou amorce;
3. une ou plusieurs sections courtes;
4. des exemples concrets lorsque pertinent;
5. des encadrés pour les avertissements, conseils ou informations importantes;
6. des blocs de code contextualisés;
7. une synthèse ou prochaine étape si la page est longue.

## Motifs visuels principaux

Utiliser les motifs suivants selon le besoin :

- `coursHero` pour une page importante ou une synthèse;
- `coursCard` pour une idée courte ou une catégorie;
- `coursIconMatrix` et `coursIconItem` pour une matrice d’éléments réutilisable;
- `coursPill` pour un mot-clé ou un statut;
- `coursTerminal` pour une commande ou une sortie terminal;
- `aiBox`, `aiBoxPrompt`, `aiBoxResponse` et `aiBoxChanges` pour les interactions IA;
- admonitions Docusaurus pour les informations importantes;
- tableaux courts pour comparer ou classifier.

## Matrice icône-item

Utiliser une matrice icône-item lorsqu’une page présente plusieurs éléments de même nature.

Règle générale :

```text
3 éléments ou plus de même nature → matrice icône-item plutôt que simple liste à puces.
```

Variantes disponibles :

```text
coursIconMatrix          = matrice standard
coursIconMatrixCompact   = matrice plus dense
coursIconMatrixFeatured  = matrice de mise en valeur
```

## Boîtes IA

Tous les prompts, réponses simulées, sorties IA et résumés de modifications doivent être placés dans une boîte IA.

Classes disponibles :

```text
aiBox          = boîte IA de base
aiBoxPrompt    = demande envoyée à l’IA
aiBoxResponse  = réponse ou hypothèse produite par l’IA
aiBoxChanges   = résumé de modifications ou de fichiers
aiBoxSmall     = boîte plus étroite
```

Règle générale :

```text
prompt ou réponse IA visible → boîte IA plutôt que simple bloc de code
```

Objectif : rappeler visuellement l’expérience GitHub Copilot dans VS Code, sans copier l’interface exacte.

## Icônes recommandées par domaine

| Domaine | Icône |
|---|---|
| IA | 🧠 |
| CTX | 🧩 |
| INS | 📜 |
| SPE | 📝 |
| MAP | 🗺️ |
| CLI | 💻 |
| VCS | 🌿 |
| AGT | 🤖 |
| EVA | ✅ |
| OBS | 📡 |
| SEC | 🛡️ |
| RET | 🔎 |
| LOC | 🖥️ |
| PED | 🎓 |
| DOC | 📚 |

## Panneaux provider

Lorsque le contenu doit montrer une équivalence entre plusieurs outils IA, utiliser un panneau par provider.

Ordre recommandé :

```text
GitHub Copilot | Codex | Claude Code
```

GitHub Copilot doit être présenté en premier, car il est l’outil de référence du cours.

Éviter d’utiliser ce motif pour faire une comparaison générale de produits. Le panneau doit répondre à une question concrète.

## Code

Les blocs de code doivent toujours être précédés d’une phrase qui explique leur rôle.

Éviter les gros blocs de code non commentés.

## Tableaux

Utiliser les tableaux pour comparer, classifier ou résumer.

Un tableau doit rester court. Si un tableau devient long, le remplacer par des sections ou des cartes.

## À éviter

- Les pages très longues sans sections.
- Les listes de liens sans contexte.
- Les titres décoratifs difficiles à maintenir.
- Les noms de produits dans les identifiants pédagogiques.
- Les blocs de code sans explication.
- Les prompts ou réponses IA présentés comme de simples blocs de code sans contexte.
- Les effets visuels lourds ou animés sans valeur pédagogique.
- Les couleurs trop agressives pour une lecture prolongée.
- Les matrices icône-item utilisées pour masquer un contenu trop flou.
- Les liens internes absolus en `<a href="/...">` dans les pages MDX.
- Les panneaux provider utilisés sans vraie équivalence utile.

## Page de référence

Voir la page exemple dans le site :

```text
/admin/page-exemple-style
```
