---
sidebar_position: 4
title: "Cours 3 - Features Engineering"
---

# Cours 3 - Features Engineering

## Introduction

Le **Features Engineering** (ingénierie des caractéristiques) consiste à travailler sur les données **avant** de créer un modèle.

:::tip

*"90% du travail consiste à nettoyer les données, les 10% restants à se maudire de ne pas avoir assez nettoyé."*

On estime le temps passé au Features Engineering à **40% du temps total** d'un projet Data Science.

:::

**Objectifs** :
1. **Comprendre** ses données
2. **Identifier** les features les plus importantes, pour éliminer les autres
3. **Créer** de nouvelles features qui simplifient l'apprentissage

**Actions possibles sur les données** :

| Action          | Description                                                          |
|-----------------|----------------------------------------------------------------------|
| **Corriger**    | Supprimer les données aberrantes ou les normaliser                   |
| **Compléter**   | Attribuer des valeurs aux données manquantes                         |
| **Augmenter**   | Inventer de nouveaux exemples à partir des existants                 |

**Exemple simple** : La variable "Longueur maison" mise au carré peut permettre une relation linéaire plus simple à modéliser pour estimer le prix.

---

## Partie I - Comprendre ses données

### Exploration des données

Avant tout modèle, il est essentiel de **comprendre et connaître ses données** :

- Afficher des **échantillons** (`head()`, `sample()`).
- Identifier les **données manquantes** (`isnull().sum()`).
- Identifier les **types des données** — les modèles n'acceptent que des données **numériques**.
- Analyser les **statistiques** sur les colonnes avec `describe()` :

| Statistique    | Description                              |
|----------------|------------------------------------------|
| Mean           | Moyenne                                  |
| Std            | Écart type (standard deviation)          |
| Min / Max      | Valeurs extrêmes                         |
| 25%, 50%, 75%  | Quartiles                                |

---

## Partie II - Prioriser les Features

### Importance des Features

On cherche l'**impact de chaque feature sur le label** :

| Type de feature | Méthode recommandée                                                                   |
|-----------------|---------------------------------------------------------------------------------------|
| **Numérique**   | Utiliser un modèle `RandomForest` et examiner la propriété `feature_importances_`    |
| **Catégorielle**| Analyser la distribution du label selon les valeurs de la feature                    |

:::tip

Ces techniques évaluent chaque feature **individuellement**, mais pas des combinaisons de features.

:::

### Corrélation

La corrélation mesure la relation linéaire entre deux variables.

**Limites** :
- Ne capte que les **relations linéaires**.
- Beaucoup de relations sont non linéaires → corrélation ≈ 0 alors que la dépendance est réelle.

### Information Mutuelle (MI)

Mesure plus générale que la corrélation :

```
MI(feature) = Entropy(label) - Entropy(label | feature)
```

**Interprétation** : "Dans quelle mesure la connaissance d'une feature réduit-elle l'incertitude sur le label ?"

| Valeur MI | Signification                                |
|-----------|----------------------------------------------|
| MI = 0    | Feature et label sont indépendants           |
| MI > 0    | La feature apporte de l'information          |
| MI = 2    | Grande valeur — feature très informative     |

**Formule de calcul** :

```
I(X;Y) = Σ p(x,y) × log( p(x,y) / (p(x) × p(y)) )
       = H(X) + H(Y) - H(X,Y)
```

:::tip

L'Information Mutuelle peut mesurer **tout type de relation** (linéaire ou non), contrairement à la corrélation.

:::

**Exemple** : La connaissance de l'"Aspect extérieur" d'une maison (Moyen / Correct / Bon / Excellent) permet de mieux estimer son prix → MI > 0.

Notebook de référence : `Cours2_ex3_ForestModel.ipynb`

---

## Partie III - Corriger ses données

### Filtrage des données aberrantes (Outliers)

- Suppression des **outliers** selon la nature des données.
- Visualisation avec `plot.box()` (boîte à moustaches).
- En **Big Data**, les erreurs sont souvent noyées dans la masse — le filtrage peut être inutile.

---

### Normalisation

Certains features peuvent avoir des **ordres de grandeur très différents**.

**Exemple** : Pour une maison :
- Nombre de chambres : 1 à 5
- Surface : 100 à 3 000 m²
- Prix de vente : 100 000 à 1 000 000 €

Sans normalisation, certains algorithmes **surpondèrent les variables à grande échelle**.

**Formule standard** :

```
x_norm = 2 × (x - x_moy) / (x_max - x_min)
```

*L'écart type peut remplacer `(x_max - x_min)`.*

:::danger

Ne pas oublier de **normaliser également les données en inférence**, avec les valeurs statistiques calculées sur le Training Set — pas sur les nouvelles données.

:::

---

### Distribution des labels

Pour un entraînement équilibré, les classes ou valeurs des labels doivent être **uniformément distribuées**.

**Cas problématiques** (classes rares) :
- Détection de fraudes
- Grains de beauté problématiques
- Détection de pannes
- ...

:::danger

Un modèle peut apprendre à "ignorer" la classe rare si elle est peu représentée — alors que c'est souvent **celle qui nous intéresse le plus**.

:::

**Solutions** :

| Stratégie                          | Description                                             |
|------------------------------------|---------------------------------------------------------|
| Regrouper des classes rares        | Fusionner plusieurs classes peu représentées            |
| Supprimer des exemples majoritaires | Sous-échantillonnage de la classe dominante            |
| Dupliquer des exemples rares       | Sur-échantillonnage de la classe minoritaire            |
| Prendre le logarithme              | Pour un problème de régression avec valeurs asymétriques|

---

## Partie IV - Compléter ses données (Données manquantes)

### Stratégies

Il n'existe **pas de solution idéale**. La première étape est de comprendre **pourquoi** les données manquent.

```
Données Manquantes
├── Suppression
└── Imputation
    ├── Série Temporelle
    └── Autres données
```

**Conditions pour la suppression** :
1. La proportion de données à supprimer est **faible**.
2. Les données manquantes sont **distribuées aléatoirement** (MAR — *Missing At Random*).

Dans les autres cas, il faut **imputer** (compléter) les valeurs manquantes.

---

### Suppression de données

| Type de suppression         | Description                                                              |
|-----------------------------|--------------------------------------------------------------------------|
| **Suppression de lignes**   | Cas le plus courant — supprimer les lignes avec valeurs manquantes       |
| **Suppression de colonnes** | Si > 60% de valeurs manquantes ET fortement corrélée à d'autres colonnes |
| **Pairwise deletion**       | Supprimer les lignes uniquement pour le calcul concerné                  |

---

### Imputation - Séries Temporelles

Pour les séries temporelles, tenir compte de :
- La **tendance** : progression dans le temps.
- La **saisonnalité** : comportement différent selon la période de l'année.

Si ni tendance ni saisonnalité → utiliser une grandeur statistique :
- Moyenne
- Médiane (autant de valeurs en dessous qu'au-dessus)
- Mode (valeur la plus fréquente)
- Aléatoire dans un intervalle bien choisi (ex. moyenne ± écart-type)

---

### Imputation - Données quelconques

| Type de donnée    | Stratégie d'imputation                                               |
|-------------------|----------------------------------------------------------------------|
| **Discrète (categorical)** | Créer une nouvelle classe "inconnu", ou utiliser le mode    |
| **Continue**       | Moyenne, médiane, ou valeur aléatoire                               |
| **Les deux**       | Utiliser une **régression** à partir de colonnes bien corrélées      |

---

## Partie V - Créer des Features

### Extraction de Features

Consiste à **déduire de nouvelles valeurs** à partir de features existantes.

Particulièrement adapté aux **textes**, mais aussi aux codes (numéro de téléphone, code postal...).

**Exemple** : Extraire le titre ("Mr.", "Miss.", "Master.") du nom d'un passager du Titanic :

| PassengerId | Name                                 | → Titre extrait |
|-------------|--------------------------------------|-----------------|
| 87          | Slocovski, Mr. Selman Francis        | Mr.             |
| 193         | Navratil, Master. Michel M           | Master.         |
| 816         | Heininen, Miss. Wendla Maria         | Miss.           |
| 369         | Aubart, Mme. Leontine Pauline        | Mme.            |

---

### Transformation / Création de Features

Générer de nouvelles features à partir d'une ou plusieurs features existantes :

| Technique              | Description                                                                     | Exemple                                             |
|------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------|
| **Ratio**              | Rapport entre deux valeurs                                                      | % panier / page produit (e-commerce)               |
| **Comptage conditionnel** | Compter des conditions                                                       | Nombre de pièces > 3                               |
| **Group & Transform**  | Statistique sur un groupe d'exemples                                            | Moyenne des ventes par région                      |
| **Combinaison**        | Combiner plusieurs features                                                     | `sibsp + parch` = taille de la famille à bord      |

---

### Création de Features par Clustering

Le **clustering** (apprentissage non supervisé) permet de regrouper les données en N clusters.

**Algorithme typique** : k-Means

1. Sur les données d'apprentissage, k-Means regroupe les exemples autour de N centroïdes.
2. Un nouveau feature est créé = **numéro du cluster** de chaque exemple.

**Alternative** : Créer N features, une par distance entre l'exemple et chaque centroïde.

```
Feature 1 : d1 (distance au centroïde 1)
Feature 2 : d2 (distance au centroïde 2)
Feature 3 : d3 (distance au centroïde 3)
```

---

## Partie VI - Augmenter ses données

### Principe de l'augmentation

On crée des **données fictives** à partir des données existantes pour :
- Augmenter le nombre d'exemples.
- Limiter le **sur-apprentissage**.

:::danger

Attention à ne pas créer des **biais** qui fausseraient les prédictions en inférence.

:::

---

### Augmentation d'images

On génère de nouvelles images en **déformant les images existantes** :
- Contraste
- Taille / redimensionnement
- Rotation
- Neural Style Transfer (appliquer un style à une image)

---

### Augmentation de sons

1. Générer un **spectrogramme** (distribution des fréquences dans le temps).
2. Créer de nouveaux spectrogrammes en **masquant** aléatoirement une plage de fréquences ou de temps.
3. Les sons peuvent ensuite être traités comme des **images**.

---

### Augmentation de textes

| Opération               | Exemple original            | Exemple généré                    |
|-------------------------|-----------------------------|-----------------------------------|
| Échange aléatoire       | Ce chien aboie le soir      | Ce chien **salade** le soir       |
| Insertion aléatoire     | Ce chien aboie le soir      | Ce chien **salade** aboie le soir |
| Suppression aléatoire   | Ce chien aboie le soir      | Ce chien le soir                  |
| Synonyme aléatoire      | Ce chien **aboie** le soir  | Ce chien **jappe** le soir        |
| Mot proche aléatoire    | Ce **chien** aboie le soir  | Ce **labrador** aboie le soir     |
| **Back-Translation**    | Traduire puis re-traduire   | Phrase sémantiquement similaire   |

---

## Résumé - Points clés

| #  | Concept                     | À retenir                                                                                    |
|----|-----------------------------|----------------------------------------------------------------------------------------------|
| 01 | **Features Engineering**    | 40% du temps d'un projet — comprendre, prioriser, corriger, compléter, créer, augmenter     |
| 02 | **Exploration**             | Toujours analyser les types, valeurs manquantes et statistiques avant de modéliser          |
| 03 | **Information Mutuelle**    | Mesure l'impact d'une feature sur le label — plus générale que la corrélation               |
| 04 | **Normalisation**           | Nécessaire pour certains algorithmes — normaliser aussi les données d'inférence              |
| 05 | **Classes rares**           | Risque que le modèle les ignore — sous/sur-échantillonner ou regrouper                      |
| 06 | **Données manquantes**      | Supprimer si MAR et peu nombreuses, sinon imputer (moyenne, médiane, régression)            |
| 07 | **Création de features**    | Extraction, ratio, group & transform, clustering — enrichissent l'information disponible    |
| 08 | **Augmentation de données** | Crée de la diversité pour réduire le sur-apprentissage — attention aux biais introduits     |