---
sidebar_position: 3
title: "Cours 2 - Architecture Orientée Services (SOA)"
---

# Cours 2 - Architecture Orientée Services (SOA)

## Partie I - Le concept SOA

L'**Architecture Orientée Services** (SOA) est un style d'architecture logicielle où les fonctionnalités d'une application sont exposées sous forme de **services indépendants et réutilisables**.

- Chaque service représente une **unité fonctionnelle métier** (ex. authentification, gestion des commandes, paiement).
- Les services sont accessibles via des **interfaces standardisées** (ex. REST, SOAP).
- L'objectif est de rendre le système **modulaire, flexible et interopérable**.

**Exemple** : Dans un site e-commerce, l'authentification, la gestion du panier et le paiement peuvent être trois services distincts.

---

### Les éléments d'une architecture SOA

| Élément                                            | Description                                                                                                                                        |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Application Front-End**                          | Interface utilisateur (web, mobile, desktop) qui consomme les services pour afficher les informations et exécuter les actions                      |
| **Service**                                        | Bloc fonctionnel autonome qui réalise une tâche précise et qui est accessible via une interface définie (contrat)                                  |
| **Dépôt de services** (Service Repository)         | Catalogue central où sont référencés les services disponibles. Il permet de découvrir et réutiliser des services existants                         |
| **Bus de services** (Enterprise Service Bus – ESB) | Infrastructure de communication entre les services qui assure la médiation, la transformation de messages, la sécurité et l'orchestration des flux |

---

## Partie II - Le terme « Service »

En SOA, un service est une **unité fonctionnelle autonome** qui répond à un besoin métier précis. Il est conçu pour être réutilisable, interopérable et faiblement couplé avec les autres services.

Un service s'appuie sur plusieurs éléments clés :

1. Le contrat
2. L'interface
3. L'implémentation et la logique métier
4. Les données
5. La sécurité

---

### Le contrat

Le contrat spécifie **ce que le service fait** sans révéler son implémentation technique interne. Il s'agit d'une description fonctionnelle qui définit les règles d'utilisation du service.

**Il contient :**

- Les **préconditions** (ce qui doit être vrai avant l'appel au service)
- Les **postconditions** (ce qui sera vrai après l'exécution du service)
- Les **résultats attendus** (réponses possibles, codes d'erreurs)
- Les **règles métier** (contraintes spécifiques au domaine fonctionnel)

**Exemple** : "Le service de paiement traite une transaction à partir d'un montant, d'un mode de paiement et d'un identifiant utilisateur. En retour, il fournit un identifiant de transaction et un statut (succès/échec)."

:::tip

Le contrat est primordial car il garantit une clarté d'utilisation et permet à différents systèmes de collaborer sans ambiguïté.

:::

---

### L'interface

L'interface est le **point d'accès au service**. Elle décrit comment un consommateur peut invoquer le service. Cela correspond à l'**API** du service.

On utilise fréquemment des API REST, SOAP (pour les plus anciennes), GraphQL ou gRPC par exemple.

**Exemple** : Une API REST exposant `POST /paiement/process` avec un corps JSON contenant les informations nécessaires à la transaction.

:::tip

L'interface assure la standardisation des échanges et permet à n'importe quel client compatible de consommer le service.

:::

---

### L'implémentation et la logique métier

C'est la partie **interne** du service qui exécute le traitement défini dans le contrat. Elle inclut la logique métier (calculs, règles spécifiques à l'entreprise) et est **cachée au consommateur** (principe d'encapsulation).

**Exemple** : Calcul des taxes pour une commande, vérification du stock avant une vente ou envoi d'un email de confirmation après paiement.

:::tip

La séparation entre interface et implémentation permet d'évoluer techniquement sans impacter les consommateurs du service.

:::

---

### Les données

Les services échangent des **données d'entrée et de sortie**, qui doivent être interopérables. On utilise des formats standards :

- **JSON** en REST
- **XML** en SOAP
- **YAML** parfois pour des configurations

:::tip

L'utilisation de formats standardisés garantit la compatibilité entre différents systèmes hétérogènes.

:::

---

### La sécurité

La sécurité est un aspect fondamental en SOA qui vise à protéger :

- Les services contre les **accès non autorisés**
- Les données sensibles contre les **fuites ou altérations**
- L'intégrité globale des systèmes interconnectés face aux **attaques**

En SOA (et plus encore dans les microservices), la sécurité doit être pensée comme un **ensemble de couches complémentaires** et non un simple mécanisme unique.

#### Mécanismes de sécurité

| Mécanisme                       | Description                                                              | Exemples                                             |
|---------------------------------|--------------------------------------------------------------------------|------------------------------------------------------|
| **Authentification**            | On vérifie l'identité de l'appelant                                      | Login/mot de passe, OAuth2, SSO                      |
| **Autorisation**                | On vérifie si l'appelant a le droit d'utiliser le service                | Rôles, permissions spécifiques                       |
| **Confidentialité & Intégrité** | On s'assure que les données ne soient pas lues ni modifiées par un tiers | Chiffrement via HTTPS/TLS, signature numérique, HMAC |

#### Sécurité en couches

La sécurité s'applique à chaque niveau du service :

- **Au niveau de l'interface** : filtrage, contrôle d'accès, limitation de trafic, détection d'anomalies
- **Au niveau de la logique métier** : vérifications internes (cohérence des données, règles métier, autorisations spécifiques)
- **Au niveau des données** : chiffrement en base, anonymisation, gestion stricte des accès
