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

    welcomeMessage.textContent = `${greeting}, ${nameInput.value || 'Hafsa'}!`;
});
// Grabbing form elements[FORM]
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Grabbing display elements
const displayName = document.getElementById('display-name')!;
const displayEmail = document.getElementById('display-email')!;
const displayEducation = document.getElementById('display-education')!;

// Function to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Update resume sections with form input values
    displayName.textContent = nameInput.value;
    displayEmail.textContent = emailInput.value;
    displayEducation.textContent = educationInput.value;

    // Update skills list dynamically
    const skills = skillsInput.value.split(',').map(skill => skill.trim());
    skillsList.innerHTML = ''; // Clear previous skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
});

