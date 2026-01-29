---
sidebar_position: 5
title: "Cours 4 - Les Design Patterns"
---

# Cours 4 - Les Design Patterns

## Partie I - Définition et formalisme

Dans le développement logiciel, il est courant de rencontrer des problèmes récurrents : comment organiser la création d'objets, comment faire communiquer efficacement différentes parties d'un système, ou encore comment ajouter de nouvelles fonctionnalités sans réécrire le code existant.

Au fil du temps, les ingénieurs ont remarqué que certaines solutions revenaient régulièrement et pouvaient être généralisées. C'est ainsi qu'est née la notion de **design pattern** (ou patron de conception).

:::tip

Un design pattern est une **bonne pratique formalisée**, une sorte de « recette » qui décrit comment résoudre un problème de conception typique. Il ne s'agit pas de copier-coller du code, mais d'un modèle conceptuel adaptable à différents contextes.

:::

### Bénéfices des design patterns

- Ils **facilitent la communication** entre développeurs grâce à un vocabulaire commun (ex. "utilisons un Singleton")
- Ils **améliorent la qualité logicielle** (réutilisabilité, extensibilité, maintenabilité)
- Ils **favorisent une approche structurée** et réfléchie de la conception

Les design patterns ont été popularisés en 1994 par le livre *"Design Patterns: Elements of Reusable Object-Oriented Software"* de Gamma, Helm, Johnson et Vlissides (le **Gang of Four**).

---

### Description d'un design pattern

Un design pattern est généralement décrit selon quatre axes essentiels :

| Axe                  | Description                                                        | Exemple (Singleton)                                                             |
|----------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Un nom**           | Identifiant partagé par la communauté                              | Singleton, Factory Method, Observer                                             |
| **Un problème**      | Contextes et situations où le pattern est applicable               | Comment garantir qu'une classe n'ait qu'une seule instance ?                    |
| **Une solution**     | Description abstraite de la structure (classes, objets, relations) | La classe contrôle elle-même sa création et expose une méthode statique d'accès |
| **Des conséquences** | Avantages et limites ou compromis                                  | Centralisation et cohérence, mais dépendance globale et difficulté à tester     |

---

## Partie II - Catégories de design patterns

Les patterns du GoF sont classés en **trois grandes familles** selon leur rôle dans la conception :

1. Les **patterns de création**
2. Les **patterns structurels**
3. Les **patterns comportementaux**

---

### Les patterns de création

Les patterns de création définissent comment **instancier des objets** de manière flexible et indépendante des implémentations concrètes.

Quelques exemples fréquents :

- **Singleton** : une seule instance partagée
- **Factory Method** : délègue la création d'objets à une sous-classe
- **Abstract Factory** : fabrique des familles d'objets liés
- **Builder** : construit progressivement un objet complexe
- **Prototype** : crée un objet en copiant un prototype existant

#### Exemple : la Factory Method

**Problème** : Quand on conçoit un système, il arrive souvent qu'on ait besoin de créer des objets différents selon un certain contexte (rôle d'un utilisateur, type de produit, type de document, etc.).

Si on instancie directement la classe à chaque fois, la logique de création se répète partout dans le code, rendant le système :
- Difficile à **maintenir** (si la création change, il faut modifier partout)
- Peu **extensible** (ajouter un nouveau type oblige à toucher au code client)

**Solution Factory Method** : Le pattern propose de **centraliser la logique de création** dans une classe dédiée (la Factory). Le client ne s'occupe pas des détails d'instanciation, il se contente de demander à la factory de fournir l'objet dont il a besoin.

- `User` est une interface (classe abstraite) qui définit le contrat (`get_role`)
- `Admin` et `Guest` sont deux implémentations concrètes
- La méthode `create_user` joue le rôle de Factory Method et encapsule la logique de création
- Si demain on ajoute un `Manager`, il suffira de l'ajouter dans la factory, pas besoin de modifier tout le code client

**Conséquences :**

| Avantages                                                                     | Inconvénients                                                                     |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Centralisation de la logique de création                                      | Ajoute une couche de complexité (une classe supplémentaire)                       |
| Facilite l'extensibilité (ajout d'un nouveau type sans casser le code client) | Si on a trop de rôles/objets, la factory peut devenir lourde (→ Abstract Factory) |
| Réduit le couplage entre le client et les classes concrètes                   |                                                                                   |

---

### Les patterns structurels

Les patterns structurels organisent la **composition des classes et objets** afin de créer des structures plus flexibles et évolutives.

Quelques exemples fréquents :

- **Adapter** : rend compatibles deux interfaces incompatibles
- **Decorator** : ajoute dynamiquement des fonctionnalités à un objet
- **Facade** : fournit une interface simplifiée à un sous-système complexe
- **Composite** : représente une hiérarchie d'objets (arbre)
- **Proxy** : contrôle l'accès à un objet (sécurité, lazy loading)

#### Exemple : le Proxy

**Problème** : Il existe des situations où l'on souhaite **contrôler l'accès** à un objet pour des raisons comme :

- Éviter de charger un objet trop lourd avant qu'il ne soit réellement nécessaire (**lazy loading**)
- Ajouter une couche de **sécurité** (contrôler les droits avant d'accéder à une ressource)
- **Intercepter** des appels pour logger, mettre en cache ou compter les accès

Si on modifie directement la classe cible, on risque de casser son code ou de violer le principe de séparation des responsabilités.

**Solution Proxy** : Le pattern introduit un **substitut** (le proxy) qui implémente la même interface que l'objet réel, intercepte les appels et décide de déléguer (ou pas) au vrai objet.

- `Subject` est l'interface commune, utilisée par le Proxy et le RealSubject
- `RealSubject` contient la vraie logique métier (ex. accès aux données sensibles)
- `Proxy` reçoit la requête, vérifie les permissions et délègue au RealSubject uniquement si c'est autorisé

**Conséquences :**

| Avantages                                                           | Inconvénients                                                              |
|---------------------------------------------------------------------|----------------------------------------------------------------------------|
| Contrôle d'accès centralisé (sécurité)                              | Ajoute une couche de complexité                                            |
| Optimisation possible (lazy loading, mise en cache)                 | Peut introduire des ralentissements si mal utilisé (goulot d'étranglement) |
| Transparence pour le client (il ne sait pas qu'il parle à un proxy) |                                                                            |

---

### Les patterns comportementaux

Les patterns comportementaux définissent comment les objets **interagissent et collaborent** entre eux.

Quelques exemples fréquents :

- **Observer** : notifie automatiquement plusieurs objets lors d'un changement d'état
- **Strategy** : définit une famille d'algorithmes interchangeables
- **Command** : encapsule une requête en objet pour pouvoir l'exécuter, annuler ou enregistrer
- **State** : permet à un objet de changer de comportement selon son état interne
- **Mediator** : centralise la communication entre plusieurs objets

#### Exemple : l'Observer

**Problème** : On a souvent des situations où **plusieurs objets doivent être informés** automatiquement lorsqu'un autre objet change d'état.

**Exemples concrets :**

- Une application météo → quand les données météo changent, tous les écrans d'affichage doivent être mis à jour
- Une boutique en ligne → quand un produit est en promo, tous les utilisateurs abonnés doivent recevoir une notification
- Une interface graphique → quand un bouton est cliqué, plusieurs composants doivent réagir

Sans Observer, on devrait coder manuellement la notification de chaque objet, ce qui devient vite lourd et difficile à maintenir.

**Solution Observer** : Le pattern propose de définir un objet central, le **Subject**, qui garde une liste d'"abonnés". Il permet à des objets externes (**Observers**) de s'abonner ou se désabonner afin d'être notifiés automatiquement des changements d'état.

- `Subject` gère la liste d'abonnés (Observers)
- `Observer` est une interface pour définir le comportement à la notification
- Chaque observer réagit à sa manière

```
[Email] Nouveau message : Promotion : -50% sur tous les produits !
[SMS] Nouveau message : Promotion : -50% sur tous les produits !
[Email] Nouveau message : Stock limité, dépêchez-vous !
```

**Conséquences :**

| Avantages                                                                | Inconvénients                                                           |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Faible couplage entre Subject et Observers                               | Risque de cascade de notifications (si un observer modifie le sujet)    |
| Extensible : on peut ajouter de nouveaux observers sans modifier Subject | Difficile à déboguer si beaucoup d'observateurs interagissent en chaîne |
| Très utile pour la programmation événementielle (UI, systèmes réactifs)  |                                                                         |
