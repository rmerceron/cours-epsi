---
sidebar_position: 2
title: "Cours 1 - Arbres de Décision & Random Forest"
---

# Cours 1 - Arbres de Décision & Random Forest

## Partie I - Arbre de Décision

### Définition

Un **arbre de décision** permet de classer des enregistrements par divisions hiérarchiques en sous-classes.

- Un **nœud** représente un sous-ensemble depuis la racine.
- Un **arc** représente une règle de partitionnement de la classe source.
- Un **attribut cible** (label) sert d'étiquette de classe, les autres permettant de partitionner.

**Exemple** :
![arbre_de_decisions.png](../../static/img/Datascience%20et%20ML/arbre_de_decisions.png)

---

### Construction d'un arbre

Pour construire un arbre de décision avec Scikit-Learn :

```python
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier

iris = load_iris()
tree_clf = DecisionTreeClassifier()
tree_clf.fit(iris.data, iris.target)
```

Notebook de référence : `cours1_ex1_constructionArbre.ipynb`

---

### Le paramètre `random_state`

- Permet d'obtenir **toujours le même résultat** d'un tirage aléatoire.
- Utile pour **comparer plusieurs exécutions** sans modifier les paramètres aléatoires.

```python
tree_clf = DecisionTreeClassifier(random_state=42)
```

---

### Anatomie d'un nœud

Chaque nœud de l'arbre contient :

| Élément                        | Description                                                                    |
|-------------------------------|--------------------------------------------------------------------------------|
| **Condition de partitionnement** | Ex. : `Longueur Pétale (cm) <= 2.45`                                         |
| **gini**                       | Mesure d'impureté (doit être minimisée)                                        |
| **samples**                    | Nombre total d'exemples dans ce nœud                                          |
| **value**                      | Population par classe : `[setosa, versicolor, virginica]`                     |
| **class**                      | Classe la plus probable                                                        |

**Exemple de prédiction** :

```python
ma_nouvelle_fleur = [2, 2, 5, 1.5]
print('Probabilités :', np.round(tree_clf.predict_proba([ma_nouvelle_fleur]), 2))
# → [[0.   0.91   0.09]]
print('Classe :', iris.target_names[tree_clf.predict([ma_nouvelle_fleur])])
# → ['versicolor']
```

---

### Mesure de pureté : Gini

La **formule de Gini** mesure l'impureté d'un nœud :

```
Gi = 1 - Σ (p_i,k)²   pour k = 1 à n
```

où `p_i,k` est la proportion de la classe `k` dans le nœud `i`.

- Si tous les membres sont de la même classe → **Gini = 0** (nœud pur)
- Plus le Gini est élevé, plus le nœud est impur

**Exemple** pour le nœud "versicolor" (value = [0, 49, 5], samples = 54) :

```
gini = 1 – [(0/54)² + (49/54)² + (5/54)²]
     = 1 – [0 + 0,907² + 0,093²]
     = 0,168
```

---

### Mesure de pureté : Entropie

L'entropie est une mesure alternative de l'impureté :

```
Hi = - Σ p_i,k × ln(p_i,k)   pour k = 1 à n
```

- Si X est parfaitement prévisible → **H(X) = 0**
- Plus X est imprévisible → H(X) est maximale

**Comparaison Gini vs Entropie** :

| Critère      | Gini                    | Entropie                       |
|--------------|-------------------------|--------------------------------|
| Calcul       | Plus rapide             | Un peu plus lent               |
| Résultat     | Légèrement biaisé       | Arbres légèrement mieux équilibrés |

---

### Algorithme CART

L'algorithme **CART** (*Classification And Regression Tree*) construit et entraîne l'arbre :

1. Pour chaque nœud, cherche une feature et un seuil qui **maximisent la pureté pondérée** des nœuds inférieurs.

```
Coût = (N_nd1 / N_total) × gini_nd1 + (N_nd2 / N_total) × gini_nd2
```

2. Recommence récursivement sur les nœuds générés.
3. L'hyperparamètre `max_features` limite le nombre de features testées à chaque nœud.

:::tip

La solution trouvée n'est pas forcément optimale, mais généralement **suffisamment bonne**.

:::

---

### Conditions d'arrêt

L'algorithme CART s'arrête quand il ne peut plus réduire l'impureté. On peut aussi forcer l'arrêt avec des hyperparamètres :

| Hyperparamètre           | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| `max_depth`              | Profondeur maximale de l'arbre                               |
| `min_samples_split`      | Nombre minimum d'échantillons pour diviser un nœud           |
| `min_samples_leaf`       | Nombre minimum d'échantillons dans une feuille               |
| `min_weight_fraction_leaf` | Fraction minimum du total qu'une feuille doit avoir        |
| `max_leaf_nodes`         | Nombre maximum de feuilles                                   |

:::danger

Sans condition d'arrêt, le **sur-apprentissage est quasi-certain**.

:::

---

### Données catégoriques

Les arbres de décision ne peuvent pas comparer directement des valeurs catégoriques. Il faut les **encoder** au préalable.

Deux encodeurs principaux :

**OrdinalEncoder** : transforme les catégories en entiers (risque : introduire un ordre artificiel)

```python
# Couleur → Code_Couleur
# Rouge → 1, Bleu → 2, Vert → 3
```

**OneHotEncoder** : crée une colonne binaire par catégorie (recommandé)

```python
# Couleur_Rouge | Couleur_Bleu | Couleur_Vert
#     1         |      0       |      0
#     0         |      1       |      0
```

```python
from sklearn.preprocessing import OneHotEncoder
# Notebook : cours1_OneHotEncoder.ipynb
```

---

### Spécificités des arbres de décision

| Avantage                         | Inconvénient                              |
|----------------------------------|-------------------------------------------|
| **Explicable** (contrairement aux ANN) | **Instable** : petite modification → arbre très différent |
| Pas besoin de normaliser les données | Fort risque de **sur-apprentissage**    |
| Capable de traiter la **régression** | Nombre de paramètres non défini à l'avance (modèle non paramétrique) |
| Très rapide en **inférence**     |                                           |

---

## Partie II - Random Forest

### Définition

Un modèle **Random Forest** est un regroupement d'arbres de décision, où chaque arbre est entraîné sur un sous-ensemble aléatoire des données **et** des features.

Variantes :
- **Random Forest classique** : bagging d'arbres + sous-ensemble aléatoire de features.
- **Extra-Trees** (*Extremely Randomized Trees*) : en plus, des seuils aléatoires sont appliqués.

---

### Spécificités du Random Forest

- Estimateurs Scikit-Learn : `RandomForestClassifier` et `RandomForestRegressor`.
- Paramètres : ceux des arbres de décision + paramètres de bagging.
- La propriété `feature_importances_` permet de **mesurer l'importance relative de chaque feature**.

**Exemple d'importance des features sur le dataset Iris** :

| Feature                  | Importance |
|--------------------------|------------|
| Longueur Sépale (cm)     | 11%        |
| Largeur Sépale (cm)      | 2%         |
| Longueur Pétale (cm)     | 44%        |
| Largeur Pétale (cm)      | 42%        |

```python
from sklearn.ensemble import RandomForestClassifier

rf_clf = RandomForestClassifier(random_state=42)
rf_clf.fit(X_train, y_train)
print(rf_clf.feature_importances_)
# Notebook : cours1_ex3_ForestModel.ipynb
```

---

## TP - Datasets pratiques

### Dataset Champignons (Mushrooms)

- Source : [Kaggle - Mushroom Classification](https://www.kaggle.com/datasets/uciml/mushroom-classification)
- 21 features de type catégoriques
- Label : Toxique / Comestible
- Notebook : `TP1_classification_champignons.ipynb`

### Dataset Online News Popularity

- Objectif : Prévoir la viralité d'un texte en se basant sur son analyse et son thème.
- Notebook : `TP1_classification_viralite.ipynb` (TP facultatif)

---

## Résumé - Points clés

| #  | Concept                     | À retenir                                                                          |
|----|-----------------------------|------------------------------------------------------------------------------------|
| 01 | **Arbre de décision**       | Partitionne les données hiérarchiquement selon des règles sur les features         |
| 02 | **Gini / Entropie**         | Mesurent l'impureté d'un nœud — l'algorithme cherche à les minimiser              |
| 03 | **Algorithme CART**         | Cherche feature + seuil optimal à chaque nœud ; s'arrête selon hyperparamètres    |
| 04 | **Sur-apprentissage**       | Contrôler avec `max_depth`, `min_samples_leaf`, etc.                               |
| 05 | **OneHotEncoder**           | Encoder les features catégoriques avant d'entraîner un arbre                      |
| 06 | **Random Forest**           | Combinaison d'arbres → plus robuste, moins de sur-apprentissage                    |
| 07 | **feature_importances_**    | Propriété utile pour comprendre quelles features influencent le plus le modèle     |