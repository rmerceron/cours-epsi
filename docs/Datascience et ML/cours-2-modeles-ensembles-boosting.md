---
sidebar_position: 3
title: "Cours 2 - Modèles d'ensemble & Boosting"
---

# Cours 2 - Modèles d'ensemble & Boosting

## Partie I - Modèles d'ensemble

### Vocabulaire

| Terme            | Description                                                           |
|------------------|-----------------------------------------------------------------------|
| **Modèle / Estimateur** | Un apprentissage particulier                                  |
| **Classifier**   | Estimateur pour la classification                                     |
| **Regressor**    | Estimateur pour la régression                                         |

Dans Scikit-Learn, la plupart des modèles existent en version `Classifier` et `Regressor`.

---

### Principe des méthodes d'ensemble

:::tip Sagesse des foules

Les meilleurs résultats sont obtenus en **combinant plusieurs estimateurs indépendants**. Le résultat d'ensemble surpasse généralement le meilleur modèle individuel.

:::

Une combinaison de nombreux **estimateurs faibles** (à peine meilleurs que le hasard) permet d'obtenir un **estimateur fort**.

**Exemple mathématique** avec des estimateurs ayant 51% de précision :
- 1 000 estimateurs indépendants → **75%** de probabilité de bonne réponse
- 10 000 estimateurs indépendants → **97%** de probabilité de bonne réponse

*Conséquence de la loi des grands nombres.*

:::tip

Pour maximiser l'effet, il faut des modèles **aussi indépendants que possible** — privilégier des modèles de types différents.

:::

---

### Vote « Hard »

Le **diagnostic majoritaire** parmi les différents modèles est retenu.

```
DATA → [Estimateur 1] → classe A
     → [Estimateur 2] → classe B
     → [Estimateur 3] → classe A
     → [Estimateur 4] → classe A
     → [Estimateur 5] → classe B
     → Résultat : classe A (majorité)
```

---

### Vote « Soft »

Le **diagnostic dont la probabilité moyenne est maximale** est retenu.

```
Modèle 1 → P(A) = 0,9,  P(B) = 0,1
Modèle 2 → P(A) = 0,4,  P(B) = 0,6
Modèle 3 → P(A) = 0,45, P(B) = 0,55
Modèle 4 → P(A) = 0,8,  P(B) = 0,2
Modèle 5 → P(A) = 0,2,  P(B) = 0,8
→ Moyenne P(A) = 0,55, Moyenne P(B) = 0,45
→ Résultat : classe A
```

---

### Stacking

Au lieu d'un vote, on **empile un autre estimateur** qui prend en entrée les prédictions des modèles de base.

:::tip

Le stacking est souvent décrit comme "la formule magique pour gagner sur Kaggle".

:::

---

### Implémentation Scikit-Learn

```python
from sklearn.ensemble import VotingClassifier, StackingClassifier

# Vote Hard ou Soft
voting_clf = VotingClassifier(
    estimators=[('lr', log_reg), ('rf', random_forest), ('svc', svm_clf)],
    voting='soft'  # ou 'hard'
)

# Stacking
stacking_clf = StackingClassifier(
    estimators=[('lr', log_reg), ('rf', random_forest)],
    final_estimator=LogisticRegression()
)
```

**Normalisation préalable** pour certains modèles :

```
x_norm = 2 × (x - x_moy) / (x_max - x_min)
```

*L'écart type peut remplacer `(x_max - x_min)`.*

Notebook de référence : `cours2_ex4_VotingClassifiers.ipynb`

---

## Partie II - Bagging & Pasting

### Définition

Un seul type de modèle est utilisé, mais entraîné **plusieurs fois sur des sous-ensembles de données différents**.

| Méthode     | Description                                                                   |
|-------------|-------------------------------------------------------------------------------|
| **Bagging** | Tirage **avec remise** (bootstrap) — un exemple peut apparaître plusieurs fois |
| **Pasting** | Tirage **sans remise** — chaque exemple n'est utilisé qu'une fois par modèle  |

:::tip

Un modèle **Random Forest** est un Bagging d'arbres de décision avec un sous-ensemble aléatoire de features.

:::

**Agrégation des résultats** :
- Classification : résultat **majoritaire**
- Régression : **moyenne** des prédictions

---

### Avantages du Bagging

- **Biais équivalent** à un seul modèle.
- **Variance diminuée** : moins de sur-apprentissage.
- Possibilité d'évaluer chaque sous-modèle avec les données **Out-of-the-Bag (OOB)** — les exemples non utilisés pendant l'entraînement de cet arbre.

---

### Implémentation Scikit-Learn

```python
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier

bag_clf = BaggingClassifier(
    base_estimator=DecisionTreeClassifier(),
    n_estimators=500,
    max_samples=100,
    bootstrap=True,   # True = Bagging, False = Pasting
    oob_score=True,   # Active le calcul du score OOB
    random_state=42
)
bag_clf.fit(X_train, y_train)
print(bag_clf.oob_score_)  # Score sur les données out-of-the-bag
```

Notebook de référence : `cours2_ex5_Bagging.ipynb`

---

### Moon Dataset

Dataset synthétique utilisé pour les TP de Bagging :

```python
from sklearn.datasets import make_moons

X, y = make_moons(
    n_samples=100,   # Nombre d'exemples
    shuffle=True,    # Mélange des exemples
    noise=0.3,       # Bruit ajouté
    random_state=42  # Reproductibilité
)
```

---

## Partie III - Boosting

### Principe

Le **Boosting** est une méthode d'ensemble d'estimateurs faibles traités **séquentiellement**. Chaque estimateur essaie de **corriger les erreurs du précédent**.

:::danger

Les méthodes de Boosting **ne sont pas parallélisables** (contrairement au Bagging).

:::

| Type de Boosting        | Principe                                                              |
|-------------------------|-----------------------------------------------------------------------|
| **AdaBoost**            | Surpondère les exemples les plus erronés à chaque itération          |
| **Gradient Boosting**   | Modélise le résidu (l'erreur) du modèle précédent                    |

---

### Adaptative Boosting (AdaBoost)

À chaque itération :
1. L'algorithme **surpondère les points les plus erronés**.
2. On applique une **moyenne pondérée par la précision** aux modèles de chaque itération.

```python
from sklearn.ensemble import AdaBoostClassifier

adaboost_clf = AdaBoostClassifier(
    n_estimators=200,
    random_state=42
)
adaboost_clf.fit(X_train, y_train)
```

---

### Gradient Boosting

À chaque itération, l'algorithme entraîne un nouveau modèle pour prédire le **résidu** (l'erreur) du modèle précédent.

```python
from sklearn.tree import DecisionTreeRegressor

# Étape 1 : premier arbre
tree_reg1 = DecisionTreeRegressor(max_depth=2, random_state=42)
tree_reg1.fit(X, y)

# Étape 2 : entraîner sur le résidu
y2 = y - tree_reg1.predict(X)
tree_reg2 = DecisionTreeRegressor(max_depth=2, random_state=42)
tree_reg2.fit(X, y2)

# Étape 3 : entraîner sur le nouveau résidu
y3 = y2 - tree_reg2.predict(X)
tree_reg3 = DecisionTreeRegressor(max_depth=2, random_state=42)
tree_reg3.fit(X, y3)

# Prédiction finale : somme des modèles
y_pred = sum(tree.predict(X_new) for tree in (tree_reg1, tree_reg2, tree_reg3))
```

---

### Implémentation Scikit-Learn & XGBoost

```python
from sklearn.ensemble import GradientBoostingClassifier

gbes = GradientBoostingClassifier(
    n_estimators=500,
    n_iter_no_change=5,   # Early stopping : arrêt si pas d'amélioration
    tol=0.0001,           # Seuil d'amélioration minimal
    random_state=0
)
gbes.fit(X_train, y_train)
score = gbes.score(X_dev, y_dev)
```

:::tip XGBoost

La librairie **XGBoost** (implémentation optimisée du Gradient Boosting) est en tête des compétitions Kaggle pour les données tabulaires.

:::

**Paramètre `learning_rate`** : réduit l'importance de chaque itération — permet un meilleur contrôle du sur-apprentissage.

Notebook de référence : `cours4_ex6_Boosting.ipynb`

---

## Dataset de référence - Breast Cancer

- **569 exemples** d'amas de cellules : 212 malins, 357 bénins.
- **30 features** issus d'observations d'images (concavité, taille, couleur…).
- Utilisé pour les exemples de Voting et Stacking.

---

## Résumé - Points clés

| #  | Concept                     | À retenir                                                                                  |
|----|-----------------------------|-------------------------------------------------------------------------------------------|
| 01 | **Méthodes d'ensemble**     | Combiner plusieurs estimateurs surpasse le meilleur modèle individuel (sagesse des foules) |
| 02 | **Vote Hard**               | Résultat majoritaire entre les modèles                                                    |
| 03 | **Vote Soft**               | Probabilité moyenne maximale entre les modèles                                             |
| 04 | **Stacking**                | Un méta-modèle combine les prédictions des modèles de base                                 |
| 05 | **Bagging**                 | Même modèle, sous-ensembles différents avec remise → réduit la variance                   |
| 06 | **Pasting**                 | Comme le Bagging mais sans remise                                                          |
| 07 | **OOB Score**               | Évaluation gratuite sur les données non utilisées pendant l'entraînement                   |
| 08 | **AdaBoost**                | Séquentiel : insiste sur les exemples erronés                                              |
| 09 | **Gradient Boosting**       | Séquentiel : chaque modèle corrige le résidu du précédent                                  |
| 10 | **XGBoost**                 | Implémentation optimisée de Gradient Boosting — référence sur données tabulaires           |