/**
 * Local User Database
 * This file stores user credentials locally so the app can work entirely offline.
 */
const users = [
    {
        email: "aaryakatore@gmail.com",
        password: "12345", // You can change this
        name: "Aarya Katore"
    },
    {
        email: "admin@careerguide.com",
        password: "admin",
        name: "Administrator"
    }
];

// Export to window so app.js can see it
window.userDatabase = users;
