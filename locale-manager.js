/**
 * Gestionnaire de localisation pour le GEQ
 * Charge et gère les fichiers de traduction
 */

class LocaleManager {
    constructor() {
        this.locales = {};
        this.currentLocale = 'fr';
        this.availableLocales = ['fr', 'en'];
    }

    /**
     * Initialise le gestionnaire de localisation
     */
    async init() {
        try {
            // Essaie de charger les fichiers JSON externes
            await Promise.all(
                this.availableLocales.map(locale => this.loadLocale(locale))
            );
            
            console.log('Gestionnaire de localisation initialisé avec les fichiers JSON externes');
        } catch (error) {
            console.warn('Impossible de charger les fichiers JSON externes, utilisation des données intégrées:', error);
            
            // En cas d'échec, utilise les données intégrées
            if (typeof EMBEDDED_LOCALES !== 'undefined') {
                this.locales = EMBEDDED_LOCALES;
                console.log('Gestionnaire de localisation initialisé avec les données intégrées');
            } else {
                throw new Error('Aucune donnée de localisation disponible');
            }
        }
        
        // Détecte la langue du navigateur si disponible
        this.detectBrowserLanguage();
    }

    /**
     * Charge un fichier de locale
     * @param {string} locale - Code de la langue (ex: 'fr', 'en')
     */
    async loadLocale(locale) {
        try {
            const response = await fetch(`./locales/${locale}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.locales[locale] = data;
            console.log(`Locale ${locale} chargée avec succès`);
        } catch (error) {
            console.error(`Erreur lors du chargement de la locale ${locale}:`, error);
            throw error;
        }
    }

    /**
     * Détecte la langue préférée du navigateur
     */
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        if (this.availableLocales.includes(langCode)) {
            this.currentLocale = langCode;
            console.log(`Langue du navigateur détectée: ${langCode}`);
        }
    }

    /**
     * Change la langue actuelle
     * @param {string} locale - Code de la nouvelle langue
     */
    setLocale(locale) {
        if (this.availableLocales.includes(locale) && this.locales[locale]) {
            this.currentLocale = locale;
            console.log(`Langue changée vers: ${locale}`);
        } else {
            console.warn(`Locale non disponible: ${locale}`);
        }
    }

    /**
     * Obtient la langue actuelle
     * @returns {string} Code de la langue actuelle
     */
    getCurrentLocale() {
        return this.currentLocale;
    }

    /**
     * Obtient la liste des langues disponibles
     * @returns {Array} Liste des codes de langues disponibles
     */
    getAvailableLocales() {
        return this.availableLocales;
    }

    /**
     * Obtient les données de localisation pour la langue actuelle
     * @returns {Object} Données de localisation
     */
    getCurrentLocaleData() {
        return this.locales[this.currentLocale] || this.locales['fr'];
    }

    /**
     * Obtient les textes de l'interface pour la langue actuelle
     * @returns {Object} Textes de l'interface
     */
    getUITexts() {
        const localeData = this.getCurrentLocaleData();
        return localeData?.ui || {};
    }

    /**
     * Obtient les données d'un module pour la langue actuelle
     * @param {string} moduleKey - Clé du module ('postGame' ou 'core')
     * @returns {Object} Données du module
     */
    getModuleData(moduleKey) {
        const localeData = this.getCurrentLocaleData();
        return localeData?.modules?.[moduleKey] || {};
    }

    /**
     * Obtient les étiquettes de l'échelle pour la langue actuelle
     * @returns {Array} Étiquettes de l'échelle
     */
    getScaleLabels() {
        const ui = this.getUITexts();
        return ui.scaleLabels || [];
    }

    /**
     * Obtient un texte traduit par chemin
     * @param {string} path - Chemin vers le texte (ex: 'ui.title')
     * @param {string} defaultValue - Valeur par défaut si le texte n'est pas trouvé
     * @returns {string} Texte traduit
     */
    getText(path, defaultValue = '') {
        const localeData = this.getCurrentLocaleData();
        const keys = path.split('.');
        let value = localeData;

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return defaultValue;
            }
        }

        return typeof value === 'string' ? value : defaultValue;
    }

    /**
     * Vérifie si une locale est disponible
     * @param {string} locale - Code de la langue à vérifier
     * @returns {boolean} True si la locale est disponible
     */
    isLocaleAvailable(locale) {
        return this.availableLocales.includes(locale) && !!this.locales[locale];
    }

    /**
     * Obtient le nom affiché d'une langue
     * @param {string} locale - Code de la langue
     * @returns {string} Nom affiché de la langue
     */
    getLanguageName(locale) {
        const localeData = this.locales[locale];
        return localeData?.languageName || locale.toUpperCase();
    }

    /**
     * Obtient tous les noms de langues disponibles
     * @returns {Object} Objet avec les codes comme clés et les noms comme valeurs
     */
    getAllLanguageNames() {
        const names = {};
        for (const locale of this.availableLocales) {
            names[locale] = this.getLanguageName(locale);
        }
        return names;
    }
}

// Instance globale du gestionnaire de localisation
const localeManager = new LocaleManager();
