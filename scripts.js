const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const editProfileButton = document.getElementById('editProfile');
const editForm = document.getElementById('editForm');

// Load user data from Local Storage
const userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
    usernameElement.textContent = userData.username;
    emailElement.textContent = userData.email;
}

editProfileButton.addEventListener('click', () => {
    editForm.classList.toggle('hidden');
});

// Handle form submission to update user data in Local Storage
editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUsername = document.getElementById('editUsername').value;
    const newEmail = document.getElementById('editEmail').value;

    userData.username = newUsername;
    userData.email = newEmail;

    localStorage.setItem('userData', JSON.stringify(userData));

    // Update the displayed information
    usernameElement.textContent = newUsername;
    emailElement.textContent = newEmail;

    // Hide the edit form
    editForm.classList.add('hidden');
});