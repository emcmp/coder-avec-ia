# Nomenclature et bibliothèque du projet

> Identifiant : `[DOC-CHR-004]`  
> Version : 0.6  
> Dernière modification : 2026-06-12  
> Statut : convention de travail initiale

Cette convention définit comment identifier les éléments importants du projet **Coder avec l’IA**.

Elle couvre deux grandes familles :

1. les **contenus pédagogiques** : domaines, thèmes, notions, compétences, micro-modules, paliers, blocs, ressources;
2. les **documents de projet** : brainstorms, chartes, décisions, catalogues, glossaires, parcours, specs, prompts, archives.

L’objectif est de traiter le projet comme une bibliothèque : chaque élément important doit pouvoir être classé, identifié, retrouvé, versionné et maintenu sans dépendre uniquement de son emplacement dans l’arborescence.

## Vue d’ensemble de la bibliothèque

```text
Bibliothèque du projet
  → Contenus pédagogiques
      → Domaines
      → Thèmes
      → Notions
      → Compétences
      → Micro-modules
      → Paliers
      → Blocs pédagogiques
      → Ressources
  → Documents de projet
      → Brainstorms
      → Chartes
      → Décisions
      → Catalogues
      → Glossaire
      → Parcours
      → Spécifications
      → Backlog
      → Prompts
      → Archives
      → Configurations
```

## Hiérarchie de connaissance

```text
Domaine
  → Thème
    → Notion
      → Micro-module
        → Palier I / II / III
          → Bloc pédagogique
            → Ressource
```

Les compétences ne sont pas strictement dans cette hiérarchie. Elles forment une couche transversale :

```text
Compétence
  → liée à un ou plusieurs micro-modules
  → observée par un ou plusieurs exercices, checklists ou évaluations
```

## Structure de diffusion

```text
Parcours
  → Module
    → Séance
      → Segment
        → Références vers des micro-modules, paliers ou blocs existants
```

Une séance ne possède pas les contenus : elle les référence.

Un même micro-module peut donc être déplacé d’une séance à une autre sans changer d’identifiant.

## Entités pédagogiques

| Entité | Rôle |
|---|---|
| Domaine | Grand territoire conceptuel stable, par exemple contexte, cartographie, agents, évaluation. |
| Thème | Regroupement de notions à l’intérieur d’un domaine. |
| Notion | Concept précis à comprendre ou utiliser. |
| Compétence | Ce que la personne doit être capable de faire de façon observable. |
| Micro-module | Unité pédagogique de 20 à 30 minutes autour d’une notion principale. |
| Palier | Niveau progressif d’un micro-module : I, II ou III. |
| Bloc pédagogique | Élément concret : théorie, démo, exercice, quiz, cas, checklist. |
| Ressource | Support réutilisable : visuel, prompt, code, tableau, image, référence. |

## Entités de diffusion

| Entité | Rôle |
|---|---|
| Parcours | Organisation générale proposée pour suivre le contenu. |
| Module | Regroupement de micro-modules dans une logique de progression. |
| Séance | Assemblage temporel adapté à une durée réelle : 1 h, 2 h, 3 h, etc. |
| Segment | Partie courte d’une séance qui référence un micro-module, un palier ou un bloc. |

## Documents de projet

| Entité | Rôle |
|---|---|
| Brainstorm | Espace libre pour déposer des idées non classées ou incomplètes. |
| Charte | Convention de travail : visuelle, rédactionnelle, pédagogique, nomenclature. |
| Décision | ADR ou décision structurante. |
| Catalogue | Registre d’éléments : blocs, documents, modules, ressources. |
| Glossaire | Définitions stabilisées. |
| Parcours | Plan ou structure de formation. |
| Spécification | Document de cadrage ou d’exigences. |
| Backlog | Liste de travail à faire ou à prioriser. |
| Prompt | Gabarit ou instruction réutilisable. |
| Archive | Contenu conservé pour référence historique. |
| Configuration | Instructions ou fichiers utiles aux agents et outils. |

## Métadonnées minimales obligatoires

Tout élément important de la bibliothèque doit exposer au minimum :

```text
id
version
last_modified
status
title
```

Ces champs s’appliquent aux documents de projet, aux compétences, aux micro-modules, aux paliers, aux blocs pédagogiques et aux ressources.

Le format de date recommandé est : `AAAA-MM-JJ`.

## Version

La version sert à savoir si un élément a évolué depuis sa dernière consultation.

Format recommandé :

```text
0.1
0.2
1.0
1.1
```

Règle simple :

- `0.x` pour les brouillons ou conventions en construction;
- `1.0` pour une première version stable;
- incrément mineur lorsqu’on améliore le contenu sans changer son intention;
- incrément majeur lorsqu’on change le sens, la structure ou l’usage de l’élément.

## Statut

Statuts recommandés :

```text
draft       = brouillon actif
active      = utilisé comme référence de travail
stable      = validé pour usage courant
review      = en révision
deprecated  = remplacé ou conservé pour historique
archived    = archivé, non maintenu activement
```

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

## Famille A — Identifiants pédagogiques

Format général :

```text
[TYPE-DOMAINE-NNN]
```

Exemples :

```text
[CMP-CTX-001]
[NOT-CON-001]
[MIC-MAP-001]
[PAL-MAP-001]
[THE-CON-001]
[EX-CON-002]
[VIS-MAP-001]
```

Types pédagogiques principaux :

```text
FOR = Formation ou parcours complet
MOD = Module conceptuel
SEA = Séance livrée ou planifiée
SEG = Segment de séance
THM = Thème
NOT = Notion
CMP = Compétence observable
MIC = Micro-module pédagogique de 20 à 30 minutes
PAL = Palier progressif I, II ou III
```

Blocs pédagogiques :

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

Ressources pédagogiques :

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

## Domaines conceptuels

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

Format général :

```text
[DOC-TYPE-NNN]
```

Types de documents de projet :

```text
BRN = Brainstorm ou espace d’idées libres
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

## Exemples de métadonnées

Brainstorm :

```text
id: DOC-BRN-001
type: brainstorm
title: Brainstorm
version: 0.1
last_modified: 2026-06-12
status: active
```

Compétence :

```text
id: CMP-CTX-001
type: competence
domain: CTX
title: Fournir un contexte utile à un assistant IA
version: 0.1
last_modified: 2026-06-12
status: draft
related_modules: MIC-CTX-001, MIC-SPE-001, MIC-EVA-001
```

Micro-module :

```text
id: MIC-MAP-001
type: micro-module
domain: MAP
title: Cartographie de codebase
version: 0.1
last_modified: 2026-06-11
status: draft
```

## Catalogues associés

- [Catalogue des documents de projet](/admin/catalogue-documents-projet)
- [Compétences visées](/admin/competences)
- [Brainstorm](/admin/brainstorm)

## Règles de stabilité

1. Un identifiant ne contient jamais de nom de produit.
2. Un identifiant ne contient jamais de numéro de séance temporaire.
3. Un identifiant ne contient jamais de position dans une table des matières.
4. Un identifiant ne change pas quand un bloc ou un document est déplacé.
5. Les produits, outils, plateformes et chemins sont indiqués dans les métadonnées.
6. Les séances, modules et parcours référencent des blocs; ils ne les possèdent pas.
7. Les compétences sont liées aux modules et aux activités, mais ne sont pas possédées par un module unique.
8. Le brainstorm peut contenir des idées non classées, mais les contenus stabilisés doivent ensuite être déplacés vers les catalogues appropriés.
9. Un identifiant supprimé ne doit pas être réutilisé pour autre chose.
10. Un bloc ou document remplacé doit être marqué `deprecated` plutôt que renommé silencieusement.
11. Un document publié dans `web/` peut avoir un titre adapté à la lecture, mais il doit rester lié à son identifiant stable.
12. Le catalogue des documents sert de registre de bibliothèque.
13. Tout élément important doit avoir une version et une date de dernière modification.
14. Le catalogue doit permettre de repérer rapidement les documents récents, stables, en brouillon ou à réviser.
