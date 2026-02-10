---
sidebar_position: 3
title: "Cours 2 - Certifications, normes et résilience"
---

# Cours 2 - Certifications, normes et résilience du SI

## Citations et principes de sécurité

> "La cyberattaque est une forme de certitude pour toutes entités qui ne se protégerait pas !"
> -- Vincent Strubel, Directeur Général de l'ANSSI

La question n'est pas "si" mais "quand" une attaque surviendra. L'absence de protection garantit l'attaque.

### Windows XP SP2 (Août 2004) : un changement de paradigme

- **Avant SP2** : sécurité optionnelle, ports ouverts par défaut
- **Après SP2** : sécurité par défaut activée (pare-feu, mise à jour automatique, centre de sécurité Windows)

:::tip Leçon

La sécurité **par défaut** plutôt que la sécurité **en option**.

:::

---

## Panorama des certifications en cybersécurité

### Certifications internationales majeures

| Certification | Focus |
|---------------|-------|
| **ISO 27001** | Système de Management de la Sécurité de l'Information (SMSI) |
| **ISO 27002** | Bonnes pratiques de sécurité (complément de l'ISO 27001) |
| **CISSP** (Certified Information Systems Security Professional) | Certification professionnelle de haut niveau, reconnue mondialement |
| **CISM** (Certified Information Security Manager) | Management de la sécurité |
| **CISA** (Certified Information Systems Auditor) | Audit des systèmes d'information, gouvernance IT |
| **CRISC** (Certified in Risk and Information Systems Control) | Gestion des risques IT |
| **CCSP** (Certified Cloud Security Professional) | Sécurité des environnements cloud |

### Certifications techniques

| Certification | Focus |
|---------------|-------|
| **CEH** (Certified Ethical Hacker) | Hacking éthique, test d'intrusion |
| **CHFI** (Computer Hacking Forensic Investigator) | Investigation numérique, forensic |
| **CompTIA Security+** | Fondamentaux de la sécurité (entrée de gamme) |
| **CCNA Security** (Cisco) | Sécurité réseau |
| **GSEC** (GIAC Security Essentials) | Fondamentaux de sécurité (pratique) |
| **GCIA** (GIAC Certified Intrusion Analyst) | Analyse d'intrusion, détection de menaces |

### Certifications françaises

- **CCT** (Certificat de Compétence en Cybersécurité) : développée par l'écosystème français
- **CyFun** (CyberFundamentals) : certification de base, approche progressive

---

## ISO 27001 - Certification du SMSI

### Présentation

Standard international délivré par l'AFNOR en France. Destiné principalement aux grandes organisations, mais adaptable à toute taille et tout secteur.

### Objectifs : les trois piliers

1. **Confidentialité** : seules les personnes autorisées accèdent aux informations
2. **Intégrité** : les données sont exactes et complètes
3. **Disponibilité** : les informations sont accessibles quand nécessaire

### Approche par les risques

1. **Identifier les risques** : analyse des actifs informationnels, cartographie des menaces, évaluation des vulnérabilités
2. **Traiter les risques** : accepter, réduire, transférer ou éviter
3. **Gérer les menaces** : mise en place de contrôles, surveillance continue, amélioration continue

---

## ISO 27002 - Guide des bonnes pratiques

Standard international complémentaire à l'ISO 27001. C'est un guide de recommandations, **non certifiable seul**.

### Structure : 93 mesures en 4 thématiques

| Thématique | Exemples de mesures |
|------------|-------------------|
| **Mesures organisationnelles** | Politiques de sécurité, organisation interne, gestion des ressources humaines, gestion des actifs, contrôle d'accès |
| **Mesures physiques** | Sécurité des locaux, contrôle d'accès physique, protection des équipements, gestion des supports |
| **Mesures liées aux personnes** | Sensibilisation, formation, responsabilisation, gestion des comportements |
| **Mesures techniques** | Cryptographie, sécurité des communications, gestion des opérations, développement sécurisé |

### ISO 27001 vs ISO 27002

| Critère | ISO 27001 | ISO 27002 |
|---------|-----------|-----------|
| **Nature** | Structurelle / Procédurale | Pratique et opérationnelle |
| **Usage** | Utilisée pour la certification | Employée pour améliorer les pratiques |
| **Contenu** | Spécifie les exigences | Fournit des directives détaillées et bonnes pratiques |
| **Certification** | Certifiable | Non certifiable |
| **Rôle** | Définit le cadre | Développe l'implémentation |

:::tip À retenir

- **ISO 27001** : définit **QUE** faire (les exigences)
- **ISO 27002** : explique **COMMENT** faire (les recommandations)

:::

---

## CyberFundamentals (CyFun)

Certification française progressive en cybersécurité avec un **taux de couverture de 82%** des risques cyber de base. Basée sur le framework NIST Cybersecurity Framework.

### Les 5 fonctions principales

1. **Identifier** : cartographie des actifs, évaluation des risques, compréhension du contexte
2. **Protéger** : mise en place de mesures de protection, contrôle d'accès, formation et sensibilisation
3. **Détecter** : surveillance continue, détection d'anomalies, alertes de sécurité
4. **Répondre** : plan de réponse aux incidents, communication de crise, analyse post-incident
5. **Rétablir** : plan de continuité, plan de reprise, amélioration continue

### 4 niveaux de maturité

| Niveau | Public cible |
|--------|-------------|
| **Small** | Très petites structures, mesures essentielles |
| **Basic** | Petites organisations, protections de base |
| **Important** | Organisations moyennes, protection renforcée |
| **Essentiel** | Grandes organisations, infrastructures critiques |

CyFun est compatible avec ISO 2700x, CIS Controls et IEC 62443.

---

## Panorama des méthodologies de gestion des risques

| Méthodologie | Origine | Caractéristiques |
|-------------|---------|-----------------|
| **EBIOS** | ANSSI (France) | Approche par scénarios de risques |
| **MEHARI** | CLUSIF (France) | Approche quantitative |
| **OCTAVE** | Carnegie Mellon (USA) | Focus sur les actifs critiques |
| **CRAMM** | CCTA (Royaume-Uni) | Approche gouvernementale |
| **ISO 27005** | International | Complément de l'ISO 27001 |

### Approches complémentaires

**Cycle de Deming (PDCA)** : Plan (Planifier) - Do (Faire) - Check (Vérifier) - Act (Agir)

**Règle 3-2-1 (sauvegarde)** : 3 copies des données, 2 supports différents, 1 copie hors site

---

## EBIOS - Méthodologie française

Développée et documentée par l'**ANSSI**, reconnue comme standard AFNOR.

### Objectifs

1. Créer un **cadre personnalisé** pour la gestion des cyber-risques, adapté à chaque organisation
2. Proposer des **solutions dynamiques** pour améliorer et actualiser ce cadre

### Méthodologie en 5 ateliers

1. Cadrage et socle de sécurité
2. Sources de risque
3. Scénarios stratégiques
4. Scénarios opérationnels
5. Traitement du risque

### Avantages et limites

**Avantages :**
- Pragmatisme et itération (approche agile)
- Conformité facilitée (alignée RGPD, compatible ISO 27001)
- Ciblage et optimisation des ressources

**Limites :**
- Usage principalement français
- Reconnaissance limitée à l'international

---

## MEHARI - Méthode Harmonisée d'Analyse de Risques

Développée par le **CLUSIF** (Club de la Sécurité de l'Information Français).

:::info Principe fondateur

**Surestimer le risque potentiel** pour définir un modèle adapté. Ne jamais sous-évaluer un risque.

:::

### Structure en 3 étapes

1. **Plan stratégique** : vision globale, objectifs de sécurité, alignement avec la stratégie de l'organisation
2. **Analyse opérationnelle** : évaluation détaillée, audit des mesures existantes, identification des écarts
3. **Planification et traitement** : plans d'action, priorisation, mise en oeuvre

**Avantages** : approche quantitative rigoureuse, méthodologie éprouvée, bonne couverture des risques.

**Limites** : complexité de mise en oeuvre, nécessite de l'expertise, ressources importantes.

---

## Synthèse : certifications, méthodologies et normes

:::tip À retenir

Certifications, méthodologies et normes ne sont que des **outils au service de la SSI**. Ce ne sont pas des fins en soi, mais des moyens pour atteindre la sécurité effective du SI.

:::

| Élément | Rôle |
|---------|------|
| **Réglementations** | Contraignent : obligations légales, sanctions en cas de non-respect |
| **Normes et certifications** | Définissent les standards de qualité |
| **Méthodologies** | Facilitent : guides pratiques, approches structurées, aide à la mise en conformité |

---

## Sécurité du Système d'Information (SSI)

### Analogie du château-fort

L'ISO 27001 peut être illustrée par l'analogie d'un château médiéval :

| Château | SI | Rôle |
|---------|-----|------|
| **Remparts** | Pare-feu, antivirus, contrôle d'accès | Première ligne de défense, protection périmétrique |
| **Pont-levis** | Mots de passe, authentification | Contrôle des entrées, vérification d'identité |
| **Gardes et rondes** | Surveillance, audit, SIEM, SOC | Surveillance continue, détection d'anomalies |
| **Coffres-forts** | Chiffrement, cryptographie | Protection des données sensibles |
| **Plans de défense** | PRA/PCA (Plans de Reprise/Continuité d'Activité) | Stratégies de défense, réponse aux incidents |
| **Défenseurs** | Sensibilisation et formation | Protection contre le phishing, culture sécurité |

:::info Enseignement

La sécurité est **multi-couches** (défense en profondeur). Chaque élément a son rôle spécifique, l'humain est un acteur clé, et une approche **globale** est nécessaire.

:::

---

## Objectif ultime : la résilience

La **résilience** est la capacité d'une organisation à :

1. **Anticiper** les menaces
2. **Résister** aux attaques
3. **Maintenir** ses activités critiques
4. **Se rétablir** rapidement après un incident
5. **S'adapter** et apprendre de l'expérience

:::tip À retenir

La SSI est avant tout une question de **stratégie**. La résilience ne s'improvise pas, elle se construit sur une vision claire des enjeux, des objectifs définis, des moyens adaptés et une gouvernance efficace.

:::

---

## Gouvernance et organisation de la SSI

### Rôle de la gouvernance

La direction générale / COMEX définit la politique en matière de SSI : orientations stratégiques, allocation des ressources, arbitrages sur les investissements.

### Acteurs clés du SI

| Acteur | Rôle |
|--------|------|
| **RSSI** (Responsable de la Sécurité des SI) | S'assure de l'application de la politique SSI, pilotage opérationnel, interface gouvernance/technique |
| **DSI** (Directeur des Systèmes d'Information) | Responsable des infrastructures et services IT, mise en oeuvre des projets |
| **DPO** (Data Protection Officer) | Conformité RGPD, protection des données personnelles, interface avec la CNIL |

### Matrice des responsabilités

| Domaine | Gouvernance | DSI | RSSI | DPO |
|---------|:-----------:|:---:|:----:|:---:|
| **Réglementations** | X | X | X | X |
| **Normes** | X | X | X | - |
| **Méthodologies** | - | X | X | X |

La gouvernance de l'organisation **arbitre** (décisions finales, budgets, orientations stratégiques) tandis que le RSSI, le DSI et le DPO **proposent et appliquent** (recommandations, mise en oeuvre, suivi).

---

## Les facteurs de résilience d'un SI

### Les 6 piliers

1. **Outillé** : technologies de sécurité adaptées, outils de surveillance et détection
2. **Organisé** : processus clairs et documentés, rôles et responsabilités définis
3. **Politique et stratégie** : vision claire de la sécurité, engagement de la direction
4. **Structuré** : architecture sécurisée, segmentation des réseaux, défense en profondeur
5. **Documenté** : procédures écrites, plans d'action, capitalisation des connaissances
6. **Culture de sécurité** : sensibilisation continue, formation régulière, vigilance collective

### Les 4 activités continues

| Activité | Description |
|----------|-------------|
| **Pilotage** | Direction et coordination, décisions stratégiques, allocation des ressources |
| **Monitorage** | Surveillance continue, collecte de métriques, tableaux de bord |
| **Veille** | Veille technologique, veille sur les menaces, anticipation des évolutions |
| **Vigilance** | Attention constante, réactivité face aux anomalies, culture du signalement |

---

## Évolution continue et adaptation

Les risques et menaces sont en **perpétuelles évolutions** : nouvelles vulnérabilités, techniques d'attaque en constante évolution, nouvelles technologies créant de nouvelles surfaces d'attaque, géopolitique et cybercriminalité en mutation.

En conséquence, les réglementations, normes, certifications et méthodologies **évoluent aussi**.

### Qualités requises des acteurs du SI

1. **Compétents** : maîtrise technique, connaissance des réglementations
2. **Collaboratifs** : travail en équipe, communication transversale
3. **En veille permanente** : veille technologique, réglementaire et sur les menaces
4. **En formation continue** : actualisation des connaissances, nouvelles certifications
5. **Résilients** : capacité d'adaptation, gestion du stress, réactivité
6. **Vigilants** : attention constante, détection des signaux faibles

---

## Résumé - Points clés

| # | Concept | À retenir |
|---|---------|-----------|
| 01 | **Certifications** | ISO 27001/27002, CyFun fournissent des cadres reconnus |
| 02 | **Méthodologies** | EBIOS, MEHARI facilitent la mise en oeuvre |
| 03 | **Résilience** | Objectif ultime : anticiper, résister, maintenir, rétablir, s'adapter |
| 04 | **Gouvernance** | Le COMEX pilote, RSSI/DSI/DPO proposent et appliquent |
| 05 | **Adaptation** | Veille et formation continues indispensables |
| 06 | **Bon sens** | Simplicité, pragmatisme, proportionnalité des mesures |
