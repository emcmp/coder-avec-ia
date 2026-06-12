# Catalogue des documents de projet

> Identifiant : `[DOC-CAT-002]`  
> Version : 0.1  
> Statut : registre initial

Ce catalogue sert de registre de bibliothèque pour les documents importants du projet **Coder avec l’IA**.

Il complète la nomenclature :

- les blocs pédagogiques utilisent des identifiants comme `[THE-CON-001]` ou `[EX-MAP-001]`;
- les documents de projet utilisent des identifiants comme `[DOC-CHR-001]` ou `[DOC-ADR-001]`.

## Chartes et conventions

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-CHR-001]` | Charte visuelle | `project/conventions/charte-visuelle.md` | `/admin/charte-visuelle` | actif |
| `[DOC-CHR-002]` | Charte rédactionnelle | `project/conventions/charte-redactionnelle.md` | `/admin/charte-redactionnelle` | actif |
| `[DOC-CHR-003]` | Charte pédagogique | `project/conventions/charte-pedagogique.md` | `/admin/charte-pedagogique` | actif |
| `[DOC-CHR-004]` | Nomenclature et bibliothèque du projet | `project/conventions/nomenclature-blocs-pedagogiques.md` | `/admin/nomenclature-blocs-pedagogiques` | actif |

## Catalogues, glossaires et conception

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-CAT-001]` | Catalogue des blocs pédagogiques | `project/catalogue/blocs-pedagogiques.md` | `/admin/catalogue-blocs-pedagogiques` | actif |
| `[DOC-CAT-002]` | Catalogue des documents de projet | `project/catalogue/documents-projet.md` | `/admin/catalogue-documents-projet` | actif |
| `[DOC-GLO-001]` | Glossaire | `project/glossaire/README.md` | `/admin/glossaire` | actif |
| `[DOC-PAR-001]` | Parcours Coder avec l’IA | `project/current/cours-ia-avance/` | `/admin/cours-ia-avance` | actif |

## Décisions

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-ADR-001]` | ADR-0001 — Structure du dépôt | `project/adr/ADR-0001-structure-du-repo.md` | `/admin/adr-0001-structure-du-repo` | actif |
| `[DOC-ADR-002]` | ADR-0002 — Identifiants stables et parcours flexible | `project/adr/ADR-0002-identifiants-stables-et-parcours-flexible.md` | `/admin/adr-0002-identifiants-stables` | actif |

## Planification et production

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-SPC-001]` | Spécification du parcours | `project/specs/spec-cours-ia-avance-profs-info.md` | À publier au besoin | brouillon |
| `[DOC-BKL-001]` | Backlog du parcours | `project/backlog/backlog-cours-ia-avance.md` | À publier au besoin | brouillon |
| `[DOC-PRM-001]` | Prompt de rédaction de page Docusaurus | `project/prompts/prompt-redaction-page-docusaurus.md` | À publier au besoin | brouillon |

## Structure et configuration

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-RDM-001]` | README du projet | `project/README.md` | À publier au besoin | actif |
| `[DOC-CFG-001]` | Instructions générales pour agents | `AGENTS.md` | À publier au besoin | actif |
| `[DOC-CFG-002]` | Instructions Claude | `CLAUDE.md` | À publier au besoin | actif |
| `[DOC-CFG-003]` | Instructions Codex | `CODEX.md` | À publier au besoin | actif |

## Archives

| ID | Document | Source | Page Admin | Statut |
|---|---|---|---|---|
| `[DOC-ARC-001]` | Archive du site Docusaurus initial | `project/archive/2026-06-site-docusaurus-initial/README.md` | À publier au besoin | archivé |

## Règles de maintenance

- Ajouter tout nouveau document important dans ce catalogue.
- Ne pas réutiliser un ID supprimé.
- Garder le lien entre la source `project/` et la page publiée dans `web/` lorsque la page existe.
- Marquer un document remplacé comme `deprecated` plutôt que de réutiliser son ID.
- Garder les noms de fichiers pratiques, mais utiliser les IDs pour les références stables.
