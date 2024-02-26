document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    form.onsubmit = function (e) {
        e.preventDefault(); // Prevent the default form submission
        const message = document.getElementById('messageInput').value;
        displayMessage(message);
        form.reset(); // Reset the form fields
    };
});

function displayMessage(message) {
    const container = document.getElementById('messageContainer');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    container.appendChild(messageElement);
}
