/**
 * Global State & Elements
 */

window.appState = {
    currentPage: 'login',
    isLoggedIn: false,
    selectedInterests: [],
    selectedGoal: null,
    darkMode: true
};

window.appElements = {
    pages: null,
    navLinks: null,
    buttons: null,
    showRoadmapButton: null,
    roadmapContent: null,
    themeToggle: null,
    body: null,
    // Will populate these in app.js initialize
};
