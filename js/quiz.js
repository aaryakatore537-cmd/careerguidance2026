/**
 * MCQ Quiz Engine
 * Interactions and Logic
 */

let currentQuizState = {
    active: false,
    context: '10th', // '10th' or 'diploma'
    currentQuestionIndex: 0,
    scores: {
        tech: 0,
        creative: 0,
        commerce: 0,
        medical: 0
    },
    totalQuestions: 0
};

// Start Quiz
function startQuiz(context) {
    // alert("Debug: startQuiz called for " + context);

    // Check Dependencies
    if (!window.quizData) { alert("Error: quizData missing"); return; }

    currentQuizState = {
        active: true,
        context: context,
        currentQuestionIndex: 0,
        scores: { tech: 0, creative: 0, commerce: 0, medical: 0 },
        totalQuestions: window.quizData.questions[context].length
    };

    const page = document.getElementById('mcq-quiz-page');
    if (!page) { alert("Error: Page element not found"); return; }

    if (window.navigateTo) {
        window.navigateTo('mcq-quiz');
    } else {
        alert("Error: navigateTo not found");
        return;
    }

    // Explicitly check container before render
    const container = document.getElementById('mcq-quiz-container');
    if (container) {
        container.innerHTML = "<h1>Loading Quiz...</h1>";
    } else {
        alert("Error: Container not found before render");
    }

    setTimeout(renderQuestion, 50);
}

// Render Current Question
function renderQuestion() {
    try {
        const container = document.getElementById('mcq-quiz-container');
        if (!container) { alert("Render Error: Container lost"); return; }

        const questions = window.quizData.questions[currentQuizState.context];
        const question = questions[currentQuizState.currentQuestionIndex];

        // alert("Debug: Rendering Question " + (currentQuizState.currentQuestionIndex + 1));

        const progress = ((currentQuizState.currentQuestionIndex) / currentQuizState.totalQuestions) * 100;

        container.innerHTML = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${progress}%"></div>
            </div>
            <div class="quiz-header">
                <span class="question-count">Question ${currentQuizState.currentQuestionIndex + 1} of ${currentQuizState.totalQuestions}</span>
                <h2>${question.question}</h2>
            </div>
            <div class="quiz-options-grid">
                ${question.options.map((opt, index) => `
                    <button class="quiz-option-card" onclick="window.quiz.handleAnswer('${opt.type}', ${opt.score})">
                        <span class="option-marker">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${opt.text}</span>
                    </button>
                `).join('')}
            </div>
        `;
    } catch (e) {
        alert("Render Exception: " + e.message);
    }
}

// Handle Answer
function handleAnswer(type, score) {
    if (currentQuizState.scores[type] !== undefined) {
        currentQuizState.scores[type] += score;
    }

    currentQuizState.currentQuestionIndex++;

    if (currentQuizState.currentQuestionIndex < currentQuizState.totalQuestions) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// Finish & Calculate Result
function finishQuiz() {
    // Find highest score
    const scores = currentQuizState.scores;
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    showResult(winner);
}

// Show Result (Roadmap)
function showResult(winnerType) {
    const resultData = window.quizData.results[winnerType];
    const container = document.getElementById('mcq-quiz-container');

    container.innerHTML = `
        <div class="quiz-result-card">
            <div class="result-confetti">🎉</div>
            <h2 class="gradient-text">Discovery Complete!</h2>
            <div class="result-badge">${resultData.title}</div>
            <p>${resultData.description}</p>
            
            <div class="recommended-actions">
                <h3>Recommended Path:</h3>
                <button class="btn btn-primary" onclick="window.quiz.generatePersonalRoadmap('${winnerType}', '${currentQuizState.context}')">
                    View My Personalized Roadmap
                </button>
                <button class="btn btn-secondary" onclick="window.navigateTo('home')">Back to Home</button>
            </div>
        </div>
    `;
}

function generatePersonalRoadmap(winnerType, context) {
    // Bridge to existing Roadmap render logic
    window.navigateTo('roadmap'); // Use window.navigateTo

    const mockInterests = [winnerType]; // e.g., ['tech']
    const mockGoal = context === '10th' ? 'Diploma/Science' : 'Degree/Job';

    if (window.renderRoadmap) {
        window.appState.selectedInterests = mockInterests;
        window.appState.selectedGoal = mockGoal;
        window.renderRoadmap(mockInterests, mockGoal);
    }
}

window.quiz = {
    startQuiz,
    handleAnswer,
    generatePersonalRoadmap
};
