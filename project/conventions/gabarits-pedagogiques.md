# Gabarits pédagogiques

> Identifiant : `[DOC-CHR-005]`  
> Version : 0.2  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Ce document définit les gabarits réutilisables pour produire les contenus pédagogiques du parcours **Coder avec l’IA**.

Il distingue deux formes importantes :

1. le **gabarit source/Admin**, qui expose les identifiants, versions, statuts, compétences et dépendances;
2. le **gabarit public étudiant**, qui présente l’activité de manière plus naturelle et garde la mécanique pédagogique discrète.

## Principe général

Un gabarit n’est pas un formulaire administratif. C’est une structure légère pour éviter de réinventer la forme à chaque contenu.

Chaque contenu doit rester :

- concret;
- court;
- applicable rapidement;
- identifiable;
- versionné;
- déplaçable dans un autre parcours ou une autre séance.

## Règle de publication publique

Les pages publiques ne doivent pas ressembler à des fiches de planification.

Sur une page publique :

- le titre ne commence pas par l’identifiant `[MIC-...]`;
- les métadonnées sont discrètes;
- les compétences visées ne sont pas placées au début;
- les statuts internes ne dominent pas la page;
- les termes de conception pédagogique sont remplacés par des titres naturels;
- les identifiants et compétences sont conservés dans un bloc replié à la fin.

Correspondance recommandée :

| Source/Admin | Public étudiant |
|---|---|
| Intention | Introduction ou amorce |
| What’s in it for me? | intégré à l’introduction |
| Friction de départ | Le problème |
| Théorie ciblée | Ce qu’il faut comprendre |
| Démonstration courte | Exemple guidé |
| Mini-exercice | À toi de jouer |
| Retour rapide | À retenir |
| Paliers | Pour aller plus loin |
| Compétences visées | Références pédagogiques, à la fin |

## Gabarit — Page publique de module

```mdx
---
title: Titre lisible du module
slug: /cours/slug-du-module
---

import Link from '@docusaurus/Link';

# Titre lisible du module

<div className="coursModuleMeta">
  <span>20–30 min</span>
  <span>GitHub Copilot</span>
  <span>Programmation</span>
</div>

<p className="coursModuleLead">
Une courte amorce qui explique le problème réel et ce que la personne va apprendre à faire.
</p>

## Le problème

Présenter une situation réaliste, une mauvaise demande ou une erreur fréquente.

## Ce qu’il faut comprendre

Expliquer seulement la notion nécessaire pour agir.

## Exemple guidé

Montrer une démarche courte, observable et réutilisable.

## À toi de jouer

Proposer une tâche courte avec un résultat attendu.

## À retenir

Nommer les 3 ou 4 idées importantes à garder.

## Pour aller plus loin

- **Essentiel** : noyau à faire en classe.
- **Consolidation** : prolongement raisonnable.
- **Défi** : approfondissement ou comparaison.

<details className="coursPedagoRefs">
  <summary>Références pédagogiques</summary>

  - Module : `MIC-DOMAINE-NNN`
  - Compétences : `CMP-...`
  - Source : `project/...`
  - Statut : module pilote publié

</details>
```

## Gabarit — Micro-module source/Admin

Un micro-module source est une unité pédagogique de 20 à 30 minutes autour d’une notion principale. Il peut être plus explicite que la page publique, car il sert à concevoir et maintenir le parcours.

```markdown
# [MIC-DOMAINE-NNN] Titre du micro-module

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft  
> Domaine : DOMAINE  
> Durée cible : 20 à 30 min  
> Outil principal : GitHub Copilot  
> Équivalences utiles : Codex, Claude Code, autre, aucune

## Intention

Dire en une ou deux phrases ce que ce micro-module permet d’apprendre.

## Compétences liées

- [CMP-...]

## What’s in it for me?

Dire clairement ce que l’étudiant ou l’enseignant gagne à apprendre cette notion.

## Friction de départ

Présenter une mauvaise manière, une erreur réaliste ou un problème reconnaissable.

## Théorie ciblée

Expliquer seulement ce qu’il faut pour agir.

## Démonstration courte

Décrire ce qui sera montré, avec l’outil principal.

## Mini-exercice

Décrire ce que la personne doit faire immédiatement.

## Retour rapide

Nommer ce qu’on retient et comment réutiliser la notion.

## Paliers

- Palier I : noyau essentiel à faire en classe.
- Palier II : consolidation ou extension.
- Palier III : approfondissement ou défi.

## Prérequis

- [MIC-...]

## Débloque

- [MIC-...]

## Ressources liées

- [THE-...]
- [DEM-...]
- [EX-...]
- [VIS-...]
```

## Gabarit — Palier

Un palier précise le niveau d’un micro-module : I, II ou III.

```markdown
# [PAL-DOMAINE-NNN] Titre du palier

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft  
> Micro-module parent : [MIC-DOMAINE-NNN]  
> Niveau : I / II / III  
> Durée cible : 10 à 30 min

## Rôle du palier

Dire si le palier est essentiel, une consolidation ou un approfondissement.

## Résultat attendu

Décrire ce que la personne doit être capable de faire à la fin.

## Activité proposée

Décrire l’activité principale.

## Critère de réussite

Décrire comment savoir si le palier est réussi.

## Matériel nécessaire

Lister les fichiers, outils, exemples ou ressources.
```

## Gabarit — Démonstration

Une démonstration montre une pratique en action. Elle doit rester courte et ciblée.

```markdown
# [DEM-DOMAINE-NNN] Titre de la démonstration

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft  
> Durée cible : 5 à 8 min  
> Outil principal : GitHub Copilot

## Objectif de la démonstration

Dire ce que la démonstration rend visible.

## Situation de départ

Décrire le problème ou la friction.

## Étapes

1. Action 1.
2. Action 2.
3. Action 3.

## Ce qu’il faut observer

Nommer les indices importants : réponse, contexte, fichiers touchés, limites, erreurs.

## Variante provider

| Provider | Équivalence utile |
|---|---|
| GitHub Copilot | Démonstration principale |
| Codex | À remplir si utile |
| Claude Code | À remplir si utile |
```

## Gabarit — Exercice

Un exercice doit être faisable rapidement et produire une trace observable.

```markdown
# [EX-DOMAINE-NNN] Titre de l’exercice

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft  
> Durée cible : 8 à 12 min  
> Niveau : I / II / III

## Consigne

Dire précisément ce que la personne doit faire.

## Contexte fourni

Lister les fichiers, extraits, contraintes ou données disponibles.

## Résultat attendu

Décrire la production attendue : réponse, code, explication, diff, test, grille, etc.

## Critères de réussite

- Critère 1.
- Critère 2.
- Critère 3.

## Retour en groupe

Prévoir une question courte pour comparer les approches.
```

## Panneau provider

Le panneau provider sert à répondre à une même question pratique dans plusieurs outils.

```text
Question : Où voir le statut / l’usage / le contexte / la tâche?

GitHub Copilot : référence principale
Codex : équivalence si utile
Claude Code : équivalence si utile
```

:::warning
Le panneau provider ne doit pas devenir un comparatif complet de produits. Il doit aider à transférer une notion.
:::

## Règles de maintenance

- Chaque contenu produit à partir d’un gabarit doit avoir un identifiant stable.
- Chaque contenu doit avoir une version, une date de dernière modification et un statut.
- Le palier I doit être utile même si les paliers II et III ne sont jamais faits.
- Les exemples doivent partir de GitHub Copilot sauf indication contraire.
- Les équivalences Codex et Claude Code doivent rester courtes et utiles.
- Une page publique doit être lisible pour l’étudiant avant d’être utile au suivi administratif.
- Les références pédagogiques doivent rester disponibles, mais discrètes.
- Un gabarit peut évoluer, mais il ne doit pas devenir trop lourd à utiliser.
