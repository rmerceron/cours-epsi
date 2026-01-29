---
sidebar_position: 6
title: "Cours 5 - Modélisation et Outils de Génie Logiciel"
---

# Cours 5 - Modélisation et Outils de Génie Logiciel

## Introduction

Avant de passer à l'implémentation technique d'une application, il est essentiel de **concevoir et représenter clairement** le système d'information que l'on veut mettre en place.

Cette étape de modélisation joue un rôle central en architecture applicative, car elle permet de :

- Mieux comprendre les **besoins métiers**
- Structurer les **données et les traitements**
- Faciliter la **communication** entre les équipes (métiers, analystes, développeurs)
- Réduire les **erreurs** lors du développement

Deux grandes approches de modélisation sont couramment utilisées :

- **MERISE**, historiquement très répandue en France, qui s'appuie sur une approche en niveaux d'abstraction (conceptuel, logique, physique)
- **UML** (Unified Modeling Language), un langage de modélisation graphique international standardisé, particulièrement adapté aux systèmes orientés objet

Pour accompagner cette démarche, on utilise des **outils CASE** (Computer-Aided Software Engineering) qui aident à créer des modèles, générer automatiquement du code ou encore documenter un projet.

---

## Partie I - La méthode MERISE

La méthode MERISE est une méthode française de conception et de gestion de systèmes d'information, très utilisée dans les années 1980–2000 et encore présente dans de nombreux projets académiques et professionnels.

Elle repose sur deux idées fortes :

- Travailler par **niveaux d'abstraction** (conceptuel, logique, physique)
- Adopter un **cycle de vie structuré** d'un système d'information (de l'étude du besoin à l'implémentation technique)

---

### Le cycle de vie MERISE

| Niveau                      | Description                                                                                                                                                                           | Modèle principal                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| **Conceptuel**              | Abstraction maximale, proche du métier. On décrit le *quoi* et non le *comment*. Les données et traitements sont représentés sans se soucier du langage, du SGBD ou de la plateforme. | MCD (Modèle Conceptuel de Données) |
| **Logique**                 | Adaptation au SGBD choisi (relationnel, objet, etc.). On transforme le MCD en un modèle plus concret, adapté à la technologie.                                                        | MLD (Modèle Logique de Données)    |
| **Opérationnel (physique)** | Implémentation réelle. On génère les tables, index, contraintes et scripts SQL.                                                                                                       | MPD (Modèle Physique de Données)   |

---

### Niveau conceptuel : le MCD

Le MCD est centré sur la **compréhension métier**. Il comporte :

- **Entités** : objets métiers (ex. Client, Commande, Produit)
- **Attributs** : propriétés des entités (ex. nom, date, prix)
- **Associations** : relations entre entités (ex. un client passe une commande)
- **Cardinalités** : définissent les multiplicités (1, n, 0..1, etc.)

**Exemple** : Un Client peut passer plusieurs Commandes, mais une Commande appartient à un seul Client.

---

### Niveau logique : le MLD

Le MLD traduit le MCD dans le modèle du SGBD choisi (souvent relationnel) :

- Les **entités** deviennent des **tables**
- Les **associations** deviennent des **relations avec clés étrangères**

**Exemple d'adaptation du MCD en MLD :**

```
USER(user_id, name, firstname, email, shipping_address)
PRODUCT(product_id, product_name, price, stock, description)
CART(cart_id, creation_date, status, user_id)
ORDER(order_id, order_date, status, total_amount, cart_id, user_id)
CONTAINS(cart_id, product_id, quantity)
```

---

### Niveau opérationnel : le MPD

Le MPD est la **concrétisation technique** : on écrit les scripts SQL, on optimise les structures (index, contraintes, types de données).

---

## Partie II - Le langage de modélisation UML

Le langage **UML** (Unified Modeling Language) est un moyen de représenter visuellement l'architecture, la conception et la mise en œuvre de systèmes logiciels complexes.

Une application comporte des milliers de lignes de code, ce qui rend difficile la gestion des interactions et des hiérarchies. Les diagrammes UML résolvent ce problème en divisant un système logiciel en **composants et sous-composants**.

---

### Les éléments de base

| Élément       | Description                                |
|---------------|--------------------------------------------|
| **Classe**    | Objet avec attributs et méthodes           |
| **Interface** | Comportements abstraits                    |
| **Package**   | Regroupement de classes                    |
| **Composant** | Module logiciel indépendant                |
| **Nœud**      | Ressource matérielle (ex. serveur)         |
| **État**      | Situation d'un objet dans son cycle de vie |

---

### Les relations

| Relation          | Description                                   |
|-------------------|-----------------------------------------------|
| **Association**   | Lien simple entre deux classes                |
| **Héritage**      | Relation de généralisation/spécialisation     |
| **Agrégation**    | "a un" (un groupe peut contenir des éléments) |
| **Composition**   | "fait partie de" (relation forte)             |
| **Dépendance**    | Utilisation ponctuelle                        |
| **Multiplicités** | 1, 0..1, *, 1..*                              |

---

### Diagrammes de structure

Ils décrivent la **structure interne** du système : quelles sont ses entités, comment elles sont organisées et comment elles s'imbriquent.

| Diagramme                    | Description                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Diagramme de classes**     | Structure des entités, attributs, méthodes, relations. C'est le diagramme UML le plus utilisé, indispensable en conception orientée objet |
| **Diagramme d'objets**       | Instances réelles des classes                                                                                                             |
| **Diagramme de composants**  | Organisation modulaire                                                                                                                    |
| **Diagramme composite**      | Structure interne des classes/composants                                                                                                  |
| **Diagramme de déploiement** | Répartition sur le matériel (serveurs, réseaux)                                                                                           |
| **Diagramme de packages**    | Regroupements logiques                                                                                                                    |
| **Diagramme de profil**      | Extensions UML spécifiques                                                                                                                |

---

### Diagrammes de comportement

Ils décrivent le **fonctionnement** du système : comment il réagit, quelles étapes il suit, quels scénarios il couvre.

| Diagramme                          | Description                                                                                                            |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Diagramme d'activité**           | Flux de processus (similaire à un organigramme). Utile pour décrire des workflows, traitements, enchaînements logiques |
| **Diagramme de cas d'utilisation** | Interactions acteurs ↔ système                                                                                         |
| **Diagramme d'état-transition**    | Cycle de vie d'un objet                                                                                                |

---

### Diagrammes d'interaction

Ils montrent comment les objets **échangent des messages** et collaborent.

| Diagramme                           | Description                                                                          |
|-------------------------------------|--------------------------------------------------------------------------------------|
| **Diagramme de séquence**           | Chronologie des interactions entre objets. Sert à comprendre les scénarios pas à pas |
| **Diagramme de communication**      | Interactions entre acteurs/objets                                                    |
| **Diagramme d'interaction globale** | Vision macroscopique des collaborations                                              |

:::tip

L'UML n'est pas qu'un seul diagramme : c'est une **boîte à outils de modélisation**. Chaque diagramme a un objectif précis (statique, dynamique, interaction) et ils sont complémentaires.

:::

---

## Partie III - Les outils CASE

Les outils **CASE** (Computer-Aided Software Engineering) sont des logiciels destinés à assister les analystes, concepteurs et développeurs dans les différentes étapes du cycle de vie d'un système d'information.

Leur objectif principal est d'**automatiser et de faciliter** la modélisation, la conception et la génération de code, tout en garantissant la cohérence entre la conception théorique et l'implémentation réelle.

### Ce que permettent les outils CASE

- Créer des modèles selon différentes méthodes (MERISE, UML)
- Produire automatiquement du code : scripts SQL pour les bases de données, classes orientées objet pour les applications
- Vérifier la cohérence : un changement dans un diagramme UML peut être répercuté automatiquement dans le modèle physique (et inversement)
- Améliorer la productivité grâce à l'automatisation
- Documenter le projet avec des diagrammes et schémas normalisés
- Standardiser les pratiques au sein d'une équipe

---

### ArgoUML (open source)

Outil libre et gratuit de modélisation UML, toutes plateformes, qui supporte la majorité des diagrammes UML (diagramme de classes, de séquence, d'activité, etc.).

| Avantages                                           | Limites                                                        |
|-----------------------------------------------------|----------------------------------------------------------------|
| Gratuit et simple à utiliser                        | Fonctionnalités limitées par rapport aux outils professionnels |
| Convient pour l'apprentissage et les petits projets | Pas ou peu de génération de code avancée (SQL, Java, C#)       |

---

### PowerDesigner

Outil professionnel propriétaire, très répandu en entreprise, qui supporte à la fois la méthode MERISE et le langage UML. Il propose une génération automatique de scripts SQL pour plusieurs SGBD (Oracle, SQL Server, MySQL, PostgreSQL, etc.) et permet le travail collaboratif.

| Avantages                                                          | Limites                                                   |
|--------------------------------------------------------------------|-----------------------------------------------------------|
| Très puissant pour la modélisation de bases de données (MLD → MPD) | Payant, avec un coût de licence élevé                     |
| Outil de référence dans de nombreuses grandes entreprises et SSII  | Courbe d'apprentissage plus importante pour les débutants |
| Intègre la traçabilité entre modèles                               |                                                           |

---

### Autres outils

| Outil                    | Description                                                                                                              |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Draw.io / LucidChart** | Outils web simples pour modéliser rapidement ses diagrammes                                                              |
| **PlantUML**             | Complet, pratique et s'intègre facilement dans les IDE via plugins (fonctionne bien dans les outils JetBrains notamment) |
| **Enterprise Architect** | Assez utilisé en entreprise, très complet et moins cher que PowerDesigner (licence autour de 250$/an)                    |
