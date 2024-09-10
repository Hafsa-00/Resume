// Grabbing elements from the DOM
const toggleSkillsButton = document.getElementById('toggle-skills')!;
const skillsList = document.getElementById('skills-list')!;
const changeThemeButton = document.getElementById('change-theme')!;
const greetButton = document.getElementById('greet-button')!;
const welcomeMessage = document.getElementById('welcome-message')!;


// Function to toggle skills visibility
toggleSkillsButton.addEventListener('click', () => {
    skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
    toggleSkillsButton.textContent = skillsList.style.display === 'none' ? 'Show Skills' : 'Hide Skills';
});

// Function to toggle between light and dark themes
changeThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Function to display a greeting message
greetButton.addEventListener('click', () => {
    const hours = new Date().getHours();
    let greeting = 'Hello';

    if (hours < 12) {
        greeting = 'Good morning';
    } else if (hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    welcomeMessage.textContent = `${greeting}, ${ 'Hafsa'}!`;
});
