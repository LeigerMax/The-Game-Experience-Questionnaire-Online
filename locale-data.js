/**
 * Données de localisation intégrées pour le GEQ
 * Alternative à l'utilisation de fichiers JSON externes
 */

const EMBEDDED_LOCALES = {
    fr: {
        "language": "fr",
        "languageName": "Français",
        "ui": {
            "title": "Game Experience Questionnaire",
            "postGameSubtitle": "Module Post-Jeu",
            "coreSubtitle": "Module Principal",
            "inGameSubtitle": "Module En-Jeu",
            "socialPresenceSubtitle": "Module Présence Sociale",
            "instructions": {
                "postGame": "Veuillez indiquer comment vous vous êtes senti après avoir terminé de jouer au jeu pour chacun des éléments suivants :",
                "core": "Veuillez indiquer votre niveau d'accord avec chacune des affirmations suivantes concernant votre expérience de jeu :",
                "inGame": "Veuillez indiquer comment vous vous sentiez pendant que vous jouiez au jeu pour chacun des éléments suivants :",
                "socialPresence": "Veuillez indiquer votre niveau d'accord avec chacune des affirmations suivantes concernant votre interaction avec les autres joueurs :"
            },
            "scaleDescription": {
                "0": "Pas du tout d'accord",
                "1": "Peu d'accord",
                "2": "Neutre",
                "3": "Plutôt d'accord",
                "4": "Tout à fait d'accord"
            },
            "scaleLabels": [
                { "value": 0, "label": "Pas du tout" },
                { "value": 1, "label": "Peu" },
                { "value": 2, "label": "Neutre" },
                { "value": 3, "label": "Plutôt" },
                { "value": 4, "label": "Tout à fait" }
            ],
            "scores": "Scores",
            "averageOn": "Moyenne sur 4.0",
            "progress": "Progression du questionnaire",
            "questionsAnswered": "questions répondues",
            "resetButton": "🔄 Réinitialiser le questionnaire",
            "exportButton": "📊 Exporter les résultats",
            "completeFirst": "📊 Complétez le questionnaire",
            "moduleSwitch": "Module :",
            "languageSwitch": "Langue :",
            "aboutButton": "ℹ️ À propos",
            "backButton": "← Retour au questionnaire",
            "confirmReset": "Êtes-vous sûr de vouloir réinitialiser le questionnaire ? Toutes les réponses seront perdues.",
            "exportSummary": {
                "interpretation": "Plus le score est élevé, plus l'expérience dans cette dimension était intense.",
                "fileExported": "Les résultats détaillés ont été exportés en fichier JSON."
            },
            "about": {
                "title": "À propos du Game Experience Questionnaire",
                "description": "Le Game Experience Questionnaire (GEQ) est un questionnaire standardisé développé pour mesurer l'expérience de jeu des joueurs à travers plusieurs dimensions psychologiques importantes.",
                "purpose": "Ce questionnaire évalue différents aspects de l'expérience de jeu tels que l'immersion, le flow, l'affect positif et négatif, la tension, le challenge, et bien d'autres. Il permet aux chercheurs et concepteurs de jeux de mieux comprendre comment les joueurs vivent et ressentent leur expérience de jeu.",
                "modules": {
                    "title": "Les modules disponibles",
                    "postGame": "**Module Post-Jeu** : Évalue les sentiments et émotions ressentis après avoir terminé de jouer.",
                    "core": "**Module Principal** : Mesure l'expérience de jeu générale à travers 7 dimensions clés.",
                    "inGame": "**Module En-Jeu** : Capture les sensations ressenties pendant l'activité de jeu.",
                    "socialPresence": "**Module Présence Sociale** : Analyse les interactions et sentiments liés aux autres joueurs."
                },
                "research": {
                    "title": "Utilité en recherche",
                    "content": "Le GEQ est largement utilisé dans la recherche académique et industrielle pour évaluer objectivement l'expérience utilisateur dans les jeux vidéo. Il permet de corréler l'expérience subjective des joueurs avec des mesures physiologiques (rythme cardiaque, activité cérébrale) ou comportementales (temps de jeu, performance), offrant ainsi une compréhension plus complète de l'engagement et du plaisir de jeu."
                },
                "source": {
                    "title": "Source officielle",
                    "text": "Ce questionnaire a été développé par l'Université de technologie d'Eindhoven. Vous pouvez consulter la documentation officielle :",
                    "link": "Game Experience Questionnaire - Documentation officielle (PDF)"
                },
                "implementation": {
                    "title": "Cette implémentation",
                    "text": "Cette version en ligne du GEQ offre une interface bilingue (français/anglais) avec calcul automatique des scores et export des résultats. Le code source est disponible sur GitHub :",
                    "link": "Voir le projet sur GitHub"
                }
            }
        },
        "modules": {
            "postGame": {
                "name": "Post-game",
                "description": "Module Post-Jeu (17 items)",
                "questions": [
                    "Je me suis senti plein d'énergie",
                    "Je me suis senti mal",
                    "J'ai eu du mal à revenir à la réalité",
                    "Je me suis senti coupable",
                    "J'ai eu l'impression d'avoir gagné",
                    "J'ai trouvé que c'était une perte de temps",
                    "Je me suis senti en forme",
                    "J'étais satisfait de ma partie",
                    "Je me suis senti un peu perdu",
                    "Je me suis senti fatigué",
                    "J'ai eu l'impression que j'aurais pu faire quelque chose de plus utile",
                    "Je me suis senti fort",
                    "Je me suis senti épuisé",
                    "J'ai eu des regrets",
                    "J'avais un peu honte",
                    "J'étais fier de moi",
                    "J'ai eu l'impression de revenir d'un voyage"
                ],
                "dimensions": {
                    "positive": {
                        "name": "Expérience Positive",
                        "items": [0, 4, 6, 7, 11, 15]
                    },
                    "negative": {
                        "name": "Expérience Négative",
                        "items": [1, 3, 5, 10, 13, 14]
                    },
                    "tiredness": {
                        "name": "Fatigue",
                        "items": [9, 12]
                    },
                    "reality": {
                        "name": "Retour à la Réalité",
                        "items": [2, 8, 16]
                    }
                }
            },
            "core": {
                "name": "Core",
                "description": "Module Principal (33 items)",
                "questions": [
                    "Je me suis senti satisfait",
                    "Je me suis senti habile",
                    "L'histoire du jeu m'a intéressé",
                    "J'ai trouvé cela amusant",
                    "J'étais complètement absorbé par le jeu",
                    "Je me suis senti heureux",
                    "Cela m'a mis de mauvaise humeur",
                    "J'ai pensé à autre chose",
                    "J'ai trouvé cela ennuyeux",
                    "Je me suis senti compétent",
                    "J'ai trouvé cela difficile",
                    "C'était esthétiquement plaisant",
                    "J'ai oublié tout ce qui m'entourait",
                    "Je me suis senti bien",
                    "J'ai eu l'impression de perdre mon temps",
                    "J'ai trouvé cela frustrant",
                    "J'ai trouvé cela important",
                    "J'ai eu l'impression de contrôler",
                    "C'était créatif",
                    "Je me suis senti content",
                    "C'était divertissant",
                    "J'ai trouvé cela stressant",
                    "Je me suis senti ennuyé",
                    "J'ai trouvé cela stimulant",
                    "Je me suis senti excité",
                    "J'ai trouvé cela exigeant",
                    "C'était imaginatif",
                    "Je me suis senti détendu",
                    "J'ai trouvé cela agaçant",
                    "J'ai eu l'impression d'être dans le jeu",
                    "C'était captivant",
                    "J'ai trouvé cela difficile à maîtriser",
                    "C'était un défi pour moi"
                ],
                "dimensions": {
                    "competence": {
                        "name": "Compétence",
                        "items": [1, 9, 17]
                    },
                    "sensoryImmersion": {
                        "name": "Immersion sensorielle et imaginative",
                        "items": [2, 11, 17, 18, 26, 29]
                    },
                    "flow": {
                        "name": "Flow",
                        "items": [4, 12, 24, 27, 30]
                    },
                    "tension": {
                        "name": "Tension / Agacement",
                        "items": [21, 23, 28]
                    },
                    "challenge": {
                        "name": "Challenge",
                        "items": [10, 22, 25, 31, 32]
                    },
                    "negativeAffect": {
                        "name": "Affect négatif",
                        "items": [6, 7, 8, 15]
                    },
                    "positiveAffect": {
                        "name": "Affect positif",
                        "items": [0, 3, 5, 13, 19]
                    }
                }
            },
            "inGame": {
                "name": "In-Game",
                "description": "Module En-Jeu (14 items)",
                "questions": [
                    "L'histoire du jeu m'a intéressé",
                    "Je me suis senti en réussite",
                    "Je me suis senti ennuyé",
                    "J'ai trouvé cela impressionnant",
                    "J'ai oublié tout ce qui m'entourait",
                    "Je me suis senti frustré",
                    "J'ai trouvé cela fatigant",
                    "Je me suis senti irritable",
                    "Je me suis senti habile",
                    "Je me suis senti complètement absorbé",
                    "Je me suis senti satisfait",
                    "Je me suis senti défié",
                    "J'ai dû faire beaucoup d'efforts",
                    "Je me suis senti bien"
                ],
                "dimensions": {
                    "competence": {
                        "name": "Compétence",
                        "items": [1, 8]
                    },
                    "sensoryImmersion": {
                        "name": "Immersion sensorielle et imaginative",
                        "items": [0, 3]
                    },
                    "flow": {
                        "name": "Flow",
                        "items": [4, 9]
                    },
                    "tension": {
                        "name": "Tension",
                        "items": [5, 7]
                    },
                    "challenge": {
                        "name": "Challenge",
                        "items": [11, 12]
                    },
                    "negativeAffect": {
                        "name": "Affect négatif",
                        "items": [2, 6]
                    },
                    "positiveAffect": {
                        "name": "Affect positif",
                        "items": [10, 13]
                    }
                }
            },
            "socialPresence": {
                "name": "Social Presence",
                "description": "Module Présence Sociale (17 items)",
                "questions": [
                    "J'ai ressenti de l'empathie pour les autres",
                    "Mes actions dépendaient des actions des autres",
                    "Les actions des autres dépendaient de mes actions",
                    "Je me suis senti connecté aux autres",
                    "Les autres ont fait attention à moi",
                    "J'ai fait attention aux autres",
                    "J'ai ressenti de la jalousie envers les autres",
                    "J'ai trouvé agréable d'être avec les autres",
                    "Quand j'étais heureux, les autres étaient heureux",
                    "Quand les autres étaient heureux, j'étais heureux",
                    "J'ai influencé l'humeur des autres",
                    "J'ai été influencé par l'humeur des autres",
                    "J'ai admiré les autres",
                    "Ce que les autres faisaient affectait ce que je faisais",
                    "Ce que je faisais affectait ce que les autres faisaient",
                    "J'ai ressenti un désir de vengeance",
                    "J'ai ressenti de la schadenfreude (plaisir malveillant)"
                ],
                "dimensions": {
                    "psychologicalEmpathy": {
                        "name": "Implication psychologique - Empathie",
                        "items": [0, 3, 7, 8, 9, 12]
                    },
                    "psychologicalNegative": {
                        "name": "Implication psychologique - Sentiments négatifs",
                        "items": [6, 10, 11, 15, 16]
                    },
                    "behavioralInvolvement": {
                        "name": "Implication comportementale",
                        "items": [1, 2, 4, 5, 13, 14]
                    }
                }
            }
        }
    },
    en: {
        "language": "en",
        "languageName": "English",
        "ui": {
            "title": "Game Experience Questionnaire",
            "postGameSubtitle": "Post-game Module",
            "coreSubtitle": "Core Module",
            "inGameSubtitle": "In-Game Module",
            "socialPresenceSubtitle": "Social Presence Module",
            "instructions": {
                "postGame": "Please indicate how you felt after you finished playing the game for each of the following items:",
                "core": "Please indicate your level of agreement with each of the following statements about your gaming experience:",
                "inGame": "Please indicate how you felt while playing the game for each of the following items:",
                "socialPresence": "Please indicate your level of agreement with each of the following statements about your interaction with other players:"
            },
            "scaleDescription": {
                "0": "Not at all",
                "1": "Slightly",
                "2": "Moderately",
                "3": "Fairly",
                "4": "Extremely"
            },
            "scaleLabels": [
                { "value": 0, "label": "Not at all" },
                { "value": 1, "label": "Slightly" },
                { "value": 2, "label": "Moderately" },
                { "value": 3, "label": "Fairly" },
                { "value": 4, "label": "Extremely" }
            ],
            "scores": "Scores",
            "averageOn": "Average on 4.0",
            "progress": "Questionnaire progress",
            "questionsAnswered": "questions answered",
            "resetButton": "🔄 Reset questionnaire",
            "exportButton": "📊 Export results",
            "completeFirst": "📊 Complete questionnaire",
            "moduleSwitch": "Module:",
            "languageSwitch": "Language:",
            "aboutButton": "ℹ️ About",
            "backButton": "← Back to questionnaire",
            "confirmReset": "Are you sure you want to reset the questionnaire? All answers will be lost.",
            "exportSummary": {
                "interpretation": "The higher the score, the more intense the experience in that dimension was.",
                "fileExported": "Detailed results have been exported to a JSON file."
            },
            "about": {
                "title": "About the Game Experience Questionnaire",
                "description": "The Game Experience Questionnaire (GEQ) is a standardized questionnaire developed to measure players' gaming experience across several important psychological dimensions.",
                "purpose": "This questionnaire evaluates different aspects of the gaming experience such as immersion, flow, positive and negative affect, tension, challenge, and many others. It allows researchers and game designers to better understand how players experience and feel about their gaming sessions.",
                "modules": {
                    "title": "Available modules",
                    "postGame": "**Post-game Module**: Evaluates feelings and emotions experienced after finishing playing.",
                    "core": "**Core Module**: Measures the overall gaming experience through 7 key dimensions.",
                    "inGame": "**In-Game Module**: Captures sensations felt during gaming activity.",
                    "socialPresence": "**Social Presence Module**: Analyzes interactions and feelings related to other players."
                },
                "research": {
                    "title": "Research utility",
                    "content": "The GEQ is widely used in academic and industrial research to objectively evaluate user experience in video games. It allows correlating players' subjective experience with physiological measures (heart rate, brain activity) or behavioral measures (play time, performance), thus providing a more comprehensive understanding of engagement and gaming enjoyment."
                },
                "source": {
                    "title": "Official source",
                    "text": "This questionnaire was developed by Eindhoven University of Technology. You can consult the official documentation:",
                    "link": "Game Experience Questionnaire - Official Documentation (PDF)"
                },
                "implementation": {
                    "title": "This implementation",
                    "text": "This online version of the GEQ offers a bilingual interface (French/English) with automatic score calculation and results export. The source code is available on GitHub:",
                    "link": "View project on GitHub"
                }
            }
        },
        "modules": {
            "postGame": {
                "name": "Post-game",
                "description": "Post-game Module (17 items)",
                "questions": [
                    "I felt revived",
                    "I felt bad",
                    "I found it hard to get back to reality",
                    "I felt guilty",
                    "It felt like a victory",
                    "I found it a waste of time",
                    "I felt energetic",
                    "I was satisfied",
                    "I felt disoriented",
                    "I felt exhausted",
                    "I felt that I could have done something more useful",
                    "I felt powerful",
                    "I felt worn out",
                    "I had some regrets",
                    "I felt ashamed",
                    "I felt proud",
                    "It felt like coming back from a journey"
                ],
                "dimensions": {
                    "positive": {
                        "name": "Positive Experience",
                        "items": [0, 4, 6, 7, 11, 15]
                    },
                    "negative": {
                        "name": "Negative Experience",
                        "items": [1, 3, 5, 10, 13, 14]
                    },
                    "tiredness": {
                        "name": "Tiredness",
                        "items": [9, 12]
                    },
                    "reality": {
                        "name": "Returning to Reality",
                        "items": [2, 8, 16]
                    }
                }
            },
            "core": {
                "name": "Core",
                "description": "Core Module (33 items)",
                "questions": [
                    "I felt content",
                    "I felt skilful",
                    "I was interested in the game's story",
                    "I thought it was fun",
                    "I was fully occupied with the game",
                    "I felt happy",
                    "It gave me a bad mood",
                    "I thought about other things",
                    "I found it tiresome",
                    "I felt competent",
                    "I thought it was hard",
                    "It was aesthetically pleasing",
                    "I forgot everything around me",
                    "I felt good",
                    "I was bored",
                    "I found it frustrating",
                    "I found it impressive",
                    "I felt that I could explore things",
                    "I enjoyed it",
                    "I felt adventurous",
                    "I felt pressured",
                    "I felt irritable",
                    "I lost track of time",
                    "I felt challenged",
                    "I found it exciting",
                    "I thought it was difficult",
                    "I felt imaginative",
                    "I felt completely absorbed",
                    "I found it annoying",
                    "I felt like I was in the game environment",
                    "It felt like a rich experience",
                    "I lost connection with the outside world",
                    "I felt time pressure"
                ],
                "dimensions": {
                    "competence": {
                        "name": "Competence",
                        "items": [1, 9, 17]
                    },
                    "sensoryImmersion": {
                        "name": "Sensory and Imaginative Immersion",
                        "items": [2, 11, 17, 18, 26, 29]
                    },
                    "flow": {
                        "name": "Flow",
                        "items": [4, 12, 24, 27, 30]
                    },
                    "tension": {
                        "name": "Tension / Annoyance",
                        "items": [21, 23, 28]
                    },
                    "challenge": {
                        "name": "Challenge",
                        "items": [10, 22, 25, 31, 32]
                    },
                    "negativeAffect": {
                        "name": "Negative Affect",
                        "items": [6, 7, 8, 15]
                    },
                    "positiveAffect": {
                        "name": "Positive Affect",
                        "items": [0, 3, 5, 13, 19]
                    }
                }
            },
            "inGame": {
                "name": "In-Game",
                "description": "In-Game Module (14 items)",
                "questions": [
                    "I was interested in the game's story",
                    "I felt successful",
                    "I felt bored",
                    "I found it impressive",
                    "I forgot everything around me",
                    "I felt frustrated",
                    "I found it tiresome",
                    "I felt irritable",
                    "I felt skilful",
                    "I felt completely absorbed",
                    "I felt content",
                    "I felt challenged",
                    "I had to put a lot of effort into it",
                    "I felt good"
                ],
                "dimensions": {
                    "competence": {
                        "name": "Competence",
                        "items": [1, 8]
                    },
                    "sensoryImmersion": {
                        "name": "Sensory and Imaginative Immersion",
                        "items": [0, 3]
                    },
                    "flow": {
                        "name": "Flow",
                        "items": [4, 9]
                    },
                    "tension": {
                        "name": "Tension",
                        "items": [5, 7]
                    },
                    "challenge": {
                        "name": "Challenge",
                        "items": [11, 12]
                    },
                    "negativeAffect": {
                        "name": "Negative Affect",
                        "items": [2, 6]
                    },
                    "positiveAffect": {
                        "name": "Positive Affect",
                        "items": [10, 13]
                    }
                }
            },
            "socialPresence": {
                "name": "Social Presence",
                "description": "Social Presence Module (17 items)",
                "questions": [
                    "I empathized with the other(s)",
                    "My actions depended on the other(s) actions",
                    "The other's actions were dependent on my actions",
                    "I felt connected to the other(s)",
                    "The other(s) paid close attention to me",
                    "I paid close attention to the other(s)",
                    "I felt jealous about the other(s)",
                    "I found it enjoyable to be with the other(s)",
                    "When I was happy, the other(s) was(were) happy",
                    "When the other(s) was(were) happy, I was happy",
                    "I influenced the mood of the other(s)",
                    "I was influenced by the other(s) moods",
                    "I admired the other(s)",
                    "What the other(s) did affected what I did",
                    "What I did affected what the other(s) did",
                    "I felt revengeful",
                    "I felt schadenfreude (malicious delight)"
                ],
                "dimensions": {
                    "psychologicalEmpathy": {
                        "name": "Psychological Involvement - Empathy",
                        "items": [0, 3, 7, 8, 9, 12]
                    },
                    "psychologicalNegative": {
                        "name": "Psychological Involvement - Negative Feelings",
                        "items": [6, 10, 11, 15, 16]
                    },
                    "behavioralInvolvement": {
                        "name": "Behavioral Involvement",
                        "items": [1, 2, 4, 5, 13, 14]
                    }
                }
            }
        }
    }
};
