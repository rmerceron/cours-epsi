---
sidebar_position: 3
title: "Cours 2 - Modélisation des processus métiers"
---

# Cours 2 - Modélisation des processus métiers

**Objectif** : Apprendre à créer, interpréter et utiliser des diagrammes de flux pour modéliser des processus métiers et systèmes informatiques.

---

## Partie I - Les diagrammes de flux

### Définition

Un **diagramme de flux** est une représentation graphique des étapes d'un processus ou d'un système, illustrant la circulation des informations et des actions entre différentes entités.

### Utilité

Ils permettent de :
- **Visualiser** un processus
- **Identifier les étapes clés**
- **Repérer** les potentiels goulots d'étranglement ou inefficacités

### Un peu d'histoire

- Première trace et développements anciens
- Formalisation par **Frank et Lilian Gilreth**
- Adoption générale et extension aux projets industriels

---

## Partie II - Symboles et notations

### Les symboles de base

| Symbole               | Forme             | Signification                            |
|-----------------------|-------------------|------------------------------------------|
| **Start / End**       | Ovale             | Début ou fin du processus                |
| **Process / Action**  | Rectangle         | Une étape, une action à réaliser         |
| **Decision**          | Losange (Diamond) | Point de décision (Oui/Non)              |
| **Input/Output Data** | Parallélogramme   | Données en entrée ou en sortie           |
| **Arrow**             | Flèche            | Direction du flux, lien entre les étapes |

:::tip

Ces symboles sont standards et doivent être respectés pour garantir la lisibilité du diagramme.

:::

---

## Partie III - Types de diagrammes

### Diagramme de flux de processus

- Utilisé pour illustrer des **processus métiers**
- Exemple : processus de validation de congés dans une entreprise, traitement d'une commande

**Exemple de flux** : Début → Création de la commande → Commande entreprise ? (Oui: traiter commande entreprise → Vérifier stock / Non: traiter la commande) → Envoi express ? (Oui/Non: envoyer par courrier) → Confirmer envoi → Fin

### Diagramme de flux de système

- Illustre les **composants d'un système informatique** et leurs interactions
- Exemples : structure des bases de données, interaction entre serveurs et clients

**Exemple de flux** : Client → Commande → Commander un repas → Cuisine / Inventaire → Liste de commande → Faire un rapport → Manager / Audit de commande → Fournisseur

|              | Diagramme de processus        | Diagramme de système              |
|--------------|-------------------------------|-----------------------------------|
| **Objectif** | Modéliser un processus métier | Modéliser un système informatique |
| **Focus**    | Étapes et décisions           | Composants et interactions        |
| **Exemple**  | Validation de congés          | Architecture client-serveur       |

---

## Partie IV - Étapes de création d'un diagramme

### Les 5 étapes

1. **Identification** du processus ou système à modéliser
2. **Définition** des étapes et des points de décision
3. **Choix des symboles** et des relations entre les étapes
4. **Création du diagramme** en utilisant un outil
5. **Validation** du diagramme avec les parties prenantes

---

## Partie V - Bonnes pratiques et erreurs courantes

### Bonnes pratiques

- **Utiliser des symboles standards** pour faciliter la compréhension
- **Garder une structure logique** et éviter les diagrammes trop complexes
- **Numéroter les étapes** pour simplifier le suivi

### Erreurs courantes

- **Mélanger trop de types de symboles** → perte de lisibilité
- **Oublier d'indiquer le début et la fin** du processus
- **Trop détailler les sous-processus** dans un même diagramme → préférer les découper en diagrammes séparés

---

## Résumé - Points clés

| #  | Concept               | À retenir                                                                                                            |
|----|-----------------------|----------------------------------------------------------------------------------------------------------------------|
| 01 | **Diagramme de flux** | Représentation graphique des étapes d'un processus (définition, utilité, exemples)                                   |
| 02 | **Création**          | Les symboles standards (ovale, rectangle, losange, parallélogramme, flèche) pour construire un diagramme             |
| 03 | **Bonnes pratiques**  | Symboles standards, structure logique, numérotation. Éviter le mélange de symboles, l'oubli début/fin, le sur-détail |
