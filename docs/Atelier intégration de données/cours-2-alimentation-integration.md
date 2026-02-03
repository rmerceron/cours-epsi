---
sidebar_position: 3
title: "Cours 2 - Alimentation et intégration"
---

# Cours 2 - Alimentation et intégration de données

## Rôle et position de la couche d'alimentation

La couche d'alimentation constitue la **porte d'entrée du SID**. Son rôle est de récupérer les données issues des systèmes sources, de les transformer, puis de les charger dans la couche de stockage.

C'est ici qu'on transforme les données brutes, hétérogènes et dispersées en un flux cohérent, propre et fiable prêt à être analysé.

| Étape                          | Rôle                                                                            |
|--------------------------------|---------------------------------------------------------------------------------|
| **Extraction (Extract)**       | Collecter les données depuis des sources multiples (bases, fichiers, API, etc.) |
| **Transformation (Transform)** | Nettoyer, uniformiser, enrichir et appliquer des règles de gestion              |
| **Chargement (Load)**          | Intégrer les données transformées dans le Data Warehouse (ou Data Mart)         |

:::tip Pipeline de données

C'est ce processus complet qu'on appelle souvent un **pipeline de données** ou **workflow ETL**.

:::

---

## Les différentes sources de données acceptées par un SID

Un SID s'appuie principalement sur des **données structurées**, c'est-à-dire organisées selon un modèle fixe (colonnes, lignes, types de données).

| Type de source               | Exemples                              |
|------------------------------|---------------------------------------|
| **BDD relationnelles**       | MySQL, PostgreSQL, SQL Server, Oracle |
| **Systèmes ERP / CRM**       | Odoo, Salesforce, SAP                 |
| **Fichiers plats**           | CSV, fichiers Excel (.xlsx)           |
| **Fichiers semi-structurés** | JSON, XML                             |
| **Applications tierces**     | API REST, webhooks                    |

---

## Contraintes et défis de la couche d'alimentation

### Conflits et hétérogénéité des données

Les sources peuvent présenter :

- Des **formats différents** : `YYYY/MM/DD` vs `DD-MM-YYYY`
- Des **unités de mesure variées** : € vs $, kg vs lb
- Des **noms de colonnes incohérents** : `client_id` vs `id_client`
- Des **structures différentes** : colonnes manquantes, jointures implicites, clés non uniques

**Exemple** : Une base CRM utilise `Client_ID` alors que le système de facturation utilise `NumClient` → il faut faire correspondre les champs (**mapping**) et harmoniser les types de données.

---

### Qualité de données

Les données sources sont rarement parfaites :

| Problème                         | Description                           |
|----------------------------------|---------------------------------------|
| **Valeurs manquantes ou nulles** | Champs non renseignés                 |
| **Doublons**                     | Même client enregistré plusieurs fois |
| **Incohérences**                 | Un montant négatif pour une vente     |
| **Erreurs de saisie**            | Typos, formats illégaux               |

#### Traitements correctifs possibles

- **Nettoyage automatique** : remplissage par défaut, suppression des doublons
- **Contrôles qualité** à chaque étape de l'ETL
- **Journaux d'erreurs** pour suivi et correction manuelle

---

### Contraintes techniques

| Contrainte                             | Description                                                                |
|----------------------------------------|----------------------------------------------------------------------------|
| **Performance et volumétrie**          | Gros volumes de données = besoin de traitements parallèles ou incrémentaux |
| **Latence / Fréquence d'alimentation** | Batch nocturne ou temps réel selon les besoins                             |
| **Traçabilité et audit**               | Chaque donnée chargée doit pouvoir être reliée à sa source                 |
| **Sécurité**                           | Gestion des accès, chiffrement des flux, respect du RGPD                   |

---

## Les outils d'intégration : ETL et EAI

Il existe deux grandes familles d'outils pour gérer la couche d'alimentation :

- Les **ETL** (Extract - Transform - Load)
- Les **EAI** (Enterprise Application Integration)

Ces deux approches visent à faire circuler des données entre systèmes, mais leurs objectifs diffèrent.

---

### ETL (Extract - Transform - Load)

**Objectif** : alimenter un SID à partir de données hétérogènes.

#### Fonctionnement

1. Extraction des données sources
2. Transformation (nettoyage, normalisation, enrichissement)
3. Chargement dans le Data Warehouse ou Data Mart

#### Cas d'usage

- Intégration quotidienne des ventes d'un ERP vers le SID
- Consolidation des données clients provenant de plusieurs bases
- Préparation des données pour un tableau de bord Power BI

#### Avantages

- Adapté aux **traitements massifs et planifiés**
- **Contrôle complet** sur les transformations
- Forte **traçabilité** des flux (logs, historique d'exécution)

#### Limites

- Peu adapté aux échanges en **temps réel**
- Processus souvent **batch** et programmés

#### Exemples d'outils ETL

| Outil                  | Description                                           |
|------------------------|-------------------------------------------------------|
| **Talend Open Studio** | ETL open source très répandu                          |
| **Pentaho (PDI)**      | Pentaho Data Integration                              |
| **Apache Hop**         | Fork de Kettle, moderne et extensible                 |
| **SSIS**               | SQL Server Integration Services (Microsoft)           |
| **AWS Glue**           | ETL serverless sur AWS                                |
| **Python + Pandas**    | Solution code pour les transformations personnalisées |

---

### EAI (Enterprise Application Integration)

**Objectif** : faire communiquer des applications opérationnelles entre elles (synchronisation de processus métiers).

Par exemple, quand une commande est validée dans un ERP, elle doit apparaître instantanément dans le CRM ou le logiciel de facturation.

#### Fonctionnement

- Basé sur des **messages** et des **bus d'intégration** (middleware)
- Chaque application publie ou consomme des messages en **temps réel**

#### Cas d'usage

- Synchroniser les données entre un site e-commerce et un ERP
- Mettre à jour automatiquement un CRM après une vente
- Orchestrer des processus métier multi-applications

#### Avantages

- Échanges **temps réel**
- Haute disponibilité et **interopérabilité applicative**

#### Limites

- Pas conçu pour les **volumes massifs** ou les transformations complexes
- **Complexité** d'administration et de maintenance accrue

#### Exemples d'outils EAI

- Mule ESB
- Apache Camel
- Talend ESB

---

## ETL vs EAI : tableau comparatif

| Critère                | ETL                           | EAI                                      |
|------------------------|-------------------------------|------------------------------------------|
| **Objectif principal** | Alimenter un SID              | Synchroniser des applications            |
| **Mode de traitement** | Batch (lots planifiés)        | Temps réel (événements)                  |
| **Volume de données**  | Massif                        | Modéré                                   |
| **Transformation**     | Complexe et complète          | Légère (routage, mapping)                |
| **Cas d'usage**        | Reporting, BI, Data Warehouse | Intégration applicative, workflow métier |

---

## Résumé - Points clés

| #  | Concept                   | À retenir                                                      |
|----|---------------------------|----------------------------------------------------------------|
| 01 | **Couche d'alimentation** | Porte d'entrée du SID : extraction, transformation, chargement |
| 02 | **Sources de données**    | BDD, ERP/CRM, fichiers plats, JSON/XML, APIs                   |
| 03 | **Qualité des données**   | Doublons, valeurs manquantes, formats incohérents = à traiter  |
| 04 | **ETL**                   | Pour traitements massifs et planifiés vers le Data Warehouse   |
| 05 | **EAI**                   | Pour synchronisation temps réel entre applications             |
