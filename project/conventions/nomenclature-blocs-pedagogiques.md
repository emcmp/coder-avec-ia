# Nomenclature et bibliothèque du projet

> Version : 0.2  
> Statut : convention de travail initiale

Cette convention définit comment identifier les éléments importants du projet **Coder avec l’IA**.

Elle couvre maintenant deux familles :

1. les **éléments pédagogiques** : notions, exercices, démonstrations, aides visuelles, ressources;
2. les **documents de projet** : chartes, décisions, catalogues, glossaires, parcours, specs, prompts, archives.

L’objectif est de traiter le projet comme une bibliothèque : chaque élément important doit pouvoir être classé, identifié, retrouvé et maintenu sans dépendre uniquement de son emplacement dans l’arborescence.

## Principe directeur

Un identifiant décrit la nature et le sujet stable d’un élément. Il ne décrit pas son emplacement temporaire.

Un identifiant ne doit donc pas contenir :

- un numéro de séance;
- un numéro de module lié à une progression temporaire;
- un nom de produit;
- un nom de plateforme;
- un nom d’outil qui pourrait devenir désuet;
- un chemin de fichier complet.

Les noms de produits, d’outils, de plateformes ou les chemins peuvent être indiqués dans les métadonnées ou dans le contenu, mais pas dans l’identifiant stable.

## Deux structures séparées

Le projet distingue deux structures.

### 1. Structure de connaissance

La structure de connaissance est stable.

```text
Domaine
  → Thème
    → Notion
      → Bloc pédagogique
        → Ressource
```

Elle sert à organiser les concepts et les éléments pédagogiques réutilisables.

### 2. Structure de diffusion

La structure de diffusion est flexible.

```text
Parcours
  → Module
    → Séance
      → Segment
        → Références vers des blocs existants
```

Elle sert à planifier l’ordre de présentation. Une séance ne possède pas les blocs : elle les référence.

Un même bloc peut donc être déplacé d’une séance à une autre sans changer d’identifiant.

## Famille A — Identifiants pédagogiques

Les identifiants pédagogiques servent à référencer les éléments de contenu destinés à l’apprentissage.

Format général :

```text
[TYPE-DOMAINE-NNN]
```

Exemples :

```text
[NOT-CON-001]
[THE-CON-001]
[EX-CON-002]
[VIS-MAP-001]
[VID-RET-001]
[GLO-SPE-001]
```

### Types principaux

```text
FOR = Formation ou parcours complet
MOD = Module conceptuel
SEA = Séance livrée ou planifiée
SEG = Segment de séance
THM = Thème
NOT = Notion
```

### Blocs pédagogiques

```text
THE = Théorie
DEM = Démonstration
EX  = Exercice
LAB = Laboratoire ou atelier
QZ  = Quiz ou question formative
CAS = Cas d’usage
CHK = Checklist
EVA = Élément d’évaluation
```

### Ressources pédagogiques

```text
VIS = Aide visuelle ou diagramme
VID = Vidéo
IMG = Image
TAB = Tableau
REF = Référence externe
PRM = Prompt réutilisable
COD = Exemple de code
DAT = Jeu de données
GLO = Entrée de glossaire
```

### Domaines conceptuels

Les domaines doivent rester conceptuels. Ils ne doivent pas être liés à un produit.

```text
IA   = IA générative et concepts généraux
CTX  = Contexte et context engineering
INS  = Instructions, règles et skills
SPE  = Spécification et développement guidé par spec
RET  = Recherche, retrieval, RAG et bases documentaires
MAP  = Cartographie, analyse et compréhension de codebase
CON  = Connexion aux outils, protocoles, API et intégrations
CLI  = Interfaces en ligne de commande et automatisation locale
VCS  = Git, GitHub, branches, issues et pull requests
AGT  = Agents et workflows agentiques
EVA  = Évaluation, tests, critères et grilles
OBS  = Observabilité, traces, logs et coûts
SEC  = Sécurité, permissions et confidentialité
LOC  = Modèles locaux et infrastructure locale
PED  = Pédagogie, apprentissage et encadrement
DOC  = Documentation, Docusaurus et publication
```

## Famille B — Identifiants des documents de projet

Les documents de projet utilisent une famille séparée.

Format général :

```text
[DOC-TYPE-NNN]
```

Dans ce format, `DOC` signifie « document de projet ». Il ne faut pas le confondre avec le domaine pédagogique `DOC` qui signifie documentation, Docusaurus et publication.

Exemples :

```text
[DOC-CHR-001]
[DOC-ADR-002]
[DOC-CAT-001]
[DOC-GLO-001]
[DOC-PAR-001]
```

### Types de documents de projet

```text
CHR = Charte, convention ou règle de travail
ADR = Décision structurante
CAT = Catalogue ou inventaire
GLO = Glossaire de projet
PAR = Parcours, plan de cours ou structure de formation
SPC = Spécification
BKL = Backlog
PRM = Prompt de travail ou gabarit de prompt
ARC = Archive
RDM = README ou document d’accueil
CFG = Configuration ou instruction d’agent
IDX = Index ou page de navigation
```

### Documents actuels à identifier

```text
[DOC-CHR-001] Charte visuelle
[DOC-CHR-002] Charte rédactionnelle
[DOC-CHR-003] Charte pédagogique
[DOC-CHR-004] Nomenclature et bibliothèque du projet
[DOC-ADR-001] ADR-0001 — Structure du dépôt
[DOC-ADR-002] ADR-0002 — Identifiants stables et parcours flexible
[DOC-CAT-001] Catalogue des blocs pédagogiques
[DOC-CAT-002] Catalogue des documents de projet
[DOC-GLO-001] Glossaire
[DOC-PAR-001] Parcours Coder avec l’IA
[DOC-SPC-001] Spécification du parcours
[DOC-BKL-001] Backlog du parcours
[DOC-PRM-001] Prompt de rédaction de page Docusaurus
[DOC-ARC-001] Archive du site Docusaurus initial
[DOC-RDM-001] README du projet
[DOC-CFG-001] Instructions générales pour agents
```

## Métadonnées recommandées pour un bloc pédagogique

Chaque bloc pédagogique important devrait contenir un front matter minimal.

```yaml
---
id: THE-CON-001
type: theorie
domain: CON
title: Pourquoi connecter un agent à des outils?
status: draft
covers:
  - NOT-CON-001
related:
  - VIS-CON-001
  - EX-CON-001
tools:
  - MCP
---
```

Les champs `tools`, `platforms` ou `examples` peuvent contenir des noms de produits. Ces noms ne doivent pas être dans `id`.

## Métadonnées recommandées pour un document de projet

Chaque document de projet important devrait aussi pouvoir être identifié.

```yaml
---
id: DOC-CHR-003
type: charte
title: Charte pédagogique
status: draft
source: project/conventions/charte-pedagogique.md
published: web/docs/admin/charte-pedagogique.mdx
related:
  - DOC-CHR-001
  - DOC-CHR-002
---
```

Les pages Docusaurus publiées dans `web/docs/admin/` peuvent éviter le champ `id` dans le front matter si cela crée un risque de conflit avec Docusaurus. Dans ce cas, l’identifiant stable doit rester dans le document source ou dans le catalogue des documents.

## Exemple de séance flexible

```md
---
id: SEA-AGT-001
type: seance
title: Agents connectés et outils externes
status: draft
duration: 2h
---

# [SEA-AGT-001] Agents connectés et outils externes

## Segments prévus

1. [THE-AGT-001] Qu’est-ce qu’un agent?
2. [THE-CON-001] Pourquoi connecter un agent à des outils?
3. [VIS-CON-001] Schéma agent, protocole et outil
4. [DEM-CON-001] Démonstration d’un agent connecté
5. [EX-CON-001] Identifier si une connexion à un outil est pertinente
```

Si la séance manque de temps, `[EX-CON-001]` peut être déplacé ailleurs sans changer d’identifiant.

## Exemples de correspondance

Les outils et produits sont associés aux domaines dans les métadonnées, pas dans les identifiants.

```text
CodeGraph, Graphify, Understand-Anything → MAP
MCP → CON
Spec Kit → SPE
Codex, Copilot, Claude Code → AGT, CLI ou VCS selon le contexte
Docusaurus → DOC
```

Exemples pédagogiques recommandés :

```text
[THE-MAP-001] Comprendre un codebase par cartographie
[VIS-MAP-001] Schéma fichiers, symboles et dépendances
[DEM-MAP-001] Repérer où modifier une fonctionnalité
[THE-CON-001] Pourquoi connecter un agent à des outils
[EX-CON-001] Identifier si une connexion à un outil est pertinente
[GLO-CON-001] Définition d’un protocole d’outil
```

Exemples à éviter :

```text
[THE-CODEGRAPH-001]
[EX-MCP-002]
[S02-MCP-EX-003]
[MOD-SPEC-KIT-001]
```

## Règles de stabilité

1. Un identifiant ne contient jamais de nom de produit.
2. Un identifiant ne contient jamais de numéro de séance temporaire.
3. Un identifiant ne contient jamais de position dans une table des matières.
4. Un identifiant ne change pas quand un bloc ou un document est déplacé.
5. Les produits, outils, plateformes et chemins sont indiqués dans les métadonnées.
6. Les séances, modules et parcours référencent des blocs; ils ne les possèdent pas.
7. Un identifiant supprimé ne doit pas être réutilisé pour autre chose.
8. Un bloc ou document remplacé doit être marqué `deprecated` plutôt que renommé silencieusement.
9. Un document publié dans `web/` peut avoir un titre adapté à la lecture, mais il doit rester lié à son identifiant stable.
10. Le catalogue des documents sert de registre de bibliothèque.

## Usage attendu

Cette nomenclature sert à faciliter :

- la révision du contenu;
- les commentaires précis;
- le déplacement flexible de notions entre séances;
- le travail avec des agents IA;
- la construction progressive d’un glossaire;
- la transformation éventuelle vers Docusaurus;
- le suivi des documents de conception;
- la maintenance d’une bibliothèque cohérente.

Exemples de commentaires utilisables :

```text
[EX-CON-005] manque d’explications.
[VIS-MAP-002] devrait mieux illustrer les dépendances.
[GLO-SPE-001] doit être harmonisé avec [THE-SPE-001].
[DOC-CHR-003] doit être synchronisé avec la page Admin publiée.
[DOC-ADR-002] devrait être cité dans la nomenclature.
```
