---
sidebar_position: 1
title: "Introduction"
---

# Introduction à la Data Science & ML

## Présentation du module

Le module comprend **un cours et deux ateliers** :

- **Data Science** : utiliser des algorithmes de Machine Learning simples, application à la reconnaissance de champignons, traitement préalable des données (projet Titanic).
- **Atelier Fouille de données** : théorie du Machine Learning, réseaux de neurones.
- **Atelier Big Data AI** : analyse non supervisée, représentation de données.

**Répartition** : 1/3 cours, 2/3 TP. Les TPs sont notés (5h de FOAD après chaque cours).

**Philosophie** :
- Philosophie / Éthique : < 1%
- Fondements Mathématiques : 10% (pas d'évaluation)
- Ingénierie : ~90%

---

## Signalétique du cours

| Signalétique              | Signification                                                        |
|---------------------------|----------------------------------------------------------------------|
| Sans signalétique         | Explication / illustration, pas indispensable à mémoriser            |
| **À connaître absolument** | Nécessaire pour la suite du cours et les TPs                        |
| Optionnel                 | Explications supplémentaires pour ceux que ça intéresse              |
| Piège                     | Erreur à éviter en TP                                                |

---

## Types de modèles IA

Un modèle IA fournit des **prévisions**, des **détections** ou des **classifications** sur une situation. Pour cela, il se base soit sur :

- Des **règles** : programmation par contraintes, BRMS, algorithmes génétiques, réseaux bayésiens, arbres de décision.
- Des **exemples** : Machine Learning (réseaux de neurones, modèles de forêt).

![modeles_IA_types.png](../../static/img/Datascience%20et%20ML/modeles_IA_types.png)

![modeles_IA_types_2.png](../../static/img/Datascience%20et%20ML/modeles_IA_types_2.png)

| Approche         | Exemples                                         | Caractéristiques         |
|------------------|--------------------------------------------------|--------------------------|
| Règles           | BRMS, arbres de décision, réseaux bayésiens      | Explicable               |
| Machine Learning | Réseaux de neurones, Random Forest               | Boîte noire ou explicable|

:::tip Explicabilité

Certains modèles sont **explicables** (on comprend pourquoi ils font une prédiction), d'autres sont des **boîtes noires**. L'arbre de décision est explicable ; les réseaux de neurones ne le sont généralement pas.

:::

---

## Apprentissage et Inférence

- **Apprentissage** : faire apprendre au programme comment traiter un problème, à partir de données.
- **Inférence** : questionner le programme entraîné pour obtenir une prédiction sur de nouvelles données.

![apprentissage_inference.png](../../static/img/Datascience%20et%20ML/apprentissage_inference.png)

### Apprentissage supervisé

On fournit une **étiquette (label)** pour chaque ligne de données d'entrainement. Le modèle apprend la correspondance entre les **features** (caractéristiques) et le **label** (résultat attendu).

**Exemple** : Classification d'animaux (éléphant / souris) à partir de features visuelles (3 valeurs par pixel).

![apprentissage_supervise.png](../../static/img/Datascience%20et%20ML/apprentissage_supervise.png)

---

## Types de Features

| Type de feature         | Description                                          | Exemple                          |
|-------------------------|------------------------------------------------------|----------------------------------|
| **Numérique**           | Valeur numérique continue                            | Le salaire d'une personne        |
| **Discrète (categorical)** | Appartient à une liste de valeurs possibles       | Le pays, la classe d'un passager |

:::tip

Les features discrètes nécessitent généralement un **traitement préalable** (encodage) avant d'être utilisées dans un modèle.

:::

---

## Outils principaux

### Python

- Langage interprété, orienté objet, dynamiquement typé.
- N°1 à l'indice TIOBE depuis 2020.
- Langage des Data Scientists, mais aussi scripting, web…
- Nombreuses bibliothèques souvent implémentées en C++ pour la performance.
- Spécificité syntaxique : **l'indentation a un sens**.

### NumPy

- Bibliothèque pour manipuler des **matrices** et **tableaux multidimensionnels** (tenseurs).
- Fonctions mathématiques opérant sur ces tableaux.
- Sert de format à de nombreuses autres bibliothèques : SciPy, matplotlib, scikit-learn…

### Pandas

- Bibliothèque Python de **manipulation de données**.
- Objets principaux : `DataFrame` (2D) et `Serie` (1D).
- Peut être vu comme un tableau NumPy avec un index et des noms de colonnes.

![Numpy-Pandas.png](../../static/img/Datascience%20et%20ML/Numpy-Pandas.png)

### Scikit-Learn (sklearn)

- Boîte à outils Python pour le **Machine Learning**, créée en France (INRIA).
- Intègre de nombreux algorithmes IA (ne fonctionne pas sur GPU).
- **API standardisée** : objets `Classifier` et `Regressor` avec méthodes `fit()`, `predict()`.
- Outils de préparation de données, combinaison et évaluation de modèles.

### Frameworks Deep Learning

Deux frameworks principaux pour les réseaux de neurones :

| Framework         | Créateur         |
|-------------------|------------------|
| **TensorFlow**    | Google AI        |
| **PyTorch**       | Meta (Facebook) AI |

Le cours utilise **PyTorch** (convergence des deux frameworks observée).
![framemorks.png](../../static/img/Datascience%20et%20ML/framemorks.png)

### Jupyter Notebook

- Environnement de développement **basé sur le web**.
- Supporte plus de 40 langages.
- Disponible via extension VS Code ou en ligne (**Google Colab**).

---

## Démarrage avec Google Colab

1. Se rendre sur [https://colab.research.google.com](https://colab.research.google.com) et se connecter avec un compte Google.
2. Aller dans **File → Open Notebook**.
3. Choisir l'onglet **GitHub**, entrer le compte `jch44`.
4. Choisir le repository `jch44/EPSI_I1`, sélectionner le notebook souhaité.
5. Enregistrer une copie dans Drive (**File → Enregistrer une copie dans Drive**).

---

## Dataset Iris

Dataset de référence utilisé en introduction :

- 50 exemples pour chaque type d'iris (3 classes).
- Disponible dans Scikit-Learn : `sklearn.datasets.load_iris()`.
- 4 features : longueur/largeur des sépales et pétales.

---

## Résumé - Points clés

| #  | Concept                    | À retenir                                                                    |
|----|----------------------------|------------------------------------------------------------------------------|
| 01 | **Modèles IA**             | Deux grandes approches : par règles (explicable) ou par exemples (ML)        |
| 02 | **Apprentissage supervisé**| On fournit des labels à l'entraînement ; le modèle généralise en inférence   |
| 03 | **Features**               | Numériques (directement utilisables) ou catégoriques (nécessitent un encodage)|
| 04 | **Outils**                 | Python + NumPy + Pandas + Scikit-Learn + Jupyter = stack Data Science standard|