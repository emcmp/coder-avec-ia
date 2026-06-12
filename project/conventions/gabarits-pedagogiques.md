# Gabarits pédagogiques

> Identifiant : `[DOC-CHR-005]`  
> Version : 0.1  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Ce document définit les gabarits réutilisables pour produire les contenus pédagogiques du parcours **Coder avec l’IA**.

Il complète la charte pédagogique, la nomenclature et le catalogue des modules.

## Principe général

Un gabarit n’est pas un formulaire administratif. C’est une structure légère pour éviter de réinventer la forme à chaque contenu.

Chaque contenu doit rester :

- concret;
- court;
- applicable rapidement;
- identifiable;
- versionné;
- déplaçable dans un autre parcours ou une autre séance.

## Gabarit — Micro-module

Un micro-module est une unité pédagogique de 20 à 30 minutes autour d’une notion principale.

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

## Gabarit — Bloc théorique

Un bloc théorique explique une notion, mais doit rester attaché à une action.

```markdown
# [THE-DOMAINE-NNN] Titre du bloc théorique

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft

## Idée essentielle

Expliquer la notion en quelques phrases.

## Pourquoi c’est utile

Relier la notion à une pratique concrète.

## Exemple simple

Donner un exemple court.

## Erreur fréquente

Nommer une confusion ou mauvaise pratique.

## À retenir

Résumer en 2 ou 3 points.
```

## Gabarit — Panneau provider

Un panneau provider montre une équivalence entre outils sans transformer la page en comparatif complet.

```markdown
## Équivalence provider — Question pratique

Question : Où voir le statut / l’usage / le contexte / la tâche?

| Provider | Où regarder | Ce qu’on observe | Limite ou vigilance |
|---|---|---|---|
| GitHub Copilot | Référence principale | À remplir | À remplir |
| Codex | Équivalence si utile | À remplir | À remplir |
| Claude Code | Équivalence si utile | À remplir | À remplir |
```

Règle : Copilot d’abord. Les autres providers servent à transférer la notion, pas à refaire tout le cours.

## Gabarit — Fiche outil

Une fiche outil présente un outil sans devenir une publicité ou un comparatif exhaustif.

```markdown
# [REF-DOMAINE-NNN] Nom de l’outil

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft  
> Type : IDE / CLI / agent / service cloud / local / autre

## À quoi ça sert dans le cours?

Nommer l’usage pédagogique précis.

## Quand l’utiliser?

Décrire les situations où l’outil est pertinent.

## Quand l’éviter?

Décrire les limites ou risques.

## Notions liées

- [MIC-...]
- [THE-...]
- [EX-...]

## Équivalents ou alternatives

Lister seulement les alternatives utiles au transfert pédagogique.
```

## Gabarit — Checklist de validation

Une checklist sert à vérifier un résultat ou une production IA.

```markdown
# [CHK-DOMAINE-NNN] Titre de la checklist

> Version : 0.1  
> Dernière modification : AAAA-MM-JJ  
> Statut : draft

## À vérifier

- [ ] Le résultat répond à la demande.
- [ ] Les contraintes importantes sont respectées.
- [ ] Les fichiers ou sources utilisés sont pertinents.
- [ ] Les erreurs possibles ont été vérifiées.
- [ ] La personne peut expliquer la solution.

## Décision

- Accepter.
- Corriger.
- Rejeter.
- Demander une autre passe.
```

## Règles de maintenance

- Chaque contenu produit à partir d’un gabarit doit avoir un identifiant stable.
- Chaque contenu doit avoir une version, une date de dernière modification et un statut.
- Le palier I doit être utile même si les paliers II et III ne sont jamais faits.
- Les exemples doivent partir de GitHub Copilot sauf indication contraire.
- Les équivalences Codex et Claude Code doivent rester courtes et utiles.
- Un gabarit peut évoluer, mais il ne doit pas devenir trop lourd à utiliser.
