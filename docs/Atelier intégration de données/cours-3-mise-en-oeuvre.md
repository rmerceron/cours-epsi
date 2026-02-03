---
sidebar_position: 4
title: "Cours 3 - Mise en oeuvre pratique"
---

# Cours 3 - Mise en œuvre pratique

## Proposition d'outils gratuits

Pour mettre en pratique les concepts d'intégration de données, voici deux outils open source recommandés :

| Outil              | Usage                      | Description                                                                                  |
|--------------------|----------------------------|----------------------------------------------------------------------------------------------|
| **Apache Hop**     | ETL pipelines et workflows | Interface graphique pour concevoir des pipelines de données. Fork moderne de Kettle/Pentaho. |
| **Apache Airflow** | Workflow et automatisation | Orchestrateur de tâches pour planifier et monitorer des pipelines de données.                |

---

## TP : Label OpenSound

### Contexte

Le label **OpenSound** souhaite comprendre quelles sont les **tendances musicales actuelles** selon les genres et la popularité des artistes, afin d'orienter ses décisions marketing et ses signatures d'artistes.

Les données proviennent de **sources publiques** (datasets Kaggle, API musicales libres...) et serviront à alimenter un mini SID pour explorer :

- Les artistes et chansons les plus populaires
- Les critères récurrents permettant d'orienter les décisions du label (origine, style, époque, durée, etc.)

---

### Objectifs du TP

1. **Créer un ETL** permettant de charger les données dans le SID
2. **Automatiser le pipeline** de données
3. **Créer un dashboard** avec les données pertinentes pour le label

---

### Questions métier à explorer

Le dashboard devra permettre de répondre aux questions suivantes :

| Question                                                             | Indicateurs associés                              |
|----------------------------------------------------------------------|---------------------------------------------------|
| **Quels genres et artistes dominent le classement ?**                | Top genres, top artistes par popularité           |
| **Comment la durée ou le contenu explicite impacte la popularité ?** | Corrélation durée/popularité, explicit/popularité |
| **Quelles sont les décennies les plus "populaires" ?**               | Popularité moyenne par décennie                   |
| **Quelles autres questions vous semblent pertinentes ?**             | À définir selon l'analyse exploratoire            |

---

### Livrables attendus

:::info Livrables

1. **Pipeline ETL fonctionnel** (Apache Hop ou script Python)
2. **Automatisation** du pipeline (Airflow ou cron)
3. **Dashboard interactif** avec les KPIs pertinents pour le label

:::

---

## Ressources pour le TP

### Datasets suggérés

- [Spotify Tracks Dataset](https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset) sur Kaggle
- [Million Song Dataset](http://millionsongdataset.com/)
- APIs publiques : Spotify Web API, Last.fm API

### Documentation des outils

- [Apache Hop Documentation](https://hop.apache.org/manual/latest/)
- [Apache Airflow Documentation](https://airflow.apache.org/docs/)

---

## Résumé - Points clés

| #  | Concept            | À retenir                                                       |
|----|--------------------|-----------------------------------------------------------------|
| 01 | **Apache Hop**     | Outil ETL graphique pour concevoir des pipelines                |
| 02 | **Apache Airflow** | Orchestrateur pour automatiser et planifier les traitements     |
| 03 | **TP OpenSound**   | Cas pratique : analyser les tendances musicales via un mini SID |
| 04 | **Dashboard**      | Restitution visuelle des KPIs pour la prise de décision         |
