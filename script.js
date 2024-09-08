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
    welcomeMessage.textContent = "".concat(greeting, ", ").concat(nameInput.value || 'Hafsa', "!");
});
// Grabbing form elements[FORM]
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
// Grabbing display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
// Function to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    // Update resume sections with form input values
    displayName.textContent = nameInput.value;
    displayEmail.textContent = emailInput.value;
    displayEducation.textContent = educationInput.value;
    // Update skills list dynamically
    var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
    skillsList.innerHTML = ''; // Clear previous skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
});
