---
sidebar_position: 2
title: "Cours 1 - Décomposition d'un système"
---

# Cours 1 - Décomposition d'un système

## Partie I - Les couches applicatives (Layers)

### Pourquoi découper en couches ?

Une application moderne est rarement développée "en bloc" ou de manière monolithique sans séparation des responsabilités. Pour assurer clarté, évolutivité et robustesse, elle est généralement organisée en **couches logicielles** (Layers).

Chaque couche a un rôle bien défini et interagit avec les autres de manière contrôlée. Cette organisation suit le principe fondamental de l'architecture en couches : **séparer ce qui relève de l'interface, de la logique métier et des données**.

---

### Règles de communication entre couches

Pour garder une architecture claire et maintenable :

- Chaque couche doit avoir ses **propres modèles** (structures de données), qui ne doivent pas être utilisés directement par une autre couche.
- Une couche ne doit communiquer qu'avec la couche **immédiatement en dessous** d'elle ou avec une autre couche du même niveau.

:::tip

Cette approche garantit que l'application reste modulaire, facile à maintenir et évolutive, tout en limitant les dépendances entre les couches.

:::

---

### Flux d'une requête utilisateur

1. L'utilisateur envoie une requête → elle arrive à la **Presentation Layer**.
2. La Presentation Layer demande les informations à la **Business Layer** (logique métier).
3. La Business Layer interroge la **Data Access Layer** pour récupérer les données depuis la base (Data Source).
4. La Data Access Layer obtient les données et les renvoie à la Business Layer.
5. La Business Layer applique les règles métier et renvoie le résultat à la Presentation Layer.
6. La Presentation Layer formate les données (ex. HTML, JSON, interface mobile) et les affiche à l'utilisateur.

En résumé :

- La **communication descendante** sert à demander ou envoyer une action (requête).
- La **communication ascendante** sert à remonter les données traitées vers l'utilisateur.
- Chaque couche ne voit que la couche juste en dessous → **séparation stricte des responsabilités**.

:::tip

On peut comparer cela à une chaîne de production : chaque maillon fait son travail et passe le résultat au maillon supérieur.

:::

---

### Presentation Layer

C'est l'interface entre l'utilisateur et le système. Elle traduit les informations issues du système en une forme compréhensible et ergonomique, et elle recueille les actions de l'utilisateur.

Elle doit offrir une expérience utilisateur claire et fluide et **ne contenir aucune logique métier complexe** (simple affichage et interaction) → Front-end.

**Exemples :**

- Dans un site e-commerce : affichage des produits, formulaires d'inscription, panier d'achat.
- Dans une appli bancaire : consultation du solde, saisie d'un virement.

---

### Business Layer

C'est le **cœur de l'application**. Elle contient la logique métier, c'est-à-dire les règles et traitements spécifiques au domaine étudié. Elle est indépendante de la présentation et de la base de données.

Son objectif est de séparer les règles métier du reste du code et ainsi de permettre leur réutilisation dans plusieurs contextes (ex. une même logique utilisée par une appli web et une appli mobile).

**Exemples :**

- Calcul des frais de livraison selon la zone géographique et le poids du colis.
- Vérification des droits d'accès d'un utilisateur (ex. un administrateur peut modifier, un utilisateur simple ne peut que lire).
- Application des règles de gestion de stock (réserver un article, décrémenter les quantités disponibles).

---

### Data Access Layer

Gère la communication avec les sources de données : bases de données, systèmes externes, fichiers, services web (API). Elle masque la complexité technique d'accès aux données pour le reste de l'application.

Son but est de **centraliser et sécuriser l'accès aux données** et d'optimiser les opérations (transactions, indexation, etc.).

On utilisera des requêtes SQL, des ORM ou des connecteurs d'API selon les cas.

**Exemples :**

- Enregistrer une commande dans la base de données.
- Charger la liste des produits depuis un système ERP.

---

### Bénéfices de la séparation en couches

| Bénéfice           | Description                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **Maintenabilité** | Chaque couche peut évoluer indépendamment (ex. changer l'interface sans toucher à la logique métier)                          |
| **Réutilisation**  | Une même logique métier peut être utilisée par plusieurs interfaces (ex. site web + application mobile)                       |
| **Sécurité**       | Les données sont protégées derrière la couche métier, évitant les accès directs et non contrôlés                              |
| **Testabilité**    | Chaque couche peut être testée isolément (tests unitaires sur la logique métier, tests d'intégration sur l'accès aux données) |

---

## Partie II - Les Tiers : stratification logique

### Qu'est-ce qu'un Tier ?

Un **tier** (ou niveau) représente une stratification **physique** des couches logicielles, c'est-à-dire que chaque tier peut être déployé sur une machine ou un environnement distinct.

Par exemple :
- L'interface utilisateur peut tourner sur l'ordinateur ou le navigateur de l'utilisateur
- La logique métier sur un serveur applicatif
- La base de données sur un serveur dédié

:::tip

Un tier n'est pas seulement une question de couche logique, c'est aussi une organisation physique qui rend l'application plus robuste, modulable et performante.

:::

---

### Avantages de la séparation physique

- **Maintenance facilitée** : chaque tier peut être mis à jour ou corrigé indépendamment, sans impacter les autres niveaux.
- **Sécurité renforcée** : les données critiques peuvent être protégées derrière des couches intermédiaires, limitant l'accès direct aux utilisateurs finaux.
- **Scalabilité** : chaque tier peut être dimensionné ou dupliqué en fonction de la charge.
- **Répartition de la charge** : en séparant les traitements et les données sur différents serveurs, on évite que toutes les opérations soient concentrées sur une seule machine.

---

### Modèle 1-Tier

Toutes les fonctions de l'application (interface, logique métier et données) sont exécutées sur **la même machine**.

**Exemple** : application bureautique locale (Excel avec macros, application desktop simple, jeu hors ligne).

| Avantages                            | Limites                                                                                                      |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Simplicité d'architecture            | Maintenance difficile : toute mise à jour doit être faite sur chaque poste                                   |
| Exécution rapide locale, sans réseau | Scalabilité quasi nulle : impossible de gérer plusieurs utilisateurs ou de partager les données efficacement |

---

### Modèle 2-Tiers (Client-Serveur)

L'application est séparée entre un **client** (interface et parfois une partie de la logique métier) et un **serveur** (logique métier principale et base de données).

**Exemple** : une application desktop qui interroge directement une base MySQL.

| Avantages                                                     | Limites                                                                                        |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Centralisation des données → meilleure cohérence et intégrité | Forte dépendance au serveur : si le serveur tombe, l'application ne fonctionne plus            |
| Mise à jour de la base facile, le client peut rester léger    | La logique métier est souvent partiellement côté client → difficile à maintenir ou à sécuriser |

---

### Modèle n-Tiers (3-Tiers et plus)

L'application est séparée entre :
- Un **client léger** (navigateur web, appli mobile...)
- Un **serveur applicatif** (logique métier et services applicatifs)
- Un **serveur de données**

**Exemple** : une application e-commerce avec un front-end Angular (client), une API REST NestJS (serveur app) et Firestore (serveur de données NoSQL).

| Avantages                                                             | Limites                                                                                  |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Évolutivité : chaque tier peut être mis à l'échelle indépendamment    | Architecture plus complexe à mettre en place                                             |
| Sécurité : la base de données n'est pas directement exposée au client | Coûts d'infrastructure plus élevés                                                       |
| Répartition de la charge : scalabilité horizontale possible           | Nécessite une gestion stricte des communications entre tiers (API, protocoles, sécurité) |

---

### Quel modèle choisir ?

Tout dépend de ce qu'on a besoin de faire !

- Le **modèle 3-tiers** est le plus répandu pour les applications web et mobiles modernes.
- Le **1-tiers** peut rester pertinent pour des logiciels sans dépendance réseau.
- Le **2-tiers** est plus rare, mais peut se justifier quand il y a un besoin accru de sécurité et de cohérence des données (ex. certaines applications bancaires internes).

---

## Partie III - Le modèle MVC (Model – View – Controller)

Le modèle MVC est un **pattern architectural** très répandu dans le développement d'applications web, mobiles et desktop. Il permet de structurer le code de manière claire, en séparant les responsabilités, et facilite la maintenance, l'évolutivité et la réutilisation.

---

### Le Modèle (Model)

Le modèle est la représentation des **données et des règles métier** de l'application. C'est lui qui encapsule la logique de gestion des informations (CRUD) et qui garantit que les règles définies par le métier sont respectées.

**Son rôle :**

- Définir les structures de données (objets, tables, entités)
- Appliquer la validation des données (ex. un mot de passe doit contenir au moins 8 caractères)
- Effectuer les traitements métier (ex. calcul du montant d'une facture, application d'une réduction)
- Être **indépendant de l'interface** : le modèle ne sait pas comment les données sont affichées

**Exemples :**

- Objet `User` : possède les attributs (nom, email, mot de passe) et une méthode `checkPassword()` pour vérifier la validité du mot de passe
- Objet `Order` : contient les articles du panier, calcule le total et applique les promotions
- Objet `Product` : contient les informations d'un produit et une méthode `isAvailable()` pour vérifier la disponibilité

---

### La Vue (View)

La vue est l'**interface utilisateur**. Elle se charge uniquement de présenter les données et de recueillir les actions de l'utilisateur.

**Son rôle :**

- Afficher les informations sous une forme compréhensible
- Fournir une expérience utilisateur fluide et ergonomique (UX/UI)
- Capturer les actions de l'utilisateur (formulaire, clic, navigation)
- **Ne contenir aucune logique métier** : son rôle est purement visuel et interactif

**Exemples :**

- Une page web qui affiche un catalogue de produits (titre, prix, image, bouton "Ajouter au panier")
- Un formulaire mobile permettant de saisir les informations de livraison
- Un tableau de bord administratif avec la liste des commandes en attente

---

### Le Contrôleur (Controller)

Le contrôleur est le **chef d'orchestre** entre la vue et le modèle. Il reçoit les actions de l'utilisateur depuis la vue, fait appel au modèle pour appliquer les règles métier, puis retourne les résultats à la vue.

**Son rôle :**

- Interpréter les actions de l'utilisateur (clic, saisie, requête HTTP)
- Faire appel au modèle pour manipuler ou interroger les données
- Gérer le flux de l'application : décider quelle vue afficher après une action
- Transmettre les résultats (succès, erreurs, messages) à la vue

**Exemples :**

- `LoginController` : reçoit l'action "connexion", appelle le modèle `User` pour vérifier les identifiants, et renvoie la vue "Accueil" ou un message d'erreur
- `CartController` : reçoit l'action "ajouter un produit au panier", appelle le modèle `Order` pour ajouter l'article, puis met à jour la vue "Panier"
- `ProductController` : reçoit l'action "afficher la fiche produit", interroge le modèle `Product` et envoie les données à la vue "Détail produit"

---

### Flux MVC

1. L'utilisateur interagit avec la **vue**
2. La vue envoie l'action au **contrôleur** correspondant
3. Le contrôleur interroge ou modifie le **modèle** selon la logique métier
4. Le modèle retourne les données ou le résultat du traitement
5. Le contrôleur transmet ces données à la **vue** pour affichage

**Avantages du MVC :**

- **Séparation des responsabilités** : le code de l'interface est distinct du code métier et de la gestion des données
- **Réutilisabilité** : la logique métier peut être utilisée dans plusieurs interfaces différentes (web, mobile, API)
- **Évolutivité** : chaque composant (Modèle, Vue, Contrôleur) peut évoluer indépendamment

---

## Partie IV - L'architecture d'application mobile

Les applications mobiles peuvent être développées selon plusieurs approches architecturales, chacune présentant des avantages et des limites. Le choix dépend des objectifs du projet, des contraintes techniques, du budget et des ressources humaines disponibles.

:::tip

Les grands principes vus précédemment (couches, tiers, MVC) continuent de s'appliquer, mais il y a certains choix architecturaux propres au développement mobile.

:::

---

### Développement natif

On développe une application spécifiquement pour un système d'exploitation particulier :
- **iOS** : Swift ou Objective-C
- **Android** : Java ou Kotlin

| Avantages                                                                                                                 | Inconvénients                                                                                |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Performance optimale grâce à l'accès direct aux API système et au matériel                                                | Coût élevé : nécessite souvent deux équipes distinctes (iOS et Android)                      |
| Intégration complète avec toutes les fonctionnalités du smartphone (GPS, caméra, capteurs, notifications push, biométrie) | Maintenance plus complexe : une même fonctionnalité doit être développée et testée deux fois |
| Expérience utilisateur fluide et conforme aux standards de chaque OS                                                      | Temps de développement plus long                                                             |

---

### Développement hybride

On développe une application avec une **seule base de code** qui fonctionne sur plusieurs systèmes d'exploitation (Android + iOS). Frameworks : Flutter, React Native, Ionic, Cordova.

| Avantages                                                                        | Inconvénients                                                                                             |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Coût réduit : une seule équipe de développement suffit                           | Performances parfois inférieures au natif (surtout pour les jeux ou applications lourdes)                 |
| Code mutualisé : les fonctionnalités développées une fois sont déployées partout | Dépendance aux frameworks et plugins ; certaines fonctionnalités nécessitent du code natif complémentaire |
| Mises à jour plus rapides et simplifiées                                         | Parfois un "gap" visuel : l'UI ne suit pas exactement les guidelines de chaque OS                         |

---

### Application web mobile

On développe une **application web responsive** qui s'exécute dans le navigateur du mobile.

| Avantages                                                             | Inconvénients                                |
|-----------------------------------------------------------------------|----------------------------------------------|
| Déploiement unique : une seule version pour tous les utilisateurs     | Accès limité aux fonctionnalités matérielles |
| Pas d'installation nécessaire : accessible directement depuis une URL | Performances moindres par rapport au natif   |
| Maintenance simplifiée : mises à jour instantanées côté serveur       | Dépendance à la connexion internet           |

---

### Progressive Web App (PWA)

Une application web évoluée qui combine le meilleur du web et du mobile.

| Avantages                                                            | Inconvénients                                                                                     |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Aucune installation obligatoire via store                            | Accès encore limité aux fonctionnalités matérielles                                               |
| Multiplateforme par défaut : une seule base de code                  | Performances correctes mais pas au niveau d'une appli native pour les jeux ou applis très lourdes |
| Fonctionnement offline partiel grâce au cache et aux Service Workers | Support des PWA inégal selon les OS (très bon sur Android/Chrome, plus limité sur iOS/Safari)     |
| Notifications push (de plus en plus supportées)                      |                                                                                                   |
| Maintenance très simple (mises à jour côté serveur)                  |                                                                                                   |

---

### Synthèse

- **Développement natif** : incontournable pour les applis nécessitant performance et intégration complète au matériel.
- **Développement hybride** : compromis entre coût, rapidité et couverture multiplateforme.
- **Application web mobile** : idéale pour des solutions simples, rapides à déployer, mais limitées en fonctionnalités.
- **PWA** : alternative très intéressante, proche du cross-platform mais plus légère, idéale pour toucher un large public sans passer par les stores.
