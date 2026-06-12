# [MIC-EVA-001] Vérifier une réponse IA plausible

> Version : 0.3  
> Dernière modification : 2026-06-12  
> Statut : pilote  
> Domaine : EVA  
> Durée cible : 20 à 30 min  
> Outil principal : GitHub Copilot  
> Équivalences utiles : tous les providers qui produisent du code, une explication ou un plan à valider

## Intention

Apprendre à valider une réponse IA qui semble convaincante avant de l’accepter, de la remettre ou de l’intégrer dans un projet.

## Compétences liées

- [CMP-EVA-001] Valider une réponse ou une production IA.
- [CMP-CTX-001] Fournir un contexte utile à un assistant IA.
- [CMP-MAP-001] Identifier où intervenir dans un codebase existant.

## What’s in it for me?

Une réponse IA peut être claire, élégante et fausse.

La validation évite d’apprendre de travers, de casser un projet ou d’accepter une solution qu’on ne comprend pas.

## Friction de départ

Mauvaise manière volontaire :

```text
La réponse a l’air bonne, donc je la prends.
```

Problèmes :

- l’IA peut avoir ignoré une contrainte;
- le code peut fonctionner seulement dans un cas simple;
- l’explication peut être plausible mais incorrecte;
- la solution peut contourner le vrai problème;
- la personne peut être incapable de justifier le résultat.

## Théorie ciblée

Valider une réponse IA, ce n’est pas seulement relire rapidement.

C’est vérifier :

1. la correspondance avec la demande;
2. le respect des contraintes;
3. la présence de cas limites;
4. la cohérence avec le projet;
5. la capacité à expliquer la solution;
6. la possibilité de tester le résultat.

Une bonne validation transforme une impression en décision.

## Démonstration courte

### Démo principale — GitHub Copilot

Donner à Copilot une petite demande de correction ou d’explication.

Ensuite, appliquer une checklist :

- Est-ce que la réponse répond vraiment à la demande?
- Est-ce qu’elle respecte les contraintes?
- Est-ce qu’elle mentionne ce qu’elle ne sait pas?
- Est-ce qu’on peut tester ou vérifier le résultat?
- Est-ce qu’on peut expliquer la solution dans nos mots?

### Équivalence provider

| Provider | Ce qu’on valide | Vigilance |
|---|---|---|
| GitHub Copilot | Suggestion de code ou explication dans le projet | Vérifier la cohérence avec les fichiers existants |
| Codex | Plan, diff ou tâche produite par agent | Lire les changements, pas seulement le résumé |
| Claude Code | Modification locale ou rapport de tâche | Vérifier les fichiers touchés et les tests exécutés |

## Mini-exercice

Présenter une réponse IA volontairement plausible mais incomplète.

La personne doit :

- identifier ce qui semble correct;
- identifier au moins deux risques;
- écrire une question de clarification;
- proposer une vérification ou un test;
- décider : accepter, corriger, rejeter ou demander une autre passe.

## Checklist courte

- [ ] La réponse répond à la demande réelle.
- [ ] Les contraintes importantes sont respectées.
- [ ] Les cas limites évidents sont considérés.
- [ ] La solution est cohérente avec le projet.
- [ ] Je peux expliquer la solution dans mes mots.
- [ ] Je peux vérifier le résultat avec un test, une exécution ou une inspection.

## Retour rapide

À retenir :

- plausible ne veut pas dire correct;
- une réponse IA doit être vérifiée comme une contribution externe;
- une checklist courte vaut mieux qu’une confiance vague;
- la personne doit garder les mains sur le volant.

## Paliers

### Palier I — Noyau essentiel

Appliquer une checklist de validation à une réponse IA courte.

Résultat attendu : la personne peut décider si elle accepte, corrige ou rejette une réponse.

### Palier II — Consolidation

Écrire un test, une vérification ou une question de clarification.

Résultat attendu : la personne transforme un doute en action vérifiable.

### Palier III — Approfondissement

Comparer plusieurs réponses IA avec des critères explicites.

Résultat attendu : la personne peut justifier pourquoi une réponse est meilleure, plus sûre ou plus maintenable.

## Prérequis

- [MIC-CTX-001] Donner un contexte utile à l’IA
- [MIC-SPE-001] Spécifier avant d’implémenter
- [MIC-MAP-001] Cartographier un codebase, recommandé pour les réponses liées au code

## Débloque

- [MIC-OBS-001] Lire traces, usage et contexte
- [MIC-PED-001] Intégrer l’IA dans le travail d’un prof
- [MIC-VCS-002] Travailler avec branches, issues et pull requests

## Ressources liées

- [CHK-EVA-001] Checklist de validation d’une réponse IA
- [EX-EVA-001] Trouver les failles d’une réponse plausible
- [THE-EVA-001] Plausible n’est pas vérifié
- [DEM-EVA-001] Valider une suggestion avant de l’accepter
