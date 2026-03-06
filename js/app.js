/**
 * Main Application Entry Point
 * Coordinates Logic and Event Listeners
 */

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Populate App Elements
  window.appElements = {
    pages: document.querySelectorAll('.page'),
    navLinks: document.querySelectorAll('.nav-link'),
    buttons: document.querySelectorAll('.btn'),
    showRoadmapButton: document.getElementById('show-roadmap'),
    roadmapContent: document.getElementById('roadmap-content'),
    themeToggle: document.getElementById('theme-toggle'),
    body: document.body
  };

  initialize();
});

function initialize() {
  // Check for saved login
  if (window.auth && !window.auth.checkLoginSession()) {
    navigateTo('login');
  } else if (window.auth) {
    navigateTo('home');
  } else {
    console.error("Auth module missing");
  }

  if (window.auth) window.auth.setupLoginFlow();
  setupEventListeners();

  // Initialize Search Toggle if present
  const searchToggle = document.getElementById('search-toggle');
  if (searchToggle && window.search) {
    searchToggle.onclick = window.search.openSearchModal;
  }

  // Theme Initialization
  const savedTheme = localStorage.getItem('theme') || 'dark';
  window.appState.darkMode = (savedTheme === 'dark');
  if (window.appState.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function setupEventListeners() {
  // Navigation buttons
  window.appElements.buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = button.getAttribute('data-target');
      if (target) navigateTo(target);
    });
  });

  // Path Cards
  document.querySelectorAll('.path-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent navigation if clicking a button inside the card or the button itself
      if (e.target.closest('.btn') || e.target.closest('button')) {
        return;
      }

      if (e.target.closest('.path-card') === card) {
        const target = card.getAttribute('data-target');
        if (target) navigateTo(target);
      }
    });
  });

  /* MCQ Listener Removed - handled via onclick in HTML to avoid conflicts */

  // Other Global Listeners
  if (window.appElements.themeToggle) {
    window.appElements.themeToggle.addEventListener('click', toggleDarkMode);
  }

  // Header Navigation
  window.appElements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href').replace('#', '');
      const routeMap = {
        'home': 'home',
        'roadmap-builder': 'home',
        'courses': 'diploma-courses',
        'about': 'about',
        'help': 'help',
        'contact': 'contact'
      };
      if (routeMap[href]) navigateTo(routeMap[href]);
    });
  });

  // Interests/Goals listeners (temporary until full MCQ engine replaces them)
  document.querySelectorAll('#interests-page input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateInterests);
  });
  document.querySelectorAll('#goals-page input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateGoal);
  });

  if (window.appElements.showRoadmapButton) {
    window.appElements.showRoadmapButton.addEventListener('click', generateRoadmap);
  }

  // Course Items Click Listener
  document.body.addEventListener('click', (e) => {
    // Check if clicked element is a course item
    const courseItem = e.target.closest('[data-course]');
    if (courseItem) {
      const courseId = courseItem.getAttribute('data-course');
      // Use logic from search.js to show details
      if (window.search && window.search.showCourseDetailsFromSearch) {
        // Pass safe title if available or default
        window.search.showCourseDetailsFromSearch(courseId, courseItem.innerText || 'Course Details');
      } else {
        console.error("Search module not ready for course details");
      }
    }

    // Check for Modal Close
    if (e.target.closest('.modal-close') && e.target.closest('#course-modal')) {
      document.getElementById('course-modal').style.display = 'none';
    }
    if (e.target.id === 'course-modal') {
      e.target.style.display = 'none';
    }
  });
}

// Global Navigation
window.navigateTo = function (pageId) {
  window.appState.currentPage = pageId;

  // Toggle Nav visibility
  const nav = document.getElementById('main-nav');
  if (nav) nav.style.display = (pageId === 'login') ? 'none' : 'block';

  // Hide all pages
  window.appElements.pages.forEach(page => page.classList.remove('active'));

  // Show target page
  const targetPage = document.getElementById(pageId + '-page') || document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Temporary: Keep existing Interest/Goal/Roadmap logic here or move to a module?
// For now, keeping these here until MCQ Engine replaces them, to ensure app doesn't break during transition.
// See `updateInterests`, `updateGoal`, `generateRoadmap` below.

function updateInterests() {
  window.appState.selectedInterests = Array.from(document.querySelectorAll('#interests-page input:checked')).map(cb => cb.value);
}

function updateGoal() {
  const selected = document.querySelector('#goals-page input:checked');
  if (selected) window.appState.selectedGoal = selected.value;
}

function generateRoadmap() {
  // Logic from original app.js simplified using state
  navigateTo('roadmap');
  renderRoadmap(window.appState.selectedInterests, window.appState.selectedGoal);
}

function renderRoadmap(interests, goal) {
  const container = window.appElements.roadmapContent;
  if (!container) return;

  const primaryTrait = interests[0] || 'tech';

  // High-Quality Career Mapping
  const careerPaths = {
    tech: {
      role: "Software Engineer / AI Architect",
      icon: "🤖",
      milestones: ["Learn Programming (Python/JS)", "Build Personal Projects", "Get a Technical Degree", "Intern at Tech Companies"],
      nextStep: "Check out the Computer Science & Engineering course."
    },
    creative: {
      role: "UI/UX Designer / Creative Director",
      icon: "🎨",
      milestones: ["Master Design Tools (Figma/Adobe)", "Build a Visual Portfolio", "Study Human-Computer Interaction", "Freelance for Real Clients"],
      nextStep: "Explore the Design & Creative Arts section."
    },
    commerce: {
      role: "Financial Analyst / Business Leader",
      icon: "💼",
      milestones: ["Learn Accounting Foundations", "Understand Market Economics", "Get an MBA or CA Certificate", "Build Professional Networks"],
      nextStep: "Look into Commerce & Finance paths."
    },
    medical: {
      role: "Healthcare Professional / Researcher",
      icon: "🩺",
      milestones: ["Focus on Bio & Chemistry", "Prepare for Medical Entrance", "Complete Clinical Training", "Specialize in a Health Field"],
      nextStep: "Review the Healthcare & Medical Sciences info."
    }
  };

  const recommendation = careerPaths[primaryTrait] || careerPaths.tech;

  container.innerHTML = `
    <div class="quiz-result-card">
        <div class="result-confetti">${recommendation.icon}</div>
        <h3 class="gradient-text">Your Matching Career:</h3>
        <h2 class="gradient-text" style="font-size: 2.5rem; margin: 1rem 0;">${recommendation.role}</h2>
        
        <div class="info-section">
            <h4 style="justify-content: center;">🎯 Discovery Path</h4>
            <p>Based on your ${primaryTrait.toUpperCase()} profile, we've mapped out your journey:</p>
            <ul style="max-width: 400px; margin: 1.5rem auto; text-align: left;">
                ${recommendation.milestones.map(m => `<li>${m}</li>`).join('')}
            </ul>
        </div>

        <div class="result-badge">Match Score: High</div>
        
        <p style="margin-top: 2rem;"><strong>Recommended Next Step:</strong><br>${recommendation.nextStep}</p>
        
        <div class="recommended-actions">
            <button class="btn btn-primary" onclick="window.navigateTo('home')">Back to Explorer</button>
            <button class="btn btn-secondary" onclick="window.scrollTo(0,0); window.print()">Save PDF Roadmap</button>
        </div>
    </div>
  `;
}


function toggleDarkMode() {
  window.appState.darkMode = !window.appState.darkMode;
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', window.appState.darkMode ? 'dark' : 'light');
}

// Expose renderCourseModal for Search module (re-adding logic here or importing)
window.renderCourseModal = function (course, title) {
  if (!course) return '<div class="modal-info"><p>Loading details...</p></div>';

  // Helper for List Sections
  const renderSection = (title, items, icon, type = 'list') => {
    if (!items || items.length === 0) return '';

    let content = '';
    if (type === 'tags') {
      content = `<div class="tag-cloud">${items.map(i => `<span class="tag">${i}</span>`).join('')}</div>`;
    } else {
      content = `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }

    return `
            <div class="info-section">
                <h4>${icon} ${title}</h4>
                ${content}
            </div>
        `;
  };

  // Duration / Salary Badge
  const duration = course.duration || (course.degrees && course.degrees[0]?.duration) || '';
  const salary = course.salary || '';

  return `
        <div class="modal-header">
            ${duration ? `<span class="stream-badge">${duration}</span>` : ''}
            <h2>${course.title || title}</h2>
            ${salary ? `<p style="margin-top: 5px; opacity: 0.9; font-size: 0.9rem;">Potential: ${salary}</p>` : ''}
        </div>
        <div class="modal-info">
            <p class="desc">${course.description || course.overview || 'Detailed path for your career growth.'}</p>
            
            ${renderSection('Specializations', course.branches || course.courses || course.trades || course.specializations || (course.streams ? course.streams.map(s => s.name) : null), '🎯', 'tags')}
            
            ${renderSection('Career Opportunities', course.careers, '🚀')}
            
            ${renderSection('Entrance Exams', course.exams, '📝', 'tags')}
            
            ${renderSection('Target Colleges', course.colleges, '🏛️')}
            
            ${course.degrees ? `
                <div class="info-section">
                    <h4>🎓 Related Degrees</h4>
                    <ul>
                        ${course.degrees.map(d => `<li><strong>${d.name}</strong> - ${d.duration} (${d.eligibility})</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

