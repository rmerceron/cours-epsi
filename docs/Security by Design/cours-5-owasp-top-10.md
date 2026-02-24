---
sidebar_position: 6
title: "Cours 5 - OWASP Top 10"
---

# Cours 5 - Focus sur OWASP et son Top 10

Référence : [OWASP Top Ten](https://owasp.org/www-project-top-ten/)

Outil d'entraînement : [OWASP WebGoat](https://owasp.org/www-project-webgoat/)

---

## A01:2021 - Contrôles d'accès défaillants

[Référence OWASP](https://owasp.org/Top10/fr/A01_2021-Broken_Access_Control/)

Les contrôles d'accès défaillants permettent à des utilisateurs d'agir en dehors de leurs permissions prévues.

### Observabilité applicative

L'observabilité repose sur trois piliers :

| Pilier           | Description                                                                           | Exemples d'outils                     |
|------------------|---------------------------------------------------------------------------------------|---------------------------------------|
| **Supervision**  | État à un instant T, émet des alertes                                                 | Prometheus (+ Grafana)                |
| **Métrologie**   | Récupère et stocke des métriques numériques dans le temps (perf, intégrité, dispo...) | Prometheus                            |
| **Logging**      | Enregistrement des événements contextualisés (IP, date, utilisateur, fonctionnalité)   | Logstash, Loki, Elasticsearch         |
| **Tracing**      | Suivi des requêtes et transactions                                                     | OpenTelemetry                         |

:::tip

**Observabilité** = l'ensemble de ces outils qui travaillent ensemble (supervision + métrologie + logging + tracing).

:::

### OAuth

**OAuth** est un protocole libre de **délégation d'autorisation** (et non d'authentification). Il permet à une application d'utiliser l'API sécurisée d'un autre site web pour le compte d'un utilisateur.

### Testeur Qualité logiciel

Rôle clé dans la sécurité :

- Évaluation de la qualité et conformité aux spécifications
- Conception de plans de test
- Exécution des tests manuels et automatiques
- Assurance qualité et rapport de bugs
- Validation des corrections
- Amélioration continue des processus de test

### Les différents tests

| Type de test            | Focalisation                                    | Objectif                                              | Exécution                                  |
|-------------------------|-------------------------------------------------|-------------------------------------------------------|--------------------------------------------|
| **Test unitaire**       | Une seule composante ou fonction                | Vérifier la correctitude de chaque partie isolément   | Automatiquement, à chaque modification     |
| **Test d'intégration**  | Interactions entre composantes                  | Identifier les problèmes d'interfaces et flux         | Après les tests unitaires, étapes clés     |

:::info Questions à se poser

- Qu'est-ce qu'un bon test ?
- Qu'est-ce qu'une bonne couverture de code ?
- Est-ce une bonne métrique ?

:::

### DDD, Architecture hexagonale et TDD

#### Domain-Driven Design (DDD)

- Centre le développement sur la **logique métier** du domaine
- Utilise un **modèle riche** pour représenter les concepts d'affaires
- Établit un **langage ubiquitaire** commun entre développeurs et experts métier
- Sépare la logique métier des aspects techniques
- Encourage les révisions régulières en collaboration avec les parties prenantes

#### Architecture hexagonale

- **Isole le cœur métier** des interfaces utilisateur, bases de données et systèmes externes
- Introduit des **ports** (contrats d'interface) et **adaptateurs** (communication avec l'extérieur)
- Indépendance vis-à-vis du framework
- Facilite les tests de la logique métier de manière isolée
- Permet différentes interfaces (web, mobile, API) et sources de données
- Déploiement indépendant des fonctionnalités périphériques

#### Test-Driven Development (TDD)

- Écrire un **test avant le code** qu'il doit valider
- Ajout de fonctionnalités en **petites itérations** vérifiées par des tests
- Rétroaction rapide : détection et correction immédiate des erreurs
- Conception émergente : le design s'améliore au fil des tests
- Refactoring continu de la structure du code

---

## A02:2021 - Défaillances cryptographiques

[Référence OWASP](https://owasp.org/Top10/fr/A02_2021-Cryptographic_Failures/)

### Protocoles désuets

| Protocole obsolète   | Remplaçant          |
|----------------------|---------------------|
| SSL 2.0 et 3.0       | TLS                 |
| TLS 1.0 et 1.1       | TLS 1.2 et 1.3      |
| WEP                  | WPA et WPA2         |
| DES                  | AES                 |
| MD5, SHA-1           | SHA-2 et SHA-3      |

### Chaîne de confiance

Série d'éléments de sécurité reliés entre eux, où chaque élément est vérifié par le précédent :

1. **Certificat racine de confiance**
2. **Certificat intermédiaire**
3. **Certificat d'entité finale**

### Vecteur d'initialisation (IV)

- **Définition** : bloc de données pour initialiser certains modes de chiffrement à clé symétrique
- **Rôle** : assure que le même texte clair donne un chiffré différent à chaque opération, même avec la même clé
- **Unicité** : doit être unique et utilisé une seule fois avec la même clé
- **Non secret** : peut être transmis en clair, mais doit être **imprévisible**
- **Modes concernés** : CBC (Cipher Block Chaining), CFB (Cipher Feedback)
- **Génération** : aléatoire, pseudo-aléatoire ou séquence spécifique

:::info Ressources sur l'aléatoire

- [Chiffrement par lampes à lave (Cloudflare)](https://www.cloudflare.com/fr-fr/learning/ssl/lava-lamp-encryption/)
- [Random.org](https://www.random.org/)

:::

### Cache et sécurité

Bonnes pratiques pour sécuriser les données en cache :

- **Isolation des données** : séparer données sensibles et non sensibles
- **Expiration appropriée** : durées d'expiration pour réduire les risques d'accès obsolète
- **Sécurisation de l'accès** : authentification et contrôle d'accès au cache
- **Chiffrement** des données sensibles stockées en cache
- **Validation des entrées** : éviter les injections dans le cache
- **Surveillance et audit** réguliers
- **Protocoles sécurisés** : communiquer via HTTPS

---

## A03:2021 - Injection

[Référence OWASP](https://owasp.org/Top10/fr/A03_2021-Injection/)

### Injection SQL

Exemple classique avec `1=1` :

```sql
-- Requête originale
SELECT * FROM admins WHERE login='$login' AND password='$password'

-- Injection : $login = ' OR 1=1#
SELECT * FROM admins WHERE login='' OR 1=1#
```

Le `#` commente le reste de la requête, et `OR 1=1` rend la condition toujours vraie, donnant accès à tous les enregistrements.

---

## A04:2021 - Conception non sécurisée

[Référence OWASP](https://owasp.org/Top10/fr/A04_2021-Insecure_Design/)

La conception non sécurisée concerne les failles liées à des choix d'architecture ou de design qui ne prennent pas en compte la sécurité dès le départ.

---

## A05:2021 - Mauvaise configuration de sécurité

[Référence OWASP](https://owasp.org/Top10/fr/A05_2021-Security_Misconfiguration/)

### Exemples de mauvaise configuration

:::caution Anecdote

Un serveur n'autorise certaines routes d'administration uniquement à destination d'IP locale. Problème : le reverse proxy à une IP locale... Ces routes sont donc accessibles depuis l'extérieur.

:::

### Mauvaise gestion des erreurs

Une erreur qui retourne trop d'information expose des détails sur l'infrastructure. La solution : le **hardening**.

Pour trouver des exploits et CVE : [ExploitAlert](https://www.exploitalert.com)

### Mauvaise gestion des en-têtes

| En-tête manquant/mal configuré        | Risque                                                                              |
|----------------------------------------|-------------------------------------------------------------------------------------|
| `Content-Security-Policy`              | Vulnérabilité aux injections (XSS)                                                 |
| `Strict-Transport-Security` (HSTS)     | Dégradation en HTTP non sécurisé, vol de cookies de session                          |
| `X-Content-Type-Options`               | Interprétation incorrecte des fichiers, fuites d'information                        |
| `SameSite` (cookies)                   | Vulnérabilité CSRF                                                                  |
| `X-Frame-Options`                      | Clickjacking                                                                         |
| `Referrer-Policy`                      | Exposition de données sensibles dans les URL, XSS réfléchi                          |
| `Server` / `X-Powered-By`             | Divulgation des versions logicielles du serveur                                      |
| `Expect-CT`                            | Risques liés à l'émission incorrecte de certificats TLS                             |

---

## A06:2021 - Composants vulnérables et obsolètes

Outils de découverte : [Insecam](http://insecam.com/) | [Shodan](https://www.shodan.io/)

### Risques liés aux gestionnaires de packages (npm, yarn, pip, maven...)

| Type d'attaque                             | Description                                                                                       |
|--------------------------------------------|---------------------------------------------------------------------------------------------------|
| **Typosquatting**                          | Packages malveillants sous des noms similaires à des packages populaires                           |
| **Injection de dépendance**               | Package malveillant inséré comme dépendance d'un package légitime                                  |
| **Attaque supply chain**                  | Compromission d'un package légitime pour y inclure du code malveillant                             |
| **Détournement de session**               | Vol de tokens, cookies ou données sensibles via packages malveillants                              |
| **Phishing**                               | Faux messages prétendant provenir de sources légitimes (NPM, etc.)                                 |
| **DoS**                                    | Packages consommant des ressources système excessives                                              |
| **Vulnérabilités non corrigées**           | Exploitation de failles dans des packages légitimes                                                |
| **Squatting de packages abandonnés**       | Reprise de noms de packages abandonnés pour diffuser du code malveillant                           |
| **Man-in-the-Middle**                      | Interception des communications pour injecter du code lors du téléchargement                       |

---

## A07:2021 - Identification et authentification de mauvaise qualité

[Référence OWASP](https://owasp.org/Top10/fr/A07_2021-Identification_and_Authentication_Failures/)

Concerne les failles dans les mécanismes d'identification et d'authentification.

---

## A08:2021 - Manque d'intégrité des données et du logiciel

[Référence OWASP](https://owasp.org/Top10/fr/A08_2021-Software_and_Data_Integrity_Failures/)

### Architecture monolithique vs microservices

| Critère                   | Monolithique                                          | Microservices                                             |
|---------------------------|-------------------------------------------------------|-----------------------------------------------------------|
| **Structure**             | Application en un seul bloc                           | Petits services indépendants                               |
| **Développement**         | Simple au début                                       | Plus complexe (distribution)                               |
| **Déploiement**           | Unifié (une seule opération)                          | Indépendant par service                                    |
| **Couplage**              | Fort (composants liés)                                | Faible (services découplés)                                |
| **Scalabilité**           | Verticale (ajout de ressources au serveur)            | Horizontale (ajout de serveurs)                            |
| **Résilience**            | Défaillance impacte tout                              | Défaillance isolée par service                             |
| **Technologies**          | Uniformes                                              | Variées (par service)                                      |

:::info Mono ou micro ?

Le choix dépend de : la taille du projet, les compétences de l'équipe, les exigences de scalabilité et de maintenance. Il est toujours possible de découper plus tard.

:::

### mTLS (Mutual TLS)

Extension du protocole TLS avec **authentification bidirectionnelle** :

- **Authentification mutuelle** : client et serveur présentent des certificats valides
- **Sécurité renforcée** : seules les parties authentifiées peuvent communiquer
- **Utilisation des certificats** : émis par une autorité de certification (CA)
- **Confidentialité et intégrité** : données chiffrées et non altérées
- **Applications** : communications serveur-à-serveur, API sécurisées, systèmes bancaires, IoT

### Signature de code

#### Avantages

- **Authentification** : vérifier que le logiciel provient de l'éditeur déclaré
- **Intégrité** : le code n'a pas été altéré depuis sa signature
- **Non-répudiation** : l'éditeur ne peut nier avoir signé
- **Réduction des alertes** : les OS et navigateurs font plus confiance aux applications signées
- **Conformité réglementaire** : certaines réglementations l'exigent

#### Méthode de signature

1. **Obtenir un certificat** auprès d'une CA reconnue (paire clé publique/privée)
2. **Préparer le code** : s'assurer qu'il est final et prêt pour la distribution
3. **Signer** avec des outils spécifiques (`signtool` pour Windows, `codesign` pour macOS)
4. **Valider** la signature
5. **Distribuer** le logiciel signé
6. **Gérer les clés** : protéger la clé privée, renouveler le certificat avant expiration

### Dépôts de code compromis

Exemples notables :

- **Event-Stream (NPM, 2018)** : un nouveau mainteneur a ajouté une dépendance malveillante (`flatmap-stream`) ciblant un portefeuille de cryptomonnaie
- **Codecov Bash Uploader (2021)** : script modifié pour exfiltrer des secrets d'environnement vers un serveur tiers
- **SolarWinds Orion (2020)** : backdoor inséré dans le logiciel de gestion réseau, affectant des milliers d'entreprises et organisations gouvernementales

### Attaque RCE et dé-sérialisation

#### Fonctionnement

1. **Préparation** : l'attaquant crée une charge utile de données sérialisées malveillantes
2. **Injection** : envoi via interfaces web, API ou fichiers
3. **Désérialisation** : l'application désérialise sans validation, entraînant l'exécution de code arbitraire

#### Risques

- Exécution de code arbitraire (prise de contrôle)
- Élévation de privilèges
- Attaques DoS
- Fuite d'informations sensibles

#### Mesures de protection

- **Validation des données** sérialisées avant dé-sérialisation
- **Listes blanches de classes** autorisées à être désérialisées
- **Mise à jour des bibliothèques** pour corriger les vulnérabilités connues
- **Sécurisation des interfaces** : limiter les points d'entrée pour les données sérialisées

---

## A09:2021 - Carence des systèmes de contrôle et de journalisation

[Référence OWASP](https://owasp.org/Top10/fr/A09_2021-Security_Logging_and_Monitoring_Failures/)

Concerne l'absence ou l'insuffisance de logging et monitoring, empêchant la détection et la réponse aux incidents.

---

## A10:2021 - Falsification de requête côté serveur (SSRF)

[Référence OWASP](https://owasp.org/Top10/fr/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

Le SSRF permet à un attaquant de forcer le serveur à effectuer des requêtes vers des ressources internes ou externes non prévues.

---

## Résumé - Points clés

| #   | Vulnérabilité OWASP                | À retenir                                                                |
|-----|-------------------------------------|--------------------------------------------------------------------------|
| A01 | **Contrôles d'accès défaillants**  | Observabilité, OAuth, tests, DDD/architecture hexagonale/TDD             |
| A02 | **Défaillances cryptographiques**  | Protocoles à jour, chaîne de confiance, IV uniques, cache sécurisé       |
| A03 | **Injection**                       | SQL injection classique (`OR 1=1`), validation des entrées               |
| A04 | **Conception non sécurisée**       | Intégrer la sécurité dès la phase de design                              |
| A05 | **Mauvaise configuration**          | Hardening, gestion des erreurs, en-têtes HTTP sécurisés                  |
| A06 | **Composants vulnérables**          | Typosquatting, supply chain attacks, mises à jour régulières             |
| A07 | **Authentification défaillante**   | Mécanismes d'authentification robustes                                    |
| A08 | **Manque d'intégrité**             | mTLS, signature de code, dépôts compromis, dé-sérialisation             |
| A09 | **Carence de journalisation**      | Logging et monitoring essentiels pour la détection d'incidents            |
| A10 | **SSRF**                            | Le serveur est forcé à effectuer des requêtes non prévues                 |
