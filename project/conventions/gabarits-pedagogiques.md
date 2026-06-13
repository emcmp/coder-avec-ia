# Gabarits pédagogiques

> Identifiant : `[DOC-CHR-005]`  
> Version : 0.3  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Ce document définit les gabarits réutilisables pour produire les contenus pédagogiques du parcours **Coder avec l’IA**.

## Principe général

Un gabarit n’est pas un formulaire administratif. C’est une structure légère pour produire des contenus cohérents sans alourdir les pages publiques.

Deux formats doivent être distingués :

| Format | Rôle | Public cible |
|---|---|---|
| Micro-module source/Admin | Concevoir, versionner et relier les contenus | Équipe de conception |
| Rencontre publique | Faire apprendre et guider une activité | Étudiants et enseignants en classe |

## Règle de publication publique

Une page publique ne doit pas ressembler à une fiche de planification.

Sur une page publique :

- le titre ne commence pas par l’identifiant `[MIC-...]`;
- les métadonnées sont discrètes;
- les compétences visées ne sont pas placées au début;
- les statuts internes ne dominent pas la page;
- les termes de conception pédagogique sont remplacés par des titres naturels;
- les identifiants et compétences sont conservés dans un bloc replié à la fin.

## Gabarit — Rencontre publique

Structure recommandée :

```text
Cours N - Titre de la rencontre
Métadonnées discrètes : durée, outil, contexte
Courte amorce
Section notionnelle avec emoji
Exemple de prompt ou de réponse IA
Explication guidée
À essayer
Récapitulatif
Pour aller plus loin
Références pédagogiques repliées
```

Les titres doivent ressembler à une page de cours, pas à un plan de conception.

Exemples de titres publics :

```text
🧩 Pourquoi le contexte change tout
💬 Exemple 1 : une demande trop floue
🎯 Exemple 2 : une demande contextualisée
🔍 Quoi inclure dans le contexte?
⚠️ Trop de contexte, ce n’est pas mieux
🧪 À essayer
🔩 Récapitulatif
```

## Correspondance des sections

| Source/Admin | Rencontre publique |
|---|---|
| Intention | Amorce ou introduction |
| What’s in it for me? | intégré à l’amorce |
| Friction de départ | Problème ou exemple initial |
| Théorie ciblée | Ce qu’il faut comprendre |
| Démonstration courte | Exemple guidé |
| Mini-exercice | À essayer |
| Retour rapide | Récapitulatif |
| Paliers | Pour aller plus loin |
| Compétences visées | Références pédagogiques, à la fin |

## Boîtes IA style Copilot

Tous les prompts, réponses simulées, extraits de sortie IA et résumés de modifications doivent être présentés dans une boîte IA.

Classes disponibles :

```text
aiBox
aiBoxPrompt
aiBoxResponse
aiBoxChanges
aiBoxHeader
aiBoxTitle
aiBoxMeta
aiBoxBody
aiBoxSmall
```

Usage recommandé :

- `aiBoxPrompt` pour une demande envoyée à l’IA;
- `aiBoxResponse` pour une réponse ou une hypothèse produite par l’IA;
- `aiBoxChanges` pour un résumé de fichiers modifiés ou de diff;
- `aiBoxSmall` pour une boîte courte.

Objectif : rappeler visuellement l’expérience GitHub Copilot dans VS Code, sans copier l’interface exacte.

## Gabarit — Micro-module source/Admin

Un micro-module source peut être plus explicite, car il sert à concevoir et maintenir le parcours.

Structure recommandée :

```text
[MIC-DOMAINE-NNN] Titre
Version
Dernière modification
Statut
Domaine
Durée cible
Outil principal
Équivalences utiles
Intention
Compétences liées
What’s in it for me?
Friction de départ
Théorie ciblée
Démonstration courte
Mini-exercice
Retour rapide
Paliers I / II / III
Prérequis
Débloque
Ressources liées
```

## Gabarit — Palier

Un palier précise le niveau d’un micro-module : I, II ou III.

Structure recommandée :

```text
[PAL-DOMAINE-NNN] Titre
Micro-module parent
Niveau : I / II / III
Rôle du palier
Résultat attendu
Activité proposée
Critère de réussite
Matériel nécessaire
```

## Gabarit — Démonstration

Une démonstration montre une pratique en action. Elle doit rester courte et ciblée.

Structure recommandée :

```text
[DEM-DOMAINE-NNN] Titre
Objectif de la démonstration
Situation de départ
Étapes
Ce qu’il faut observer
Variante provider si utile
```

## Gabarit — Exercice

Un exercice doit être faisable rapidement et produire une trace observable.

Structure recommandée :

```text
[EX-DOMAINE-NNN] Titre
Consigne
Contexte fourni
Résultat attendu
Critères de réussite
Retour en groupe
```

## Panneau provider

Le panneau provider sert à répondre à une même question pratique dans plusieurs outils.

```text
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
- Les prompts et réponses IA doivent utiliser les boîtes IA réutilisables.
