# Justice plurielle

## Installation

`yarn`

## Utilisation

Vous trouverez toutes ces commandes dans le fichier package.json.

### Lancer l'application pour développer

`yarn dev`

> Cette application fonctionne avec la dernière version LTS de node.

### Lancer la construction de l'application

`yarn build`

#### Puis lancer l'application comme si vous étiez en production

`yarn start`

### Lancer les tests

`yarn test`

### Lancer les tests avec le coverage

`yarn test:coverage`

### Lancer les tests avec mutation

`yarn test:mutation`

### Lancer la vérification du typing

`yarn typecheck`

### Lancer la vérification du code

`yarn lint:typescript`

### Lancer la vérification du CSS

`yarn lint:css`

### Lancer la vérification de l'accessibilité et de la performance

`yarn lighthouse`

### Lancer la vérification de code mort

`yarn deadcode`

### Lancer la vérification de dépendance morte

`yarn depcheck`

## Architectural Decision Records (ADR)

### Open source et Open data (14/10/22)

- Rien n'empêchait le contraire
- C'est nul d'être fermé

### Framework : Gatsby (14/10/22)

- Il utilise React qui est connu par une grosse majorité des développeurs
- Déploie une version statique (fichiers HTML) du site et donc n'a pas besoin de lancer un serveur web
- Grosse communauté
- Très bonne documentation

### Base de données : Firebase (14/10/22)

- Choix du client
- Facile pour le client de mettre à jour les données

### Hébergeur : Scalingo (14/10/22)

- Hébergeur Français
- Facile d'utilisation
- Tu payes à la minute utilisée
- Architecture très simple

### Dépôt de code : GitHub (14/10/22)

- Connu de tous
- Simple d'utilisation
- CI gratuite

### Écrire le code en Français (14/10/22)

- Métier en Français
- N'a pas vocation à s'exporter à l'étranger
- Diminutation de la charge cognitive

### Construire une Progressive Web App (PWA) (14/10/22)

- Avoir du cache
- Avoir du offline
- Installation comme une application native
