---
sidebar_position: 3
title: "Cours 2 - Méthodologies et modèles"
---

# Cours 2 - Méthodologies et modèles

## Partie I - Le modèle de menace (Threat Modeling)

### Objectifs du modèle de menace

- **Identifier les actifs** : quelles informations, données ou services critiques doivent être protégés ?
- **Identifier les acteurs malveillants** : qui pourrait essayer de compromettre ces actifs ? (utilisateurs internes, cybercriminels, compétiteurs...)
- **Identifier les vulnérabilités** : quelles failles ou points faibles pourraient être exploités ? (authentification, stockage, autorisations...)
- **Évaluer les impacts et les risques** : quels seraient les impacts d'une attaque réussie ? Prioriser par gravité.
- **Définir des mesures d'atténuation** : quelles contre-mesures mettre en place ? (chiffrement, authentification multifactorielle, audits...)

### Phases de la modélisation des menaces

1. **Définition de la portée** : déterminer quel aspect du système protéger (application, serveur, réseau)
2. **Identification des menaces** : utiliser des outils comme STRIDE pour répertorier les menaces
3. **Priorisation** : classer les menaces par gravité et impact potentiel
4. **Contre-mesures** : mettre en place des solutions (chiffrement, segmentation réseau...)
5. **Validation continue** : réévaluation constante pour prendre en compte les menaces nouvelles ou évolutives

---

## Partie II - STRIDE

STRIDE est un **modèle de classification des menaces** développé par **Microsoft** permettant d'identifier et de catégoriser les différents types de menaces pesant sur un système.

| Lettre | Menace                         | Description                                                                                                      |
|--------|--------------------------------|------------------------------------------------------------------------------------------------------------------|
| **S**  | Spoofing (usurpation)          | Un attaquant se fait passer pour une autre entité (utilisateur, appareil, système)                                |
| **T**  | Tampering (altération)         | Modification illégitime de données en transit ou stockées                                                        |
| **R**  | Repudiation (déni d'actions)   | Une partie nie avoir accompli une action, sans preuve suffisante du contraire (absence de journalisation)        |
| **I**  | Information Disclosure         | Accès non autorisé à des informations sensibles (fuites de données, interceptions)                               |
| **D**  | Denial of Service              | Rendre un système ou service indisponible pour les utilisateurs légitimes                                        |
| **E**  | Elevation of Privilege         | Un attaquant obtient des privilèges plus élevés que ceux qu'il est censé avoir                                   |

:::tip

Lors de la conception d'un système, utiliser STRIDE pour analyser chaque composant et identifier les menaces potentielles permet d'implémenter des mesures de sécurité spécifiques dès la phase de conception.

:::

---

## Partie III - Risk Management Framework (RMF)

Le **RMF** est un cadre méthodologique du **NIST** (National Institute of Standards and Technology) pour gérer les risques de sécurité informatique au sein des systèmes d'information.

### Objectifs du RMF

- Identifier et évaluer les risques en matière de sécurité
- Mettre en place des mesures de protection adaptées
- Assurer une surveillance continue des risques
- Favoriser une approche proactive tout au long du cycle de vie des systèmes

### Phases du RMF

1. **Catégorisation du système d'information** : définir les ressources critiques et les classer selon l'impact potentiel d'une faille sur leur confidentialité, intégrité et disponibilité
2. **Sélection des contrôles de sécurité** : choisir des contrôles appropriés en fonction du niveau de risque (catalogue NIST SP 800-53)
3. **Mise en œuvre des contrôles** : déployer les solutions techniques (chiffrement, authentification) et administratives (gestion des accès, formation)
4. **Évaluation des contrôles** : vérifier leur bon fonctionnement via audits, tests de sécurité et examens techniques
5. **Autorisation du système** : décider si le système peut fonctionner en production, basé sur l'évaluation des risques résiduels
6. **Surveillance continue** : identifier les nouvelles vulnérabilités, mettre à jour les évaluations et ajuster les mesures

### Avantages du RMF

- **Gestion proactive** des risques dès les premières étapes
- **Approche standardisée** avec des lignes directrices claires
- **Surveillance continue** pour rester protégé contre les nouvelles menaces

### Exemple d'application : système de données médicales

| Phase                    | Action                                                                               |
|--------------------------|--------------------------------------------------------------------------------------|
| Catégorisation           | Données médicales classées comme hautement sensibles (confidentialité)                |
| Sélection des contrôles  | Chiffrement en transit/au repos, authentification multifactorielle, audits réguliers  |
| Mise en oeuvre            | Intégration via outils de chiffrement et protocoles d'accès sécurisé                  |
| Évaluation               | Tests de pénétration pour valider la résistance aux attaques                          |
| Autorisation             | Système autorisé pour un usage en production après évaluation                         |
| Surveillance continue    | Examens réguliers et analyses de journaux de sécurité                                 |

---

## Partie IV - OWASP

L'**OWASP** (Open Web Application Security Project) est une organisation mondiale à but non lucratif dédiée à l'amélioration de la sécurité des logiciels et applications web.

### Objectifs

- Aider les développeurs à concevoir des applications sécurisées dès le début
- Fournir des outils gratuits et ouverts pour tester et renforcer la sécurité
- Former les professionnels aux meilleures pratiques en matière de sécurité web

### OWASP Top 10

Le projet le plus connu de l'OWASP : une liste des **10 vulnérabilités les plus critiques** et courantes dans les applications web, mise à jour régulièrement. Exemples :

- Injections (SQL, etc.)
- Falsification de requêtes intersites (CSRF)
- Mauvaise gestion de l'authentification et des sessions
- Failles de configuration de sécurité

:::info

Le Top 10 est largement utilisé comme référence dans les audits de sécurité et les tests d'intrusion.

:::

---

## Partie V - Le Zero Trust

Le **Zero Trust** (confiance nulle) est un modèle de sécurité qui remet en question l'idée traditionnelle selon laquelle les réseaux internes sont sécurisés. Dans un environnement Zero Trust, **aucune entité n'est automatiquement considérée comme fiable**.

> **Ne jamais faire confiance ! Toujours vérifier !**

### Analogie du château fort

- **Architecture classique** : on protège l'extérieur (les murs du château) mais l'intérieur est considéré sûr
- **Architecture Zero Trust** : chaque service est protégé indépendamment, même à l'intérieur du réseau

### Fondamentaux du Zero Trust

#### Vérification continue

Vérification systématique de l'identité et des autorisations à **chaque tentative d'accès**, qu'elle soit interne ou externe :
- Validation de l'utilisateur (MFA)
- Vérification de l'appareil utilisé
- Conformité aux règles de sécurité

#### Principe du moindre privilège

Chaque utilisateur ou appareil ne se voit attribuer que les droits d'accès **strictement nécessaires** à sa tâche :
- Répartition claire des tâches, rôles et droits
- Cloisonnement des personnes et services
- Limitation de l'impact en cas de compromission

#### Surveillance et journalisation

Surveillance continue de toutes les actions et journalisation des accès pour **détecter rapidement** les comportements anormaux ou tentatives d'intrusion.

#### Micro-segmentation du réseau

Les réseaux sont segmentés en plusieurs parties avec leurs propres règles de sécurité, ce qui **réduit la surface d'attaque** et empêche le déplacement latéral d'un attaquant.

---

## Partie VI - La défense en profondeur

La **défense en profondeur** (Defense in Depth) consiste à mettre en place **plusieurs couches de protection** pour réduire la probabilité qu'une attaque aboutisse.

### Principes

- **Superposition de couches** : sécurisation des terminaux, réseaux, applications, données et utilisateurs
- **Diversité des mécanismes** : combiner pare-feux, IDS, chiffrement, authentification forte
- **Réduction du point de défaillance unique** : si une couche est compromise, les autres continuent de protéger
- **Principe de moindre privilège** : autorisations minimales nécessaires

### Surface d'attaque

La **surface d'attaque** représente l'ensemble des points d'entrée et de communication accessibles :

- OS, librairies, accès lecture/écriture, réseau (ports ouverts, IP actives, flux, protocoles)
- Facteur humain (social engineering, phishing)
- Accès physique (intrusion dans les locaux)

:::caution

**Toujours réduire au minimum ce qui est accessible** → c'est le principe du **hardening**.

:::

---

## Ressources externes

- **ANSSI** : [Le modèle Zero Trust](https://cyber.gouv.fr/publications/le-modele-zero-trust)
- **OWASP** : [Secure Product Design Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html)

---

## Résumé - Points clés

| #  | Concept                      | À retenir                                                                                    |
|----|------------------------------|----------------------------------------------------------------------------------------------|
| 01 | **Modèle de menace**         | Identifier actifs, attaquants, vulnérabilités, impacts et contre-mesures                     |
| 02 | **STRIDE**                   | 6 catégories de menaces : Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation  |
| 03 | **RMF**                      | Cadre NIST en 6 phases pour gérer les risques de sécurité en continu                         |
| 04 | **OWASP**                    | Organisation open source, connue pour son Top 10 des vulnérabilités web                      |
| 05 | **Zero Trust**               | Ne jamais faire confiance, toujours vérifier, moindre privilège, micro-segmentation          |
| 06 | **Défense en profondeur**    | Plusieurs couches de protection pour éliminer les points de défaillance uniques               |
