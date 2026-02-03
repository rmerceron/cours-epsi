---
sidebar_position: 2
title: "Cours 1 - Architecture d'un SID"
---

# Cours 1 - Architecture d'un Système d'Information Décisionnel (SID)

## Du besoin métier à la décision

### La décision pilotée par la donnée

Prendre une décision dans une organisation consiste à choisir une action parmi plusieurs possibles afin d'atteindre un objectif. Dans un contexte professionnel, **la décision repose de plus en plus sur des données fiables, consolidées et contextualisées**.

C'est ce qu'on appelle la **décision pilotée par la donnée** (Data-Driven Decision Making - DDDM).

:::tip Définition

Un **Système d'Information Décisionnel (SID)** est l'ensemble des moyens (techniques, humains et organisationnels) mis en œuvre pour **collecter, transformer, stocker et analyser les données** dans le but de soutenir la prise de décision.

:::

---

### Les trois niveaux de décision

| Niveau           | Horizon                      | Description                             | Exemples                                                                              |
|------------------|------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------|
| **Stratégique**  | Long terme (3-5 ans)         | Orienté sur la vision de l'entreprise   | Entrer sur un nouveau marché, lancer un nouveau produit, fusionner avec un concurrent |
| **Tactique**     | Moyen terme (6 mois - 2 ans) | Lié à la mise en oeuvre de la stratégie | Fixer les objectifs commerciaux, ajuster les prix, gérer les campagnes marketing      |
| **Opérationnel** | Quotidien                    | Décisions répétitives et encadrées      | Gérer les stocks, affecter les équipes, suivre les commandes                          |

---

### Les 4 étapes du processus décisionnel basé sur les données

1. **Collecte** : rassembler des données issues des systèmes opérationnels, du web, des CRM, etc.
2. **Préparation** : nettoyer, transformer et enrichir ces données (rôle des outils ETL)
3. **Analyse** : exploiter les données via des outils de reporting, de BI ou de data science
4. **Décision & action** : interpréter les résultats et mettre en œuvre les choix

**Exemple** : Une chaîne de supermarchés collecte les ventes quotidiennes (collecte), nettoie et regroupe les données par produit et région (préparation), analyse les tendances de consommation (analyse), puis décide d'ajuster ses stocks et ses promotions (action).

---

### OLTP vs OLAP

Les organisations utilisent deux types principaux de systèmes d'information, complémentaires :

| Caractéristiques             | OLTP (Online Transaction Processing)       | OLAP (Online Analytical Processing)   |
|------------------------------|--------------------------------------------|---------------------------------------|
| **Objectif**                 | Gérer les transactions quotidiennes        | Analyser les données historiques      |
| **Type de données**          | Données détaillées, en temps réel          | Données agrégées, historiques         |
| **Fréquence des opérations** | Fréquentes (milliers de transactions/jour) | Moins fréquentes (requêtes d'analyse) |
| **Orientation**              | Écriture et mise à jour                    | Lecture et synthèse                   |
| **Performance recherchée**   | Rapidité d'exécution, intégrité            | Rapidité de lecture et d'agrégation   |
| **Exemples d'outils**        | ERP, CRM                                   | Data Warehouse, Cube OLAP             |

:::tip À retenir

**OLTP = alimenter le présent**
**OLAP = comprendre le passé pour agir sur le futur**

:::

**Exemple e-commerce** :
- Le **système OLTP** enregistre les commandes, paiements, livraisons, retours. Chaque transaction est écrite immédiatement dans la base.
- Le **système décisionnel (SID/OLAP)** extrait ces données chaque nuit (via un processus ETL), les consolide et permet de les analyser : *"Quel est le chiffre d'affaires mensuel ?"*, *"Quels produits se vendent le mieux ?"*, *"Peut-on prévoir une rupture de stock ?"*

---

### Prérequis d'un SID efficace

Pour qu'un système d'aide à la décision soit efficace, il doit reposer sur :

- Une **architecture claire et modulaire**
- Des **données fiables et cohérentes**
- Des **outils de traitement (ETL)** capables d'intégrer des sources hétérogènes

---

## Le modèle D.I.K. : Data | Information | Knowledge

Le modèle D.I.K. (pour Data - Information - Knowledge) décrit le cheminement de la valeur dans les données. Il explique comment une donnée brute devient une connaissance utile pour la décision.

:::info Rôle du SID

Le SID ne stocke pas seulement des données, il aide à les transformer en savoir exploitable.

:::

### La donnée (Data)

C'est la **matière première** du SID. Elle peut être quantitative (chiffres, mesures) ou qualitative (texte, catégories). À ce stade, la donnée n'a pas encore de signification.

**Exemples** : `150`, `2025-10-12`, `P001`, `39,99 €`

Ces éléments n'ont aucun sens isolément : il faut les relier entre eux.

**Rôle du SID** : collecter et fiabiliser les données issues de différentes sources via des outils ETL.

---

### L'information

La donnée devient information lorsqu'elle est **contextualisée, structurée et reliée à d'autres données**. Elle répond aux questions : *quoi ? quand ? combien ? où ?*

**Exemples** :
- *"150 unités du produit X ont été vendues en octobre 2025 dans la région Ouest."*
- *"Le chiffre d'affaires du mois d'octobre est de 45 000 €."*

**Rôle du SID** : consolider et transformer les données brutes pour produire des indicateurs et rapports. On applique des **règles métier**, des **agrégations** et des **calculs** pour donner du sens aux données.

---

### La connaissance (Knowledge)

La connaissance naît quand l'information est **interprétée pour tirer une conclusion ou formuler une décision**. Elle permet de comprendre les causes et anticiper les actions.

**Exemples** :
- *"Les ventes du produit X augmentent de 20 % après une campagne e-mailing."*
- *"Les ventes baissent quand la température descend sous 10°C."*

**Rôle du SID** : la couche de restitution (tableaux de bord, OLAP, reporting) permet de transformer l'information en connaissance.

---

### Du Knowledge à la décision

Le processus ne s'arrête pas à la connaissance : une fois la décision prise, de nouvelles actions sont menées, générant à leur tour de nouvelles données.

```
DATA → INFORMATION → KNOWLEDGE → DÉCISION → NOUVELLES DONNÉES → ...
```

Ce cycle est au cœur de la démarche de l'**entreprise pilotée par les données** (Data-Driven Organization).

**Exemple e-commerce complet** :

| Niveau          | Exemple                                                                       | Explication                                                                 |
|-----------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Data**        | *"Commande #45321, produit X, 150 unités, 14/10/2025"*                        | Faits bruts enregistrés dans le système transactionnel (OLTP)               |
| **Information** | *"Le produit X s'est vendu à 150 unités en octobre, contre 100 en septembre"* | Calculs et regroupements issus de l'entrepôt de données                     |
| **Knowledge**   | *"Les ventes du produit X augmentent après les campagnes e-mailing"*          | Conclusion permettant une action concrète : planifier une nouvelle campagne |

---

## Architecture d'un SID : les trois couches fondamentales

Un SID est structuré selon une architecture en **trois couches** qui séparent clairement les rôles :

1. **Couche d'alimentation** (intégration des données)
2. **Couche de stockage et calculs** (entrepôt de données)
3. **Couche de restitution** (analyse et visualisation)

Cette architecture garantit la **cohérence**, la **qualité** et la **traçabilité** de l'information, de la source brute jusqu'à la décision.

---

### Couche d'Alimentation (ou d'Intégration)

**Objectif** : collecter, nettoyer, transformer et charger les données provenant de multiples sources vers le système décisionnel.

C'est la première étape du SID, souvent la plus technique : elle consiste à faire parler entre elles des sources hétérogènes et à garantir la qualité des données intégrées.

#### Principes fondamentaux : ETL

| Étape              | Description                                                                                                                                                                                             |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Extraction**     | Récupérer des données depuis différents systèmes sources : ERP, CRM, bases de données transactionnelles, fichiers plats (CSV, Excel, XML, JSON), APIs, logs, capteurs IoT, etc.                         |
| **Transformation** | Normaliser des formats, vérifier et corriger des valeurs incohérentes, enrichir des données, contrôler la qualité (suppression des doublons, gestion des valeurs manquantes, typage correct des champs) |
| **Chargement**     | Insertion des données transformées dans la base de données décisionnelle. Peut être par batch (lots réguliers, ex : chaque nuit) ou en temps réel                                                       |

---

### Couche de Stockage et de Calcul

**Objectif** : centraliser, organiser et historiser les données pour permettre leur analyse rapide et fiable.

C'est la colonne vertébrale du SID, où les données nettoyées sont modélisées selon des schémas adaptés à l'analyse.

#### Composants

| Composant          | Description                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **Data Warehouse** | Entrepôt de données centralisé, structuré et optimisé pour la lecture                                                         |
| **Data Mart**      | Sous-ensemble du Data Warehouse, orienté vers un domaine métier spécifique (ventes, marketing, RH)                            |
| **Data Lake**      | Réservoir de données brutes et non structurées (logs, images, textes) utiles pour les analyses avancées, le ML ou le big data |
| **Cubes OLAP**     | Structures multidimensionnelles permettant une analyse rapide selon plusieurs axes : temps, produit, région, etc.             |

---

### Couche de Restitution (ou Présentation)

**Objectif** : permettre aux décideurs, managers et analystes de consulter, explorer et visualiser les données afin de prendre des décisions éclairées.

Cette couche est la vitrine du SID : c'est là que les utilisateurs interagissent avec les informations consolidées via des rapports automatisés, des tableaux de bord dynamiques, etc.

#### Bonnes pratiques de restitution

- **Adapter les indicateurs au métier** : chaque utilisateur doit accéder à des tableaux pertinents pour son activité
- **Assurer la cohérence des KPIs** : définir un dictionnaire commun des indicateurs pour éviter les incohérences
- **Garantir la sécurité et la gouvernance** : tous les utilisateurs ne doivent pas voir les mêmes données. On doit pouvoir tracer chaque donnée affichée depuis sa source
- **Favoriser la lisibilité** : préférer des visuels simples et homogènes (courbes, barres, cartes, heatmaps). Mettre en avant les tendances, pas la surcharge visuelle

---

## Résumé - Points clés

| #  | Concept              | À retenir                                                                                                         |
|----|----------------------|-------------------------------------------------------------------------------------------------------------------|
| 01 | **SID**              | Système d'Information Décisionnel : collecte, transforme, stocke et analyse les données pour la prise de décision |
| 02 | **OLTP / OLAP**      | OLTP = transactions temps réel, OLAP = analyses historiques                                                       |
| 03 | **Modèle D.I.K.**    | Data → Information → Knowledge → Décision                                                                         |
| 04 | **3 couches du SID** | Alimentation (ETL) → Stockage (Data Warehouse) → Restitution (BI, tableaux de bord)                               |
| 05 | **Data-Driven**      | Décisions basées sur les données plutôt que l'intuition                                                           |
