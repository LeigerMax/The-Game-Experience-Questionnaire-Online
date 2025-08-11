# GEQ - Game Experience Questionnaire Online


**🇬🇧 English version:** [README_EN.md](README.md)

##  Description

Application web complète et fonctionnelle pour administrer et calculer le **Game Experience Questionnaire (GEQ)** en français et anglais. Cette interface permet de collecter les réponses et calcule automatiquement les scores selon la méthode officielle développée par l'Université de technologie d'Eindhoven.

Le GEQ est un outil de recherche standardisé largement utilisé dans la communauté académique et industrielle pour évaluer l'expérience de jeu des utilisateurs. Cette implémentation web offre une interface moderne, accessible et entièrement bilingue pour faciliter son utilisation dans diverses études et projets de recherche.



##  Fonctionnalités

- **Système bilingue complet** (Français/Anglais) avec fichiers de traduction séparés
- **Quatre modules GEQ complets** :
  - **Post-game Module** (17 questions) - 4 dimensions
  - **Core Module** (33 questions) - 7 dimensions  
  - **In-Game Module** (14 questions) - 7 dimensions
  - **Social Presence Module** (17 questions) - 3 dimensions
- **Calcul en temps réel** des scores par dimension
- **Interface responsive** et accessible
- **Section "À propos"** avec documentation complète
- **Barre de progression** du questionnaire
- **Sauvegarde automatique** des réponses lors des changements
- **Réinitialisation** complète
- **Exportation des résultats** en JSON
- **Architecture modulaire** avec système de localisation robuste

##  Structure du projet

```
├── index.html              # Page principale avec section "À propos"
├── styles.css              # Styles responsive et accessibles
├── script.js               # Logique principale de l'application
├── locale-manager.js       # Gestionnaire de localisation
├── locale-data.js          # Données intégrées (fallback pour usage local)
├── locales/                # Dossier des traductions (pour serveurs web)
│   ├── fr.json             # Traductions françaises
│   └── en.json             # Traductions anglaises
└── README.md               # Documentation
```

##  Modules et Dimensions

###  **Post-game Module (17 items)**
Évalue les sentiments et émotions ressentis après avoir terminé de jouer.
- **Expérience Positive** (6 items) : Items 1, 5, 7, 8, 12, 16
- **Expérience Négative** (6 items) : Items 2, 4, 6, 11, 14, 15
- **Fatigue** (2 items) : Items 10, 13
- **Retour à la Réalité** (3 items) : Items 3, 9, 17

###  **Core Module (33 items)**
Mesure l'expérience de jeu générale à travers 7 dimensions clés.
- **Compétence** (3 items) : Items 2, 10, 18
- **Immersion sensorielle et imaginative** (6 items) : Items 3, 12, 18, 19, 27, 30
- **Flow** (5 items) : Items 5, 13, 25, 28, 31
- **Tension/Agacement** (3 items) : Items 22, 24, 29
- **Challenge** (5 items) : Items 11, 23, 26, 32, 33
- **Affect négatif** (4 items) : Items 7, 8, 9, 16
- **Affect positif** (5 items) : Items 1, 4, 6, 14, 20

###  **In-Game Module (14 items)**
Capture les sensations ressenties pendant l'activité de jeu.
- **Compétence** (2 items) : Items 2, 9
- **Immersion sensorielle et imaginative** (2 items) : Items 1, 4
- **Flow** (2 items) : Items 5, 10
- **Tension** (2 items) : Items 6, 8
- **Challenge** (2 items) : Items 12, 13
- **Affect négatif** (2 items) : Items 3, 7
- **Affect positif** (2 items) : Items 11, 14

### **Social Presence Module (17 items)**
Analyse les interactions et sentiments liés aux autres joueurs.
- **Implication psychologique - Empathie** (6 items) : Items 1, 4, 8, 9, 10, 13
- **Implication psychologique - Sentiments négatifs** (5 items) : Items 7, 11, 12, 16, 17
- **Implication comportementale** (6 items) : Items 2, 3, 5, 6, 14, 15

##  Utilisation

1. **Ouvrir** le fichier `index.html` dans un navigateur web
2. **Choisir** le module (Post-game ou Core) et la langue
3. **Répondre** aux questions avec l'échelle de Likert 0-4
4. **Observer** les scores se calculer en temps réel
5. **Changer** de langue ou module sans perdre les données
6. **Exporter** les résultats une fois complété


##  Méthode de Calcul

- **Scores par dimension** : Moyenne arithmétique des items correspondants
- **Échelle** : 0.00 à 4.00 (selon l'échelle de Likert originale)
- **Mise à jour** : Temps réel dès qu'une réponse est sélectionnée
- **Exportation** : Format JSON avec métadonnées complètes et timestamp

## Sources et Références

### Documentation Officielle
- **Game Experience Questionnaire (GEQ)** - Eindhoven University of Technology
- **PDF Officiel** : [Game Experience Questionnaire English](https://pure.tue.nl/ws/files/21666907/Game_Experience_Questionnaire_English.pdf)

### Utilisation en Recherche
Le GEQ est largement utilisé dans la recherche académique et industrielle pour :
- Évaluer objectivement l'expérience utilisateur dans les jeux vidéo
- Corréler l'expérience subjective avec des mesures physiologiques
- Analyser l'engagement et le plaisir de jeu
- Comparer différents designs de jeux

### Citation
Si vous utilisez cette implémentation dans vos recherches, veuillez citer :
- Le questionnaire original de l'Université de technologie d'Eindhoven
- Ce projet GitHub : `https://github.com/LeigerMax/The-Game-Experience-Questionnaire-Online`


##  Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé par :** [@LeigerMax](https://github.com/LeigerMax)  
**Dépôt GitHub :** [The-Game-Experience-Questionnaire-Online](https://github.com/LeigerMax/The-Game-Experience-Questionnaire-Online)