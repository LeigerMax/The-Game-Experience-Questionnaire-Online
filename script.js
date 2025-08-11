/**
 * GEQ - Game Experience Questionnaire (Bilingue)
 * Calculateur de scores en temps réel pour les modules Post-game, Core, In-Game et Social Presence
 * 
 * Utilise un système de localisation avec fichiers JSON séparés
 * Modules supportés : Post-game (17 items), Core (33 items), In-Game (14 items) et Social Presence (17 items)
 */

// État global du questionnaire
let questionnaire = {
    currentModule: 'postGame',  // 'postGame', 'core', 'inGame' ou 'socialPresence'
    responses: {
        postGame: new Array(17).fill(null),
        core: new Array(33).fill(null),
        inGame: new Array(14).fill(null),
        socialPresence: new Array(17).fill(null)
    },
    scores: {
        postGame: {},
        core: {},
        inGame: {},
        socialPresence: {}
    }
};

/**
 * Initialise le questionnaire au chargement de la page
 */
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Initialise le gestionnaire de localisation
        await localeManager.init();
        
        // Configure l'interface
        setupControls();
        initializeScoresSection();
        renderQuestionnaire();
        setupEventListeners();
        updateScores();
        updateProgress();
        updateUI();
        
        console.log('Application GEQ initialisée avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
        // En cas d'erreur, affiche un message à l'utilisateur
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                <h2>Erreur de chargement</h2>
                <p>Impossible de charger les fichiers de traduction.</p>
                <p>Veuillez vérifier votre connexion et recharger la page.</p>
                <button onclick="location.reload()">Recharger</button>
            </div>
        `;
    }
});

/**
 * Configure les contrôles de module et de langue
 */
function setupControls() {
    const header = document.querySelector('header');
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'controls';
    
    const ui = localeManager.getUITexts();
    const languageNames = localeManager.getAllLanguageNames();
    
    controlsDiv.innerHTML = `
        <div class="control-group">
            <label for="module-select">${ui.moduleSwitch}</label>
            <select id="module-select">
                <option value="postGame">${localeManager.getModuleData('postGame').description || 'Post-game (17 items)'}</option>
                <option value="core">${localeManager.getModuleData('core').description || 'Core (33 items)'}</option>
                <option value="inGame">${localeManager.getModuleData('inGame').description || 'In-Game (14 items)'}</option>
                <option value="socialPresence">${localeManager.getModuleData('socialPresence').description || 'Social Presence (17 items)'}</option>
            </select>
        </div>
        <div class="control-group">
            <label for="language-select">${ui.languageSwitch}</label>
            <select id="language-select">
                ${Object.entries(languageNames).map(([code, name]) => 
                    `<option value="${code}">${name}</option>`
                ).join('')}
            </select>
        </div>
    `;
    header.appendChild(controlsDiv);
}

/**
 * Met à jour les options du sélecteur de module avec les textes localisés
 */
function updateModuleSelectOptions() {
    const moduleSelect = document.getElementById('module-select');
    if (moduleSelect) {
        const currentValue = moduleSelect.value;
        
        // Met à jour les options avec les textes dans la langue actuelle
        moduleSelect.innerHTML = `
            <option value="postGame">${localeManager.getModuleData('postGame').description || 'Post-game (17 items)'}</option>
            <option value="core">${localeManager.getModuleData('core').description || 'Core (33 items)'}</option>
            <option value="inGame">${localeManager.getModuleData('inGame').description || 'In-Game (14 items)'}</option>
            <option value="socialPresence">${localeManager.getModuleData('socialPresence').description || 'Social Presence (17 items)'}</option>
        `;
        
        // Restaure la sélection actuelle
        moduleSelect.value = currentValue;
    }
}

/**
 * Obtient les données du module actuel
 */
function getCurrentModuleData() {
    return localeManager.getModuleData(questionnaire.currentModule);
}

/**
 * Met à jour l'interface utilisateur avec les textes appropriés
 */
function updateUI() {
    const ui = localeManager.getUITexts();
    const moduleData = getCurrentModuleData();
    
    // Titre et sous-titre
    document.querySelector('h1').textContent = ui.title;
    let subtitle;
    switch(questionnaire.currentModule) {
        case 'postGame':
            subtitle = ui.postGameSubtitle;
            break;
        case 'core':
            subtitle = ui.coreSubtitle;
            break;
        case 'inGame':
            subtitle = ui.inGameSubtitle;
            break;
        case 'socialPresence':
            subtitle = ui.socialPresenceSubtitle;
            break;
        default:
            subtitle = ui.postGameSubtitle;
    }
    document.querySelector('h2').textContent = subtitle;
    
    // Instructions
    const instruction = ui.instructions[questionnaire.currentModule] || '';
    document.querySelector('.instructions').textContent = instruction;
    
    // Légende de l'échelle
    const scaleLegend = document.querySelector('.scale-legend');
    scaleLegend.innerHTML = Object.entries(ui.scaleDescription).map(([value, text]) => 
        `<span><strong>${value}</strong> = ${text}</span>`
    ).join('');
    
    // Section scores
    document.querySelector('.scores-section h3').textContent = ui.scores;
    
    // Titre de progression
    const progressTitle = document.getElementById('progress-title');
    if (progressTitle) {
        progressTitle.textContent = ui.progress;
    }
    
    // Boutons
    document.getElementById('about-btn').textContent = ui.aboutButton;
    document.getElementById('reset-btn').textContent = ui.resetButton;
    const exportBtn = document.getElementById('export-btn');
    const answeredCount = questionnaire.responses[questionnaire.currentModule].filter(r => r !== null).length;
    const totalQuestions = questionnaire.responses[questionnaire.currentModule].length;
    
    if (answeredCount === totalQuestions) {
        exportBtn.textContent = ui.exportButton;
    } else {
        exportBtn.textContent = ui.completeFirst;
    }
    
    // Mise à jour des sélecteurs
    document.getElementById('module-select').value = questionnaire.currentModule;
    document.getElementById('language-select').value = localeManager.getCurrentLocale();
    
    // Mise à jour de la section À propos si elle est visible
    updateAboutSection();
    
    // Mise à jour des labels des contrôles
    const moduleLabel = document.querySelector('label[for="module-select"]');
    const languageLabel = document.querySelector('label[for="language-select"]');
    if (moduleLabel) moduleLabel.textContent = ui.moduleSwitch;
    if (languageLabel) languageLabel.textContent = ui.languageSwitch;
}

/**
 * Génère et affiche le questionnaire dans le DOM
 */
function renderQuestionnaire() {
    const form = document.getElementById('geq-form');
    const moduleData = getCurrentModuleData();
    
    // Vide le formulaire existant
    form.innerHTML = '';
    
    moduleData.questions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        form.appendChild(questionElement);
    });
}

/**
 * Crée un élément de question avec ses options de réponse
 * @param {string} question - Le texte de la question
 * @param {number} index - L'index de la question (0-based)
 * @returns {HTMLElement} L'élément DOM de la question
 */
function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.setAttribute('data-question', index);
    
    // Vérifie si cette question a déjà une réponse
    const currentResponse = questionnaire.responses[questionnaire.currentModule][index];
    if (currentResponse !== null) {
        questionDiv.classList.add('answered');
    }

    const scaleLabels = localeManager.getScaleLabels();
    
    questionDiv.innerHTML = `
        <div class="question-text">
            <span class="question-number">${index + 1}</span>
            ${question}
        </div>
        <div class="scale-options">
            ${scaleLabels.map(option => `
                <div class="scale-option">
                    <input type="radio" 
                           id="q${index}_${option.value}" 
                           name="question_${index}" 
                           value="${option.value}"
                           ${currentResponse === option.value ? 'checked' : ''}>
                    <label for="q${index}_${option.value}">
                        <span class="scale-number">${option.value}</span>
                        <span class="scale-text">${option.label}</span>
                    </label>
                </div>
            `).join('')}
        </div>
    `;

    return questionDiv;
}

/**
 * Configure les écouteurs d'événements
 */
function setupEventListeners() {
    // Écouteur pour les changements de réponses
    document.getElementById('geq-form').addEventListener('change', handleResponseChange);
    
    // Bouton de réinitialisation
    document.getElementById('reset-btn').addEventListener('click', resetQuestionnaire);
    
    // Bouton d'exportation
    document.getElementById('export-btn').addEventListener('click', exportResults);
    
    // Bouton À propos
    document.getElementById('about-btn').addEventListener('click', showAboutSection);
    
    // Bouton Retour
    document.getElementById('back-btn').addEventListener('click', hideAboutSection);
    
    // Sélecteurs de module et langue
    document.getElementById('module-select').addEventListener('change', handleModuleChange);
    document.getElementById('language-select').addEventListener('change', handleLanguageChange);
}

/**
 * Gère le changement de module
 */
function handleModuleChange(event) {
    questionnaire.currentModule = event.target.value;
    renderQuestionnaire();
    renderScoresSection();
    updateScores();
    updateProgress();
    updateUI();
}

/**
 * Gère le changement de langue
 */
function handleLanguageChange(event) {
    localeManager.setLocale(event.target.value);
    updateModuleSelectOptions(); // Met à jour les noms des modules
    renderQuestionnaire();
    renderScoresSection();
    updateScores();
    updateProgress();
    updateUI();
}

/**
 * Gère le changement de réponse à une question
 * @param {Event} event - L'événement de changement
 */
function handleResponseChange(event) {
    if (event.target.type === 'radio') {
        const questionIndex = parseInt(event.target.name.split('_')[1]);
        const value = parseInt(event.target.value);
        
        // Enregistre la réponse pour le module actuel
        questionnaire.responses[questionnaire.currentModule][questionIndex] = value;
        
        // Met à jour l'apparence de la question
        const questionElement = event.target.closest('.question-item');
        questionElement.classList.add('answered');
        
        // Recalcule les scores et met à jour l'affichage
        updateScores();
        updateProgress();
        
        // Active le bouton d'exportation si toutes les questions sont répondues
        checkCompleteness();
    }
}

/**
 * Génère la section des scores selon le module actuel
 */
function renderScoresSection() {
    const scoresGrid = document.querySelector('.scores-grid');
    const moduleData = getCurrentModuleData();
    const ui = localeManager.getUITexts();
    
    scoresGrid.innerHTML = '';
    
    Object.entries(moduleData.dimensions).forEach(([key, dimension]) => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'score-card';
        scoreCard.innerHTML = `
            <h4>${dimension.name}</h4>
            <div class="score-value" id="${key}-score">-</div>
            <div class="score-detail">${ui.averageOn}</div>
        `;
        scoresGrid.appendChild(scoreCard);
    });
}

/**
 * Calcule et met à jour tous les scores
 */
function updateScores() {
    const moduleData = getCurrentModuleData();
    
    // Réinitialise les scores du module actuel
    questionnaire.scores[questionnaire.currentModule] = {};
    
    // Calcule chaque dimension
    Object.entries(moduleData.dimensions).forEach(([key, dimension]) => {
        questionnaire.scores[questionnaire.currentModule][key] = calculateDimensionScore(key);
        updateScoreDisplay(`${key}-score`, questionnaire.scores[questionnaire.currentModule][key]);
    });
}

/**
 * Calcule le score d'une dimension spécifique
 * @param {string} dimensionKey - La clé de la dimension
 * @returns {number|null} Le score moyen de la dimension ou null si incomplet
 */
function calculateDimensionScore(dimensionKey) {
    const moduleData = getCurrentModuleData();
    const dimension = moduleData.dimensions[dimensionKey];
    const responses = dimension.items.map(index => questionnaire.responses[questionnaire.currentModule][index]);
    
    // Vérifie si toutes les questions de la dimension ont été répondues
    if (responses.some(response => response === null)) {
        return null;
    }
    
    // Calcule la moyenne (selon la méthode officielle GEQ)
    const sum = responses.reduce((total, response) => total + response, 0);
    return (sum / responses.length).toFixed(2);
}

/**
 * Met à jour l'affichage d'un score
 * @param {string} elementId - L'ID de l'élément à mettre à jour
 * @param {number|null} score - Le score à afficher
 */
function updateScoreDisplay(elementId, score) {
    const element = document.getElementById(elementId);
    if (element) {
        if (score !== null) {
            element.textContent = score;
            element.style.color = '#10b981'; // Vert si calculé
        } else {
            element.textContent = '-';
            element.style.color = '#6b7280'; // Gris si non calculé
        }
    }
}

/**
 * Met à jour la barre de progression
 */
function updateProgress() {
    const answeredCount = questionnaire.responses[questionnaire.currentModule].filter(response => response !== null).length;
    const totalQuestions = questionnaire.responses[questionnaire.currentModule].length;
    const percentage = (answeredCount / totalQuestions) * 100;
    const ui = localeManager.getUITexts();
    
    // Met à jour la barre de progression
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${answeredCount} / ${totalQuestions} ${ui.questionsAnswered}`;
}

/**
 * Vérifie si le questionnaire est complet et active/désactive le bouton d'exportation
 */
function checkCompleteness() {
    const isComplete = questionnaire.responses[questionnaire.currentModule].every(response => response !== null);
    const exportBtn = document.getElementById('export-btn');
    const ui = localeManager.getUITexts();
    
    exportBtn.disabled = !isComplete;
    
    if (isComplete) {
        exportBtn.textContent = ui.exportButton;
    } else {
        exportBtn.textContent = ui.completeFirst;
    }
}

/**
 * Réinitialise complètement le questionnaire
 */
function resetQuestionnaire() {
    const ui = localeManager.getUITexts();
    
    if (confirm(ui.confirmReset)) {
        // Remet à zéro les réponses du module actuel
        questionnaire.responses[questionnaire.currentModule] = new Array(
            questionnaire.responses[questionnaire.currentModule].length
        ).fill(null);
        
        // Décoche tous les boutons radio
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Supprime la classe 'answered' de toutes les questions
        const questionItems = document.querySelectorAll('.question-item');
        questionItems.forEach(item => {
            item.classList.remove('answered');
        });
        
        // Remet à jour l'affichage
        updateScores();
        updateProgress();
        checkCompleteness();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Exporte les résultats au format JSON
 */
function exportResults() {
    const currentResponses = questionnaire.responses[questionnaire.currentModule];
    const moduleData = getCurrentModuleData();
    const ui = localeManager.getUITexts();
    
    if (currentResponses.every(response => response !== null)) {
        const results = {
            timestamp: new Date().toISOString(),
            module: questionnaire.currentModule,
            language: localeManager.getCurrentLocale(),
            responses: currentResponses,
            scores: questionnaire.scores[questionnaire.currentModule],
            questions: moduleData.questions,
            dimensions: moduleData.dimensions,
            summary: {
                totalQuestions: currentResponses.length,
                module: moduleData.name || questionnaire.currentModule,
                language: localeManager.getLanguageName(localeManager.getCurrentLocale()),
                scores: questionnaire.scores[questionnaire.currentModule]
            }
        };
        
        // Crée et télécharge le fichier JSON
        const dataStr = JSON.stringify(results, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        const moduleType = questionnaire.currentModule === 'postGame' ? 'postgame' : 'core';
        link.download = `geq_${moduleType}_results_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
        
        // Affiche également un résumé à l'utilisateur
        showResultsSummary(results);
    }
}

/**
 * Affiche un résumé des résultats dans une popup
 * @param {Object} results - Les résultats complets
 */
function showResultsSummary(results) {
    const moduleData = getCurrentModuleData();
    const ui = localeManager.getUITexts();
    
    let summary = `${ui.title}\n`;
    summary += `${results.summary.module} - ${results.summary.language}\n\n`;
    summary += `📊 ${ui.scores.toUpperCase()} (${ui.averageOn}) :\n`;
    
    Object.entries(moduleData.dimensions).forEach(([key, dimension]) => {
        const score = results.scores[key] || '-';
        summary += `• ${dimension.name} : ${score}\n`;
    });
    
    summary += `\n📈 INTERPRÉTATION :\n`;
    summary += `${ui.exportSummary.interpretation}\n\n📁 ${ui.exportSummary.fileExported}`;
    
    alert(summary);
}

/**
 * Initialise le rendu des scores au premier chargement
 */
function initializeScoresSection() {
    renderScoresSection();
}

/**
 * Utilitaire pour débugger - affiche l'état actuel du questionnaire
 */
function debugQuestionnaire() {
    console.log('État actuel du questionnaire:', questionnaire);
    console.log('Gestionnaire de localisation:', localeManager);
    console.log('Données du module actuel:', getCurrentModuleData());
}

/**
 * Affiche la section À propos et masque le questionnaire
 */
function showAboutSection() {
    document.querySelector('main').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
    updateAboutSection();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Masque la section À propos et affiche le questionnaire
 */
function hideAboutSection() {
    document.getElementById('about-section').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Met à jour le contenu de la section À propos avec les textes localisés
 */
function updateAboutSection() {
    const ui = localeManager.getUITexts();
    const about = ui.about;
    
    if (!about) return; // Protection si la section about n'existe pas
    
    // Mise à jour des textes
    document.getElementById('about-title').textContent = about.title;
    document.getElementById('back-btn').textContent = ui.backButton;
    document.getElementById('about-description').textContent = about.description;
    document.getElementById('about-purpose').textContent = about.purpose;
    
    // Modules
    document.getElementById('modules-title').textContent = about.modules.title;
    document.getElementById('module-postGame').innerHTML = about.modules.postGame;
    document.getElementById('module-core').innerHTML = about.modules.core;
    document.getElementById('module-inGame').innerHTML = about.modules.inGame;
    document.getElementById('module-socialPresence').innerHTML = about.modules.socialPresence;
    
    // Recherche
    document.getElementById('research-title').textContent = about.research.title;
    document.getElementById('research-content').textContent = about.research.content;
    
    // Source
    document.getElementById('source-title').textContent = about.source.title;
    document.getElementById('source-text').textContent = about.source.text;
    document.getElementById('source-link').textContent = `📄 ${about.source.link}`;
    
    // Implémentation
    document.getElementById('implementation-title').textContent = about.implementation.title;
    document.getElementById('implementation-text').textContent = about.implementation.text;
    document.getElementById('implementation-link').textContent = `🔗 ${about.implementation.link}`;
}
