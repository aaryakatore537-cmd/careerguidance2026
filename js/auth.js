/**
 * Authentication Logic
 */

function setupLoginFlow() {
    // alert("Debug: setupLoginFlow executing..."); // Confirm it runs

    const loginForm = document.getElementById('main-login-form');
    // Also get the button directly
    const submitBtn = document.querySelector('#main-login-form button[type="submit"]');

    function handleLogin(e) {
        if (e) e.preventDefault(); // Stop form submission if called via submit

        const emailInput = document.getElementById('main-email');
        const passwordInput = document.getElementById('main-password');

        if (!emailInput || !passwordInput) {
            alert("Critical Error: Login inputs not found in DOM");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Validate
        if (!window.userDatabase) {
            alert("Error: User Database not loaded.");
            return;
        }

        const userFound = window.userDatabase.find(u => u.email === email && u.password === password);

        if (userFound) {
            localStorage.setItem('userEmail', email);
            window.appState.isLoggedIn = true;
            updateNavForUser(email);

            // Navigate
            if (window.navigateTo) window.navigateTo('home');
            else location.reload(); // Hard fallback
        } else {
            alert("Login Failed: Incorrect email or password.\nAllowed: aaryakatore@gmail.com / 12345");
        }
    }

    if (loginForm) {
        // Remove old listeners by cloning (rough method but ensures clean slate) or just adding new one
        // We'll just add new one
        loginForm.addEventListener('submit', handleLogin);
    }

    if (submitBtn) {
        // Double-bind to ensure click works even if form submit is weird
        submitBtn.addEventListener('click', handleLogin);
    } else {
        alert("Error: Login Button not found");
    }

    if (!loginForm && !submitBtn) {
        alert("Critical: Login Form elements missing entirely.");
    }
}

function checkLoginSession() {
    try {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            window.appState.isLoggedIn = true;
            updateNavForUser(savedEmail);
            return true;
        }
    } catch (e) {
        console.warn('Session persistence unavailable');
    }
    return false;
}

function updateNavForUser(email) {
    const loginBtn = document.getElementById('login-btn');
    const navActions = document.querySelector('.nav-actions');
    const user = email.split('@')[0];

    if (loginBtn) {
        loginBtn.remove();
        const profile = document.createElement('div');
        profile.className = 'user-profile';
        profile.innerHTML = `<div class="user-avatar">${user.charAt(0).toUpperCase()}</div><div class="user-info">${user}</div>`;
        profile.onclick = () => {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('userEmail'); // Clear persistence
                location.reload();
            }
        };
        navActions.appendChild(profile);
    }
}

// Expose methods
window.auth = {
    setupLoginFlow,
    checkLoginSession,
    updateNavForUser
};
