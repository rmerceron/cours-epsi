---
sidebar_position: 4
title: "Cours 3 - Propriété intellectuelle et numérique au travail"
---

# Cours 3 - Propriété intellectuelle et numérique au travail

## La propriété intellectuelle dans le numérique

### Vue d'ensemble

La propriété intellectuelle se divise en deux branches principales :

**Propriété industrielle :**

- **Brevets** : protection des inventions techniques, durée de 20 ans (INPI/OEB), conditions : nouveauté, activité inventive, application industrielle
- **Marques** : protection des signes distinctifs, durée de 10 ans renouvelables indéfiniment, déposées auprès de l'INPI (France) ou EUIPO (Europe)

**Propriété littéraire et artistique :**

- **Droit d'auteur** : protection automatique dès la création
  - **Droit moral** : inaliénable et perpétuel
  - **Droit patrimonial** : cessible et limité dans le temps

### Spécificité française vs système anglo-saxon

:::info Principe fondamental

Le droit de la propriété intellectuelle en France se distingue du système de copyright anglo-saxon, notamment par l'importance accordée au **droit moral** de l'auteur.

:::

| Élément | France | États-Unis |
|---------|--------|------------|
| **Source principale** | Code de la propriété intellectuelle + droit UE | Lois fédérales séparées (Copyright Act, Patent Act, Lanham Act, DTSA) + common law |
| **Droit d'auteur** | Automatique, fort accent sur les droits moraux | Automatique mais registre recommandé, accent sur les droits économiques |
| **Exceptions** | Liste fermée d'exceptions (citation, parodie, etc.) | Fair use, clause ouverte appréciée au cas par cas |
| **Brevets** | INPI / OEB, first to file, 20 ans | USPTO, first to file, droits d'exclure sur territoire US |
| **Marques** | Dépôt INPI ou EUIPO, first to file, 10 ans renouvelables | Lanham Act, importance de l'use in commerce |
| **Secrets d'affaires** | Protection légale harmonisée par directive UE | Trade secrets protégés par lois d'État + Defend Trade Secrets Act |
| **Philosophie** | Protection forte de l'auteur (approche civiliste) | Vision plus économique et concurrentielle |

### Enjeux dans le numérique

- **Massification** : multiplication des créations numériques
- **Protection des oeuvres** : défi face à la facilité de copie
- **Gestion des droits** : complexité accrue (DRM)
- **Équilibre** : entre protection et accès

---

## Protection des logiciels

### Les trois approches de protection

#### Protection juridique

1. **Droit d'auteur** : protection automatique dès la création, couvre le code source et le code objet, protège l'expression (pas l'idée)
2. **Dépôt légal** : possibilité de dépôt auprès de l'APP (Agence pour la Protection des Programmes), preuve d'antériorité
3. **Brevet** : possible pour les innovations techniques, plus rare pour les logiciels purs, coûteux et complexe

#### Protection technique

1. **Obfuscation** : rendre le code difficile à comprendre, protection contre la rétro-ingénierie
2. **Cryptage** : chiffrement du code, protection contre l'accès non autorisé
3. **Licences** : définir les droits d'usage, contrôle de l'exploitation

#### Protection organisationnelle

1. **NDA** (Non-Disclosure Agreement) : accord de confidentialité, obligations des parties
2. **Cession** : transfert de droits, clauses contractuelles
3. **Sécurisation de la documentation technique** : contrôle d'accès, classification, traçabilité

---

## Modes de distribution des logiciels

:::info Contexte

Depuis la fin des années 90 avec la généralisation d'Internet, le SaaS (Software as a Service) permet une alternative à la distribution classique de licences.

:::

Les 4 modes principaux sont : **On-premise** (licence traditionnelle), **SaaS** (Software as a Service), **Open Source** (logiciel libre) et **Freeware** (logiciel gratuit).

### Licence On-Premise

#### Éléments essentiels d'une licence

| Élément | Description |
|---------|-------------|
| **Identification de l'oeuvre** | Logiciel identifié (éditeur, auteur, date, version, modules), titularité des droits clarifiée |
| **Objet** | Logiciel, versions, modules, documentations associées |
| **Type de licence** | Non exclusive / exclusive, personnelle / cessible, mondiale / territoriale |
| **Mode d'exploitation** | On-premise, SaaS, OEM, hébergement éditeur ou client |
| **Paramètres de comptage** | Poste, utilisateur nommé, utilisateur simultané, serveur, CPU, transactions, stockage |
| **Durée** | Perpétuelle ou limitée (abonnement), conditions de renouvellement |

#### Clauses importantes

**Confidentialité et sécurité :** clauses de confidentialité, clauses RGPD, rôles responsable de traitement / sous-traitant, DPA, engagements de sécurité.

**Maintenance :** contrat distinct ou inclus, correctifs et évolutions, SLA (délais, niveaux de service), politique de mises à jour.

**Restrictions d'usage :** interdictions explicites (copie, prêt, location, sous-licence), encadrement de la décompilation, usage interne uniquement, clauses d'audit de conformité.

**Composants Open Source :** identification de tous les composants, vérification de compatibilité des licences, gestion du copyleft (GPL/AGPL).

**Responsabilité et garanties :** limitation de responsabilité, garanties de conformité, mention d'assurances (RC pro, cyber-risque).

### SaaS (Software as a Service)

#### Caractéristiques

- **Description du service** : fonctionnalités, modules, limitations techniques (volumétrie, API, stockage)
- **Modèle d'abonnement** : mensuel / annuel, freemium, essais gratuits
- **Gestion des comptes** : SSO, MFA, types d'utilisateurs (admin, simple, lecteur, API user)

#### Engagements de service (SLA)

| Domaine | Éléments |
|---------|----------|
| **Disponibilité** | Engagements (99,5%, 99,9%), exclusions (maintenance, force majeure) |
| **Performance** | Temps de réponse, latence API |
| **Gestion d'incidents** | Classification (mineur/majeur/critique), délais de résolution |

#### Fin de contrat et réversibilité

- **Export des données** : formats CSV, JSON, API
- **Délai d'accès post-contrat** : période de lecture seule
- **Effacement** : procédure d'effacement ou anonymisation

#### Propriété intellectuelle en SaaS

- L'éditeur conserve la propriété du logiciel et de l'infrastructure
- Les données restent la propriété du client
- Attention aux clauses sur les données agrégées/anonymisées et l'entraînement de modèles IA

### Open Source

#### Les 4 libertés fondamentales

| Liberté | Description |
|---------|-------------|
| **Liberté 0 : Utiliser** | Le logiciel pour n'importe quel usage, sans restriction |
| **Liberté 1 : Étudier** | Étudier le fonctionnement et l'adapter (accès au code source requis) |
| **Liberté 2 : Redistribuer** | Redistribuer des copies, sans limitation |
| **Liberté 3 : Améliorer** | Améliorer le programme et distribuer ces améliorations |

:::warning Distinctions importantes

- **Open Source vs Freeware** : le libre n'est pas défini par son prix (il peut être payant) mais par ces libertés. Un logiciel gratuit peut être propriétaire et interdire la modification/redistribution.
- **Open Source vs Free Software** : le code source ouvert est nécessaire mais pas suffisant. Le libre impose juridiquement ces libertés via des licences (GPL, MIT, Apache, BSD...).

:::

#### Avantages

- **Transparence et sécurité** : code accessible, audits communautaires, corrections rapides
- **Indépendance** : pas de vendor lock-in, personnalisation infinie, souveraineté numérique
- **Origine** : mouvement initié par Richard Stallman, FSF (1983)

### Risques de fraude : comparaison

La distribution en mode SaaS **diminue fortement le risque d'usages frauduleux** grâce au contrôle centralisé des accès, à la traçabilité, à l'absence de copie locale, aux mises à jour automatiques et à la révocation instantanée des accès.

---

## Actions juridiques en cas de violation

| Volet | Type d'action | Objectif | Exemples |
|-------|---------------|----------|----------|
| **Civil - Contractuel** | Responsabilité contractuelle | Réparation du dépassement de licence | Dépassement nombre de postes, non-paiement |
| **Civil - PI** | Action en contrefaçon | Sanctionner l'utilisation sans droit | Absence de licence, copies illicites |
| **Civil - Injonction** | Injonction de cessation | Faire cesser rapidement l'usage | Ordonnance de cesser exploitation |
| **Mesures probatoires** | Saisie-contrefaçon, constats | Obtenir preuve d'usage frauduleux | Saisie serveurs/PC, constat huissier |
| **Sanctions financières** | Dommages et intérêts | Indemniser manque à gagner | Licences non payées, profits indus |
| **Pénal** | Plainte pénale contrefaçon | Sanctionner atteintes graves | Jusqu'à 3 ans + 300 000 euros |
| **Précontentieux** | Mise en demeure | Résolution amiable | Exigence de régularisation |

---

## Les marques

### Protection des marques

- **Dépôt** : INPI (France) ou EUIPO (Union Européenne)
- **Durée** : 10 ans renouvelables indéfiniment
- **Déchéance** : possible si pas d'exploitation pendant 5 ans

### Protection contre les cybermenaces

| Menace | Description | Recours |
|--------|-------------|---------|
| **Cybersquatting / Typosquatting** | Enregistrement frauduleux de noms de domaine | UDRP (arbitrage ICANN), procédures nationales |
| **Phishing / Spamming** | Utilisation de la marque pour tromper | Signalements hébergeurs et plateformes (LCEN, DSA) |
| **Usurpation sur réseaux sociaux** | Comptes ou boutiques contrefaisantes | Plateformes (Meta, Amazon), preuve de marque enregistrée |

### Valeur économique et stratégique

- **Monopole d'exploitation** : droit exclusif, asset immatériel valorisable
- **Visibilité et référencement** : lutte contre publicités détournées, SEO parasite
- **Prévention de la dilution** : protection contre l'affaiblissement de la distinctivité
- **Valorisation et cession** : actif coté, facilite levées de fonds et fusions-acquisitions

:::tip À retenir

Sans marque déposée, les recours se limitent à la concurrence déloyale (plus difficile à prouver). La protection de marque numérique est un **levier stratégique de résilience** : 80% des atteintes passent par Internet.

:::

---

## Cycle PDCA et amélioration continue

### Les 4 étapes du cycle de Deming

| Étape | Description |
|-------|-------------|
| **Plan (Planifier)** | Identifier un problème, analyser les causes racines, fixer des objectifs mesurables, élaborer un plan d'action |
| **Do (Faire)** | Mettre en oeuvre le plan à petite échelle (test pilote), documenter chaque étape et les résultats |
| **Check (Vérifier)** | Mesurer les résultats, comparer aux objectifs, analyser les écarts (KPI, tableaux de bord, audits) |
| **Act (Agir)** | Si succès : standardiser à grande échelle. Si échec : ajuster et relancer un nouveau cycle |

### Articulation avec normes et certifications

Le PDCA est le socle de nombreuses normes : ISO 9001 (qualité), ISO 27001 (sécurité information), ISO 14001 (environnement), et des méthodologies ITIL et Lean. Il structure l'amélioration continue et répond aux audits réglementaires (RGPD, NIS 2).

**Exemple - Mise en conformité RGPD :**
- **Plan** : analyse des traitements de données
- **Do** : déploiement des outils de gestion du consentement
- **Check** : audit et DPIA (Data Protection Impact Assessment)
- **Act** : standardisation + formation des équipes

---

## Le numérique au travail

### Cadre juridique

La relation employeur-salarié est régie par : le Code du travail, la convention collective, le contrat de travail, le règlement intérieur et les accords d'entreprise/branche.

### Droits et obligations de l'employeur

**Contrôles possibles :** proportionnés, connus des salariés, justifiés.

**Critères de contrôle légitimes :**

| Critère | Description |
|---------|-------------|
| **Justification** | Motif légitime nécessaire (sécurité, protection des données) |
| **Proportionnalité** | Mesures adaptées à l'objectif, pas de surveillance excessive |
| **Nécessité** | Contrôle réellement nécessaire, pas d'alternative moins intrusive |
| **Intérêt légitime** | Protection du patrimoine, sûreté du SI |
| **Respect de la vie privée** | Ne pas outrepasser les limites, usage raisonnable toléré |
| **Information préalable** | Salariés informés à l'avance, transparence |

### Droits et obligations du salarié

**Droits :**
- **Droit à la déconnexion** : ne pas être connecté hors temps de travail
- **Usage raisonnable à titre privé** : tolérance pour usage personnel limité
- **Respect de la vie privée** : confidentialité des communications privées

**Obligations :**
- Respect des consignes et de la charte informatique
- Sûreté (mots de passe robustes, vigilance)
- Confidentialité et loyauté
- Utilisation appropriée des équipements

### Recommandations organisationnelles

- **Limiter le BYOD** (Bring Your Own Device) : risques de sécurité accrus
- **Dissocier le personnel du professionnel** : équipements et comptes séparés
- **Formaliser** : documenter les règles, procédures écrites
- **Fiabiliser le SI** : sécurité renforcée, disponibilité, intégrité des données

### La charte d'utilisation des outils numériques

:::tip Définition

La charte d'utilisation des outils et services numériques permet l'encadrement de leurs usages par les collaborateurs au sein de l'organisation. C'est à la fois un outil de management, un outil RH et un outil de SSI.

:::

**Contenu de la charte :**
- Usages autorisés et non-autorisés
- Règles de sûreté numérique (politique de mots de passe, confidentialité)
- Mesures de contrôles et surveillance
- Sanctions en cas de non-respect
- Droit à la déconnexion
- Outillages autorisés (lutte contre le Shadow IT)
- Procédure en cas d'incident

---

## Obligations et responsabilités

### Responsabilité civile

**Fautes engageant la responsabilité :** faute de gestion dans la protection des systèmes, non-respect du RGPD, préjudice causé aux tiers par négligence.

**Obligations du dirigeant :** stratégie de cybersécurité, formation des employés, audits réguliers, plan de gestion des incidents.

**Obligations du DSI/RSSI :** charte informatique, politique de sécurité, contrôles récurrents, mesures de sécurité raisonnables.

### Responsabilité pénale (articles 323-1 et suivants du Code pénal)

| Infraction | Peine d'emprisonnement | Amende |
|------------|----------------------|--------|
| **Intrusion / Accès frauduleux** | 3 ans | 100 000 euros |
| **Si dommages** | 5 ans | 150 000 euros |
| **Circonstances aggravantes** | 7 ans | 300 000 euros |
| **Entrave** | 5 ans | 150 000 euros |

:::info Délit d'entrave

Le délit d'entrave désigne toute infraction pénale consistant à empêcher, gêner ou faire obstacle, de manière volontaire, à l'exercice d'un droit légalement reconnu ou au fonctionnement normal d'une institution.

:::

**Peines complémentaires possibles :** privation des droits civiques, interdiction d'exercer une fonction publique, interdiction d'activité professionnelle.

---

## Sanctions réglementaires

| Réglementation | Plafond amende maximum | Principales infractions |
|----------------|------------------------|------------------------|
| **RGPD** | 4% CA mondial ou 20 M euros | Violation principes (sécurité, consentement, notification), transferts hors UE illégaux |
| **DSA** | 6% CA mondial ou 30 M euros | Dark patterns, publicité opaque, risques systémiques |
| **DMA** | 10% CA mondial (20% récidive) | Autopréférence, verrouillage utilisateurs |
| **DORA** | 1% CA annuel ou 5 M euros | Manquements gestion risques ICT, incidents non notifiés |
| **NIS 2** | 10 M euros ou 2% CA mondial | Incidents non notifiés, mesures sécurité insuffisantes |
| **Directive Accessibilité** | 50 000 euros par service (France) | Sites/apps publics non accessibles |

:::warning Tendance 2026

Passage de la phase pédagogique aux **sanctions massives et récurrentes**. Le cumul de sanctions est possible (RGPD + DSA + concurrence pour un même fait). Des astreintes journalières jusqu'à 5% du CA mondial/jour sont possibles en cas de non-exécution d'injonctions.

:::

---

## Risques personnels pour les professionnels

| Risque | Fondement | Conséquences | Mesures de protection |
|--------|-----------|-------------|----------------------|
| **Violation RGPD** | Art. 33/34 RGPD | Amende jusqu'à 20 M euros ou 4% CA | Signaler immédiatement, ne pas contourner les DPIA |
| **IA non conforme** | AI Act | Sanctions jusqu'à 35 M euros / 7% CA | Vérifier classification risque, documenter refus outils prohibés |
| **Cyber-incident non signalé** | NIS 2 / DORA | Amende + prison (faute intentionnelle) | Procédure escalade claire, conservation preuves |
| **Shadow IT** | RGPD + responsabilité contractuelle | Licenciement faute grave | Signalement, outils validés uniquement |
| **Contrefaçon / PI** | Code PI | 3 ans / 300 000 euros | Ne pas utiliser de licences crackées, tracer l'open source |
| **Accès excessifs** | NIS 2 + PCI-DSS | Mise en cause si faille exploitée | Principe moindre privilège, revue périodique |

---

## Comment se protéger ?

### Procédure de protection en 3 étapes

| Étape | Action | Délai | Preuves à conserver | Protection légale |
|-------|--------|-------|---------------------|-------------------|
| **1. Alerte** | Signalement écrit à N+1/DPO/RSSI | Immédiat | Email daté + accusé réception | Art. L.1132-3-3 C. trav. |
| **2. Escalade** | Remontée CSE/DG/DJ/autorité externe si pas de réponse | 48h max | Rapport écrit + recommandé | Droit d'alerte CSE + Sapin 2 |
| **3. Refus** | Refus d'exécuter instruction illégale | Immédiat | PV + témoins | Droit de retrait (L.4131-1) |

### Exemple concret (développeur)

**Situation :** demande d'intégration d'un modèle IA non audité avec données RGPD.

1. **Alerte** - Email à N+1 : "La demande nécessite une DPIA préalable (art. 35). Sans cela, risque amende 4% CA + responsabilité personnelle."
2. **Escalade** - Si pas de retour sous 48h : escalade DPO + CSE, documentation écrite
3. **Refus** - Si refus persistant : conservation des preuves, signalement CNIL anonyme possible

### Protection statutaire

| Action | Protection légale | Preuve à conserver |
|--------|-------------------|-------------------|
| **Alerte interne** | Non-sanctionnabilité (art. L.1132-3-3 C. trav.) | Email daté + accusé |
| **Escalade CSE/autorité** | Statut lanceur d'alerte (Sapin 2) | Rapport écrit + recommandé |
| **Refus instruction illégale** | Droit de retrait (art. L.4131-1) | Procès-verbal + témoins |

---

## Résumé - Points clés

| # | Thème | À retenir |
|---|-------|-----------|
| 01 | **Propriété intellectuelle** | Distinction France vs anglo-saxon, importance du droit moral, protection multi-niveaux |
| 02 | **Distribution logicielle** | On-premise vs SaaS vs Open Source, 4 libertés du libre, réduction des risques avec le SaaS |
| 03 | **Marques** | Protection essentielle contre cybermenaces, 80% des atteintes passent par Internet |
| 04 | **Numérique au travail** | Charte informatique indispensable, équilibre droits/obligations, contrôle proportionné |
| 05 | **Responsabilités** | Civiles et pénales, sanctions lourdes, protection par procédures d'alerte |
| 06 | **PDCA** | Socle de l'amélioration continue, obligatoire pour maintenir les certifications |
