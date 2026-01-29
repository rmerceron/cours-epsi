---
sidebar_position: 4
title: "Cours 3 - Conception Orientée Objet"
---

# Cours 3 - Conception Orientée Objet

## Partie I - Les fondements de l'objet

La conception orientée objet est un pilier de l'ingénierie logicielle. Elle fournit un cadre pour organiser le code de manière **structurée, modulaire et réutilisable**, en s'appuyant sur des concepts clés tels que les classes, les objets, l'encapsulation, l'héritage et le polymorphisme.

Contrairement à une approche procédurale où l'on raisonne en termes de fonctions et de séquences d'instructions, l'approche objet invite à réfléchir en termes de **modèles du monde réel** : un utilisateur, un produit, une commande, un paiement, etc.

---

### Réutilisabilité

Un objet combine **état** (attributs) et **comportement** (méthodes). Cette encapsulation rend l'objet réutilisable dans plusieurs contextes.

**Exemple** : La classe `User` peut être utilisée à différents endroits :
- Dans un système de gestion de comptes (authentification)
- Dans un forum ou un réseau social (profil, amis)
- Dans une plateforme e-commerce (acheteur, vendeur)

:::tip

**Single Responsibility Principle** : chaque classe doit être petite et avoir une mission claire pour favoriser la séparation des responsabilités.

:::

---

### Cycle de vie itératif

**Exemple** : Développer un système de commande e-commerce.

- **Itération 1** : fonctionnalités de base
- **Itération 2** : ajouter la notion de commande
- **Itération 3** : introduire un service de paiement, validations, exceptions…

:::tip

La conception orientée objet se construit progressivement. On commence par un **MVP** (Minimum Viable Product), puis on enrichit par itérations.

:::

---

### Décomposition du système

Un système se décompose en **niveaux hiérarchiques** :

| Niveau                  | Description                       | Exemple                                  |
|-------------------------|-----------------------------------|------------------------------------------|
| **Système**             | Ensemble de sous-systèmes         | Auth, Catalogue, Paiement                |
| **Sous-système**        | Ensemble de composants / packages | `catalogue.models`, `catalogue.services` |
| **Composant / package** | Contient des classes et modules   |                                          |
| **Classe**              | Abstraction d'un concept métier   |                                          |

**Exemple d'arborescence Python :**

```
myapp/              # Système
├── catalogue/      # Sous-système
│   ├── __init__.py
│   ├── models.py       # Classes Product, Category
│   └── repository.py   # Accès aux données
├── orders/         # Sous-système
│   ├── __init__.py
│   ├── models.py       # Classes Order, OrderItem
│   └── service.py      # Logique métier
├── payments/       # Sous-système
│   ├── __init__.py
│   └── processor.py    # Classes PaymentProcessor, StripePayment
└── main.py
```

:::tip

Les fichiers `__init__.py` servent à indiquer que le dossier est un module importable en Python.

:::

---

### Niveaux d'abstraction

L'abstraction permet de cacher les détails d'implémentation pour se concentrer sur l'essentiel. On retrouve plusieurs niveaux, du plus global au plus concret :

1. **Niveau système** : vue d'ensemble du logiciel comme un tout. On ne se soucie pas des détails techniques, seulement des grandes fonctions.
   - *Exemple* : "Un système e-commerce" → il doit gérer authentification, catalogue, commandes, paiements.

2. **Niveau sous-système** : chaque sous-système est une brique fonctionnelle autonome (un package ou un composant).
   - *Exemple* : le module `payments/` s'occupe des paiements, le module `orders/` des commandes.

3. **Niveau classe** : on modélise les concepts métier sous forme de classes.
   - *Exemple* : `Product`, `Order`, `User`.

4. **Niveau interface / contrat** : on décrit le comportement attendu, sans préciser comment il est réalisé.
   - *Exemple* : une interface `PaymentProcessor` avec une méthode `pay(amount)`. Peu importe si derrière c'est Stripe, PayPal ou autre.

5. **Niveau implémentation concrète** : le code concret qui exécute la fonctionnalité.

---

## Partie II - Héritage et composition

### L'héritage

L'héritage permet de définir une **classe de base** (classe mère) qui contient des attributs et des méthodes communs, puis de créer des **classes dérivées** (classes filles) qui héritent de ces caractéristiques tout en pouvant :

- Les **réutiliser**
- Les **spécialiser** (ajout de comportements)
- Les **surcharger** (redéfinir certains comportements)

:::tip

L'héritage modélise une relation **"est-un"** (is-a).

:::

#### Avantages de l'héritage

- **Réutilisation de code** : la classe fille récupère les attributs et méthodes de la classe mère. Exemple : `Car` et `Truck` héritent de `brand` défini dans `Vehicle` → favorise le DRY.
- **Polymorphisme** : on peut utiliser une même méthode (`move`) qui se comporte différemment selon l'objet concret. Exemple : `Car.move()` ≠ `Truck.move()` mais le client peut appeler `move()` sans se soucier du type exact.
- **Hiérarchies claires** : utile pour représenter des catégories naturelles (ex. `Animal` → `Mammal` → `Dog`).

#### Limites et risques

- **Hiérarchies rigides** : une fois les classes fortement liées, il devient difficile de modifier la hiérarchie sans casser le code.
- **Couplage fort** : les classes filles dépendent étroitement de leur classe mère. Si la classe mère change, toutes les classes filles sont impactées.
- **Risque d'héritage abusif** : mauvaise modélisation. Par exemple `class Bird(Penguin)` — on se dit "tous les oiseaux volent" donc on met une méthode `fly()` dans `Bird`. Mais `Penguin` n'est pas un oiseau générique, c'est une exception qui ne vole pas. Le contrat attendu n'est pas respecté.

---

### Héritage vs Composition

|                 | Héritage              | Composition                  |
|-----------------|-----------------------|------------------------------|
| **Relation**    | "est-un" (is-a)       | "a-un" (has-a)               |
| **Exemple**     | `Dog` est un `Animal` | `Car` a un `Engine`          |
| **Couplage**    | Fort                  | Faible                       |
| **Flexibilité** | Moins flexible        | Plus flexible et maintenable |

**Quand utiliser quoi ?**

- **Héritage** : si la relation est vraiment "est-un" et qu'on veut bénéficier du polymorphisme.
- **Composition** : si la relation est "a-un" et qu'on veut limiter le couplage et favoriser la flexibilité.

---

## Partie III - Principes de base : encapsulation, cohésion, couplage

En conception orientée objet, construire de "bonnes classes" ne se limite pas à écrire du code qui fonctionne. Un bon design objet doit aussi être :

- **Robuste** (résiste aux évolutions)
- **Réutilisable** (évite de dupliquer du code)
- **Lisible et maintenable** (facile à comprendre par d'autres développeurs)

:::tip

Ces trois notions fonctionnent ensemble : l'encapsulation améliore la cohésion, la cohésion réduit naturellement le couplage, et un faible couplage rend l'architecture plus modulaire et évolutive.

:::

---

### Encapsulation

L'encapsulation consiste à **protéger l'état interne d'un objet** et à n'exposer que ce qui est nécessaire via une interface publique (méthodes, propriétés).

**Avantages :**

- Évite les incohérences (on ne modifie pas les attributs n'importe comment)
- Facilite la maintenance : si l'implémentation interne change, l'interface reste stable

**Exemple** : On doit gérer le stock d'un produit. Si on rend l'attribut `qty` public, n'importe qui peut le modifier n'importe comment → on peut avoir un stock négatif.

**Solution** : on protège l'attribut et on fournit des méthodes de contrôle.

- L'attribut `_qty` est caché (on ne le modifie pas directement)
- On expose seulement une méthode `adjust_stock()` qui applique des règles métier (ex. pas de stock négatif)
- Le système est plus robuste car on évite les incohérences

:::tip

**Sans encapsulation** : on peut trafiquer n'importe comment les données.
**Avec encapsulation** : on garde le contrôle et on impose des règles de cohérence.

:::

---

### Cohésion

La cohésion mesure dans quelles proportions les responsabilités d'une classe sont liées entre elles.

- **Haute cohésion** = une classe fait une seule chose claire (bonne pratique)
- **Faible cohésion** = une classe fait "tout et n'importe quoi" (mauvais design)

L'objectif est d'appliquer le **Single Responsibility Principle (SRP)** : chaque classe doit avoir une mission claire.

**Exemple :**

- **Faible cohésion** : la classe mélange UI, stockage et logique métier
- **Haute cohésion** : chaque classe a une responsabilité claire et unique

---

### Couplage

Le couplage mesure à quel point **une classe dépend d'une autre**.

- **Faible couplage** : les classes interagissent via des interfaces stables
- **Fort couplage** : une classe dépend directement d'une implémentation concrète → difficile à faire évoluer

**Exemple** : On veut envoyer des notifications aux utilisateurs. Si la classe `UserService` dépend directement d'une implémentation d'envoi d'email, on ne peut pas facilement envoyer un SMS ou une notification push sans modifier `UserService`.

**Solution** : on fait dépendre `UserService` d'une **abstraction / un contrat** (quelque chose qui "peut envoyer une notification"). On peut ensuite brancher Email, SMS, Push… sans rien changer à `UserService`.

---

### Synthèse

La conception orientée objet ne se limite pas à écrire des classes et des méthodes : c'est une façon de **penser le logiciel en termes de modèles du monde réel**.

À travers ses fondements (encapsulation, héritage, polymorphisme), ses bonnes pratiques (réutilisabilité, cohésion, faible couplage) et son approche incrémentale (itérations, décomposition en sous-systèmes), l'orienté objet fournit un cadre pour construire des systèmes **robustes, modulaires et évolutifs**.

:::tip

Un bon système orienté objet n'est pas celui qui fait tout, mais celui qui reste **simple à comprendre et à faire évoluer**.

:::
