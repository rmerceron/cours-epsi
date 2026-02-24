---
sidebar_position: 4
title: "Cours 3 - Sécurité dans le projet"
---

# Cours 3 - Sécurité dans le projet

## Partie I - Cycle de vie du développement et sécurité

Plusieurs approches méthodologiques existent (modèle en cascade, agile, modèle en V). Quelle que soit la méthode, la sécurité doit être intégrée à **chaque phase** du cycle de vie.

### Analyse des besoins

La sécurité by design intervient en définissant les **exigences de sécurité dès le départ**.

- **Implication** : identification des risques potentiels et des besoins en termes de confidentialité, intégrité et disponibilité. Les exigences fonctionnelles et non fonctionnelles doivent inclure des aspects de sécurité (gestion des accès, conformité GDPR, PCI-DSS, protection contre les menaces connues)
- **Exemple** : définir l'authentification multifactorielle, la gestion des droits d'accès, le chiffrement des données sensibles, lister les menaces potentielles

### Conception

La sécurité se traduit par une **architecture sécurisée** intégrant segmentation, gestion des accès et principes de sécurité.

- **Implication** : mécanismes robustes comme le chiffrement des données, la protection des API, l'authentification forte, la vérification des entrées utilisateurs
- **Exemple** : diagrammes de conception avec segmentation réseau, WAF (Web Application Firewall), modèles d'autorisation basés sur les rôles

### Développement

La sécurité impose d'écrire du **code sécurisé** et de suivre des bonnes pratiques.

- **Implication** : validation des entrées, stockage sécurisé des mots de passe (hachage), évitement des vulnérabilités connues (injections, buffer overflow). Intégration d'outils SAST (Static Application Security Testing)
- **Exemple** : SonarQube pour la vérification de la qualité du code, bibliothèques sûres pour la gestion des sessions

### Tests

La sécurité implique des **tests de sécurité approfondis** avant le déploiement.

- **Implication** : tests automatisés et manuels (pentests, analyses de vulnérabilités, tests de stress, tests de sécurité des API). Outils DAST (Dynamic Application Security Testing)
- **Exemple** : tests d'injection SQL, de XSS, et d'autres attaques courantes

### Déploiement

La sécurité impose la mise en place de mesures pour **sécuriser l'environnement de production**.

- **Implication** : systèmes de déploiement sécurisés, environnements correctement configurés (pare-feux, IAM), pipelines CI/CD sécurisés, surveillance des logs
- **Exemple** : conteneurs sécurisés (Docker), segmentation réseau, scans de sécurité continus, gestion des secrets avec HashiCorp Vault

### Maintenance

La maintenance doit inclure la **surveillance continue** et la gestion des correctifs.

- **Implication** : mise à jour régulière, surveillance des failles émergentes, IDS (systèmes de détection d'intrusion)
- **Exemple** : Splunk ou Elasticsearch pour la surveillance en temps réel des journaux d'activité

### Fin de vie

La sécurité implique de gérer la **fin de vie du logiciel de manière sécurisée**.

- **Implication** : migration sécurisée des données, suppression des accès, décommission sans laisser de failles exploitables
- **Exemple** : suppression sécurisée des données (algorithmes dédiés), fermeture des accès aux services liés

---

## Partie II - Exigences de sécurité pour un projet

Liste d'exigences à considérer :

- Étude de risque (contexte client et fonctionnalités), identification des menaces (STRIDE, RMF)
- Proposition d'architecture (micro-services, Zero Trust, Event-Driven Architecture, DDD)
- Proposition technologique
- Cycle de vie du projet et intégration de la sécurité
- Documentation et méthodes associées
- Formation des équipes aux enjeux de sécurité (OWASP, ANSSI)
- Gestion des risques et préparation (plan de réponse, mécanismes de surveillance et d'alerte)
- Matrice de risque (évaluation)
- Anticipation de mesures de mitigation
- Mise en place de suivi continu et révision périodique (DevOps)
- Rapports de sécurité (audits)
- Approche itérative (méthode Agile)

---

## Partie III - Bonnes pratiques pour les développeurs

| Pratique                                  | Description                                                                                           |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Validation des entrées**                | Toujours valider et filtrer les entrées utilisateur (SQL Injection, XSS, injection de commandes)      |
| **Échappement des données**               | Échapper les données dynamiques avant inclusion dans requêtes SQL, HTML, URL                          |
| **Gestion des mots de passe**             | Stockage sécurisé avec fonctions de hachage, jamais en clair                                          |
| **Principe du moindre privilège**         | Accorder uniquement les privilèges nécessaires pour la tâche                                          |
| **Mises à jour régulières**               | Maintenir à jour frameworks, bibliothèques et OS pour bénéficier des correctifs                       |
| **Cryptographie appropriée**              | Utiliser des algorithmes solides et approuvés pour protéger les données en transit et au repos         |
| **Authentification et autorisation**      | Implémenter 2FA et contrôles d'autorisation basés sur les rôles                                       |
| **Gestion des sessions et cookies**       | Cookies sécurisés, HTTPOnly, identifiants de session aléatoires                                       |
| **Protection contre force brute**         | Limiter les tentatives de connexion, blocage temporaire                                                |
| **Audit et journalisation**               | Journaux d'audit complets pour détecter et enquêter sur les incidents                                  |
| **Sécurité des données sensibles**        | Chiffrer au repos et en transit, limiter l'accès aux utilisateurs autorisés                            |
| **Formation et sensibilisation**          | Sensibiliser développeurs et utilisateurs aux techniques d'attaque courantes                           |

---

## Partie IV - Security by Design pour le DevOps et le testing

- **CI/CD** : automatiser les pipelines pour détecter rapidement les vulnérabilités et garantir des déploiements sécurisés
- **Contrôles de sécurité automatisés** : intégrer SAST, DAST et SCA (Software Composition Analysis) dans les pipelines CI/CD
- **Tests de sécurité automatisés** : pentests automatisés, tests de sécurité des API
- **Gestion des secrets** : utiliser des gestionnaires (Vault, AWS Secrets Manager), ne jamais inclure de secrets dans le code source
- **IAM (Identity and Access Management)** : principe du moindre privilège, authentification forte
- **Monitoring et détection d'anomalies** : surveillance proactive, analyse des journaux, détection des menaces
- **Tests de régression de sécurité** : dans les pipelines CI/CD, vérifier que les correctifs ne réintroduisent pas de vulnérabilités

---

## Partie V - Security by Design pour l'organisation

- **Responsabilité de la sécurité** : rôles et responsabilités clairs, champions de la sécurité
- **Revues de code sécurisées** : identifier les problèmes de sécurité potentiels et favoriser une culture de la sécurité
- **Gestion des accès** : limiter l'accès aux ressources sensibles, révoquer rapidement les accès des anciens employés
- **Gestion des risques** : évaluation régulière des risques et mesures d'atténuation
- **Politiques de sécurité** : guider les décisions et actions de l'équipe
- **Gestion des vulnérabilités** : outils de surveillance et correction dans le code et les dépendances tierces
- **Tests et revues de sécurité** : intégration régulière dans le processus de développement
- **Gestion des incidents** : processus de réponse rapide et efficace aux incidents de sécurité

---

## Partie VI - RGPD

Le **Règlement Général sur la Protection des Données** impose des exigences de sécurité spécifiques :

| Principe                              | Description                                                                                                |
|----------------------------------------|------------------------------------------------------------------------------------------------------------|
| **Responsabilité**                     | Démontrer la conformité en mettant en place des mesures de sécurité appropriées                             |
| **Privacy by Design**                  | Sécurité intégrée dès la conception, paramètres par défaut garantissant un haut niveau de protection        |
| **Confidentialité, intégrité, dispo**  | Les données personnelles doivent être traitées en assurant ces trois propriétés en permanence               |
| **Pseudonymisation et chiffrement**    | Protéger les données en cas d'accès non autorisé                                                            |
| **Gestion des risques**                | Évaluer régulièrement les risques et mettre en oeuvre des mesures d'atténuation                              |
| **Notification des violations**        | Signaler aux autorités et personnes concernées dans les meilleurs délais                                     |
| **Contrats sous-traitants**            | Garantir que les sous-traitants respectent les exigences de sécurité du RGPD                                |
| **Transferts internationaux**          | Autorisés uniquement avec un niveau de protection adéquat (clauses contractuelles types)                    |
| **Contrôle d'accès**                   | Seules les personnes autorisées ont accès aux données personnelles                                           |
| **Formation et sensibilisation**       | Former le personnel sur les obligations de protection des données                                            |
| **EIPD**                               | Évaluation d'Impact sur la Protection des Données si risque élevé pour les droits des personnes              |
| **Collaboration autorités**            | Coopérer avec les autorités de contrôle et fournir les informations nécessaires                               |

---

## Résumé - Points clés

| #  | Concept                          | À retenir                                                                                     |
|----|----------------------------------|-----------------------------------------------------------------------------------------------|
| 01 | **Cycle de vie**                 | La sécurité doit être intégrée à chaque phase : analyse, conception, dev, test, déploiement   |
| 02 | **Bonnes pratiques dev**         | Validation des entrées, chiffrement, moindre privilège, journalisation                        |
| 03 | **DevOps sécurisé**             | SAST/DAST dans CI/CD, gestion des secrets, monitoring continu                                 |
| 04 | **Organisation**                 | Rôles clairs, revues de code, gestion des incidents, politiques de sécurité                   |
| 05 | **RGPD**                         | Privacy by Design, notification des violations, pseudonymisation, EIPD                        |
