# Consignes du projet

- [Consignes du projet](#consignes-du-projet)
  - [Description](#description)
  - [Schéma de base de donnée](#schéma-de-base-de-donnée)
    - [Bars](#bars)
    - [Biere](#biere)
    - [Biere_Commande (table de liaison)](#biere_commande-table-de-liaison)
    - [Commande](#commande)
  - [Liste des endpoints](#liste-des-endpoints)
    - [Bar](#bar)
    - [Biere](#biere-1)
    - [Commande](#commande-1)
    - [Biere_commande](#biere_commande)
  - [Liste des endpoints avancés](#liste-des-endpoints-avancés)
  - [Liste des fichiers recommandés](#liste-des-fichiers-recommandés)
  - [Liste des modules à installer (recommendation)](#liste-des-modules-à-installer-recommendation)
  - [Liste des contraintes sur mes routes et models :](#liste-des-contraintes-sur-mes-routes-et-models-)
  - [BONUS 1](#bonus-1)
  - [BONUS 2](#bonus-2)
  - [BONUS 3](#bonus-3)

## Description

Création d'une API pour un site de bars qui permet de gérer les bars, les biere et les commandes des clients.  
Il permet aussi de faire des recherche avancées sur les biere et les commandes.

## Schéma de base de donnée

### Bars

- id : integer
- name : string, unique, obligatoire
- adresse: string, obligatoire
- tel: string, optionnel
- email: string, obligatoire
- description: text, optionnel

### Biere

- name: string, obligatoire
- description: text, optionnel
- degree : float, obligatoire
- prix: float, min(0), obligatoire
- bars_id: integer

### Biere_Commande (table de liaison)

- biere_id:
- commande_id:

### Commande

- name: string, obligatoire
- prix: float, min(0), obligatoire
- bars_id: integer
- date: date, obligatoire
- status : string (en cours, terminée), obligatoire

## Liste des endpoints

### Bar

- POST /bars => Ajouter un bar
- PUT /bars/:id_bar => Modifier un bar
- DELETE /bars/:id_bar => Supprimer un bar
- GET /bars => Liste des bars
- GET /bars/:id_bar => Détail d'un bar

### Biere

- POST /bars/:id_bar/biere => Ajouter une bière à un bar
- PUT /biere/:id_biere => Modifier une bière
- DELETE /biere/:id_biere => Supprimer une bière d'un bar
- GET /bars/:id_bar/biere => Liste des bières d'un bar
- GET /biere/:id_biere => Détail d'une bière

### Commande

- POST /bars/:id_bar/commandes => Ajouter une commande à un bar
- PUT /commandes/:id_commande => Modifier une commande d'un bar
- DELETE /commandes/:id_commande => Supprimer une commande d'un bar
- GET /bars/:id_bar/commandes => Liste des commandes d'un bar
- GET /commandes/:id => Détail d'une commande d'un bar

### Biere_commande

- POST /commandes/:id_commande/biere/:id_biere => Ajouter une biere à une commande
- DELETE /commandes/:id_commande/biere/:id_biere => Supprimer une biere d'une commande

## Liste des endpoints avancés

- GET /bars/:id_bar/commandes?date=2021-01-01 => Liste des commandes d'un bar à une date donnée
- GET /bars/:id_bar/commandes?prix_min=10&prix_max=20 => Liste des commandes d'un bar avec un prix compris entre 10 et 20
- GET /bars?ville=Paris => Liste des bars d'une ville donnée
- GET /bars?name=example => Liste des bars dont le nom contient "example"
- GET /bars/:id_bar/degree => Degré d'alcool moyen des bières d'un bar

## Liste des fichiers recommandés

- models/
  - bar.js
  - biere.js
  - commande.js
  - biere_commande.js
- router/
  - barsRouter.js
  - biereRouter.js
  - commandeRouter.js
  - biere_commandeRouter.js
- controllers/
  - barsController.js
  - biereController.js
  - commandeController.js
  - biere_commandeController.js
- validateur/
  - barsValidator.js
  - biereValidator.js
  - commandeValidator.js
  - biere_commandeValidator.js
- config/
  - database.js
    .env  
    index.js  
    package.json

## Liste des modules à installer (recommendation)

- express
- body-parser
- sequelize
- sqlite3
- nodemon
- express-validator
- dotenv
- faker(Optionnel pour générer des fausses données)
- jest(Optionnel pour les tests)
- supertest(Optionnel pour les tests)

## Liste des contraintes sur mes routes et models :

- Tous les champs obligatoires doivent être renseignés
- Le nom d'un bar doit être unique
- Le prix d'une biere doit être positif
- Le prix d'une commande doit être positif
- Le status d'une commande doit être "en cours" ou "terminée"
- Le status d'une commande ne peut pas être modifié si elle contient des biere
- une commande ne peut pas être modifié si elle est terminée
- La date d'une commande ne peut pas être supérieure à la date du jour
- Quand je supprime un bar, je supprime toutes les biere et les commandes associées
- Quand je supprime une biere, je supprime toutes les commandes associées
- Quand je supprime une commande, je supprime toutes les biere_commande associées

## BONUS 1

- GET /bars/:id_bar/degree?prix_min=10&prix_max=20 => Degré d'alcool moyen des bières d'un bar avec un prix compris entre 10 et 20
- GET /bars/:id_bar/degree?date=2021-01-01 => Degré d'alcool moyen des bières des commandes d'un bar à une date donnée
- GET /bars/:id_bar/commandes?date=2021-01-01&prix_min=10&prix_max=20 => Liste des commandes d'un bar à une date donnée avec un prix compris entre 10 et 20
- GET /bars/:id_bar/commandes?date=2021-01-01&prix_min=10&prix_max=20&status=terminée => Liste des commandes d'un bar à une date donnée avec un prix compris entre 10 et 20 et terminée
- GET /bars/:id_bar/commandes?date=2021-01-01&prix_min=10&prix_max=20&status=terminée&name=example => Liste des commandes d'un bar à une date donnée avec un prix compris entre 10 et 20 et terminée et dont le nom contient "example"
- GET /bars/:id_bar/biere?sort=asc => Liste des biere d'un bar triées par ordre alphabétique
- GET /bars/:id_bar/biere?sort=desc => Liste des biere d'un bar triées par ordre alphabétique inversé
- GET /bars/:id_bar/biere?sort=asc&limit=10 => Liste des biere d'un bar triées par ordre alphabétique et limitées à 10
- GET /bars/:id_bar/biere?sort=asc&limit=10&offset=5 => Liste des biere d'un bar triées par ordre alphabétique et limitées à 10 en commençant à l'index 5
- GET /bars/:id_bar/biere?sort=asc&limit=10&offset=5&degree_min=5&degree_max=10 => Liste des biere d'un bar triées par ordre alphabétique et limitées à 10 en commençant à l'index 5 avec un degré d'alcool compris entre 5 et 10
- GET /bars/:id_bar/biere?sort=asc&limit=10&offset=5&degree_min=5&degree_max=10&prix_min=10&prix_max=20 => Liste des biere d'un bar triées par ordre alphabétique et limitées à 10 en commençant à l'index 5 avec un degré d'alcool compris entre 5 et 10 et un prix compris entre 10 et 20 (amusez-vous bien)
- GET /commande/details/:id_commande => renvoie un pdf de la commande

## BONUS 2

Tester les routes avec Jest et Supertest

## BONUS 3

Venez me voir pour le bonus 3
