# ADR-0003 — Découpler contenu, parcours et provider

> Identifiant : `[DOC-ADR-003]`  
> Version : 0.1  
> Dernière modification : 2026-06-12  
> Statut : acceptée

## Contexte

Les premières pages publiques du parcours **Coder avec l’IA** ont été transformées en rencontres de cours.

Cette approche améliore beaucoup la lisibilité pour l’étudiant, mais elle introduit deux risques :

1. lier un contenu stable à un ordre temporaire comme `Cours 1`, `Cours 2`, `Cours 3`;
2. associer trop fortement une notion transversale à un provider précis comme GitHub Copilot.

Le projet veut conserver une séparation claire entre :

- la structure de connaissance;
- la structure de parcours;
- la structure de présentation;
- les outils utilisés comme exemples.

## Décision

Un contenu pédagogique stable ne doit pas dépendre de sa position dans un parcours ni d’un provider utilisé pour l’illustrer.

On distingue donc :

| Couche | Rôle | Exemple |
|---|---|---|
| Contenu stable | Notion ou micro-module réutilisable | `[MIC-CTX-001]` Contexte utile |
| Parcours | Sélection et ordre des contenus | Rencontre 1, Rencontre 2, Rencontre 3 |
| Présentation | Libellé visible dans une page ou une navigation | Rencontre 1 — Contexte utile |
| Provider | Outil utilisé pour illustrer ou pratiquer | GitHub Copilot, Codex, Claude Code |

## Règles

### 1. Identité du contenu

Le titre stable du contenu ne contient pas son ordre de présentation.

Préférer :

```text
Contexte utile
Cartographier un codebase
Vérifier une réponse IA
```

Éviter :

```text
Cours 1 - Contexte utile
Cours 2 - Cartographier un codebase
Cours 3 - Vérifier une réponse IA
```

### 2. Ordre de présentation

L’ordre appartient au parcours, à la page d’index ou à la navigation.

Une page peut être affichée comme `Rencontre 1` dans un parcours donné, mais cette numérotation ne fait pas partie de l’identité du contenu.

### 3. Provider

Un provider ne doit pas devenir un tag principal lorsque la notion est transversale.

Préférer :

```text
20–30 min · Notion transversale · Prompt et contexte
```

Éviter :

```text
20–30 min · GitHub Copilot · Prompt et contexte
```

GitHub Copilot peut rester l’outil d’exemple principal, mais il doit être présenté comme exemple, pas comme nature de la notion.

### 4. Provider visible

Un provider peut être visible dans le titre ou les métadonnées seulement si le contenu dépend vraiment de cet outil.

Exemples :

| Contenu | Provider visible? |
|---|---|
| Donner un contexte utile | Non, notion transversale |
| Vérifier une réponse IA | Non, notion transversale |
| Utiliser Copilot dans un dépôt GitHub | Oui |
| Lire une trace Claude Code | Oui |
| Comparer Copilot, Codex et Claude Code | Oui, multi-provider |

## Conséquences

- Les pages publiques gardent des titres stables.
- La page `/cours` peut afficher un ordre de rencontres sans modifier l’identité des contenus.
- Les menus peuvent utiliser un `sidebar_label` ou un libellé de parcours pour afficher l’ordre courant.
- Les métadonnées visibles décrivent d’abord la notion.
- Les providers restent documentés dans les références pédagogiques ou les sections d’équivalence.
- Le même contenu peut être repris dans un autre parcours sans être renommé.

## Statut

Acceptée.
