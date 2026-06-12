# Catalogue des documents de projet

> Identifiant : `[DOC-CAT-002]`  
> Version : 0.3  
> Dernière modification : 2026-06-11  
> Statut : registre initial

Ce catalogue sert de registre de bibliothèque pour les documents importants du projet **Coder avec l’IA**.

Il complète la nomenclature :

- les blocs pédagogiques utilisent des identifiants comme `[THE-CON-001]` ou `[EX-MAP-001]`;
- les documents de projet utilisent des identifiants comme `[DOC-CHR-001]` ou `[DOC-ADR-001]`.

## Règle de registre

Chaque document important doit avoir :

- un identifiant stable;
- une version;
- une date de dernière modification;
- un statut;
- une source;
- une page publiée, lorsque disponible.

## Chartes et conventions

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-CHR-001]` | Charte visuelle | 0.3 | 2026-06-11 | `project/conventions/charte-visuelle.md` | `/admin/charte-visuelle` | actif |
| `[DOC-CHR-002]` | Charte rédactionnelle | 0.1 | 2026-06-11 | `project/conventions/charte-redactionnelle.md` | `/admin/charte-redactionnelle` | actif |
| `[DOC-CHR-003]` | Charte pédagogique | 0.5 | 2026-06-11 | `project/conventions/charte-pedagogique.md` | `/admin/charte-pedagogique` | actif |
| `[DOC-CHR-004]` | Nomenclature et bibliothèque du projet | 0.4 | 2026-06-11 | `project/conventions/nomenclature-blocs-pedagogiques.md` | `/admin/nomenclature-blocs-pedagogiques` | actif |

## Catalogues, glossaires et conception

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-CAT-001]` | Catalogue des blocs pédagogiques | 0.1 | 2026-06-11 | `project/catalogue/blocs-pedagogiques.md` | `/admin/catalogue-blocs-pedagogiques` | actif |
| `[DOC-CAT-002]` | Catalogue des documents de projet | 0.3 | 2026-06-11 | `project/catalogue/documents-projet.md` | `/admin/catalogue-documents-projet` | actif |
| `[DOC-GLO-001]` | Glossaire | 0.1 | 2026-06-11 | `project/glossaire/README.md` | `/admin/glossaire` | actif |
| `[DOC-PAR-001]` | Parcours Coder avec l’IA | 0.1 | 2026-06-11 | `project/current/cours-ia-avance/` | `/admin/cours-ia-avance` | actif |
| `[DOC-PAR-002]` | Table des matières du parcours | 0.1 | 2026-06-11 | `project/current/cours-ia-avance/01-table-des-matieres.md` | À publier au besoin | brouillon |

## Décisions

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-ADR-001]` | ADR-0001 — Structure du dépôt | 0.1 | 2026-06-11 | `project/adr/ADR-0001-structure-du-repo.md` | `/admin/adr-0001-structure-du-repo` | actif |
| `[DOC-ADR-002]` | ADR-0002 — Identifiants stables et parcours flexible | 0.1 | 2026-06-11 | `project/adr/ADR-0002-identifiants-stables-et-parcours-flexible.md` | `/admin/adr-0002-identifiants-stables` | actif |

## Planification et production

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-SPC-001]` | Spécification du parcours | 0.1 | 2026-06-11 | `project/specs/spec-cours-ia-avance-profs-info.md` | À publier au besoin | brouillon |
| `[DOC-BKL-001]` | Backlog du parcours | 0.1 | 2026-06-11 | `project/backlog/backlog-cours-ia-avance.md` | À publier au besoin | brouillon |
| `[DOC-PRM-001]` | Prompt de rédaction de page Docusaurus | 0.1 | 2026-06-11 | `project/prompts/prompt-redaction-page-docusaurus.md` | À publier au besoin | brouillon |

## Structure et configuration

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-RDM-001]` | README du projet | 0.1 | 2026-06-11 | `project/README.md` | À publier au besoin | actif |
| `[DOC-CFG-001]` | Instructions générales pour agents | 0.1 | 2026-06-11 | `AGENTS.md` | À publier au besoin | actif |
| `[DOC-CFG-002]` | Instructions Claude | 0.1 | 2026-06-11 | `CLAUDE.md` | À publier au besoin | actif |
| `[DOC-CFG-003]` | Instructions Codex | 0.1 | 2026-06-11 | `CODEX.md` | À publier au besoin | actif |
| `[DOC-CFG-004]` | Instructions Copilot VS Code | 0.1 | 2026-06-11 | `.vscode/copilot-instructions.md` | À publier au besoin | actif |

## Archives

| ID | Document | Version | Dernière modification | Source | Page Admin | Statut |
|---|---|---:|---|---|---|---|
| `[DOC-ARC-001]` | Archive du site Docusaurus initial | 0.1 | 2026-06-11 | `project/archive/2026-06-site-docusaurus-initial/README.md` | À publier au besoin | archivé |

## Règles de maintenance

- Ajouter tout nouveau document important dans ce catalogue.
- Ne pas réutiliser un ID supprimé.
- Garder le lien entre la source `project/` et la page publiée dans `web/` lorsque la page existe.
- Marquer un document remplacé comme `deprecated` plutôt que de réutiliser son ID.
- Garder les noms de fichiers pratiques, mais utiliser les IDs pour les références stables.
- Mettre à jour la version et la date de dernière modification lors d’un changement significatif.
