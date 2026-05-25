# Coder avec l’IA

Trousse ouverte pour apprendre, programmer et évaluer avec l’IA générative en informatique.

Ce dépôt est un starter Docusaurus local, préparé pour la publication GitHub sous `emcmp/coder-avec-ia`. Le REL n’est pas encore rempli; le but actuel est de garder une base propre et indépendante pour la suite du travail éditorial.

## État du projet

- Projet local indépendant, prêt pour publication GitHub.
- Site Docusaurus en place sous `web/`.
- Contenu REL à produire progressivement par la suite.

## Attribution

L'historique technique et l'attribution du gabarit initial sont documentés dans la section À propos de la trousse.

## Déploiement GitHub

- Dépôt GitHub: https://github.com/emcmp/coder-avec-ia
- Pages GitHub: https://emcmp.github.io/coder-avec-ia/
- Configuration Docusaurus: `organizationName = emcmp`, `projectName = coder-avec-ia`, `url = https://emcmp.github.io`, `baseUrl = /coder-avec-ia/`

## Commandes de base

Dans un terminal, placez-vous dans le répertoire `web`:

```powershell
cd web
```

Si les dépendances ne sont pas installées:

```powershell
npm install
```

Pour démarrer le serveur de développement:

```powershell
cd web && npm run start
```

Pour générer la version de production:

```powershell
cd web && npm run build
```

Pour prévisualiser le site généré:

```powershell
cd web && npm run serve
```

## Première publication manuelle

Si le dépôt GitHub n’est pas encore relié localement, exécutez:

```powershell
git add .
git commit -m "Configure GitHub Pages deployment"
git branch -M main
git remote add origin https://github.com/emcmp/coder-avec-ia.git
git push -u origin main
```

## Notes

- Le déploiement GitHub Actions est configuré pour pousser le site statique vers GitHub Pages sur la branche `main`.
- Le contenu Markdown du REL sera ajouté dans les dossiers de documentation du site.
