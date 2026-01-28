---
sidebar_position: 4
title: "Cours 3 - Exigences et cahier des charges"
---

# Cours 3 - Exigences et cahier des charges

**Objectif** : Apprendre à rédiger des exigences fonctionnelles et techniques, et comprendre la structure d'un cahier des charges.

---

## Partie I - Rédaction des exigences fonctionnelles et techniques

### Exigences fonctionnelles

#### Définition

Fonctionnalités que le système doit offrir pour répondre aux besoins des utilisateurs. Elles décrivent **quoi** le système doit faire.

**Exemple** : Permettre une recherche de documents par mots-clés dans une GED (Gestion Électronique de Documents).

#### Rédaction sous forme de User Story

Format standard :

:::tip

« En tant que **[ACTEUR]**, je souhaite **[ACTION]** pour **[BÉNÉFICE]** »

:::

#### Attributs des exigences fonctionnelles

- **Claires** : compréhensibles sans ambiguïté
- **Spécifiques** : décrivent précisément la fonctionnalité
- **Testables** : on peut vérifier si elles sont satisfaites

---

### Exigences techniques

#### Définition

Contraintes techniques à respecter pour mettre en œuvre le système. Elles décrivent **comment** le système doit fonctionner.

**Exemple** : La recherche doit s'exécuter en moins de 3 secondes.

#### Attributs des exigences techniques

- **Mesurables** : quantifiables avec des critères précis
- **Réalisables** : techniquement possibles à implémenter
- **Compatibles** : cohérentes avec l'environnement existant

---

### Comparaison exigences fonctionnelles vs techniques

|               | Exigences fonctionnelles        | Exigences techniques                    |
|---------------|---------------------------------|-----------------------------------------|
| **Question**  | *Quoi* doit faire le système ?  | *Comment* le système doit fonctionner ? |
| **Attributs** | Claires, spécifiques, testables | Mesurables, réalisables, compatibles    |
| **Exemple**   | Recherche par mots-clés         | Temps de réponse < 3 secondes           |

---

## Partie II - Le cahier des charges

### Un peu d'histoire

- **Antiquité** : premières apparitions
- **Révolution industrielle** (XVIIIe - XIXe siècles) : formalisation
- **XXe siècle** : adaptation dans l'industrie et l'ingénierie
- **Années 60-70** : extension aux projets informatiques

### Définition

Document qui décrit de manière **claire et détaillée** les **besoins, objectifs, et contraintes** d'un projet.

Il sert de **guide** pour toutes les parties prenantes en précisant :
- **Quoi faire** (fonctionnalités)
- **Comment le faire** (exigences techniques)

Il permet d'assurer une **compréhension commune** et une bonne **exécution** du projet.

### Objectif

- **Clarifier les attentes** en matière de fonctionnalités (versionnage, accès, sécurité)
- **Fixer les limites** du projet en termes de périmètre, budget et délais

### Pourquoi un cahier des charges ?

Assurer une **vision commune** entre :
- Le **client** (entreprise)
- Les **utilisateurs finaux**
- L'**équipe de développement**

---

## Partie III - Structure et sections clés du cahier des charges

### Les 8 sections principales

1. **Contexte et présentation** - Description du projet et de son environnement
2. **Objectifs et périmètres** - Ce que le projet doit accomplir et ses limites
3. **Parties prenantes et rôles** - Qui est impliqué et avec quelle responsabilité
4. **Besoins fonctionnels sous forme d'US** - User Stories décrivant les fonctionnalités attendues
5. **Exigences techniques** - Contraintes et spécifications techniques
6. **Contraintes et limites** - Restrictions de budget, délais, réglementation, etc.
7. **Critères de validation et tests** - Comment vérifier que le produit répond aux attentes
8. **Livrables** - Ce qui doit être livré à la fin du projet

---

## Partie IV - Bonnes pratiques

### Conseils

- **Clarté et concision** pour des exigences complexes
- **Organisation logique** du document
- **Précision des exigences** pour éviter les ambiguïtés

### Erreurs à éviter

- Exigences vagues ou non mesurables
- Manque de structure dans le document
- Oubli de sections clés (contraintes, critères de validation)

---

## Résumé - Points clés

| #  | Concept                | À retenir                                                                                                                                                                                                      |
|----|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 01 | **Exigences**          | Fonctionnelles (*quoi* : claires, spécifiques, testables) et techniques (*comment* : mesurables, réalisables, compatibles). Format User Story : « En tant que [ACTEUR], je souhaite [ACTION] pour [BÉNÉFICE] » |
| 02 | **Cahier des charges** | Document clair et détaillé décrivant besoins, objectifs et contraintes. Assure une vision commune entre client, utilisateurs et équipe de développement                                                        |
| 03 | **Structure**          | 8 sections clés : contexte, objectifs, parties prenantes, besoins fonctionnels (US), exigences techniques, contraintes, critères de validation, livrables                                                      |
| 04 | **Bonnes pratiques**   | Clarté et concision, organisation logique, précision des exigences                                                                                                                                             |
