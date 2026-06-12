# Charte visuelle

> Identifiant : `[DOC-CHR-001]`  
> Version : 0.3  
> Dernière modification : 2026-06-11  
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
- des éléments visuels sobres pour garder un ton professionnel.

## Structure générale d’une page

Chaque page devrait contenir :

1. un titre clair;
2. une courte intention;
3. une ou plusieurs sections courtes;
4. des exemples concrets lorsque pertinent;
5. des encadrés pour les avertissements, conseils ou informations importantes;
6. des blocs de code contextualisés;
7. une synthèse ou prochaine étape si la page est longue.

## Motifs visuels principaux

Utiliser les motifs suivants selon le besoin :

- `coursHero` pour une page importante ou une synthèse;
- `coursCard` pour une idée courte ou une catégorie;
- `coursPill` pour un mot-clé ou un statut;
- `coursTerminal` pour une commande ou une sortie terminal;
- admonitions Docusaurus pour les informations importantes;
- tableaux courts pour comparer ou classifier.

## Panneaux provider

Lorsque le contenu doit montrer une équivalence entre plusieurs outils IA, utiliser un panneau par provider.

Ordre recommandé :

```text
GitHub Copilot | Codex | Claude Code
```

GitHub Copilot doit être présenté en premier, car il est l’outil de référence du cours.

Utiliser ce motif pour comparer une même action pratique, par exemple :

- voir le statut;
- voir l’usage;
- inspecter la taille du contexte;
- reprendre une session;
- relancer une tâche;
- comprendre où l’outil lit le projet.

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
- Les effets visuels lourds ou animés sans valeur pédagogique.
- Les couleurs trop agressives pour une lecture prolongée.
- Les panneaux provider utilisés sans vraie équivalence utile.

## Page de référence

Voir la page exemple dans le site :

```text
/admin/page-exemple-style
```
