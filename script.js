// Grabbing elements from the DOM
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
var changeThemeButton = document.getElementById('change-theme');
var greetButton = document.getElementById('greet-button');
var welcomeMessage = document.getElementById('welcome-message');
// Function to toggle skills visibility
toggleSkillsButton.addEventListener('click', function () {
    skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
    toggleSkillsButton.textContent = skillsList.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
});
// Function to toggle between light and dark themes
changeThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});
// Function to display a greeting message
greetButton.addEventListener('click', function () {
    var hours = new Date().getHours();
    var greeting = 'Hello';
    if (hours < 12) {
        greeting = 'Good morning';
    }
    else if (hours < 18) {
        greeting = 'Good afternoon';
    }
    else {
        greeting = 'Good evening';
    }
    welcomeMessage.textContent = "".concat(greeting, ", ").concat('Hafsa', "!");
});
