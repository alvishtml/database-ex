const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch user data from JSON file (replace 'users.json' with your actual file path)
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.username === username && user.password === password);

            if (user) {
                // Successful login, redirect or perform other actions
                window.location.href = 'dashboard.html'; // Replace with your desired URL
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
        });
});