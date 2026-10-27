# Mon Dex — dépôt de départ

Sprint 2 — Brief 1. Une page Tailwind **statique** à rendre interactive avec JavaScript, pour l'univers de votre choix : Pokémon, Digimon ou Yu-Gi-Oh!.

Lisez le brief complet avant de commencer.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page Dex, statique, avec 6 cartes écrites à la main |
| `tailwind.config.js` | Le thème neutre à remplacer par celui de votre univers |
| `src/input.css` | Les directives Tailwind et quelques classes de composants |
| `dist/output.css` | Le CSS généré par Tailwind (ne pas modifier à la main) |
| `data.js` | Le tableau `creatures`, à remplir avec au moins 12 créatures |
| `script.js` | Votre JavaScript, avec la liste des fonctionnalités à coder |
| `design/` | La maquette de la version finale |

## À compléter par vous

- **Univers choisi :** [ Yu-Gi-Oh!]
- **Lien GitHub Pages :** [[lien](https://ismailmrakna-dev.github.io/cards-Yo-Gi/)]
- **Sources des images :** [https://yugioh.fandom.com/wiki/Exodia_the_Forbidden_One]
- **Tests des expressions régulières :** [collez ici vos tests console : 2 valeurs valides et 2 invalides par expression]
- **Bonus réalisés :** [sort - compare - localStorage]
  Voici le **README complet en français** pour ton projet Yu-Gi-Oh! DEX :

---

# Yu-Gi-Oh! DEX

**Yu-Gi-Oh! DEX** est une application web fan-made qui permet d’explorer, rechercher, filtrer, créer et gérer une équipe de monstres Yu-Gi-Oh!.

### Fonctionnalités

- Parcourir une collection de cartes Yu-Gi-Oh!
- Rechercher des cartes par nom
- Filtrer les cartes par Attribut (DARK, LIGHT, FIRE, WATER, etc.)
- Trier les cartes par puissance totale (ATK + DEF)
- Voir les détails complets d’une carte
- Créer de nouveaux monstres personnalisés avec un formulaire + validation
- Constituer une équipe (maximum 6 monstres, sans doublon)
- Comparer les statistiques de deux cartes
- Design responsive (Desktop + Mobile)
- Sauvegarde avec LocalStorage (équipe + cartes créées)
- Bonus : prêt pour l’API Fetch

### Technologies utilisées

- HTML5
- CSS3 + Tailwind CSS
- JavaScript Vanilla
- LocalStorage
- Fetch API (bonus)

### Structure du projet

```
cards-Yo-Gi/
├── index.html
├── input.css
├── output.css
├── script.js
├── data.js
├── images/
└── README.md
```

### Comment lancer le projet

1. Télécharge ou clone le projet
2. Ouvre le fichier `index.html` avec **Live Server** (recommandé avec VS Code)
3. Ou ouvre simplement le fichier dans ton navigateur

### Auteur

Projet réalisé dans le cadre d’une formation front-end.  
Fan project – non affilié à Konami.

---

### Améliorations possibles (Backlog)

- [ ] Sauvegarder l’équipe et les cartes créées avec LocalStorage
- [ ] Charger des cartes réelles via l’API YGOPRODeck
- [ ] Améliorer le responsive mobile
- [ ] Ajouter des animations plus fluides
- [ ] Mode sombre / clair
- [ ] Système de favoris

---

**Merci d’avoir testé Yu-Gi-Oh! DEX !**  
Que le cœur du monstre soit avec toi.

---

Tu veux que je te génère aussi la version **Planification Jira en français** ?
