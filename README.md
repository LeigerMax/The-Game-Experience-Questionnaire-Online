# GEQ - Game Experience Questionnaire Online
 
**🇫🇷 Version française:** [README.md](README_FR.md)

## Description

Complete and functional web application to administer and calculate the **Game Experience Questionnaire (GEQ)** in French and English. This interface allows collecting responses and automatically calculates scores according to the official methodology developed by Eindhoven University of Technology.

The GEQ is a standardized research tool widely used in the academic and industrial community to evaluate users' gaming experience. This web implementation offers a modern, accessible, and fully bilingual interface to facilitate its use in various studies and research projects.

##  Features

- **Complete bilingual system** (French/English) with separate translation files
- **Four complete GEQ modules**:
  - **Post-game Module** (17 questions) - 4 dimensions
  - **Core Module** (33 questions) - 7 dimensions  
  - **In-Game Module** (14 questions) - 7 dimensions
  - **Social Presence Module** (17 questions) - 3 dimensions
- **Real-time calculation** of scores by dimension
- **Responsive and accessible** interface
- **"About" section** with complete documentation
- **Questionnaire progress bar**
- **Automatic saving** of responses during changes
- **Complete reset** functionality
- **JSON results export**
- **Modular architecture** with robust localization system

##  Project Structure

```
├── index.html              # Main page with "About" section
├── styles.css              # Responsive and accessible styles
├── script.js               # Main application logic
├── locale-manager.js       # Localization manager
├── locale-data.js          # Embedded data (fallback for local usage)
├── locales/                # Translation folder (for web servers)
│   ├── fr.json             # French translations
│   └── en.json             # English translations
└── README.md               # Documentation
```

## Modules and Dimensions

###  **Post-game Module (17 items)**
Evaluates feelings and emotions experienced after finishing playing.
- **Positive Experience** (6 items): Items 1, 5, 7, 8, 12, 16
- **Negative Experience** (6 items): Items 2, 4, 6, 11, 14, 15
- **Tiredness** (2 items): Items 10, 13
- **Returning to Reality** (3 items): Items 3, 9, 17

###  **Core Module (33 items)**
Measures overall gaming experience through 7 key dimensions.
- **Competence** (3 items): Items 2, 10, 18
- **Sensory and Imaginative Immersion** (6 items): Items 3, 12, 18, 19, 27, 30
- **Flow** (5 items): Items 5, 13, 25, 28, 31
- **Tension/Annoyance** (3 items): Items 22, 24, 29
- **Challenge** (5 items): Items 11, 23, 26, 32, 33
- **Negative Affect** (4 items): Items 7, 8, 9, 16
- **Positive Affect** (5 items): Items 1, 4, 6, 14, 20

###  **In-Game Module (14 items)**
Captures sensations felt during gaming activity.
- **Competence** (2 items): Items 2, 9
- **Sensory and Imaginative Immersion** (2 items): Items 1, 4
- **Flow** (2 items): Items 5, 10
- **Tension** (2 items): Items 6, 8
- **Challenge** (2 items): Items 12, 13
- **Negative Affect** (2 items): Items 3, 7
- **Positive Affect** (2 items): Items 11, 14

###  **Social Presence Module (17 items)**
Analyzes interactions and feelings related to other players.
- **Psychological Involvement - Empathy** (6 items): Items 1, 4, 8, 9, 10, 13
- **Psychological Involvement - Negative Feelings** (5 items): Items 7, 11, 12, 16, 17
- **Behavioral Involvement** (6 items): Items 2, 3, 5, 6, 14, 15

##  Usage

1. **Open** the `index.html` file in a web browser
2. **Choose** the module (Post-game, Core, In-Game, or Social Presence) and language
3. **Answer** questions using the 0-4 Likert scale
4. **Observe** scores being calculated in real-time
5. **Switch** language or module without losing entered data
6. **Consult** the "About" section for more information about the GEQ
7. **Export** results once the questionnaire is completed


##  Calculation Method

- **Scores by dimension**: Arithmetic mean of corresponding items
- **Scale**: 0.00 to 4.00 (according to original Likert scale)
- **Update**: Real-time as soon as a response is selected
- **Export**: JSON format with complete metadata and timestamp

##  Sources and References

### Official Documentation
- **Game Experience Questionnaire (GEQ)** - Eindhoven University of Technology
- **Official PDF**: [Game Experience Questionnaire English](https://pure.tue.nl/ws/files/21666907/Game_Experience_Questionnaire_English.pdf)

### Research Usage
The GEQ is widely used in academic and industrial research to:
- Objectively evaluate user experience in video games
- Correlate subjective experience with physiological measures
- Analyze engagement and gaming enjoyment
- Compare different game designs

### Citation
If you use this implementation in your research, please cite:
- The original questionnaire from Eindhoven University of Technology
- This GitHub project: `https://github.com/LeigerMax/The-Game-Experience-Questionnaire-Online`

##  License

This project is under MIT license. See the `LICENSE` file for more details.

---

**Developed by:** [@LeigerMax](https://github.com/LeigerMax)  
**GitHub Repository:** [The-Game-Experience-Questionnaire-Online](https://github.com/LeigerMax/The-Game-Experience-Questionnaire-Online)
