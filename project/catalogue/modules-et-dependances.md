# Catalogue des modules et dépendances

> Identifiant : `[DOC-CAT-003]`  
> Version : 0.2  
> Dernière modification : 2026-07-11  
> Statut : carte de conception active

Ce catalogue donne la vue canonique des micro-modules du parcours **Coder avec l’IA** : identité, statut, dépendances et emplacement de la source détaillée.

Il ne constitue pas encore une table des matières finale. L’ordre de présentation appartient aux parcours et aux rencontres; l’identité des contenus reste stable.

## Sources de vérité

| Information | Source de vérité |
|---|---|
| ID, titre stable, domaine, statut et dépendances | ce catalogue |
| Contenu pédagogique détaillé d’un module produit | fichier du module sous `project/current/cours-ia-avance/modules/` |
| Compétences et indicateurs observables | `project/catalogue/competences.md` |
| Page lisible par l’étudiant | `web/docs/cours/` |
| Ordre actuel des rencontres | page `/cours` et navigation Docusaurus |

Une page publique ne remplace pas le module source. Une rencontre ne possède pas le contenu : elle le référence.

## Règles de conception

Chaque module doit rester :

- concret;
- applicable rapidement;
- découpable en paliers I, II et III;
- déplaçable dans la structure de diffusion;
- indépendant d’un produit dans son identifiant.

Lorsqu’une notion est transversale, le provider utilisé dans les exemples ne doit pas devenir la nature du module. GitHub Copilot reste l’exemple principal actuel lorsque cela aide, avec des équivalences Codex ou Claude Code seulement lorsqu’elles apportent une vraie valeur pédagogique.

## Vue des dépendances principales

```text
MIC-IA-001  → MIC-CTX-001 → MIC-INS-001
            → MIC-VCS-001 → MIC-SPE-001 → MIC-MAP-001
                                      └→ MIC-AGT-001
MIC-MAP-001 → MIC-CLI-001 → MIC-AGT-001 → MIC-VCS-002
MIC-CTX-001 → MIC-RET-001
MIC-CTX-001 → MIC-EVA-001 → MIC-OBS-001
MIC-SEC-001 traverse tous les modules avec outils et agents
MIC-PED-001 s’appuie sur les modules stabilisés
MIC-LOC-001 est optionnel et vient après CLI, OBS et SEC
```

## Catalogue canonique

| ID | Titre stable | Domaine | Version | Statut | Prérequis principaux | Source détaillée |
|---|---|---|---:|---|---|---|
| `[MIC-IA-001]` | Se repérer dans les familles d’outils IA | IA | 0.1 | brouillon | aucun | à produire |
| `[MIC-CTX-001]` | Contexte utile | CTX | 0.4 | pilote publié | `MIC-IA-001` recommandé | `project/current/cours-ia-avance/modules/MIC-CTX-001-donner-contexte-utile.md` |
| `[MIC-INS-001]` | Utiliser des instructions réutilisables | INS | 0.1 | brouillon | `MIC-CTX-001` | à produire |
| `[MIC-VCS-001]` | Utiliser Copilot dans un dépôt GitHub | VCS | 0.1 | brouillon | `MIC-CTX-001` | à produire |
| `[MIC-SPE-001]` | Spécifier avant d’implémenter | SPE | 0.1 | brouillon | `MIC-CTX-001`; `MIC-INS-001` recommandé | à produire |
| `[MIC-MAP-001]` | Cartographier un codebase | MAP | 0.4 | pilote publié | `MIC-CTX-001`; `MIC-VCS-001` recommandé | `project/current/cours-ia-avance/modules/MIC-MAP-001-cartographier-codebase.md` |
| `[MIC-CLI-001]` | Travailler avec un agent CLI | CLI | 0.1 | brouillon | `MIC-SPE-001`; `MIC-MAP-001` recommandé | à produire |
| `[MIC-AGT-001]` | Piloter une tâche agentique | AGT | 0.1 | brouillon | `MIC-SPE-001`, `MIC-MAP-001`; `MIC-CLI-001` recommandé | à produire |
| `[MIC-VCS-002]` | Travailler avec branches, issues et pull requests | VCS | 0.1 | brouillon | `MIC-VCS-001`, `MIC-SPE-001`; `MIC-AGT-001` recommandé | à produire |
| `[MIC-EVA-001]` | Vérifier une réponse IA | EVA | 0.4 | pilote publié | `MIC-CTX-001`; `MIC-SPE-001` recommandé | `project/current/cours-ia-avance/modules/MIC-EVA-001-verifier-reponse-plausible.md` |
| `[MIC-OBS-001]` | Lire traces, usage et contexte | OBS | 0.1 | brouillon | `MIC-CLI-001` ou `MIC-AGT-001` recommandé | à produire |
| `[MIC-SEC-001]` | Gérer permissions, confidentialité et limites | SEC | 0.1 | brouillon | `MIC-IA-001`; `MIC-VCS-001` recommandé | à produire |
| `[MIC-RET-001]` | Retrouver l’information dans des documents | RET | 0.1 | brouillon | `MIC-CTX-001` | à produire |
| `[MIC-LOC-001]` | Comprendre les modèles locaux | LOC | 0.1 | optionnel | `MIC-IA-001`; `MIC-OBS-001` et `MIC-SEC-001` recommandés | à produire |
| `[MIC-PED-001]` | Intégrer l’IA dans le travail d’un prof | PED | 0.1 | brouillon | `MIC-EVA-001`; `MIC-SEC-001` recommandé | à produire |

## Modules pilotes publiés

| ID | Page publique | Portée | Exemple principal actuel |
|---|---|---|---|
| `[MIC-CTX-001]` | `/cours/contexte-utile` | notion transversale | GitHub Copilot |
| `[MIC-MAP-001]` | `/cours/cartographier-codebase` | notion transversale | GitHub Copilot; CodeGraph lorsque pertinent |
| `[MIC-EVA-001]` | `/cours/verifier-reponse-ia` | notion transversale | GitHub Copilot |

## Noyau pressenti pour une première version courte

- `[MIC-IA-001]`
- `[MIC-CTX-001]`
- `[MIC-VCS-001]`
- `[MIC-SPE-001]`
- `[MIC-MAP-001]`
- `[MIC-EVA-001]`
- `[MIC-SEC-001]`

Cette sélection est encore une hypothèse de conception. Elle devra être confirmée dans la spécification et la table des matières du MVP.

## Extensions pressenties

- `[MIC-INS-001]`
- `[MIC-CLI-001]`
- `[MIC-AGT-001]`
- `[MIC-VCS-002]`
- `[MIC-OBS-001]`
- `[MIC-RET-001]`
- `[MIC-LOC-001]`
- `[MIC-PED-001]`
