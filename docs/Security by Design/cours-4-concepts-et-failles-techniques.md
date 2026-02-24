---
sidebar_position: 5
title: "Cours 4 - Concepts et failles techniques"
---

# Cours 4 - Concepts et failles techniques

## Partie I - SOP (Same Origin Policy)

### Définition

Mécanisme de sécurité imposé par les navigateurs web qui **restreint comment les documents ou scripts** chargés depuis une origine peuvent interagir avec des ressources d'une autre origine.

**Origine** = schéma (protocole) + hôte (domaine) + port d'une URL. Deux origines sont identiques uniquement si ces trois éléments correspondent.

**Objectif** : prévenir les attaques XSS et CSRF en limitant l'accès aux ressources à des scripts de la même origine.

### Exceptions et contournements SOP

- **CORS (Cross-Origin Resource Sharing)** : norme qui permet aux serveurs d'indiquer les origines autorisées à accéder aux ressources
- **JSONP (JSON with Padding)** : technique de requêtes cross-domain contournant la SOP (moins utilisée aujourd'hui grâce à CORS)

### Limitations de SOP

- Empêche les requêtes HTTP entre domaines différents sans permission explicite (en-têtes CORS)
- Restreint l'accès aux objets DOM pour les documents d'origines différentes

### Impact sur le développement web

- Nécessite une conception attentive des services web pour un partage sécurisé des ressources
- Les développeurs doivent utiliser les en-têtes CORS de manière appropriée

---

## Partie II - CSP (Content Security Policy)

### Définition

Politique de sécurité ajoutée aux **en-têtes HTTP** des réponses d'un serveur web pour contrôler les ressources autorisées à charger pour une page web.

**Objectif** : prévenir les attaques par injection en spécifiant les domaines et types de contenu que le navigateur est autorisé à exécuter.

### Directives courantes

| Directive       | Rôle                                                          |
|-----------------|---------------------------------------------------------------|
| `default-src`   | Sources par défaut pour tous les types de contenu             |
| `script-src`    | Sources autorisées pour les scripts                           |
| `style-src`     | Sources valides pour les feuilles de style                    |
| `img-src`       | Sources d'images autorisées                                   |
| `connect-src`   | Points de terminaison pour AJAX, WebSockets, etc.             |

### Avantages

- Réduit le risque d'attaques XSS en restreignant l'exécution de scripts non approuvés
- Empêche le chargement de ressources potentiellement malveillantes
- Couche supplémentaire de sécurité qui complète SOP

### Mise en oeuvre

- Ajout d'un en-tête `Content-Security-Policy` dans la réponse HTTP
- Utilisation de méta-éléments dans le HTML pour les pages non contrôlées par des en-têtes

:::caution

Nécessite une planification minutieuse pour éviter de briser les fonctionnalités de la page en restreignant trop les sources.

:::

---

## Partie III - Attaque REDOS (Regular Expression Denial of Service)

Déni de service où l'attaquant vise à **épuiser les ressources système** en exploitant la complexité des évaluations d'expressions régulières.

### Fonctionnement

1. **Identification** d'une expression régulière vulnérable (grande quantité de backtracking)
2. **Création de la charge malveillante** : chaîne d'entrée forçant un nombre exponentiel de vérifications
3. **Soumission** de l'entrée malveillante à l'application

### Impact

- **Épuisement des ressources** : une seule charge peut occuper un serveur pendant longtemps
- **Déni de service** : l'application devient lente ou non réactive
- **Attaque à grande échelle** : des attaques distribuées peuvent multiplier l'impact

### Prévention

- Validation et sanitisation des entrées avant traitement par regex
- Définir des **timeouts** pour l'exécution des expressions régulières
- Simplifier les regex pour minimiser le backtracking
- Surveillance et limitation du taux de requêtes

---

## Partie IV - Attaque XSS (Cross-Site Scripting)

Permet à un attaquant d'**injecter du code malveillant** (souvent JavaScript) dans des pages web vues par d'autres utilisateurs, pour contourner la Same-Origin Policy.

### Types d'attaques XSS

| Type              | Description                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------|
| **XSS Reflected** | Script reflété par le serveur dans la réponse (via paramètres d'URL), exécuté immédiatement      |
| **XSS Stored**    | Script stocké sur le serveur (base de données, forum, commentaire), exécuté à chaque consultation |
| **XSS DOM-based** | Script modifie le DOM dans le navigateur sans intervention du serveur                             |

### Mécanisme

1. **Injection** : l'attaquant trouve un point d'entrée sans validation ni échappement
2. **Exploitation** : injection d'un script malveillant
3. **Exécution** : le navigateur de la victime exécute le script comme contenu de la page

### Objectifs de l'attaque

- **Vol de cookies** : usurpation d'identité via les cookies de session
- **Phishing** : faux formulaires de connexion
- **Défacement** : modification de l'apparence du site
- **Distribution de malware** : redirection vers des sites contenant des malwares

### Prévention

- **Échappement des entrées** : empêcher l'exécution de scripts
- **Validation stricte** des entrées
- **CSP** : spécifier les sources fiables pour les scripts
- **Bibliothèques sécurisées** : frameworks qui échappent automatiquement les entrées

:::info Exercice XSS

Google fournit un outil pour explorer le concept : [XSS Game](https://xss-game.appspot.com) avec 6 niveaux de difficulté croissante.

:::

---

## Partie V - Attaque SSTI (Server Side Template Injection)

Vulnérabilité qui se produit lorsque des **fonctionnalités de template sont utilisées de manière non sécurisée**. L'attaquant injecte des templates malveillants ou des commandes arbitraires dans le serveur.

### Mécanisme

1. **Exploitation des templates** : l'entrée utilisateur est insérée directement dans un template sans validation
2. **Injection de code** : les données malveillantes sont traitées par le moteur de template, permettant l'exécution de code arbitraire

### Impact

- Exécution de code arbitraire sur le serveur
- Élévation de privilèges
- Fuite d'informations sensibles
- Déni de service

### Prévention

- Validation stricte des entrées
- Échappement des données de template
- **Sandboxing** : restreindre les fonctionnalités accessibles via le moteur de template
- Mise à jour des dépendances

---

## Partie VI - Attaque IDOR (Insecure Direct Object Reference)

Vulnérabilité qui se produit lorsqu'une application expose une **référence à un objet interne** (fichier, clé de base de données) de manière à ce qu'un attaquant puisse la manipuler.

### Mécanisme

- **Exposition des références** : les applications utilisent des IDs dans les URL, formulaires ou API pour accéder à des objets
- **Manque de contrôles d'accès** : l'application ne vérifie pas si l'utilisateur a le droit d'accéder à l'objet référencé

### Exemple d'exploitation

Une URL comme `exemple.com/profile?id=123` sans vérification permet à un attaquant de changer l'ID (`?id=124`) pour accéder aux informations d'un autre utilisateur.

### Impact

- Accès non autorisé, modification ou suppression de données
- Violation de confidentialité
- Manipulation de données (fraudes, perturbations)

### Prévention

- **Contrôles d'accès rigoureux** : vérifier que l'utilisateur ne peut accéder qu'aux objets autorisés
- **Références indirectes** : remplacer les IDs directs par des références non devinables
- Validation des entrées
- Limitation de portée en fonction du rôle

---

## Partie VII - Attaque Mass Assignment

Vulnérabilité qui se produit lorsqu'un attaquant exploite la fonctionnalité d'**assignation en masse** pour mettre à jour des champs inattendus ou sensibles, souvent liée aux frameworks ORM.

### Mécanisme

- **Assignation automatique** : les frameworks modernes automatisent l'assignation des valeurs aux propriétés d'un objet
- **Manque de filtrage** : sans restrictions, un attaquant injecte des paramètres supplémentaires dans les requêtes de mise à jour

### Exemple d'exploitation

Une application permettant de mettre à jour `name` et `email` via POST. Sans filtrage, un attaquant ajoute `role=admin` dans la requête, modifiant son rôle utilisateur à administrateur.

### Impact

- Élévation de privilèges
- Modification de données sensibles
- Contournement de la logique métier

### Prévention

- **Listes blanches de propriétés** : définir explicitement les champs modifiables
- **Validation rigoureuse** des entrées
- **DTOs (Data Transfer Objects)** : objets spécifiques ne contenant que les champs autorisés
- **Contrôles d'accès** : vérifier les droits de modification

---

## Sécurité des navigateurs

Ressource ANSSI : [Recommandations pour la mise en œuvre d'un site web (sécurité côté navigateur)](https://cyber.gouv.fr/sites/default/files/2013/05/anssi-guide-recommandations_mise_en_oeuvre_site_web_maitriser_standards_securite_cote_navigateur-v2.0.pdf)

---

## Résumé - Points clés

| #  | Concept              | À retenir                                                                             |
|----|----------------------|---------------------------------------------------------------------------------------|
| 01 | **SOP**              | Mécanisme navigateur qui restreint les interactions entre origines différentes         |
| 02 | **CSP**              | En-têtes HTTP contrôlant les ressources autorisées à charger                          |
| 03 | **REDOS**            | DoS exploitant la complexité des expressions régulières                               |
| 04 | **XSS**              | Injection de scripts malveillants (Reflected, Stored, DOM-based)                      |
| 05 | **SSTI**             | Injection dans les moteurs de template côté serveur                                   |
| 06 | **IDOR**             | Accès à des objets via manipulation de références directes sans contrôle d'accès      |
| 07 | **Mass Assignment**  | Modification de champs non autorisés via l'assignation en masse des frameworks ORM    |
